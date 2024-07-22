import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Prism | Vault List',
  description: 'Vault List',
}

export interface VaultListProps {
  children: React.ReactNode
}

const VaultListLayout: React.FC<VaultListProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default VaultListLayout
