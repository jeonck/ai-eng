---
title: "RAG Pipeline"
weight: 3
---

# RAG Pipeline

Retrieval-Augmented Generation — the core technique for connecting AI to external knowledge

## RAG Architecture

```mermaid
flowchart LR
    A["User Query"] --> B["Query Embedding"]
    B --> C["Vector DB<br/>Similarity Search"]
    C --> D["Relevant Documents<br/>Top-K Chunks"]
    D --> E["Prompt Construction<br/>Context Injection"]
    A --> E
    E --> F["LLM Inference"]
    F --> G["Final Answer"]

    style A fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#0891B2,stroke:#0E7490,color:#fff
    style E fill:#EA580C,stroke:#C2410C,color:#fff
    style F fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style G fill:#16A34A,stroke:#15803D,color:#fff
```

## Advanced RAG Patterns

### Naive RAG vs Advanced RAG

| Aspect | Naive RAG | Advanced RAG |
|---|---|---|
| **Retrieval method** | Simple vector similarity | Hybrid (vector + keyword) |
| **Reranking** | None | Cross-encoder reranking |
| **Query expansion** | Original query only | HyDE, query decomposition |
| **Chunking** | Fixed size | Semantic chunking |

### Hybrid Search

```python
# Combine vector search with BM25 keyword search
results = hybrid_search(
    query=user_query,
    vector_weight=0.7,   # semantic
    keyword_weight=0.3,  # keyword-based
    top_k=20
)
# Rerank with a cross-encoder
reranked = reranker.rank(query, results, top_k=5)
```

### HyDE (Hypothetical Document Embedding)

Generate a hypothetical answer to the query first, then search using that answer.

```
1. Query: "What impact does quantum computing have on encryption?"
2. Generate a hypothetical answer: "Quantum computing currently poses a threat to RSA encryption..."
3. Search the Vector DB using the hypothetical answer
4. Retrieval accuracy for actual relevant documents improves
```

> **Going further**: for next-generation, verification-focused strategies such as GraphRAG and Agentic RAG, see the [RAG 2.0](./rag-2-0) page.

## RAG Evaluation Metrics

| Metric | Description | Target |
|---|---|---|
| **Faithfulness** | How well the answer is grounded in the retrieved documents | > 0.8 |
| **Answer Relevancy** | How relevant the answer is to the question | > 0.8 |
| **Context Recall** | How much of the information needed for the correct answer was retrieved | > 0.7 |
| **Context Precision** | The proportion of retrieved documents that are actually useful | > 0.6 |

**Recommended evaluation tools**: RAGAS, TruLens, LangSmith
