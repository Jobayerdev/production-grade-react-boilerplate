import * as qs from 'qs';

import {
	ICreateUser,
	ISignInRequest,
	ISignUpRequest,
	IStatusUpdateRequest,
} from '../interfaces/request.interfaces';

import { CoreAxiosInstance } from '../config/index';
import { IFilterUsersRequest } from './../interfaces/request.interfaces';

export const ApiServices = {
	signIn: async (data: ISignInRequest) => {
		return await CoreAxiosInstance.post('/auth/login/admin', data);
	},
	signUp: async (data: ISignUpRequest) => {
		return await CoreAxiosInstance.post('/auth/register/admin', data);
	},
	userById: async (id: string) => {
		return await CoreAxiosInstance.get(`/users/${id}`);
	},
	filerUsers: async (options: IFilterUsersRequest) => {
		return await CoreAxiosInstance.get(`/users?${qs.stringify(options)}`);
	},
	updateUserStatus: async (id: string, data: IStatusUpdateRequest) => {
		return await CoreAxiosInstance.put(`/users/status/${id}`, data);
	},
	createUser: async (data: ICreateUser) => {
		return await CoreAxiosInstance.post(`/users`, data);
	},
};
