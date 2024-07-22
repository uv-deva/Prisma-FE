'use client'
import React, { FC, useEffect, useState } from 'react'
import { getAccount } from '@wagmi/core'
import Tab from '@/design-systems/Atoms/Tabs'
import { explorePageTabs, getNftPrice, getSaleStatus } from '@/utils'
import { useExplore } from '@/hooks/ApiHooks/useExplore'
import { ScrollTrigger } from '@/design-systems/Atoms/ScrollTrigger'
import { SearchResponse } from '@/api-services/interfaces/auth'
import Typography from '@/design-systems/Atoms/Typography'
import FilterDropDown from '@/design-systems/Atoms/DropDown/FiterDropdown'
import { config } from '@/context/wagmiContext/config'
import dynamic from 'next/dynamic'
import RewardCard from './RewardCard'
import BoostCard from './BoostCard'
import EarnedWithMaxBoostCard from './EarnedWithMaxBoostCard'
import VePrismaFeesAccordion from './VePrismaFeesCard'
import Accordion from './VePrismaFeesCard'
// import NftCardSkeleton from '@/design-systems/Molecules/Skeletons/NftCardSkeleton'
// import NftCard from '@/design-systems/Molecules/Cards/NftCard'

const NftCard = dynamic(() => import('@/design-systems/Molecules/Cards/NftCard'), { ssr: false })
const NftCardSkeleton = dynamic(() => import('@/design-systems/Molecules/Skeletons/NftCardSkeleton'), { ssr: false })

const filters = [
  {
    dropdownType: 'network',
    label: 'Network',
    key: 'Network',
    child: [
      { label: 'All', key: 'all' },
      { label: 'Ethereum', key: '1' },
      { label: 'Polygon', key: '2' },
    ],
  },
  {
    dropdownType: 'sort',
    label: 'Sort by',
    key: 'sort',
    child: [
      { label: 'Recently Added', key: 'recently_added' },
      { label: 'Price: Low to high', key: 'price_low_to_high' },
      { label: 'Price: High to low', key: 'price_high_to_low' },
      { label: 'Auction Ending soon', key: 'auction_ending_soon' },
    ],
  },
]

const time = [
  { label: 'All', key: 'all' },
  { label: 'Fixed Price', key: 'fixed-price' },
  { label: 'Time Auction', key: 'auctions' },
]

const ExploreTemplate: FC = () => {
  // const params = useSearchParams()
  // const currentTabName = useMemo(() => params.get('tab') && params.get('tab'), [params])
  const { address } = getAccount(config)

  const [saleType, setSaleType] = useState<string>('all')
  const [sortType, setSortType] = useState<string>('recently_added')
  const [networkType, setNetworkType] = useState<string>('all')
  const sale_only = true

  const {
    ExploreData,
    ExploreIsFetching,
    ExploreIsLoading,
    exploreFetchNextPage,
    exploreHasNextPage,
    exploreIsFetchingNextPage,
  } = useExplore(address, sortType, 21, 1, saleType, networkType, sale_only)

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-center gap-4">
          <RewardCard />
          <BoostCard />
        </div>
        <div className="flex justify-between">
          <EarnedWithMaxBoostCard />
        </div>

        <div className="p-4 ">
          <Accordion />
        </div>
      </div>
    </>
  )
}

export default ExploreTemplate
