"use client"
import SelectVaultTemplate from '@/design-systems/Templates/SelectVaultTemplate'
import { useParams } from 'next/navigation'




const SelectVaultPage: React.FC = () => {
    const { Address } = useParams()

  return (
    <>
    <SelectVaultTemplate />
    </>
  )
}

export default SelectVaultPage
