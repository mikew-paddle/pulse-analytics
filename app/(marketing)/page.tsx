import type { Metadata } from 'next'

import { HomeContent } from '@/components/home/home-content'

export const metadata: Metadata = {
  title: 'Understand your users',
}

export default function HomePage() {
  return <HomeContent />
}
