---
title: "Compute Resource Management"
weight: 2
---

Strategies for cost-efficient operation of GPU/NPU servers and cloud infrastructure

## On-Premises vs. Cloud

```mermaid
flowchart TD
    A["AI workload"] --> B{"Workload characteristics"}
    B -->|"Large-scale training<br/>Irregular load"| C["Cloud<br/>AWS / GCP / Azure"]
    B -->|"Continuous inference<br/>Data security critical"| D["On-premises<br/>GPU servers"]
    B -->|"Mixed strategy"| E["Hybrid<br/>Cloud bursting"]

    style A fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#16A34A,stroke:#15803D,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#7C3AED,stroke:#6D28D9,color:#fff
```

## Cloud AI Service Comparison

| Item | AWS Bedrock | Google Vertex AI | Azure AI |
|---|---|---|---|
| **Key models** | Claude, Llama, Titan | Gemini, PaLM | GPT-4, Phi |
| **Fine-tuning** | Supported | Supported | Supported |
| **On-demand pricing** | Per-token billing | Per-token billing | Per-token billing |
| **Provisioned throughput** | Supported | Supported | Supported |

## Cost Optimization Strategies

### 1. Model Tiering

```
Complex tasks   → Large models (Claude Opus, GPT-4o)
General tasks   → Mid-size models (Claude Sonnet, GPT-4o-mini)
Simple tasks    → Small models (Claude Haiku, GPT-3.5)
```

### 2. Caching Strategy

For prompts or context that are reused repeatedly, **prompt caching** can cut costs by up to 90%.

### 3. Batch Processing

For workloads that don't require a real-time response, using the **Batch API** cuts costs by 50%.

## GPU Spec Guide

| Use case | Recommended GPU | Notes |
|---|---|---|
| **Large-scale training** | H100, A100 | 80GB+ VRAM |
| **Mid-size fine-tuning** | A10G, L40S | 24–48GB VRAM |
| **Inference server** | T4, L4 | 16GB VRAM, cost-efficient |
| **Local development** | RTX 4090 | 24GB VRAM |

## Serving Open Models

Self-hosting a model means running an inference server, and the serving engine decides how much of the GPU you actually get to use. On identical hardware, throughput differs by an order of magnitude between a naive request loop and a batching engine.

| Engine | Best fit |
|---|---|
| **vLLM** | High-throughput production serving — PagedAttention plus continuous batching |
| **TensorRT-LLM** | Lowest latency on NVIDIA hardware, at the cost of a compile step per model |
| **TGI** (Text Generation Inference) | Production serving inside a Hugging Face-centric stack |
| **Ollama / llama.cpp** | Local development, CPU and consumer-GPU inference |

The levers that decide throughput:

- **Continuous batching** — arriving requests join the running batch instead of waiting for it to drain
- **KV cache management** — paged attention lets many concurrent sequences share VRAM without pre-reserving worst-case space
- **Tensor parallelism** — split a model across GPUs once the weights exceed one card
- **Quantization** — buys VRAM headroom, and therefore concurrency, in exchange for some quality; see [Model Selection & Tuning](/docs/infrastructure/model-selection/)

What to hold a serving deployment to:

| Metric | What it tells you |
|---|---|
| **TTFT** (time to first token) | Perceived responsiveness — driven by prompt length and queue depth |
| **Inter-token latency** | How smooth the stream feels once generation starts |
| **Throughput** (aggregate tokens/sec) | What the GPU is actually returning for its cost |
| **Concurrency at target latency** | The number that sizes the fleet — peak throughput at an unacceptable TTFT is not capacity |
