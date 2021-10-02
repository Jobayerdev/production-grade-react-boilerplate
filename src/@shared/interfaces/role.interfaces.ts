export interface IRole {
	id: string
	title: string
	isActive: boolean
}

export interface ICreateRole {
	title: string
}

export interface IUpdateRole {
	id: string
	title: string
}
