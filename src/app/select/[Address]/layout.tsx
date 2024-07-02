import { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Prism | Select',
  description: 'Select',
}

export interface SelectProps {
  children: React.ReactNode
}

const SelectLayout: React.FC<SelectProps> = ({ children }) => {
  return <Suspense fallback="Loading...">{children}</Suspense>
}

export default SelectLayout
