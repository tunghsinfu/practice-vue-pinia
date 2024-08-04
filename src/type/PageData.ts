export interface PageData {
  records: number;
  pageSize: number;
  page: number;
  rows: Array<any> | null;
  total?: number;
  previousPage?: number;
  firstPage?: number;
  lastPage?: number;
  nextPage?: number;
}
