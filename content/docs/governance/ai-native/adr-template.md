---
title: "ADR Template"
weight: 2
---

# ADR Template

**Architecture Decision Record** — a document that records architecture decisions. It captures not "what was done" but **why this approach was chosen**.

## Why ADRs matter

Reasons ADRs are especially important in an AI-assisted coding environment:

- Without context, an AI generating code may ignore past decisions and use a different pattern.
- Having the AI read the ADRs first leads it to generate code that consistently follows the team's technical decisions.
- Even as team members change, the ADR remains a document explaining "why it was built this way."

---

## Where to store files

```
docs/decisions/ADR-0001-[decision-summary].md
docs/decisions/ADR-0002-[decision-summary].md
```

Numbers are assigned sequentially. Once assigned, a number is never changed.

---

## Template

Copy the content below and save it as `docs/decisions/ADR-000N-title.md`.

```markdown
# ADR-[number]: [Summary title of the decision]

* **Status**: [Proposed / Accepted / Superseded / Deprecated]
* **Date**: YYYY-MM-DD
* **Deciders**: [Author name or AI agent name]

## 1. Context
What situation made this decision necessary?
Describe the problem you're solving or the business requirement.

## 2. Decision
We have decided to use [Technology/Pattern A].
(Include the core principles the AI must follow when implementing this.)

## 3. Alternatives
Other options considered:
- Alternative A: [Pros/Cons]
- Alternative B: [Pros/Cons]

## 4. Consequences
What do we gain from this decision, and what costs do we accept?
- **Positive**: [e.g., faster development, improved scalability]
- **Negative**: [e.g., learning curve, upfront setup cost]

## 5. Guidelines for AI
Points the AI should watch for when generating code based on this decision:
- "When applying this pattern, use [Y] instead of the [X] library."
- "Never use approach [Z]. Reason: ..."
```

---

## ADR status definitions

| Status | Meaning |
|---|---|
| **Proposed** | Proposed, not yet agreed upon by the team |
| **Accepted** | Agreed upon by the team and currently in effect |
| **Superseded** | Replaced by a better decision (references the superseding ADR number) |
| **Deprecated** | No longer valid |

---

## Example

```markdown
# ADR-0003: Adopt Zustand as the state management library

* **Status**: Accepted
* **Date**: 2025-05-06
* **Deciders**: Development team / Claude Code

## 1. Context
As the React app's global state has grown more complex, we're seeing prop drilling go three levels deep or more.
We considered adopting Redux, but the boilerplate overhead is excessive.

## 2. Decision
We adopt Zustand as our global state management library.
All global state is organized by domain under the `src/store/` directory.

## 3. Alternatives
- Redux Toolkit: Rich ecosystem, but excessive boilerplate
- Recoil: Good atom-based model, but Meta's long-term maintenance is uncertain

## 4. Consequences
- **Positive**: 70% less code, low learning curve
- **Negative**: No debugging tooling on par with Redux DevTools

## 5. Guidelines for AI
- Global state must be organized by domain in separate files under `src/store/`.
- Do not use Zustand for local state that `useState` can handle.
- Don't perform async logic directly inside `create()` — extract it into separate action functions.
```

---

## Prompt for feeding ADRs to AI

```
Read every ADR with status 'Accepted' in the docs/decisions/ directory,
internalize the AI guidelines in each decision, and then implement the following feature.
If you're about to use a pattern that violates an ADR, flag it before implementing.
```
