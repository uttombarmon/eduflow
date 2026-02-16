import { Pagination } from "./Course";

export interface ApiResponse<T> {
  status: string;
  success?: boolean;
  message?: string;
  token?: string;
  data?: T;
  pagination?: Pagination;
}
