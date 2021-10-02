export interface IBaseFilter {
  searchTerm?: string;
  name?: string;
  page?: number;
  take?: number;
  between?: string;
  before?: string;
  after?: string;
  fetchAll?: string | boolean;
  single?: boolean;
  selects?: string[];
  relations?: string[];
  order?: ['name' | 'createdAt', 'ASC' | 'DSC'];
}

export interface IBaseResponse {
  message?: string;
  payload?: any;
  success?: boolean;
}
export interface IBaseFilterPayload {
  data: any[];
  page?: number;
  take?: number;
  total?: number;
}
export interface IOption {
  label: string;
  value: string;
}
