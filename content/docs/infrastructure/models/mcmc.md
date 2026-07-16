---
title: "Markov Chain Monte Carlo"
weight: 5
---

# Markov Chain Monte Carlo (MCMC)

## I. Numerical sampling of complex distributions — overview of MCMC

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A1["Complex distribution that is hard to sample"] -- "Use the stationary state of a Markov chain" --> B1["Numerical approximation of the target distribution"]
    style A1 fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B1 fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**Definition**: an algorithm that numerically draws samples from a complex target probability distribution that is difficult to sample directly, by using the stationary distribution of a Markov Chain ( **Markov Chain** )

**Characteristics**:
( **Monte Carlo** ) combines the stochastic methodology of generating random numbers to obtain a numerical approximate solution
( **Memorylessness** ) a chained structure in which the generation of the next sample is determined solely by the state of the current sample
( **High-Dimensional Handling** ) delivers excellent performance when estimating complex multivariate distributions or posterior distributions that cannot be integrated analytically

## II. Detailed mechanisms and components of MCMC

### A. The sampling mechanism of MCMC

```mermaid
graph TD
    A2["Set an arbitrary initial value"] --> B2["Move via the proposal distribution (Proposal)"]
    B2 --> C2["Decide whether to accept (Acceptance)"]
    C2 -- "Accept" --> D2["Update state"]
    C2 -- "Reject" --> E2["Keep state"]
    D2 --> F2["Elapse the burn-in period"]
    E2 --> F2
    F2 -- "Reach the stationary distribution" --> G2["Obtain valid samples"]
```

### B. Major algorithms and detailed functions

| Algorithm Type | Detailed Description | Notes |
| :--- | :--- | :--- |
| **Metropolis-Hastings** | Proposes a candidate state and decides whether to move based on the probability ratio against the target distribution | The most general-purpose sampling technique |
| **Gibbs Sampling** | In a multivariate distribution, sequentially samples each variable conditioned on the others | Efficient for handling high-dimensional distributions |
| **Hamiltonian MC** | Introduces Hamiltonian dynamics from physics to maximize the exploration efficiency of the sampling path | Substantially improves convergence speed in high dimensions |

## III. Technical considerations and trends in MCMC

### A. Key technical considerations

| Key Element | Detailed Content | Notes |
| :--- | :--- | :--- |
| **Burn-in** | Discards the initial samples generated before convergence to remove bias from the initial value | **Initial Bias Removal** |
| **Mixing Rate** | How quickly and evenly the sampling algorithm explores the target distribution's space | **Convergence Speed** |
| **Autocorrelation** | The degree of correlation between adjacent samples — an indicator of sample independence | **Sample Independence** |

### B. Technology trends

( **Scalable MCMC** ) **SGLD** (Stochastic Gradient Langevin Dynamics), which combines stochastic gradient descent with MCMC, is used for large-scale data processing.
( **Probabilistic Programming** ) probabilistic programming languages such as **Stan** and **PyMC** have popularized MCMC as an automatic sampling tool for complex Bayesian models.
