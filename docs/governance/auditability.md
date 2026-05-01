---
sidebar_position: 4
title: AI 감사 가능성
---

# AI 감사 가능성 (Auditability)

AI 결과물이 왜 그렇게 나왔는지 추적하고 사후 검증할 수 있는 체계

## 감사 가능성이 중요한 이유

결과값이 왜 그렇게 나왔는지 **로그를 남기고 사후 검증할 수 있는 체계**는 향후 법적 규제 대응의 핵심이 됩니다.

EU AI Act, 국내 AI 기본법 등은 고위험 AI 시스템에 대해 감사 추적(Audit Trail)을 의무화하는 방향으로 발전하고 있습니다.

## 감사 로그 설계

```python
audit_log = {
    "request_id": "uuid-v4",
    "timestamp": "2025-05-02T09:30:00Z",
    "user_id": "user_123",
    "session_id": "session_456",

    # 입력
    "input": {
        "user_message": "...",
        "system_prompt_version": "v2.1.0",
        "retrieved_documents": ["doc_id_1", "doc_id_2"],
    },

    # 모델 정보
    "model": {
        "provider": "anthropic",
        "model_id": "claude-sonnet-4-6",
        "temperature": 0.7,
    },

    # 출력
    "output": {
        "response": "...",
        "tokens_used": {"input": 1500, "output": 300},
        "latency_ms": 1200,
    },

    # 품질 평가
    "evaluation": {
        "faithfulness_score": 0.92,
        "flagged": False,
        "flag_reasons": [],
    }
}
```

## 감사 데이터 보존 정책

| 데이터 유형 | 보존 기간 | 저장소 |
|---|---|---|
| **전체 요청/응답 로그** | 1년 | 콜드 스토리지 (S3 Glacier) |
| **품질 평가 결과** | 2년 | 데이터 웨어하우스 |
| **이상 탐지 이벤트** | 5년 | 감사 전용 DB |
| **규제 관련 결정 로그** | 7년 | 불변 저장소 (WORM) |

## 설명 가능성 (Explainability)

감사는 "무엇을 했는가"를 기록하는 것이고, 설명 가능성은 "왜 그렇게 했는가"를 설명하는 것입니다.

**RAG 기반 시스템의 설명 가능성**:
```
사용자 질문: "반품 정책이 어떻게 되나요?"

답변 근거:
  - 검색된 문서: "고객 서비스 정책 v3.2" (유사도: 0.94)
  - 검색된 문서: "FAQ 반품 관련" (유사도: 0.89)
  - 답변의 92% 내용이 위 문서에 근거함
```
