---
title: "Recurrent Neural Networks"
weight: 16
---

## I. Memory and processing of sequential data — overview of RNN

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A1["Independent data inputs"] -- "Maintain state via recurrent connections" --> B1["Sequence processing informed by context"]
    style A1 fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B1 fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**Definition**: a neural network in which connections between units form a recurrent structure, reflecting past information in the current computation to process sequential data ( **Sequential Data** ) such as time series or text

**Characteristics**:
( **Variable Length** ) no restriction on input or output length, making it suitable for natural language processing and speech recognition
( **State Retention** ) stores information from previous steps in a hidden state ( **Hidden State** ), effectively serving as a form of memory
( **Parameter Sharing** ) uses the same weights at every time step ( **Time-step** ) to learn temporal patterns

## II. Structural limitations and advanced models of RNN

### A. Unrolling RNNs over time and how they are trained

```mermaid
graph LR
    X1["X_t-1"] --> H1["H_t-1"]
    H1 --> Y1["Y_t-1"]
    H1 --> H2["H_t"]
    X2["X_t"] --> H2
    H2 --> Y2["Y_t"]
    H2 --> H3["H_t+1"]
    X3["X_t+1"] --> H3
    H3 --> Y3["Y_t+1"]
```

### B. Major variant models and their characteristics

| Model | Characteristics and Mechanism | Problem Solved |
| :--- | :--- | :--- |
| **Vanilla RNN** | The simplest recurrent structure | Short-term memory problem |
| **LSTM** | Maintains long-term memory via **Forget**/**Input**/**Output Gates** | **Long-term Dependency** |
| **GRU** | A simplified **LSTM** consisting of an update gate and a reset gate | Improved computational efficiency |
| **Bi**-**RNN** | Connected bidirectionally to leverage both past and future information | Improved contextual understanding |

## III. Applications and limitations of RNN

| Item | Detailed Content |
| :--- | :--- |
| **Key Applications** | Machine translation, speech recognition, stock-price prediction, text generation ( **Sequence Generation** ) |
| **Long-term Dependency Problem** | Information from earlier in the sequence is lost as the sequence grows longer ( **Vanishing Gradient** ) |
| **Parallelization Limits** | Results depend on the previous time step, making large-scale parallel computation on a **GPU** difficult |

**Technology trends**: the RNN family was long the standard for processing sequential data, but it has increasingly been replaced across many domains by the **Transformer**, which enables parallel processing and dramatically resolves the long-term dependency problem
