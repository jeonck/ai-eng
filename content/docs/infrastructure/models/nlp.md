---
title: "Natural Language Processing"
weight: 18
---

## I. Communication between human language and machines — overview of NLP

```mermaid
%%{init: { 'theme': 'base', 'themeVariables': { 'edgeLabelBackground': '#fff' }}}%%
flowchart LR
    A1["Unstructured natural-language data"] -- "Numericalize and understand via context" --> B1["Natural-language services powered by machine intelligence"]
    style A1 fill:#f9f9f9,stroke:#333,stroke-width:1px
    style B1 fill:#e1f5fe,stroke:#01579b,stroke-width:1px
```

**Definition**: a core research field of artificial intelligence that enables computers to understand, analyze, and generate the natural language used by humans

**Characteristics**:
( **Resolving Ambiguity** ) handles the complex characteristics of language, such as word polysemy and meaning that shifts with context
( **Vectorization** ) processes unstructured text data by converting it into numeric vectors ( **Vector** )
( **Understanding and Generation** ) composed of the interplay between natural language understanding ( **NLU** ) and natural language generation ( **NLG** )

## II. Major processing stages and technical elements of NLP

### A. The text-analysis pipeline

```mermaid
graph TD
    A2["Raw text data"] --> B2["Preprocessing\n(Tokenizing/Cleaning)"]
    B2 --> C2["Embedding"]
    C2 --> D2["Modeling\n(RNN/Transformer)"]
    D2 --> E2["Task execution\n(Classification/QA)"]
```

### B. Core techniques and methods

| Stage | Key Techniques | Detailed Description |
| :--- | :--- | :--- |
| **Preprocessing** | **Tokenization**, **Stemming**, **Stopword Removal** | Splits text into minimal units and removes noise |
| **Embedding** | **Word2Vec**, **GloVe**, **FastText** | Converts words into dense vectors in a high-dimensional space |
| **Syntactic Analysis** | **POS Tagging**, **NER** (Named Entity Recognition) | Identifies sentence components and extracts key information |
| **Contextual Understanding** | **Attention Mechanism**, **Self-Attention** | Determines correlations between words and assigns importance |

## III. Major tasks and evolution stages of NLP

| Stage | Core Models | Key Characteristics |
| :--- | :--- | :--- |
| **Rule-based** | Regular expressions, dictionary-based methods | Operates only within predefined rules; limited scalability |
| **Statistical** | **N**-**gram**, **TF**-**IDF** | Relies on word frequency and statistical probability |
| **Deep-learning-based** | **RNN**, **LSTM**, **CNN** | Began automatically learning contextual features |
| **Massive Models** | **BERT**, **GPT**, **T5** | General-purpose performance through large-scale pre-training ( **Pre-training** ) |

**Technology trends**: NLP has now fully shifted from small models built for a specific task to the era of large language models ( **LLM** ) capable of performing virtually any language task
