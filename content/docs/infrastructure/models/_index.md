---
title: AI Model Fundamentals
weight: 8
sidebar:
  open: true
---

## I. A paradigm shift in intelligence — overview of AI's technical evolution

```mermaid
graph LR
    A1["Explicit rules<br/>(Rule-based)"] -- "Data-driven learning<br/>(Machine Learning)" --> B1["Autonomous intelligence<br/>(Generative AI)"]
```

**Definition**: the technical journey from simple logic circuits and rules, through systems that learn patterns from data on their own, to systems capable of human-level generation and reasoning.

**Characteristics**:
( **Staged evolution** ) a layered progression through statistics, machine learning, and deep learning to large language models
( **Expanding generality** ) moving from performance tuned for a narrow domain toward general-purpose AI ( **AGI** ) applicable across every industry

## II. Detailed classification and mechanisms of AI technology

### A. The mechanics of AI's technical evolution

```mermaid
flowchart TD
    subgraph S1["Classic AI & Statistics"]
        A2["Rule-based AI"] --> B2["Naïve Bayes"]
        B2 --> C2["HMM / MCMC"]
        D2["K-NN / SVM"] --- B2
    end

    subgraph S2["Machine Learning Evolution"]
        E2["Decision Tree"] --> F2["Ensemble / Random Forest"]
        G2["Genetic Algorithm"] --> H2["Optimization"]
    end

    subgraph S3["Connectionism to Deep Learning"]
        I2["Neural Network"] --> J2["Backpropagation"]
        J2 --> K2["Deep Learning"]
    end

    subgraph S4["Modern AI Era"]
        K2 --> L2["CNN (Vision)"]
        K2 --> M2["RNN (Sequence)"]
        M2 --> N2["NLP / Transformer"]
        N2 --> O2["LLM (Generative)"]
        O2 --> P2["Multimodal AI"]
        L2 --> P2
    end

    S1 -- "Learning from Data" --> S2
    S2 -- "Non-linear Mapping" --> S3
    S3 -- "Architecture Scaling" --> S4

    style S4 fill:#f5f3ff,stroke:#7c3aed,stroke-width:2px
    style O2 fill:#7c3aed,color:#fff
    style P2 fill:#7c3aed,color:#fff
```

### B. Role and evolutionary stage of each major model

| Stage | Key models | Core contribution & relationship |
| :--- | :--- | :--- |
| **Stage 1**: Rules & statistics | **Rule-based**, **Naïve Bayes**, **HMM** | Solve explicit problems by directly injecting human knowledge or relying on statistical probability |
| **Stage 2**: Feature-based learning | **Decision Tree**, **SVM**, **K-NN** | Extract **features** from data and classify by finding geometric/logical boundaries |
| **Stage 3**: Neural networks & optimization | **Neural Network**, **Backpropagation** | Mimic biological neurons and build complex learning systems via error backpropagation through differentiation |
| **Stage 4**: Deep learning ( **DL** ) | **Deep Learning**, **CNN**, **RNN** | Stack layers deeply to automate high-level abstraction of data (specialized for images, time series) |
| **Stage 5**: Large models & generation | **NLP**, **LLM**, **Multimodal AI** | Achieve human-level language understanding and multi-sense integration via self-supervised learning and attention |

## III. Complementary relationships and trends across technologies

### A. Interaction between technologies

1.  **Deterministic vs. probabilistic logic**: the reliability of **rule-based** systems is being combined with the flexibility of **neural networks** into **neuro-symbolic AI**.
2.  **Global vs. local optimization**: techniques such as **genetic algorithms** and **MCMC** are used for hyperparameter optimization to find global optima that **backpropagation** alone can miss.
3.  **From simple classification to complex generation**: where **SVM** and **K-NN** focused on classifying structured data, **Transformer**-based **LLMs** evolved to learn the *relationships* between data and generate new content.

---

{{< callout type="info" >}}
**Study guide** — The list in the left sidebar is ordered by the complexity and historical emergence of each technique, from foundational **Rule-based AI** through to the most recent **Multimodal AI**. Working through it in order will give you an organic understanding of both the foundations of AI technology and its most recent trends.
{{< /callout >}}
