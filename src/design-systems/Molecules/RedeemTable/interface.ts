interface PoolData {
  name: string;
  tvl: string;
  unboostedApr: string;
  boostedApr: string;
  deposits: string;
  earned: string;
  icon: string;
  poolAddress?: string;
}

export interface RedeemData {
  owner: string;
  cr: string;
  dept: string;
  newDept: string;
  id: number;
}

export interface ColumnData {
  title: string;
}

export interface RedeemTableProps {
  data: RedeemData[];
  columns: ColumnData[];
  isPagination?: boolean;
}
