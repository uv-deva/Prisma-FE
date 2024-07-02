 interface PoolData {
    name: string;
    tvl: string;
    unboostedApr: string;
    boostedApr: string;
    deposits: string;
    earned: string;
    icon: string;
  }


  export interface StabilityTableProps {
    data: PoolData[];
  }