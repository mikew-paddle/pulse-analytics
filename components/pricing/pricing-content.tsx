import Link from 'next/link'

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" aria-hidden>
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PricingContent() {
  return (
    <main>
      <section className="pricing-hero">
        <div className="container">
          <h1 className="animate-on-scroll">Simple, transparent pricing</h1>
          <p className="animate-on-scroll">Start free and scale as you grow. No surprises.</p>
          <div className="currency-toggle animate-on-scroll">
            <button type="button" data-currency="usd">
              $ US
            </button>
            <button type="button" data-currency="gbp" className="active">
              £ UK
            </button>
            <button type="button" data-currency="eur">
              € EU
            </button>
          </div>
        </div>
      </section>

      <section id="pricing-plans" className="pricing-cards">
        <div className="container">
          <div className="pricing-grid">
            <div id="plan-free" className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>Free</h3>
                <div className="price">
                  <span className="price-symbol">£</span>
                  <span className="price-amount" data-usd="0" data-gbp="0" data-eur="0">
                    0
                  </span>
                  <span className="price-period">forever</span>
                </div>
                <p className="pricing-desc">For side projects and exploration.</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <Check /> 10,000 events/month
                </li>
                <li>
                  <Check /> 1 project
                </li>
                <li>
                  <Check /> 7-day data retention
                </li>
                <li>
                  <Check /> Core analytics
                </li>
                <li>
                  <Check /> Community support
                </li>
              </ul>
              <Link href="#plan-free" className="btn-outline pricing-btn">
                Get Started <span className="arrow">&rarr;</span>
              </Link>
            </div>

            <div id="plan-growth" className="pricing-card popular animate-on-scroll">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-card-header">
                <h3>Growth</h3>
                <div className="price">
                  <span className="price-symbol">£</span>
                  <span className="price-amount" data-usd="49" data-gbp="39" data-eur="45">
                    39
                  </span>
                  <span className="price-period">/month</span>
                </div>
                <p className="pricing-desc">For teams shipping products fast.</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <Check /> 1M events/month
                </li>
                <li>
                  <Check /> 10 projects
                </li>
                <li>
                  <Check /> 12-month retention
                </li>
                <li>
                  <Check /> Funnels & cohorts
                </li>
                <li>
                  <Check /> AI insights
                </li>
                <li>
                  <Check /> Team collaboration
                </li>
                <li>
                  <Check /> Priority support
                </li>
                <li>
                  <Check /> 14-day free trial
                </li>
              </ul>
              <Link href="#plan-growth" className="btn-primary pricing-btn">
                Choose Growth <span className="arrow">&rarr;</span>
              </Link>
            </div>

            <div id="plan-enterprise" className="pricing-card animate-on-scroll">
              <div className="pricing-card-header">
                <h3>Enterprise</h3>
                <div className="price">
                  <span className="price-amount custom">Custom</span>
                </div>
                <p className="pricing-desc">For organizations at scale.</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <Check /> Unlimited events
                </li>
                <li>
                  <Check /> Unlimited projects
                </li>
                <li>
                  <Check /> Unlimited retention
                </li>
                <li>
                  <Check /> Advanced security (SSO, SCIM)
                </li>
                <li>
                  <Check /> Dedicated CSM
                </li>
                <li>
                  <Check /> SLA guarantee
                </li>
                <li>
                  <Check /> Custom integrations
                </li>
              </ul>
              <Link href="#" className="btn-outline pricing-btn">
                Contact Sales <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
