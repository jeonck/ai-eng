---
title: "Data Pipelines"
weight: 5
---

A system for real-time data collection and cleaning for AI training and inference

## Pipeline Architecture

```mermaid
flowchart LR
    A["Data source<br/>DB / API / files"] --> B["Ingestion"]
    B --> C["Cleaning"]
    C --> D["Transform"]
    D --> E["Storage"]
    E --> F["AI model<br/>training / inference"]

    style A fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#0891B2,stroke:#0E7490,color:#fff
    style F fill:#16A34A,stroke:#15803D,color:#fff
```

## Data Cleaning Checklist

- [ ] **Deduplication**: prevent identical data from influencing training multiple times
- [ ] **Noise removal**: handle typos, encoding errors, and incomplete records
- [ ] **PII masking**: automatically detect and mask personal information (names, phone numbers, emails)
- [ ] **Label validation**: verify label quality for supervised learning data
- [ ] **Data balancing**: address class imbalance (undersampling / oversampling)

## Streaming vs. Batch Processing

| Approach | Best fit | Tools |
|---|---|---|
| **Real-time streaming** | real-time inference, event-driven | Apache Kafka, AWS Kinesis |
| **Micro-batch** | near-real-time (minute-level) | Apache Spark Streaming |
| **Batch** | training data preparation, reporting | Apache Spark, dbt |

## Recommended Stack

```
Ingestion:       Apache Kafka / AWS Kinesis
Processing:      Apache Spark / dbt
Storage:         S3 / GCS (raw) + PostgreSQL (structured) + Pinecone (vector)
Orchestration:   Apache Airflow / Prefect
Monitoring:      Great Expectations (data quality)
```
