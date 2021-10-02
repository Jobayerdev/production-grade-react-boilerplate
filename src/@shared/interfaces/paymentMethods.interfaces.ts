
export interface IPaymentMethods {
	id: string
	name: string
	isActive: boolean
}

export interface ICreatePaymentMethods {
	name: string
}

export interface IUpdatePaymentMethods {
	id: string
	name: string	
}
