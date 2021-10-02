export interface IPetBreeds {
  id: string
  name: string
  isActive: boolean
}

export interface ICreatePetBreeds {
  name: string
}

export interface IUpdatePetBreeds {
  id?: string
  name: string
}
