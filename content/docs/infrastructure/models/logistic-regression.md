---
title: "Logistic Regression"
weight: 3
---

## I. Turning a linear score into a probability — overview of Logistic Regression

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A1["Linear combination of features"] -- "Squash through the sigmoid function" --> B1["Probability between 0 and 1"]
    B1 -- "Apply a threshold" --> C1["Class decision"]
    style A1 fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B1 fill:#e1f5fe,stroke:#01579b,stroke-width:1px
    style C1 fill:#e8f5e9,stroke:#1b5e20,stroke-width:1px
```

**Definition**: despite its name, a **classification** algorithm — it computes a linear score from the input features and passes it through a sigmoid ( **Logistic Function** ) to produce a probability, which a threshold converts into a class

**Characteristics**:
( **Probabilistic Output** ) the result is not just a label but a calibrated confidence, which is what lets a business tune the decision threshold to its own cost of error
( **Linear Decision Boundary** ) the separating surface is a straight line or hyperplane, so overlapping or curved class structures cannot be separated without added features
( **Foundation of Neural Networks** ) a single logistic unit is exactly one neuron — the same sigmoid reappears as an activation function in a [neural network](/docs/infrastructure/models/neural-network/)

## II. Detailed mechanisms and components of Logistic Regression

### A. The inference mechanism of Logistic Regression

```mermaid
graph TD
    A2["Input features"] -- "z = wX + b" --> B2["Linear score z"]
    B2 -- "sigmoid(z) = 1 / (1 + e^-z)" --> C2["Probability p"]
    C2 -- "p >= threshold" --> D2["Positive class"]
    C2 -- "p < threshold" --> E2["Negative class"]
```

### B. Core components and detailed functions

| Component | Detailed Description | Notes |
| :--- | :--- | :--- |
| **Sigmoid Function** | Maps any real number onto the interval (0, 1), converting a linear score into a probability | **Logistic Function** |
| **Log Loss** | The training objective, penalizing confident wrong answers far more heavily than uncertain ones | **Cross-Entropy** |
| **Decision Threshold** | The cutoff separating classes — moving it trades [precision against recall](/docs/infrastructure/models/) rather than improving the model | **Operating Point** |
| **Odds Ratio** | The exponentiated coefficient, read as the multiplicative change in odds per unit of a feature | **Interpretability** |

## III. Technical challenges and trends of Logistic Regression

### A. Limitations and optimization strategies

| Item | Detailed Content | Solution |
| :--- | :--- | :--- |
| **Non-linear Patterns** | Classes that interleave or curve cannot be separated by a hyperplane | Feature engineering, **kernel** methods ( [SVM](/docs/infrastructure/models/svm/) ), tree models |
| **Class Imbalance** | With rare positives the model can score well while never predicting the minority class | Class weighting, resampling, threshold tuning over accuracy |
| **Complete Separation** | When a feature separates the classes perfectly, coefficients diverge to infinity | **L2** regularization |

### B. Technology trends

( **Default Baseline for Classification** ) fraud detection, churn prediction, and spam filtering still begin here, because a probability with an auditable coefficient behind it is often worth more than a marginal accuracy gain.
( **Calibration Layer** ) it is widely reused on top of other models — the outputs of a complex classifier are passed through a logistic fit ( **Platt Scaling** ) to turn uncalibrated scores into usable probabilities.
