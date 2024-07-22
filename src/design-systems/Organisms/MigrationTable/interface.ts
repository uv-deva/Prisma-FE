
  
  export interface MigrationData {
    Collateral: string
    From_tranche: string
    To_tranche: string
   
  }
  export interface ColumnData {
    title: string;
  }
  
  export interface MigrationTableProps {
    data?: MigrationData[] | undefined;
    columns: ColumnData[];
  }
  