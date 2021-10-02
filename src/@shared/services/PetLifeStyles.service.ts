import {
	IBaseFilter,
	ICreatePetLifeStyles,
	IUpdatePetLifeStyles,
} from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/petLifeStyles/"

export const PetLifeStylesService = {
	create(payload: ICreatePetLifeStyles) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdatePetLifeStyles) {
		const { id, name } = payload
		return CoreAxiosInstance.put(`${END_POINT}${id}`, { name })
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
