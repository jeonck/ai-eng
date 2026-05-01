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
};

export default sidebars;
