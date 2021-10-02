import {
  ICreateService,
  IServiceFilter,
  IUpdateService,
} from "@shared/interfaces";

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/services/";

export const ServicesService = {
  create(payload: ICreateService) {
    return CoreAxiosInstance.post(END_POINT, payload);
  },
  filter(options: IServiceFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`);
  },
  filterSingle(id: string, options: IServiceFilter) {
    return CoreAxiosInstance.get(`${END_POINT}${id}?${concatFilterQuery(options)}`);
  },
  update(payload: IUpdateService) {
    const { id } = payload;
    delete payload.id;
    return CoreAxiosInstance.put(`${END_POINT}${id}`, payload);
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}${id}`);
  },
  packageAssign(payload: any) {
    const { id, servicePackage } = payload;
    return CoreAxiosInstance.post(`${END_POINT}packageAssign/${id}`, {
      servicePackage,
    });
  },
  packageUnAssign(payload: any) {
    const { id, servicePackage } = payload;
    return CoreAxiosInstance.post(`${END_POINT}packageUnAssign/${id}`, {
      servicePackage,
    });
  },
  packageList(payload: string) {
    return CoreAxiosInstance.get(`${END_POINT}packages/${payload}`);
  },
};
