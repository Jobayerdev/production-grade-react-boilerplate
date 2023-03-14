export interface ISignInRequest {
	email: string;
	password: string;
}
export interface ISignUpRequest {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface IBaseFilter {
	page?: number;
	take?: number;
	searchTerm?: string;
	isActive?: boolean | null;
}

export interface IFilterUsersRequest extends IBaseFilter {
	type?: 'ADMIN' | 'INDIVIDUAL' | '';
}
export interface IStatusUpdateRequest {
	isActive: boolean;
}
export interface ICreateUser {
	email: string;
	password: string;
	type: string;
	firstName: string;
	lastName: string;
	phone: string;
	nid: string;
	selfie: string;
	nidFront: string;
	nidBack: string;
	driveLicenseFront: string;
	driveLicenseBack: string;
}
