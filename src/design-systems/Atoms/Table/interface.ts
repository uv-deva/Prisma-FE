export interface PoolData {
    name: string;
    tvl: string;
    unboostedApr: string;
    boostedApr: string;
    deposits: string;
    earned: string;
    icon: string;
    poolAddress?:string;
  }


  interface RedeemData {
    owner: string;
    cr: string;
    dept: string;
    newDept: string;
  
  }




  export interface ColumnData {
    title: string;
  }
  

  export interface TableProps {
    data: PoolData[]
    columns : ColumnData[]
    isPagination ?: boolean
  }

 