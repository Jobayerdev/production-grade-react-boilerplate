import { CoreAxiosInstance } from "@shared/config/axios/core-axios-instantance"
import { IBaseFilter } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"

interface IBaseServiceMethods {
	filter: (option: IBaseFilter) => Promise<any>
	getById: (id: string) => Promise<any>
	create: (payload: any) => Promise<any>
	update: (id: string, payload: any) => Promise<any>
	delete: (id: string) => Promise<any>
}

export const baseService = (endPoint: string): IBaseServiceMethods => {
	return {
		filter(options: IBaseFilter) {
			return CoreAxiosInstance.get(`${endPoint}?${concatFilterQuery(options)}`)
		},
		getById(id: string) {
			return CoreAxiosInstance.get(endPoint + id)
		},

		create(payload: any) {
			return CoreAxiosInstance.post(endPoint, payload)
		},

		update(id: string, payload: any) {
			return CoreAxiosInstance.put(endPoint + id, payload)
		},
		delete(id: string) {
			return CoreAxiosInstance.delete(endPoint + id)
		},
	}
}
