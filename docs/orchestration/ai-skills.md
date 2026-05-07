---
sidebar_position: 7
title: AI 스킬 설계
---

# AI 스킬 설계

**Skill-Based Orchestration** — 반복적인 AI 워크플로우를 재사용 가능한 패키지로 캡슐화하는 기법

## 스킬이란?

AI 스킬은 특정 도메인의 **절차적 지식, 도구 연동, 레퍼런스 자료**를 하나의 패키지로 묶어, 자연어 명령 하나로 복잡한 멀티스텝 워크플로우를 실행시키는 오케스트레이션 단위입니다.

```mermaid
flowchart LR
    A["자연어 명령<br/>'Algolia 검색 추가해줘'"] --> B["스킬 트리거<br/>algolia-docusaurus"]
    B --> C["SKILL.md<br/>워크플로우 지시"]
    B --> D["references/<br/>템플릿·레퍼런스"]
    C --> E["AI 에이전트<br/>멀티스텝 실행"]
    D --> E
    E --> F["결과물<br/>파일 생성·설정·푸시"]

    style B fill:#7C3AED,stroke:#6D28D9,color:#fff
    style C fill:#2563EB,stroke:#1D4ED8,color:#fff
    style D fill:#0891B2,stroke:#0E7490,color:#fff
    style E fill:#EA580C,stroke:#C2410C,color:#fff
    style F fill:#16A34A,stroke:#15803D,color:#fff
```

## 왜 오케스트레이션의 핵심인가

| 스킬의 구성 요소 | 오케스트레이션 개념 |
|---|---|
| SKILL.md 워크플로우 지시 | 프롬프트 & 컨텍스트 설계 |
| references/ 도메인 지식 주입 | RAG 패턴 (컨텍스트 주입) |
| 도구별 절차 캡슐화 | 에이전트 인터페이스 (툴 연동) |
| 반복 작업의 표준화된 실행 흐름 | 워크플로우 자동화 |

스킬은 오케스트레이션 섹션에서 강조한 **"자연어로 시스템을 제어하는 에이전틱 환경"** 의 가장 실용적인 구현 형태입니다.

---

## 스킬의 구조

```
skill-name/
├── SKILL.md              ← 트리거 조건 + 실행 워크플로우 (필수)
└── references/           ← AI가 필요 시 로드하는 레퍼런스
    ├── template.json     ← 재사용 템플릿
    └── guide.md          ← 도메인 지식 문서
```

### 3단계 점진적 로딩 (Progressive Disclosure)

스킬은 컨텍스트 효율을 위해 필요한 만큼만 로드합니다:

```
1단계: 메타데이터 (name + description) — 항상 로드 (~100 words)
   ↓ 스킬 트리거 시
2단계: SKILL.md 본문 — 워크플로우 지시 로드 (<5K words)
   ↓ 실행 중 필요 시
3단계: references/ 파일들 — 필요한 파일만 선택적 로드
```

---

## SKILL.md 핵심 설계 원칙

### 트리거 조건을 명확히

```yaml
---
name: algolia-docusaurus
description: |
  This skill should be used when adding Algolia DocSearch
  to a Docusaurus v3 site deployed on GitHub Pages.
  Triggers when the user asks to add search functionality,
  integrate Algolia, or set up DocSearch on a Docusaurus site.
---
```

`description`이 스킬의 자동 트리거를 결정합니다. **언제 써야 하는지**를 구체적으로 기술할수록 정확하게 발동됩니다.

### 자동화 vs 사람 개입 영역 명시

```markdown
## Step 0. 사용자가 직접 해야 하는 작업 (브라우저 필요)
- Algolia 계정 생성
- GitHub Secrets 등록

## Step 1. Claude가 자동화하는 작업
- .algolia/config.json 생성
- docusaurus.config.ts 수정
- GitHub Actions 워크플로우 생성
```

브라우저가 필요한 작업(로그인, UI 조작)은 사람에게, 파일 생성·수정·푸시는 AI에게 명확히 분담합니다.

---

## 스킬 설계 패턴

### 패턴 1: 워크플로우 기반 (Sequential)

단계가 명확한 순차 프로세스에 적합합니다.

```
실제 사례: algolia-docusaurus 스킬
Step 0 → Step 1 → Step 2 → Step 3 → Step 4 → Step 5
(사전확인) (파일생성) (설정수정) (워크플로우) (빌드검증) (동작확인)
```

### 패턴 2: 레퍼런스 주입 기반 (RAG-like)

도메인 지식이 많거나 템플릿이 복잡할 때 `references/`를 활용합니다.

```
SKILL.md: "references/crawler-config-template.json을 읽어
           GITHUB_USERNAME, REPO_NAME을 치환하여 생성하라"
           
→ AI가 실행 시점에 템플릿을 로드, 변수 치환 후 파일 생성
→ 토큰 절약 + 정확한 템플릿 재현
```

### 패턴 3: 가이드라인 기반 (Standard Enforcement)

코딩 표준, 거버넌스 규칙 등 준수해야 할 기준을 강제할 때:

```
references/adr-standards.md: ADR 작성 규칙
references/code-standards.md: 코딩 컨벤션
→ AI가 코드 생성 전 반드시 읽고 기준에 맞게 생성
```

---

## 스킬 vs 기존 오케스트레이션 기법 비교

| | 프롬프트 엔지니어링 | RAG | 스킬 |
|---|---|---|---|
| **재사용성** | 낮음 (매번 작성) | 중간 | 높음 (패키지화) |
| **도메인 지식** | 프롬프트에 직접 포함 | 벡터 DB 검색 | references/ 파일 |
| **워크플로우** | 단일 응답 | 단일 응답 | 멀티스텝 자동화 |
| **팀 공유** | 어려움 | 인프라 필요 | 파일 공유로 즉시 가능 |
| **유지보수** | 분산됨 | DB 관리 필요 | 파일 버전 관리 |

---

## 실전 활용: 스킬 라이브러리 구축

팀 단위로 스킬을 쌓아가면 AI 생산성이 복리로 성장합니다.

```
team-skills/
├── infra/
│   ├── algolia-search/       ← 검색 연동
│   └── github-pages-deploy/  ← 배포 자동화
├── dev/
│   ├── pr-review/            ← PR 리뷰 자동화
│   └── adr-writer/           ← ADR 초안 작성
└── docs/
    ├── docusaurus-site/      ← 문서 사이트 생성
    └── api-docs/             ← API 문서화
```

새로운 프로젝트를 시작할 때 팀 스킬 라이브러리에서 필요한 스킬을 가져와 즉시 적용합니다.

## Health Check 질문

> "우리 팀의 반복 작업 중 스킬로 패키지화할 수 있는 것이 있는가?"

- [ ] 매번 비슷한 설정을 반복하는 작업이 있는가?
- [ ] AI에게 매번 같은 컨텍스트를 설명하는 작업이 있는가?
- [ ] 신규 팀원이 혼자 수행하기 어려운 복잡한 절차가 있는가?
- [ ] 팀 공통 표준을 AI가 항상 따르도록 강제해야 하는 영역이 있는가?
