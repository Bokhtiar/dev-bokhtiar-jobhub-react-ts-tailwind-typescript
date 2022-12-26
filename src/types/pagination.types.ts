export type PaginationParamsTypes = {
  page: number;
  limit: number;
};

export interface PaginationResponseTypes {
  total_items: number;
  limit: number;
  current_page: number;
  total_page: number;
  prev_page: number | null;
  next_page: number | null;
}
