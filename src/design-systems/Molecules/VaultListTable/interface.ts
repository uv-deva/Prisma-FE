export interface VaultListDataProps {
    owner: string;
    position: number;
    CollateralValue: string;
    debt: string;
    collateralRatio: string;
    liqPrice: string;

  }


  export interface ColumnData {
    title: string;
  }
  

  export interface VaultListTableProps {
    data: VaultListDataProps[]
    columns : ColumnData[]
    isPagination ?: boolean
  }

 