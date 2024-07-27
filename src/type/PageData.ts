export interface PageData {
  total: number;
  previousPage: number;
  firstPage: number;
  lastPage: number;
  records: number;
  nextPage: number;
  pageSize: number;
  page: number;
  rows: any[] | null;
}
