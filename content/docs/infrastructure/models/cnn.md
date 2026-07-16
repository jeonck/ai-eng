---
title: "Convolutional Neural Network"
weight: 15
---

## I. Preserving spatial information and extracting features — overview of CNN

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A1["Flattened image input"] -- "Extract and compress local spatial features" --> B1["Position-invariant object recognition"]
    style A1 fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B1 fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**Definition**: a neural network architecture that uses convolution operations to extract local features while preserving an image's spatial structure ( **Spatial Structure** )

**Characteristics**:
( **Translation Invariance** ) secures translation invariance ( **Translation Invariance** ), recognizing a feature identically regardless of where it appears in the image
( **Parameter Sharing** ) sharing filters dramatically reduces the number of parameters to be learned compared to a fully connected network
( **Hierarchical Structure** ) lower layers learn lines and points, while higher layers progressively learn the shapes of complex objects

## II. Major operations and layers of CNN

### A. The feature-extraction and classification process of CNN

```mermaid
graph TD
    A2["Input Image"] --> B2["Convolution Layer\n(feature extraction)"]
    B2 --> C2["Pooling Layer\n(dimensionality reduction)"]
    C2 --> D2["Fully Connected\n(classification/regression)"]
    D2 --> E2["Final Output"]
```

### B. Core components and functions

| Component | Detailed Description | Key Keyword |
| :--- | :--- | :--- |
| **Filter** (Kernel) | A weight matrix that slides over the image to extract local features | **Shared Weights** |
| **Stride** | The interval at which the filter moves, controlling the size of the output data | **Step Size** |
| **Padding** | Fills the border with a specific value (e.g., 0) to preserve output size and prevent loss of edge information | **Zero Padding** |
| **Pooling** | Extracts a representative value (max/average) from a region to compress features and remove noise | **Sub-sampling** |

## III. Evolution of representative CNN models

| Model | Key Innovation | Notes |
| :--- | :--- | :--- |
| **LeNet**-5 | The first practical **CNN** architecture (check-digit recognition) | 1998, Yann LeCun |
| **AlexNet** | Sparked the deep learning boom by introducing **GPU** usage, **ReLU**, and **Dropout** | Won ImageNet 2012 |
| **VGGNet** | Proved the efficiency of stacking small 3x3 filters deeply | Simple, deep structure |
| **ResNet** | Succeeded in training networks over 100 layers deep via residual learning (skip connections) | Solved vanishing gradients |

**Technology trends**: today CNNs continue to advance not only in image recognition but also in autonomous driving, medical image interpretation, and, combined with Vision Transformers ( **ViT** ), increasingly sophisticated visual intelligence
