---
sidebar_position: 3
title: RAG 파이프라인
---

# RAG 파이프라인

Retrieval-Augmented Generation — 외부 지식을 AI에 연결하는 핵심 기법

## RAG 아키텍처

```mermaid
flowchart LR
    A["사용자 쿼리"] --> B["쿼리 임베딩"]
    B --> C["Vector DB<br/>유사도 검색"]
    C --> D["관련 문서<br/>Top-K 청크"]
    D --> E["프롬프트 구성<br/>컨텍스트 주입"]
    A --> E
    E --> F["LLM 추론"]
    F --> G["최종 답변"]

    style A fill:#EFF6FF,stroke:#2563EB,color:#1E40AF
    style B fill:#2563EB,stroke:#1D4ED8,color:#fff
    style C fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#0891B2,stroke:#0E7490,color:#fff
    style E fill:#EA580C,stroke:#C2410C,color:#fff
    style F fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style G fill:#16A34A,stroke:#15803D,color:#fff
```

## 고급 RAG 패턴

### Naive RAG vs Advanced RAG

| 항목 | Naive RAG | Advanced RAG |
|---|---|---|
| **검색 방식** | 단순 벡터 유사도 | 하이브리드 (벡터 + 키워드) |
| **재순위화** | 없음 | Cross-encoder reranking |
| **쿼리 확장** | 원본 쿼리만 | HyDE, 쿼리 분해 |
| **청킹** | 고정 크기 | 의미 기반 청킹 |

### Hybrid Search

```python
# 벡터 검색 + BM25 키워드 검색 결합
results = hybrid_search(
    query=user_query,
    vector_weight=0.7,   # 의미 기반
    keyword_weight=0.3,  # 키워드 기반
    top_k=20
)
# Cross-encoder로 재순위화
reranked = reranker.rank(query, results, top_k=5)
```

### HyDE (Hypothetical Document Embedding)

쿼리로 가상의 답변을 먼저 생성한 후, 그 답변으로 검색합니다.

```
1. 쿼리: "양자 컴퓨팅이 암호화에 미치는 영향은?"
2. 가상 답변 생성: "양자 컴퓨팅은 현재 RSA 암호화를..."
3. 가상 답변으로 Vector DB 검색
4. 실제 관련 문서 검색 정확도 향상
```

## RAG 평가 지표

| 지표 | 설명 | 목표값 |
|---|---|---|
| **Faithfulness** | 답변이 검색된 문서에 근거하는 정도 | > 0.8 |
| **Answer Relevancy** | 답변이 질문과 관련된 정도 | > 0.8 |
| **Context Recall** | 정답에 필요한 정보가 검색된 정도 | > 0.7 |
| **Context Precision** | 검색된 문서 중 실제 유용한 비율 | > 0.6 |

**추천 평가 도구**: RAGAS, TruLens, LangSmith
