
export interface IPermissions {
	id: string
	title: string
	permissionType: string
	isActive: boolean
}

export interface ICreatePermissions {
	title: string
}

export interface IUpdatePermissions {
	id: string
	title: string	
}
