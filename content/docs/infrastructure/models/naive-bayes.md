---
title: "Naïve Bayes"
weight: 3
---

## I. Fast probabilistic classification based on an independence assumption — overview of Naïve Bayes

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A1["Assume independence between features"] -- "Compute probabilities via Bayes' Theorem" --> B1["Efficient class classification"]
    style A1 fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B1 fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**Definition**: a probabilistic model that classifies data by applying Bayes' Theorem ( **Bayes' Theorem** ) under the naïve assumption that all features ( **Feature** ) are mutually independent

**Characteristics**:
( **Simplicity** ) computational complexity is very low, enabling fast training and prediction even on large datasets
( **Independence Assumption** ) ignoring correlations between features allows performance to be maintained even in high-dimensional data
( **Small Data** ) shows reasonably good performance even with limited training data, making it suitable for real-time systems

## II. Detailed mechanisms and components of Naïve Bayes

### A. The mechanism of Naïve Bayes

```mermaid
graph LR
    A2["Feature data (X)"] -- "Apply Bayes' Theorem" --> B2["Compute posterior probability<br/>(Posterior)"]
    B2 --> C2["Determine final class"]
```

### B. Major probability distribution models and detailed functions

| Model Type | Detailed Description | Primary Use |
| :--- | :--- | :--- |
| **Multinomial NB** | Computes probability based on the frequency of occurrence of each word | Text classification, spam-mail filtering |
| **Bernoulli NB** | Treats only the presence or absence of a feature ( **0/1** ) as a binary variable | Sentiment analysis of short documents and binary classification |
| **Gaussian NB** | Assumes features are continuous and follow a normal distribution | Classification of numeric sensor data |

## III. Advantages, limitations, and technology trends of Naïve Bayes

### A. Core advantages and limitations

| Item | Detailed Content | Notes |
| :--- | :--- | :--- |
| **Advantage** | Overwhelmingly fast training speed and efficient handling of high-dimensional data | **High Efficiency** |
| **Limitation** | Model reliability degrades when the independence assumption between variables is violated | **Zero Frequency Issue** |
| **Mitigation** | Applying **Laplace Smoothing** prevents probability values from becoming **0** | **Smoothing** |

### B. Technology trends

( **Baseline Model** ) thanks to its overwhelming speed and cost-effectiveness, it remains widely used as a baseline model in large-scale text classification systems.
( **Hybrid Approach** ) it is often combined as an initial filtering step for deep learning models or as a sub-component within ensemble models to reduce processing cost.
