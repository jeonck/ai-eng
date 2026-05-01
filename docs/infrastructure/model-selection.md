---
sidebar_position: 3
title: 모델 선택 및 튜닝
---

# 모델 선택 및 튜닝

목적에 맞는 LLM 선정, 파인튜닝, 양자화 전략

## 모델 선택 프레임워크

```mermaid
flowchart TD
    A["요구사항 분석"] --> B{"데이터 보안"}
    B -->|"내부 데이터 불가"| C["자체 호스팅<br/>오픈소스 모델"]
    B -->|"외부 API 가능"| D{"태스크 복잡도"}
    D -->|"단순 분류/요약"| E["소형 모델<br/>Claude Haiku / GPT-4o-mini"]
    D -->|"복잡한 추론"| F["대형 모델<br/>Claude Opus / GPT-4o"]
    D -->|"도메인 특화"| G["파인튜닝 검토"]

    style A fill:#1E3A5F,stroke:#1E3A5F,color:#fff
    style C fill:#EA580C,stroke:#C2410C,color:#fff
    style E fill:#16A34A,stroke:#15803D,color:#fff
    style F fill:#2563EB,stroke:#1D4ED8,color:#fff
    style G fill:#7C3AED,stroke:#6D28D9,color:#fff
```

## 주요 LLM 비교 (2025)

| 모델 | 제공사 | 강점 | 컨텍스트 |
|---|---|---|---|
| **Claude Opus 4** | Anthropic | 복잡한 추론, 코딩 | 200K 토큰 |
| **Claude Sonnet 4** | Anthropic | 균형 잡힌 성능/비용 | 200K 토큰 |
| **Claude Haiku 4** | Anthropic | 빠른 속도, 저비용 | 200K 토큰 |
| **GPT-4o** | OpenAI | 멀티모달, 범용 | 128K 토큰 |
| **Gemini 2.0 Flash** | Google | 멀티모달, 속도 | 1M 토큰 |
| **Llama 3.3** | Meta | 오픈소스, 자체 호스팅 | 128K 토큰 |

## 튜닝 전략 비교

### 프롬프트 엔지니어링
- **적합**: 빠른 프로토타이핑, 소량 데이터
- **비용**: 낮음
- **효과**: 중간

### RAG (Retrieval-Augmented Generation)
- **적합**: 최신 정보 반영, 도메인 지식 주입
- **비용**: 중간
- **효과**: 높음 (지식 정확도)

### 파인튜닝 (Fine-tuning)
- **적합**: 특정 스타일/형식, 대량 반복 작업
- **비용**: 높음 (초기 투자)
- **효과**: 높음 (스타일 일관성)

## 양자화 (Quantization)

오픈소스 모델 자체 호스팅 시 VRAM 절감을 위한 양자화 전략:

```
FP32 → FP16: VRAM 50% 절감, 성능 손실 미미
FP16 → INT8: VRAM 추가 50% 절감, 성능 소폭 저하
INT8 → INT4: VRAM 추가 50% 절감, 성능 저하 주의
```

**추천 도구**: `llama.cpp`, `GPTQ`, `AWQ`, `bitsandbytes`
