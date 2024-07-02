interface PoolData {
    name: string;
    type: string;
    tvl: string;
    unboostedApr: string;
    boostedApr: string;
    deposits: string;
    earned: string;
    icon: string;
    
  }
  
  export interface PoolTableProps {
    data: PoolData[];
    searchTerm: string;
    hideSmallPools: boolean;
    activeTab: string;
  }
  