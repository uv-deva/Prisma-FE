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
  data: RedeemData[];
  columns: ColumnData[];
  isPagination?: boolean;
}
