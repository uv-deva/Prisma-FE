import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Prism | MigrateVault',
  description: 'Redeem',
}

export interface MigrateVaultProps {
  children: React.ReactNode
}

const MigrateVaultLayout: React.FC<MigrateVaultProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default MigrateVaultLayout
