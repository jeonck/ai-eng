import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type AreaItem = {
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  color: string;
};

const areas: AreaItem[] = [
  {
    emoji: '🏗',
    title: 'AI 인프라 & 아키텍처',
    subtitle: 'Foundation & Build',
    description: 'GPU/NPU 자원 관리, 모델 선택·튜닝, 데이터 파이프라인, Vector DB, MCP 서버',
    link: '/docs/infrastructure/intro',
    color: '#2563EB',
  },
  {
    emoji: '⚙️',
    title: 'AI 오케스트레이션',
    subtitle: 'System Integration & Workflow',
    description: '프롬프트·컨텍스트 설계, RAG, 에이전트 인터페이스, 상태 관리, 워크플로우 자동화',
    link: '/docs/orchestration/intro',
    color: '#7C3AED',
  },
  {
    emoji: '🛡',
    title: 'AI 거버넌스',
    subtitle: 'Trust & Control',
    description: '가드레일·보안, 모니터링·관측성, 감사 가능성, FinOps, 윤리·규제 준수',
    link: '/docs/governance/intro',
    color: '#0891B2',
  },
  {
    emoji: '🤝',
    title: 'AI 인터페이스',
    subtitle: 'Human-AI Interaction',
    description: 'UI/UX 설계, 멀티모달 인터페이스, AI 리터러시 교육, 피드백 루프',
    link: '/docs/interface/intro',
    color: '#16A34A',
  },
  {
    emoji: '📊',
    title: 'AI 비즈니스 임팩트',
    subtitle: 'Value & ROI',
    description: 'KPI·ROI 분석, Time-to-Market, BM 혁신, 전사 스케일업 전략',
    link: '/docs/business/intro',
    color: '#EA580C',
  },
];

function AreaCard({emoji, title, subtitle, description, link, color}: AreaItem) {
  return (
    <div className={clsx('col col--4', styles.areaCard)}>
      <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
        <div className={styles.cardInner} style={{borderTopColor: color}}>
          <div className={styles.cardEmoji}>{emoji}</div>
          <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
          <p className={styles.cardSubtitle} style={{color}}>{subtitle}</p>
          <p className={styles.cardDesc}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🤖 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/infrastructure/intro">
            프레임워크 시작하기 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="AI 기술관리 프레임워크 — 5개 영역으로 체계화하기">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={styles.sectionTitle}>
              <Heading as="h2">5개 영역 프레임워크</Heading>
              <p>AI 기술을 가치 창출이라는 하나의 흐름 속에서 체계적으로 관리합니다</p>
            </div>
            <div className="row">
              {areas.map((area, idx) => (
                <AreaCard key={idx} {...area} />
              ))}
            </div>
            <div className={styles.valueChain}>
              <Heading as="h2">가치 사슬 (Value Chain)</Heading>
              <div className={styles.chainRow}>
                <div className={clsx(styles.chainItem, styles.foundation)}>
                  <span>🏗 인프라</span>
                  <small>Foundation</small>
                </div>
                <div className={styles.chainArrow}>→</div>
                <div className={clsx(styles.chainItem, styles.engine)}>
                  <span>⚙️ 오케스트레이션</span>
                  <small>Engine</small>
                </div>
                <div className={styles.chainArrow}>→</div>
                <div className={clsx(styles.chainItem, styles.value)}>
                  <span>🤝 인터페이스</span>
                  <small>Interface</small>
                </div>
                <div className={styles.chainArrow}>→</div>
                <div className={clsx(styles.chainItem, styles.value)}>
                  <span>📊 비즈니스 임팩트</span>
                  <small>Value</small>
                </div>
              </div>
              <div className={styles.controlLayer}>
                <div className={clsx(styles.chainItem, styles.control)}>
                  <span>🛡 거버넌스</span>
                  <small>전 영역 통제 (Trust & Control)</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
