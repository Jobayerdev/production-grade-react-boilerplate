import { IBaseFilter } from "./base.interfaces";

export interface IService {
    id: string;
    isActive: boolean;
    name: string;
    descriptions: string;
    images: string;
    category: string;
}

export interface IServiceFilter extends IBaseFilter {
    relations?: ['category'];
  }


export interface IUpdateService {
	id?: string
    isActive: boolean;
    name: string;
    descriptions: string;
    images: string;
    category: string;
}

export interface ICreateService {
    isActive: boolean;
    name: string;
    descriptions: string;
    images: string;
    category: string;
}
