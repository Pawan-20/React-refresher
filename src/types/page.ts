export interface KeyValueDataType {
  [key: string]: string;
}

export interface TableRow {
  column1: string;
  column2: string;
  column3: string;
}

export interface PageDataType {
  pageNumber: number;
  date: string;
  keyValueData: KeyValueDataType;
  tableData: TableRow[];
  description: string;
}
