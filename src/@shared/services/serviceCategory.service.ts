import { IFCreateServiceCategory, IFUpdateServiceCategory, IServiceCategoryFilter } from "@shared/interfaces"

import { CoreAxiosInstance } from "./../config/axios/core-axios-instantance"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/serviceCategories/"

export const ServiceCategoryService = {
	create(payload: IFCreateServiceCategory) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IServiceCategoryFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}?relations=['images']`)
	},
	update(payload: IFUpdateServiceCategory) {
		const { id, name, slug, description, images, specification } = payload
		return CoreAxiosInstance.put(`${END_POINT}${id}`, { name, description, slug, images, specification })
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
