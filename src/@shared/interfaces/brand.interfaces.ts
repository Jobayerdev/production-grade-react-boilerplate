
export interface IBrand {
	id: string
	name: string
	slug: string
	image: string
	isActive: boolean
	isFeatured: boolean
}

export interface ICreateBrand {
	name: string
	slug: string
	image: string
	isActive: boolean
	isFeatured: boolean
}

export interface IUpdateBrand {
	id?: string
	name: string
	slug: string
	image: string
	isActive: boolean
	isFeatured: boolean
}
