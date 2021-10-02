import {
	IBaseFilter,
	ICreatePetProfile,
	IUpdatePetProfile,
} from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/pets/"

export const PetProfilesService = {
	create(payload: ICreatePetProfile) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterSingle(id: string, options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}${id}?${concatFilterQuery(options)}`)
	},
	update(payload: IUpdatePetProfile) {
		const { id } = payload;
		delete payload.id;
		
		return CoreAxiosInstance.put(`${END_POINT}${id}`, payload)
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
