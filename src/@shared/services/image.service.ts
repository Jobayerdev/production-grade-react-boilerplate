import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance";
import { IUpdateImage } from "@shared/interfaces";

const END_POINT: string = "/images/";

export const ImageService = {
  uploadImage(payload: any) {
		return CoreAxiosInstance.post(`${END_POINT}upload`, payload, {
			headers: { "Content-Type": "multipart/form-data" },
		})
	},
  update(payload: IUpdateImage) {
    const { id } = payload;
    return CoreAxiosInstance.put(`${END_POINT}images/${id}`, payload, {
			headers: { "Content-Type": "multipart/form-data" },
		})
  },
  delete(id: string) {
    return CoreAxiosInstance.delete(`${END_POINT}${id}`);
  },
};
