export interface IUser {
	id: string
	isActive: boolean
	phoneNumber: string
	name: string
	type: string
	email: string
	gender?: null
	address?: null
	image?: null
}
export interface IUpdateUser {
	id: string
	name?: string
	email?: string
	phoneNumber?: string
	type?: string
	gender?: string
	address?: string
}

export interface ICreateUser {
	name: string
	email: string
	phoneNumber: string
	password: string
	gender: string
	address: string
	type: string
}
