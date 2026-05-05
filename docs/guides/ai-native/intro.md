---
sidebar_position: 1
title: AI-Native 설계 프레임워크
---

# 🏗️ AI-Native 설계 문서 프레임워크

AI 코딩 팀이 효율적으로 협업하고, AI가 생성하는 코드의 품질을 통제할 수 있도록 돕는 설계 문서 템플릿 세트입니다. AI의 생산성을 활용하되, 시스템의 일관성과 유지보수성을 잃지 않는 것을 목표로 합니다.

## 문서 구조

```
project/
├── docs/
│   ├── decisions/          # ADR — 왜 이 방식을 선택했는가?
│   ├── architecture/       # C4 Model — 시스템 구조와 맥락
│   ├── standards/          # 구현 규칙 — AI가 따를 코딩 표준·가드레일
│   └── debt/               # 기술부채 등록부 — 나중에 해결할 문제들
└── .github/
    └── PULL_REQUEST_TEMPLATE.md
```

| 문서 | 역할 |
|---|---|
| [ADR 템플릿](./adr-template) | 아키텍처 의사결정 기록 — 왜 이 기술을 선택했는지 남긴다 |
| [기술부채 등록부](./debt-register) | AI 생성 코드 중 개선이 필요한 항목 추적 |
| [PR 체크리스트](./pr-checklist) | AI 개발 확인 사항이 포함된 PR 리뷰 가이드 |

---

## AI와 협업하는 3가지 원칙

### 1. Context 우선 제공

코딩 시작 전 관련 ADR과 아키텍처 문서를 AI에게 먼저 읽힙니다.

```
"우리 프로젝트의 docs/decisions에 있는 최신 ADR들을 먼저 읽고,
그 규칙에 맞춰서 다음 코드를 작성해줘."
```

### 2. 설계 후 구현

큰 기능은 반드시 ADR을 먼저 작성하거나, AI에게 설계 초안을 검토받은 뒤 코드를 생성합니다.

```mermaid
flowchart LR
    A["요구사항 분석"] --> B["ADR 초안 작성<br/>(AI 보조)"]
    B --> C["팀 검토·확정"]
    C --> D["코드 생성<br/>(AI + 사람)"]
    D --> E["PR 체크리스트<br/>자가 진단"]
    E --> F["기술부채 등록<br/>(필요 시)"]

    style B fill:#7C3AED,stroke:#6D28D9,color:#fff
    style D fill:#2563EB,stroke:#1D4ED8,color:#fff
    style E fill:#0891B2,stroke:#0E7490,color:#fff
    style F fill:#EA580C,stroke:#C2410C,color:#fff
```

### 3. 부채 즉시 기록

AI가 제안한 임시 방편이나 리팩토링이 필요한 코드는 즉시 `debt-register.md`에 추가합니다. 나중에 기억하려 하지 말고, 발견하는 즉시 등록합니다.

---

## AI 도구별 문서 연동 방법

| 도구 | 설정 방법 |
|---|---|
| **Claude Code** | `CLAUDE.md`에 `docs/decisions` 경로 참조 명시 |
| **Cursor** | `.cursorrules`에 `/docs` 경로 참조 설정 |
| **Windsurf** | `.windsurfrules`에 `/docs` 경로 참조 설정 |
| **GitHub Copilot** | `.github/copilot-instructions.md`에 가이드라인 작성 |

### CLAUDE.md 예시

```markdown
## 설계 원칙
- 코드 작성 전 docs/decisions/ 의 최신 ADR을 확인하세요.
- 새로운 의사결정이 필요하면 ADR 템플릿을 사용해 초안을 작성하세요.
- 임시 방편 코드를 작성할 경우 반드시 docs/debt/debt-register.md에 기록하세요.
```

---

## 영향도가 '고'인 부채 3개 이상 시 규칙

> 신규 기능 개발보다 **기술부채 상환을 우선**합니다.

기술부채 등록부의 영향도 '고' 항목이 3개 이상 누적되면 스프린트 계획 시 부채 상환 태스크를 최우선으로 배치합니다.
