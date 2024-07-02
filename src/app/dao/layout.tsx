import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Prism | DAO',
  description: 'DAO',
}

export interface DaoProps {
  children: React.ReactNode
}

const DaoLayout: React.FC<DaoProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default DaoLayout
