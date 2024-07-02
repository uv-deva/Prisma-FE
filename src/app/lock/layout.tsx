import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Lock page',
  description: 'Lock Data',
}

export interface LockProps {
  children: React.ReactNode
}

const LockLayout: React.FC<LockProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default LockLayout
