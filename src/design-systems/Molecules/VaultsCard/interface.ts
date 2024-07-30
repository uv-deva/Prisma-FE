export type VaultType = 'wstETH' | 'rETH' | 'cbETH' | 'sfrxETH' | 'ETHx' | 'weETH' | 'ezETH' | 'rsETH';

export interface VaultsCardProps {
    type? : VaultType
    className?: string
    name? : string
    description? : string
    icon : string
    cardType : string
    prismLRTDesc? : string
    address?: string
}