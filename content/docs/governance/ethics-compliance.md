---
title: "Ethics & Compliance"
weight: 6
---

Applying AI ethics guidelines and responding to AI regulation in Korea and abroad.

## Current AI regulatory landscape

```mermaid
flowchart TD
    A["AI regulatory landscape"] --> B["EU AI Act<br/>Effective 2024"]
    A --> C["Korea's AI Framework Act<br/>In preparation"]
    A --> D["U.S. AI Executive Order<br/>Effective 2023"]
    A --> E["ISO 42001<br/>AI management system"]

    style A fill:#0891B2,stroke:#0E7490,color:#fff
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#16A34A,stroke:#15803D,color:#fff
```

## EU AI Act risk classification

| Risk level | Examples | Requirements |
|---|---|---|
| **Prohibited** | Social credit scoring, real-time biometric identification | Banned outright |
| **High-risk** | AI for hiring, credit scoring, medical diagnosis | Strict regulation and auditing |
| **Limited-risk** | Chatbots, deepfakes | Transparency obligations |
| **Minimal risk** | Spam filters, AI in games | Self-regulation |

## Applying AI ethics principles

### Anthropic's Constitutional AI approach

An approach that internalizes ethical principles during model training:

```
Example principles:
- Do not provide information that is harmful or dangerous to people
- Do not generate discriminatory or biased responses
- State uncertainty explicitly when it exists
- Respect individual privacy
```

### Practical checklist

**Bias review**:
- [ ] Audit training data for demographic bias
- [ ] Test model output fairness across different groups
- [ ] Monitor for bias on a regular (quarterly) basis

**Ensuring transparency**:
- [ ] Disclose to users when content is AI-generated
- [ ] Provide explanations for AI decisions (explainability)
- [ ] Disclose data usage and personal-data handling practices

**Establishing accountability**:
- [ ] Clearly designate AI system owners and accountable parties
- [ ] Establish an incident-reporting procedure for AI-related issues
- [ ] Operate a regular ethics review committee
