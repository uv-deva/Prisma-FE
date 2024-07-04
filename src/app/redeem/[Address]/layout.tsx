import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Prism | Redeem',
  description: 'Redeem',
}

export interface RedeemProps {
  children: React.ReactNode
}

const RedeemLayout: React.FC<RedeemProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default RedeemLayout
