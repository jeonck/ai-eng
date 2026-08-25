---
title: "Agent Interface"
weight: 5
---

Integrating external tools (APIs), multi-agent collaboration, and execution control

## From API Call to Agent

An agent is not a separate product category — it is what you get after three additions to a plain API call. Each step widens what the model is allowed to do.

```mermaid
flowchart LR
    A["1. API Call<br/>text in, text out"] --> B["2. Structured Output<br/>parseable JSON"]
    B --> C["3. Function Calling<br/>model requests an action"]
    C --> D["4. Agent<br/>plans and loops"]

    style A fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#EA580C,stroke:#C2410C,color:#fff
    style D fill:#7C3AED,stroke:#6D28D9,color:#fff
```

### Structured Outputs

Prose is fine for a chat window and useless to the calling code. Pin the response to a schema so downstream code can consume it without parsing free text:

```python
# Declare the shape you expect, not the wording
schema = {
    "type": "object",
    "properties": {
        "sentiment": {"type": "string", "enum": ["positive", "neutral", "negative"]},
        "priority": {"type": "integer", "minimum": 1, "maximum": 5},
        "summary":  {"type": "string", "maxLength": 200},
    },
    "required": ["sentiment", "priority", "summary"],
}
```

- **Constrain enums rather than asking for a word** — an `enum` removes the whole class of "Positive!" vs `"positive"` mismatches
- **Validate before you trust** — even schema-constrained output should be validated at the boundary, the same as any external input
- **Keep schemas flat** — deeply nested objects raise the error rate with no gain in usefulness

### Function Calling

Function calling inverts the flow: instead of the model answering, it tells you which action to run and with what arguments. Your code executes it and returns the result, and the model continues from there.

```
User: "How many days of leave do I have left?"
  ↓
Model: → calls get_leave_balance(employee_id="E1042")
  ↓
Your code: executes the function, returns { "remaining": 7.5 }
  ↓
Model: "You have 7.5 days of leave remaining."
```

The model never runs anything itself — it only requests. That boundary is where authorization, rate limiting, and audit logging belong.

## Types of Agent Architectures

```mermaid
flowchart TD
    A["Agent Type"] --> B["Single Agent<br/>Single Agent"]
    A --> C["Multi-Agent<br/>Multi-Agent"]
    A --> D["Hierarchical Agent<br/>Hierarchical"]

    B --> E["Simple Tool Use<br/>Tool Calling"]
    C --> F["Parallel Execution<br/>Parallel"]
    C --> G["Sequential Execution<br/>Sequential"]
    D --> H["Orchestrator<br/>+ Sub-agents"]

    style A fill:#7C3AED,stroke:#6D28D9,color:#fff
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#EA580C,stroke:#C2410C,color:#fff
    style D fill:#16A34A,stroke:#15803D,color:#fff
```

## Harness Patterns

The architectures above describe how many agents there are. The harness is the control flow wrapped around them — the loop, the branching, the point where work is split or checked. Nine patterns cover most production systems, and they compose rather than compete.

**Single-agent loops** — one model, one thread of control:

| Pattern | The loop it runs | Reach for it when |
|---|---|---|
| **ReAct** | Reason → act → observe, repeated until the goal is met — see the [ReAct prompt pattern](/docs/orchestration/prompt-design/) | The default. Start here for anything involving tools |
| **Reflexion** | The agent critiques its own output, records what went wrong, and carries that note into the next attempt | Failures are recoverable and a second try with hindsight would succeed |

**Decomposition** — the work is split before it is executed:

| Pattern | How work is divided | Reach for it when |
|---|---|---|
| **Prompt Chaining** | A fixed sequence of steps, each step's output feeding the next | The steps are known in advance and always run in the same order |
| **Routing** | A classifier sends each request to the specialist model or path that fits it | Request types differ enough that one prompt serves none of them well |
| **Parallelization** | *Sectioning* runs independent subtasks at once; *voting* runs the same task several times and takes the consensus | Latency is the constraint (sectioning), or a single sample is not reliable enough (voting) |

**Coordination** — control flow spans multiple agents:

| Pattern | Who decides what happens next | Reach for it when |
|---|---|---|
| **Orchestrator–Workers** | A lead agent splits the task at runtime, dispatches specialist workers, and merges results — see [the pattern below](#orchestratorsub-agent-pattern) | The subtasks are not knowable until the request is read |
| **Evaluator–Optimizer** | One agent drafts, a second scores it against explicit criteria, and the loop repeats until it passes | Quality is judgeable against a rubric and the first draft usually is not good enough |
| **Graph Orchestration** | A declared graph of nodes and edges, with conditionals and loops made explicit — the model of [LangGraph](#comparing-major-frameworks) | The flow is complex enough that you need to see and debug the path it took |
| **Swarm** | Nobody — peer agents coordinate through shared state, with no central controller | Exploratory work such as brainstorming. Hardest to bound: without a controller, runaway loops and cost have no natural stop |

### Choosing and Combining Them

```mermaid
flowchart LR
    A["Single ReAct agent"] -->|"Requests differ in kind"| B["+ Routing"]
    A -->|"Too slow, or one sample is unreliable"| C["+ Parallelization"]
    A -->|"Output quality is inconsistent"| D["+ Evaluator–Optimizer"]
    B --> E["Orchestrator–Workers<br/>or Graph Orchestration"]
    C --> E
    D --> E

    style A fill:#2563EB,stroke:#1D4ED8,color:#fff
    style B fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style C fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style D fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style E fill:#7C3AED,stroke:#6D28D9,color:#fff
```

Two rules carry most of the value here. **Start with the simplest harness that could work** — usually a single ReAct agent — and add a pattern only when a specific bottleneck forces it; a multi-agent system built before the bottleneck exists is a debugging problem you chose voluntarily. And **expect to combine them**: a production system routes incoming requests, parallelizes the retrieval behind them, and runs an evaluator over the draft, which is three patterns in one request path.

## Tool Calling Design Principles

### Good Tool Design

```python
{
  "name": "search_knowledge_base",
  "description": "Searches the company's internal knowledge base for relevant documents. Use it to find policies, procedures, technical documentation, and similar material.",
  "parameters": {
    "query": "The natural-language question to search for",
    "top_k": "Number of documents to return (default: 5)",
    "category": "Search category (optional): hr, technical, policy"
  }
}
```

### Core Principles of Tool Specification
- **Clear naming**: use a verb_noun format (`search_document`, `send_email`)
- **Detailed description**: clearly state when the AI should use this tool
- **Minimal parameters**: only required parameters should be mandatory; make the rest optional

## Multi-Agent Patterns

### Orchestrator–Sub-agent Pattern

```
Orchestrator Agent
├── Research Agent (web search, document search)
├── Analysis Agent (data processing, computation)
├── Coding Agent (writing and executing code)
└── Summary Agent (writing the final report)
```

### Comparing Major Frameworks

| Framework | Characteristics | Best suited for |
|---|---|---|
| **LangGraph** | State-graph-based, complex flow control | Complex workflows |
| **AutoGen** | Conversational multi-agent | Research, collaborative tasks |
| **CrewAI** | Role-based agent teams | Business process automation |
| **Claude Code SDK** | Official Anthropic offering, coding-focused | Development automation |
| **OpenAI Agents SDK** | Lightweight primitives — agents, handoffs, guardrails, sessions | Staying close to the OpenAI stack |

## Error Handling Strategy

```python
# Exceptions that must always be handled during agent execution
try:
    result = agent.run(task)
except ToolExecutionError as e:
    # Tool execution failed → retry with alternative tools
    result = agent.run(task, fallback_tools=True)
except MaxIterationsError:
    # Prevent infinite loops
    result = "Maximum iteration count exceeded. Please break the task into smaller pieces."
except ContextLengthError:
    # Context exceeded → summarize and retry
    result = agent.run_with_compression(task)
```

### Failure Recovery

The exception blocks above handle a failure once. What decides whether an agent survives production is what happens on the second, third, and hundredth failure:

| Pattern | What it does | Reach for it when |
|---|---|---|
| **Retry with backoff** | Re-issues the call after an increasing delay, with jitter to avoid synchronized retries | The failure is transient — a timeout, a 429, a dropped stream |
| **Fallback chain** | Routes to an alternative tool, a smaller model, or a cached answer | Degraded output beats no output |
| **Circuit breaker** | Stops calling a dependency after N consecutive failures, then probes it periodically | A dependency is down and retries are making it worse |
| **Checkpointing** | Resumes a multi-step run from the last completed step instead of the start — see [State Management](/docs/orchestration/state-management/) | Steps are expensive or externally visible |
| **Dead-letter queue** | Parks the request for human review rather than dropping it | Silent loss is unacceptable |

Retries only make sense when the operation is idempotent. Anything that writes — sending a message, charging a card, filing a ticket — needs an idempotency key generated before the first attempt, or a retry turns one failure into two side effects.
