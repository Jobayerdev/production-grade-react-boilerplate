export interface IServicePackage {
  id: string
  name: string
  duration: number | string
  price: number | string
  isActive: boolean
}

export interface ICreateServicePackage {
  name: string
  duration: number | string
  price: number | string
  isActive: boolean
}

export interface IUpdateServicePackage {
  id?: string
  name?: string
  duration?: number | string
  price?: number | string
  isActive?: boolean
}
