import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Reward page',
  description: 'Reward Data',
}

export interface RewardProps {
  children: React.ReactNode
}

const RewardLayout: React.FC<RewardProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default RewardLayout
