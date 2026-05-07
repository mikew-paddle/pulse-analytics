'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Ports legacy `script.js` behavior: scroll reveals, hero rotation, stat counters,
 * chart bars, currency toggle (pricing), mobile menu, nav border on scroll.
 *
 * Re-runs when the route changes: `.animate-on-scroll` starts at opacity 0 until
 * observed, so a one-shot effect in the root layout leaves client-navigated pages invisible.
 */
export function PulseShellEffects() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))

    const texts = document.querySelectorAll('.rotating-text')
    let rotateTimer: ReturnType<typeof setInterval> | undefined
    if (texts.length > 1) {
      let current = 0
      rotateTimer = setInterval(() => {
        texts[current].classList.remove('active')
        current = (current + 1) % texts.length
        texts[current].classList.add('active')
      }, 2500)
    }

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          statObserver.unobserve(el)

          const target = parseFloat(el.dataset.target ?? '0')
          const suffix = el.dataset.suffix ?? ''
          const prefix = el.dataset.prefix ?? ''
          const format = el.dataset.format ?? ''
          const duration = 1800
          const start = performance.now()

          function formatValue(val: number) {
            if (format === 'abbr') {
              if (val >= 1e9) return (val / 1e9).toFixed(1) + 'B'
              if (val >= 1e6) return (val / 1e6).toFixed(1) + 'M'
              if (val >= 1e3) return (val / 1e3).toFixed(0) + 'K'
              return Math.round(val).toString()
            }
            if (format === 'decimal') return val.toFixed(2)
            return Math.round(val).toString()
          }

          function tick(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            const current = target * ease
            el.textContent = prefix + formatValue(current) + suffix
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll('.stat-value[data-target]').forEach((el) => statObserver.observe(el))

    const chartObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          chartObserver.unobserve(entry.target)
          const bars = entry.target.querySelectorAll('.chart-bar')
          bars.forEach((bar, i) => {
            const h = (bar as HTMLElement).style.getPropertyValue('--height')
            ;(bar as HTMLElement).style.height = '0%'
            setTimeout(() => {
              ;(bar as HTMLElement).style.height = h
            }, i * 60)
          })
        })
      },
      { threshold: 0.3 },
    )

    const chartBars = document.querySelector('.chart-bars')
    if (chartBars) chartObserver.observe(chartBars)

    const currencyBtns = document.querySelectorAll('.currency-toggle button')
    const symbols: Record<string, string> = { usd: '$', gbp: '\u00a3', eur: '\u20ac' }
    const currencyHandlers: Array<() => void> = []

    currencyBtns.forEach((btn) => {
      const handler = () => {
        currencyBtns.forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        const currency = (btn as HTMLElement).dataset.currency
        if (!currency) return

        document.querySelectorAll('.price-symbol').forEach((el) => {
          el.textContent = symbols[currency]
        })

        document.querySelectorAll(`.price-amount[data-${currency}]`).forEach((el) => {
          const val = (el as HTMLElement).dataset[currency]
          if (val !== undefined) el.textContent = val
        })
      }
      btn.addEventListener('click', handler)
      currencyHandlers.push(() => btn.removeEventListener('click', handler))
    })

    const menuBtn = document.querySelector('.mobile-menu-btn')
    const mobileNav = document.querySelector('.mobile-nav')
    const linkCleanups: Array<() => void> = []

    if (menuBtn && mobileNav) {
      const toggle = () => {
        menuBtn.classList.toggle('open')
        mobileNav.classList.toggle('open')
      }
      menuBtn.addEventListener('click', toggle)
      mobileNav.querySelectorAll('a').forEach((link) => {
        const close = () => {
          menuBtn.classList.remove('open')
          mobileNav.classList.remove('open')
        }
        link.addEventListener('click', close)
        linkCleanups.push(() => link.removeEventListener('click', close))
      })
      linkCleanups.push(() => menuBtn.removeEventListener('click', toggle))
    }

    const nav = document.querySelector('.nav') as HTMLElement | null
    let onScroll: (() => void) | undefined
    if (nav) {
      onScroll = () => {
        nav.style.borderBottomColor = window.scrollY > 10 ? 'var(--border-light)' : 'var(--border)'
      }
      window.addEventListener('scroll', onScroll, { passive: true })
    }

    return () => {
      observer.disconnect()
      statObserver.disconnect()
      chartObserver.disconnect()
      if (rotateTimer) clearInterval(rotateTimer)
      currencyHandlers.forEach((fn) => fn())
      linkCleanups.forEach((fn) => fn())
      if (nav && onScroll) window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return null
}
