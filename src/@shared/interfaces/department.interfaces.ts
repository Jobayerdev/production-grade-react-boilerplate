
export interface IDepartment {
	id: string
	name: string
	slug: string
    image: string
	isActive: boolean
}

export interface ICreateDepartment {
	name: string
	slug: string
    image: string
}

export interface IUpdateDepartment {
	id?: string
	name: string
	slug: string
    image: string
}
