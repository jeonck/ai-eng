---
title: "AI Auditability"
weight: 4
---

A framework for tracing why an AI system produced a given output, and for verifying it after the fact.

## Why auditability matters

A system that **logs and lets you verify after the fact** why a result came out the way it did will become central to how organizations respond to future legal regulation.

The EU AI Act, Korea's AI Framework Act, and similar regulations are increasingly moving toward mandating audit trails for high-risk AI systems.

## Audit log design

```python
audit_log = {
    "request_id": "uuid-v4",
    "timestamp": "2025-05-02T09:30:00Z",
    "user_id": "user_123",
    "session_id": "session_456",

    # Input
    "input": {
        "user_message": "...",
        "system_prompt_version": "v2.1.0",
        "retrieved_documents": ["doc_id_1", "doc_id_2"],
    },

    # Model info
    "model": {
        "provider": "anthropic",
        "model_id": "claude-sonnet-4-6",
        "temperature": 0.7,
    },

    # Output
    "output": {
        "response": "...",
        "tokens_used": {"input": 1500, "output": 300},
        "latency_ms": 1200,
    },

    # Quality evaluation
    "evaluation": {
        "faithfulness_score": 0.92,
        "flagged": False,
        "flag_reasons": [],
    }
}
```

## Audit data retention policy

| Data type | Retention period | Storage |
|---|---|---|
| **Full request/response logs** | 1 year | Cold storage (S3 Glacier) |
| **Quality evaluation results** | 2 years | Data warehouse |
| **Anomaly detection events** | 5 years | Dedicated audit database |
| **Regulatory decision logs** | 7 years | Immutable storage (WORM) |

## Explainability

Auditing records **what** was done; explainability explains **why** it was done that way.

**Explainability in RAG-based systems**:
```
User question: "What is your return policy?"

Basis for the answer:
  - Retrieved document: "Customer Service Policy v3.2" (similarity: 0.94)
  - Retrieved document: "Returns FAQ" (similarity: 0.89)
  - 92% of the answer content is grounded in the documents above
```
