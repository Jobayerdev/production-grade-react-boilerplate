import { IFCreatePetType, IFUpdatePetType } from "@shared/interfaces/petType.interface";

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance";
import { IBaseFilter } from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/petTypes/";

export const PetTypeService = {
  create(payload: IFCreatePetType) {
    return CoreAxiosInstance.post(END_POINT, payload);
  },
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`);
  },
  filterSingle(payload: string) {
    return CoreAxiosInstance.get(`${END_POINT}${payload}`);
  },
  update(payload: IFUpdatePetType) {
    const { id, name } = payload;
    return CoreAxiosInstance.put(`${END_POINT}${id}`, { name });
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}${id}`);
  },
};
