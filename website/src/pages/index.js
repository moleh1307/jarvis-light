import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

const features = [
  ['Markdown memory', 'Project state, decisions, sessions, handoffs, preferences, and learning stay readable in files.'],
  ['Light to Specialist', 'Small tasks stay light. Serious work can add roles, task boards, review gates, and work orders.'],
  ['Governed improvement', 'JARVIS OS can learn from repeated friction without silently rewriting the rules from one-off events.'],
];

export default function Home() {
  const banner = useBaseUrl('/img/jarvisos-banner.png');

  return (
    <Layout
      title="Local-first continuity for Codex"
      description="JARVIS OS is a local-first markdown operating system for Codex continuity."
    >
      <main>
        <section className="heroJarvis">
          <div className="container heroGrid">
            <div>
              <div className="heroKicker">Local-first agent continuity</div>
              <h1 className="heroTitle">JARVIS OS</h1>
              <p className="heroLead">
                Make Codex feel less like a fresh chat and more like an organized teammate.
                JARVIS OS keeps memory, handoffs, tasks, roles, artifacts, and self-improvement
                in markdown you can inspect.
              </p>
              <div className="heroActions">
                <Link className="button button--primary button--lg" to="/docs/intro">
                  Read the docs
                </Link>
                <Link className="button button--secondary button--lg" to="/docs/getting-started/quick-start">
                  Quick start
                </Link>
              </div>
            </div>
            <div className="heroVisual" aria-label="JARVIS OS banner">
              <img src={banner} alt="JARVIS OS banner" />
            </div>
          </div>
        </section>

        <section className="proofStrip">
          <div className="proofItem">
            <strong>Memory files</strong>
            <span>Durable state lives in markdown, not buried in transcripts.</span>
          </div>
          <div className="proofItem">
            <strong>Fresh handoffs</strong>
            <span>Long chats can end without losing the next useful action.</span>
          </div>
          <div className="proofItem">
            <strong>Specialist Mode</strong>
            <span>Serious projects get roles, work orders, QA, and closeout discipline.</span>
          </div>
          <div className="proofItem">
            <strong>Learning loop</strong>
            <span>Improvements are captured, reviewed, promoted, or rejected.</span>
          </div>
        </section>

        <section className="sectionBand">
          <div className="container">
            <h2>Built for real agent work</h2>
            <div className="featureGrid">
              {features.map(([title, body]) => (
                <article className={clsx('featureCard')} key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
