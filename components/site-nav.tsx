'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useId } from 'react'

function LogoMark({ gradientId }: { gradientId: string }) {
  return (
    <div className="logo-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 12h4l3-8 4 16 3-8h4"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id={gradientId} x1="4" y1="12" x2="22" y2="12">
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function SiteNav() {
  const pathname = usePathname()
  const id = useId().replace(/:/g, '')
  const grad = `nav-logo-${id}`

  const isHome = pathname === '/'
  const isPricing = pathname === '/pricing'

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <LogoMark gradientId={grad} />
            <span>Pulse</span>
          </Link>
          <div className="nav-links">
            <Link href="/#features" className={isHome ? 'active' : undefined}>
              Features
            </Link>
            <Link href="/pricing" className={isPricing ? 'active' : undefined}>
              Pricing
            </Link>
            <Link href="#" className="docs-link">
              Docs
            </Link>
          </div>
          <div className="nav-actions">
            <Link href="/pricing#pricing-plans" className="btn-primary btn-sm">
              View plans
            </Link>
          </div>
          <button type="button" className="mobile-menu-btn" aria-label="Menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className="mobile-nav">
        <Link href="/#features">Features</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="#" className="docs-link">
          Docs
        </Link>
        <Link href="/pricing#pricing-plans" className="btn-primary btn-sm">
          View plans
        </Link>
      </div>
    </>
  )
}
