import {
	IBaseFilter,
	ICreateBrand,
	IUpdateBrand,
} from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/brands/"

export const BrandService = {
	create(payload: ICreateBrand) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterOne(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdateBrand) {
		const { id } = payload;
		delete payload.id;
		return CoreAxiosInstance.put(`${END_POINT}${id}`, payload)
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
