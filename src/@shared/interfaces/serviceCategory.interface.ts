import { IBaseFilter } from "./base.interfaces";

export interface IFServiceCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  images?: string[];
  specification: string;
}

export interface IServiceCategoryFilter extends IBaseFilter {
  relations?: ["images", "service"];
}

export interface IFCreateServiceCategory {
  name: string;
  description: string;
  slug: string;
  images?: string[] | null;
  specification: string;
}
export interface IFUpdateServiceCategory {
  id?: string;
  name: string;
  description: string;
  slug: string;
  images?: string[] | null;
  specification: string;
}
