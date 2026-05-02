import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GITHUB_USERNAME = 'jeonck';
const REPO_NAME = 'ai-eng';
const SITE_TITLE = 'AI 엔지니어링';
const SITE_TAGLINE = 'AI 기술관리 프레임워크 — 5개 영역으로 체계화하기';

const config: Config = {
  title: SITE_TITLE,
  tagline: SITE_TAGLINE,
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: `https://${GITHUB_USERNAME}.github.io`,
  baseUrl: `/${REPO_NAME}/`,
  organizationName: GITHUB_USERNAME,
  projectName: REPO_NAME,
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    navbar: {
      title: `🤖 ${SITE_TITLE}`,
      items: [
        { type: 'docSidebar', sidebarId: 'infrastructureSidebar', position: 'left', label: '🏗 인프라 & 아키텍처' },
        { type: 'docSidebar', sidebarId: 'orchestrationSidebar',  position: 'left', label: '⚙️ 오케스트레이션' },
        { type: 'docSidebar', sidebarId: 'governanceSidebar',     position: 'left', label: '🛡 거버넌스' },
        { type: 'docSidebar', sidebarId: 'interfaceSidebar',      position: 'left', label: '🤝 인터페이스' },
        { type: 'docSidebar', sidebarId: 'businessSidebar',       position: 'left', label: '📊 비즈니스 임팩트' },
        { type: 'docSidebar', sidebarId: 'guidesSidebar',         position: 'right', label: '📖 가이드' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ${SITE_TITLE}. Built with Docusaurus.`,
    },
    algolia: {
      appId: 'DURKCSGHZM',
      apiKey: 'c455569c890c1e2d2562f343311ebb29',
      indexName: 'ai-eng',
      contextualSearch: false,
      searchPagePath: 'search',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
