import { ApiServices } from './../../../services/api.service';
import { message } from 'antd';
import { storage } from '../../../utils';
import { useMutation } from 'react-query';
export const useAuth = () => {
	const loginFn = useMutation(ApiServices.signIn, {
		onSuccess: (data: any) => {
			if (!data?.data?.payload?.token) {
				message.error('Login failed');
				return;
			}
			message.success('Login success');
			storage.setToken(data?.data?.payload?.token);
			window.location.assign(window.location.origin as unknown as string);
		},
	});
	const logoutFn = () => {
		storage.clear();
		window.location.assign(window.location.origin as unknown as string);
	};
	const registerFn = useMutation(ApiServices.signUp, {
		onSuccess: (data: any) => {
			if (!data?.data?.payload?.token) {
				message.error('Register failed');
				return;
			}
			message.success('Register success');
			storage.setToken(data?.data?.payload?.token);
			window.location.assign(window.location.origin as unknown as string);
		},
	});
	const loadUserFn = () => {};
	// const isAuthenticated = storage.getToken() ? true : false
	const isAuthenticated = storage.getToken() ? true : false;
	return {
		loginFn,
		logoutFn,
		loadUserFn,
		isAuthenticated,
		registerFn,
	};
};
