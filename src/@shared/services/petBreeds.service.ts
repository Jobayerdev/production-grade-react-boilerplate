import {
  ICreatePetBreeds,
  IUpdatePetBreeds,
} from "@shared/interfaces/petBreeds.interface";

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance";
import { IBaseFilter } from "@shared/interfaces";
import { concatFilterQuery } from "@shared/utils";

const END_POINT: string = "/petBreeds/";

export const PetBreedsService = {
  create(payload: ICreatePetBreeds) {
    return CoreAxiosInstance.post(END_POINT, payload);
  },
  filter(options: IBaseFilter) {
    return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`);
  },
  filterSingle(payload: string) {
    return CoreAxiosInstance.get(`${END_POINT}${payload}`);
  },
  update(payload: IUpdatePetBreeds) {
    const { id, name } = payload;
    return CoreAxiosInstance.put(`${END_POINT}${id}`, { name });
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}${id}`);
  },
};
