import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  infrastructureSidebar: [
    {
      type: 'category',
      label: '🏗 AI 인프라 & 아키텍처',
      collapsed: false,
      items: [
        'infrastructure/intro',
        'infrastructure/computing',
        'infrastructure/model-selection',
        'infrastructure/data-pipeline',
        'infrastructure/vector-db',
        'infrastructure/mcp-server',
        {
          type: 'category',
          label: 'AI 모델들의 기본 원리와 구현 방법',
          collapsed: false,
          items: [
            'infrastructure/models/intro',
            'infrastructure/models/rule-based-ai',
            'infrastructure/models/naive-bayes',
            'infrastructure/models/hmm',
            'infrastructure/models/mcmc',
            'infrastructure/models/knn',
            'infrastructure/models/svm',
            'infrastructure/models/decision-tree',
            'infrastructure/models/ensemble-random-forest',
            'infrastructure/models/genetic-algorithm',
            'infrastructure/models/optimization',
            'infrastructure/models/neural-network',
            'infrastructure/models/backpropagation',
            'infrastructure/models/deep-learning',
            'infrastructure/models/cnn',
            'infrastructure/models/rnn',
            'infrastructure/models/transformer',
            'infrastructure/models/nlp',
            'infrastructure/models/llm',
            'infrastructure/models/multimodal-ai',
          ],
        },
      ],
    },
  ],

  orchestrationSidebar: [
    {
      type: 'category',
      label: '⚙️ AI 오케스트레이션',
      collapsed: false,
      items: [
        'orchestration/intro',
        'orchestration/prompt-design',
        'orchestration/rag',
        'orchestration/agent-interface',
        'orchestration/state-management',
        'orchestration/workflow-automation',
        'orchestration/ai-skills',
      ],
    },
  ],

  governanceSidebar: [
    {
      type: 'category',
      label: '🛡 AI 거버넌스',
      collapsed: false,
      items: [
        'governance/intro',
        'governance/guardrails',
        'governance/monitoring',
        'governance/auditability',
        'governance/finops',
        'governance/ethics-compliance',
        {
          type: 'category',
          label: 'AI-Native 설계 프레임워크',
          collapsed: false,
          items: [
            'governance/ai-native-intro',
            'governance/adr-template',
            'governance/debt-register',
            'governance/pr-checklist',
          ],
        },
      ],
    },
  ],

  interfaceSidebar: [
    {
      type: 'category',
      label: '🤝 AI 인터페이스',
      collapsed: false,
      items: [
        'interface/intro',
        'interface/ux-design',
        'interface/multimodal',
        'interface/ai-literacy',
        'interface/feedback-loop',
      ],
    },
  ],

  businessSidebar: [
    {
      type: 'category',
      label: '📊 AI 비즈니스 임팩트',
      collapsed: false,
      items: [
        'business/intro',
        'business/kpi-roi',
        'business/time-to-market',
        'business/bm-innovation',
        'business/scaleup',
      ],
    },
  ],

  guidesSidebar: [
    {
      type: 'category',
      label: '📖 가이드',
      collapsed: false,
      items: [
        'guides/algolia-search',
      ],
    },
  ],
};

export default sidebars;
