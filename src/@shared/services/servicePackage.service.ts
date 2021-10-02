import { IBaseFilter, ICreateServicePackage, IUpdateServicePackage } from "@shared/interfaces"

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/service-packages/"

export const ServicePackageService = {
	create(payload: ICreateServicePackage) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdateServicePackage) {
		const { id } = payload
        delete payload.id;
		return CoreAxiosInstance.put(`${END_POINT}${id}`,  payload)
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
