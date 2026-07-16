---
title: "Vector DB Optimization"
weight: 6
---

Choosing and tuning vector databases for semantic search

## How a Vector DB Works

```mermaid
flowchart LR
    A["Document / text"] --> B["Embedding model<br/>text-embedding-3"]
    B --> C["Vector<br/>[0.12, -0.34, ...]"]
    C --> D["Vector DB<br/>storage"]

    E["User query"] --> F["Embedding model"]
    F --> G["Query vector"]
    G --> H["Similarity search<br/>ANN"]
    D --> H
    H --> I["Relevant documents<br/>Top-K returned"]

    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style D fill:#7C3AED,stroke:#6D28D9,color:#fff
    style H fill:#EA580C,stroke:#C2410C,color:#fff
    style I fill:#16A34A,stroke:#15803D,color:#fff
```

## Major Vector DB Comparison

| DB | Hosting | Characteristics | Best fit |
|---|---|---|---|
| **Pinecone** | Managed cloud | Fully managed, easy setup | Rapid prototyping, production |
| **Weaviate** | Self-hosted/managed | Multimodal, hybrid search | Complex queries, open-source preference |
| **Qdrant** | Self-hosted/managed | Rust-based, high performance | Large scale, performance-critical |
| **Chroma** | Self-hosted | Optimized for local development | Dev/test environments |
| **pgvector** | PostgreSQL extension | Integrates with an existing DB | Small scale, simple use cases |

## Key Performance Optimization Metrics

### SLA Targets (Production)
- **P95 response time**: < 100ms
- **P99 response time**: < 200ms
- **Availability**: 99.9%+

### Optimization Points

**1. Embedding Model Selection**
```
text-embedding-3-small: fast, low cost, 1536 dimensions
text-embedding-3-large: higher accuracy, 3072 dimensions
```

**2. Index Configuration**
```
HNSW parameters:
  ef_construction: 128–512 (higher = better accuracy, longer build time)
  M: 16–64 (higher = better accuracy, more memory)
```

**3. Chunking Strategy**
```
Chunk size: 256–512 tokens (adjust based on document type)
Overlap:    50–100 tokens (preserves contextual continuity)
```
