import Link from 'next/link'

const LOGO_GRAD_ID = 'footer-logo-gradient'

function FooterLogo() {
  return (
    <Link href="/" className="nav-logo">
      <div className="logo-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 12h4l3-8 4 16 3-8h4"
            stroke={`url(#${LOGO_GRAD_ID})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id={LOGO_GRAD_ID} x1="4" y1="12" x2="22" y2="12">
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span>Pulse</span>
    </Link>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <FooterLogo />
            <p>Product analytics that gives you clarity, not complexity.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link href="/#features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">Changelog</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link href="#" className="docs-link">
              Documentation
            </Link>
            <Link href="#">API Reference</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Community</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="#">About</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Privacy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pulse Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
