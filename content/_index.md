---
title: AI Engineering
layout: hextra-home
---

{{< hextra/hero-badge >}}
  <div class="hx-w-2 hx-h-2 hx-rounded-full hx-bg-primary-400"></div>
  Open framework
  {{< icon name="arrow-circle-right" attributes="height=14" >}}
{{< /hextra/hero-badge >}}

<div class="hx-mt-6 hx-mb-6">
{{< hextra/hero-headline >}}
  AI Engineering&nbsp;<br class="sm:hx-block hx-hidden" />Framework
{{< /hextra/hero-headline >}}
</div>

<div class="hx-mb-12">
{{< hextra/hero-subtitle >}}
  A practical framework for managing AI technology&nbsp;<br class="sm:hx-block hx-hidden" />across five domains, from foundation to business value.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx-mb-6">
{{< hextra/hero-button text="Start the framework" link="docs/infrastructure/" >}}
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Infrastructure & Architecture"
    subtitle="Foundation & Build — GPU/NPU resources, model selection and tuning, data pipelines, vector databases, MCP servers"
    icon="server"
    link="docs/infrastructure/"
  >}}
  {{< hextra/feature-card
    title="Orchestration"
    subtitle="System Integration & Workflow — prompt and context design, RAG, agent interfaces, state management, workflow automation"
    icon="cog"
    link="docs/orchestration/"
  >}}
  {{< hextra/feature-card
    title="Interface"
    subtitle="Human-AI Interaction — UI/UX design, multimodal interfaces, AI literacy, feedback loops"
    icon="user-group"
    link="docs/interface/"
  >}}
  {{< hextra/feature-card
    title="Business Impact"
    subtitle="Value & ROI — KPI/ROI analysis, time-to-market, business model innovation, org-wide scale-up strategy"
    icon="chart-bar"
    link="docs/business/"
  >}}
  {{< hextra/feature-card
    title="Governance"
    subtitle="Trust & Control — guardrails and security, monitoring and observability, auditability, FinOps, ethics and compliance"
    icon="shield-check"
    link="docs/governance/"
  >}}
{{< /hextra/feature-grid >}}

<div class="content hx-w-full hx-mt-6">

## The Value Chain

AI technology is not managed as five isolated topics — it moves through a single chain that turns technical foundations into measurable business value, with governance acting as a control layer across every stage.

```mermaid
flowchart LR
    A["🏗 Infrastructure<br/>Foundation"] --> B["⚙️ Orchestration<br/>Engine"]
    B --> C["🤝 Interface<br/>Interaction"]
    C --> D["📊 Business Impact<br/>Value"]
    E["🛡 Governance<br/>Trust & Control"] -.-> A
    E -.-> B
    E -.-> C
    E -.-> D

    style A fill:#2563EB,stroke:#1D4ED8,color:#fff
    style B fill:#7C3AED,stroke:#6D28D9,color:#fff
    style C fill:#16A34A,stroke:#15803D,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#0891B2,stroke:#0E7490,color:#fff
```

- **Infrastructure** is the foundation everything else is built on — compute, models, data, and context management.
- **Orchestration** is the engine that turns that foundation into working systems — prompts, retrieval, agents, workflows.
- **Interface** is where those systems meet people — design, modality, literacy, feedback.
- **Business Impact** is where all of the above is converted into measurable value — ROI, speed, new business models, scale.
- **Governance** does not sit at the end of the chain; it wraps every stage with guardrails, observability, auditability, cost control, and compliance.

</div>
