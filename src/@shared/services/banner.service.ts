import { IBaseFilter, ICreateBanner, IUpdateBanner } from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/banners/"

export const BannerService = {
	create(payload: ICreateBanner) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterOne(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdateBanner) {
		const { id, title, image, bannerUrl, type } = payload
		return CoreAxiosInstance.put(`${END_POINT}${id}`, { title, image, bannerUrl, type })
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
