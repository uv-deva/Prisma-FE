import MkIcon from '@/assets/Icons/mkIcon.svg'
import UltraIcon from '@/assets/Icons/ultraIcon.svg'
import { ColumnData } from '@/design-systems/Atoms/Table/interface'

export const poolData = [
    {
      name: 'mkUSD',
      tvl: '$2.67m',
      unboostedApr: '9.86%',
      boostedApr: '19.72%',
      deposits: '0.00',
      earned: '0.00',
      icon: MkIcon,
    },
    {
      name: 'ULTRA',
      tvl: '$479.36k',
      unboostedApr: '19.62%',
      boostedApr: '39.23%',
      deposits: '0.00',
      earned: '0.00',
      icon: UltraIcon,
    },
  ];

export const columnData: ColumnData[] = [
  { title: "" },
  { title: "TVL" },
  { title: "Unboosted APR" },
  { title: "Boosted APR" },
  { title: "Your Deposits" },
  { title: "Earned" },
  { title: "" }
];