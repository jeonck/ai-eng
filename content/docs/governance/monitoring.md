---
title: "Monitoring & Observability"
weight: 3
---

# Monitoring & Observability

An observability framework for tracking the quality, performance, and cost of AI systems in real time.

## The three pillars of observability

```mermaid
flowchart LR
    A["AI System<br/>Observability"] --> B["Metrics"]
    A --> C["Logs"]
    A --> D["Traces"]

    B --> E["Performance KPIs<br/>Latency, cost, throughput"]
    C --> F["Requests & responses<br/>Error records"]
    D --> G["LLM call tracing<br/>Tool execution flow"]

    style A fill:#0891B2,stroke:#0E7490,color:#fff
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
```

## Key monitoring metrics

### Quality metrics

| Metric | Description | Target |
|---|---|---|
| **Faithfulness** | Degree to which the output is grounded in context | > 0.85 |
| **Answer Relevancy** | Relevance of the answer to the question | > 0.85 |
| **Hallucination Rate** | Share of outputs that are factually incorrect | < 5% |

### Performance metrics

| Metric | Description | Target |
|---|---|---|
| **TTFT** | Time To First Token | < 1s |
| **TPS** | Tokens Per Second (generation speed) | > 30 TPS |
| **P95 Latency** | 95th-percentile response time | < 3s |

### Cost metrics

| Metric | Description |
|---|---|
| **Cost per request** | Average LLM cost per request |
| **Monthly token usage** | Token consumption trend by model |
| **Cache hit rate** | Prompt-caching efficiency |

## LLM monitoring tools

| Tool | Characteristics | Best suited for |
|---|---|---|
| **LangSmith** | Integrated with the LangChain ecosystem | LangChain-based apps |
| **Langfuse** | Open source, self-hosted | Cost-sensitive, security-conscious teams |
| **Arize Phoenix** | Model performance & drift detection | Teams with an MLOps stack |
| **Helicone** | Simple proxy-based approach | Fast adoption |

## Recommended alerting setup

```yaml
alerts:
  - name: high_hallucination_rate
    condition: hallucination_rate > 0.10
    severity: critical
    action: page_on_call

  - name: cost_spike
    condition: hourly_cost > budget_threshold * 1.5
    severity: warning
    action: slack_notification

  - name: latency_degradation
    condition: p95_latency > 5000ms
    severity: warning
    action: slack_notification
```
