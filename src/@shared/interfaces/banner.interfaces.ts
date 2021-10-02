
export interface IBanner {
	id: string
	title: string
	type: string
	image: string
	bannerUrl: string
}

export interface ICreateBanner {
	title: string
	type: string
	image: string
	bannerUrl: string
}

export interface IUpdateBanner {
	id: string
	title: string
	type: string
	image: string
	bannerUrl: string	
}
