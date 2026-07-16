---
title: Governance
weight: 5
sidebar:
  open: true
---

**Trust & Control** — keeping AI operating safely and consistently within the boundaries a company and society set for it.

## Role of this domain

Governance covers the trust side of the five-domain framework's **Foundation**. If infrastructure is the physical foundation, governance is the **logical and institutional foundation** of an AI system.

```mermaid
flowchart TD
    A["🛡 AI Governance<br/>Trust & Control"] --> B["Guardrails<br/>Safe output"]
    A --> C["Monitoring<br/>Continuous observability"]
    A --> D["Auditability"]
    A --> E["Cost efficiency<br/>FinOps"]
    A --> F["Ethics & Compliance"]
    A --> G["AI-Native Design<br/>Code quality control"]

    style A fill:#0891B2,stroke:#0E7490,color:#fff
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#16A34A,stroke:#15803D,color:#fff
    style F fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style G fill:#0891B2,stroke:#0E7490,color:#fff
```

## Core components

| Component | Description |
|---|---|
| **Guardrails & security** | Blocking harmful content, preventing leaks of personal data and trade secrets |
| **Monitoring & observability** | Hallucination checks, latency, and cost tracking |
| **Auditability** | Traceable logging and after-the-fact verification of AI output |
| **FinOps** | Managing AI cost sustainability at the governance level |
| **Ethics & compliance** | AI ethics guidelines, responding to regulation such as the EU AI Act |
| **AI-Native design** | Controlling the quality of AI-generated code via ADRs, tech-debt tracking, and PR checklists |

## Beyond security: FinOps

Governance is not only about security. **Cost efficiency**(FinOps) has to be managed at the governance level to keep AI adoption sustainable.

## Health check questions

> "Can we verify after the fact why our AI system produced a given result?"

- [ ] Are all AI requests and responses logged?
- [ ] Is a hallucination-detection mechanism applied in production?
- [ ] Is monthly AI spend tracked and optimized against budget?
- [ ] Do we regularly review compliance with regulation such as the EU AI Act?
- [ ] Is AI-generated code written to meet ADR standards?

{{< cards >}}
  {{< card link="guardrails" title="Guardrails & Security" icon="shield-exclamation" >}}
  {{< card link="monitoring" title="Monitoring & Observability" icon="eye" >}}
  {{< card link="auditability" title="AI Auditability" icon="clipboard-check" >}}
  {{< card link="finops" title="AI FinOps" icon="currency-dollar" >}}
  {{< card link="ethics-compliance" title="Ethics & Compliance" icon="scale" >}}
  {{< card link="ai-native" title="AI-Native Design Framework" icon="server" >}}
{{< /cards >}}
