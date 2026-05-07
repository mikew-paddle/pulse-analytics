import type { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'

export function HomeContent() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-badge animate-on-scroll">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="url(#bolt-grad-home)"
              />
              <defs>
                <linearGradient id="bolt-grad-home" x1="3" y1="2" x2="21" y2="22">
                  <stop stopColor="#06b6d4" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
            Now with AI-powered insights
          </div>
          <h1 className="hero-title animate-on-scroll">
            Understand your users.
            <br />
            <span className="hero-rotating">
              <span className="rotating-text active">Ship smarter.</span>
              <span className="rotating-text">Grow faster.</span>
              <span className="rotating-text">Build better.</span>
            </span>
          </h1>
          <p className="hero-desc animate-on-scroll">
            Pulse is the product analytics platform that turns raw events into actionable insights — so you can build
            what matters.
          </p>
          <div className="hero-ctas animate-on-scroll">
            <Link href="/pricing#pricing-plans" className="btn-primary">
              View plans <span className="arrow">&rarr;</span>
            </Link>
            <Link href="/#features" className="btn-outline">
              Explore features
            </Link>
          </div>
        </div>
      </section>

      <section className="dashboard-preview">
        <div className="container">
          <div className="dashboard-window animate-on-scroll">
            <div className="window-bar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="window-url">dashboard.pulse.dev</span>
            </div>
            <div className="dashboard-content">
              <div className="dash-stats">
                <div className="dash-stat">
                  <span className="dash-stat-label">Active Users</span>
                  <span className="dash-stat-value">24,521</span>
                  <span className="dash-stat-change positive">+12.3%</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-label">Events Today</span>
                  <span className="dash-stat-value">1.2M</span>
                  <span className="dash-stat-change positive">+8.7%</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-label">Conversion</span>
                  <span className="dash-stat-value">3.42%</span>
                  <span className="dash-stat-change positive">+0.8%</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-label">Avg. Session</span>
                  <span className="dash-stat-value">4m 32s</span>
                  <span className="dash-stat-change negative">-2.1%</span>
                </div>
              </div>
              <div className="dash-chart">
                <div className="chart-bars">
                  <div className="chart-bar" style={{ '--height': '45%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '60%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '35%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '75%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '55%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '80%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '65%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '90%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '70%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '85%' } as CSSProperties} />
                  <div className="chart-bar" style={{ '--height': '95%' } as CSSProperties} />
                  <div className="chart-bar highlight" style={{ '--height': '100%' } as CSSProperties} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat animate-on-scroll">
              <span className="stat-value" data-target="2400000000" data-suffix="+" data-format="abbr">
                0
              </span>
              <span className="stat-label">Events tracked daily</span>
            </div>
            <div className="stat animate-on-scroll">
              <span className="stat-value" data-target="12000" data-suffix="+" data-format="abbr">
                0
              </span>
              <span className="stat-label">Companies trust Pulse</span>
            </div>
            <div className="stat animate-on-scroll">
              <span className="stat-value" data-target="99.99" data-suffix="%" data-format="decimal">
                0
              </span>
              <span className="stat-label">Uptime SLA</span>
            </div>
            <div className="stat animate-on-scroll">
              <span className="stat-value" data-target="50" data-prefix="<" data-suffix="ms">
                0
              </span>
              <span className="stat-label">Query response time</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Everything you need to understand your product</h2>
          <p className="section-desc animate-on-scroll">
            From event tracking to AI insights, Pulse gives you the full picture without the learning curve.
          </p>
          <div className="features-grid">
            <FeatureCard
              title="Event Tracking"
              body="Auto-capture clicks, page views, and custom events with a single script tag."
              icon={
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              }
            />
            <FeatureCard
              title="Real-time Dashboards"
              body="See your data update live. Build custom charts and pin them to shared boards."
              icon={
                <>
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </>
              }
            />
            <FeatureCard
              title="User Segmentation"
              body="Slice your audience by behavior, properties, or cohorts for targeted analysis."
              icon={
                <>
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                  <path d="M21 21v-2a4 4 0 00-3-3.87" />
                </>
              }
            />
            <FeatureCard
              title="Funnel Analysis"
              body="Track conversion through every step. Identify where users drop off."
              icon={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />}
            />
            <FeatureCard
              title="Instant Insights"
              body="AI-powered anomaly detection alerts you to important changes automatically."
              icon={
                <>
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </>
              }
            />
            <FeatureCard
              title="Privacy First"
              body="GDPR & CCPA compliant. Your data stays yours with full encryption at rest."
              icon={
                <>
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>Ready to see what your data is telling you?</h2>
            <p>Start with 10,000 free events per month. No credit card required.</p>
            <Link href="/pricing#pricing-plans" className="btn-primary">
              View plans <span className="arrow">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon: ReactNode
}) {
  return (
    <div className="feature-card animate-on-scroll">
      <div className="feature-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {icon}
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}
