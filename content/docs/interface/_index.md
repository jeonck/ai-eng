---
title: Interface
weight: 3
sidebar:
  open: true
---

**Human-AI Interaction** — designing the touchpoint where users actually experience and interact with the value of AI.

## Role of this domain

Interface is the **only touchpoint** in the five-domain framework where users directly experience AI. No matter how strong the infrastructure and orchestration underneath it are, AI adoption fails if the user experience is bad.

```mermaid
flowchart LR
    A["⚙️ Orchestration<br/>Internal processing"] --> B["🤝 Interface<br/>User touchpoint"]
    B --> C["User<br/>Perceived value"]
    B --> D["Feedback<br/>collection"]
    D --> A

    style B fill:#16A34A,stroke:#15803D,color:#fff
    style A fill:#7C3AED,stroke:#6D28D9,color:#fff
    style C fill:#EA580C,stroke:#C2410C,color:#fff
    style D fill:#2563EB,stroke:#1D4ED8,color:#fff
```

## Core components

| Component | Description |
|---|---|
| **UI/UX design** | Conversational UI (CUI), multimodal optimization |
| **Multimodal input** | Handling and visualizing images, voice, diagrams, and other input types |
| **AI literacy** | Guidance that helps users make effective use of AI |
| **Feedback loops** | Collecting user feedback and feeding it back into the system |

## Core focus: managing psychological acceptance

Interface is not simply a technical UI problem — it's the domain that manages users' **psychological acceptance** of AI.

- How do users react when the AI is wrong?
- Is there over-reliance on, or under-trust of, AI output?
- Can users control how they collaborate with AI themselves?

## Health check questions

> "Do users understand the limits of AI and use it appropriately?"

- [ ] Does the interface clearly indicate that content is AI-generated?
- [ ] Is user feedback (thumbs up/down) actually connected to system improvement?
- [ ] Does multimodal input reflect users' real needs?
- [ ] Is AI literacy training provided on a regular basis?

{{< cards >}}
  {{< card link="ux-design" title="AI UI/UX Design" icon="sparkles" >}}
  {{< card link="multimodal" title="Multimodal Interface" icon="photograph" >}}
  {{< card link="ai-literacy" title="AI Literacy Education" icon="academic-cap" >}}
  {{< card link="feedback-loop" title="Feedback Loop" icon="refresh" >}}
{{< /cards >}}
