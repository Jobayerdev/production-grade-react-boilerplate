export interface IPetProfile {
    id: string
    petFor: string
    images: IPetImages[]
    name: string
    dob: string
    gender: string
    weight: number | string
    primaryColor: string
    secondaryColor: string
    eyeColor: string
    isActive: boolean
    vaccinated: boolean
    spayed: boolean
    injured: boolean
    purebred: boolean
    heat: boolean
    pottyTrained: boolean
    specialDiet: boolean
    hypollergenic: boolean
    activeArea: string
    food: string
    petType: IPetType
    breed: IPetBreeds
    lifeStyle: string
    owner: IPetOwnerInfo
}

export interface IPetOwnerInfo {
    id: string
    name: string
    gender: string
    email: string
    phoneNumber: string
    address: string
    type: string
    isActive: boolean
}

interface IPetImages{
    id: string
    isActive: boolean
    link: string
}

interface IPetType{
    id: string
    name: string
    isActive: boolean
}
interface IPetBreeds{
    id: string
    name: string
    isActive: boolean
}

export interface ICreatePetProfile {
    petFor: string
    images: object[]
    name: string
    dob: string
    gender: string
    weight: number | string
    primaryColor: string
    secondaryColor: string
    eyeColor: string
    vaccinated: boolean
    spayed: boolean
    injured: boolean
    purebred: boolean
    heat: boolean
    pottyTrained: boolean
    specialDiet: boolean
    hypollergenic: boolean
    activeArea: string
    food: string
    petType: string
    breed: string
    lifeStyle: string
    owner: string
}

export interface IUpdatePetProfile {
    id?: string
    petFor: string
    images: object[]
    name: string
    dob: string
    gender: string
    weight: number | string
    primaryColor: string
    secondaryColor: string
    eyeColor: string
    vaccinated: boolean
    spayed: boolean
    injured: boolean
    purebred: boolean
    heat: boolean
    pottyTrained: boolean
    specialDiet: boolean
    hypollergenic: boolean
    activeArea: string
    food?: string
    petType?: string
    breed?: string
    lifeStyle?: string
    owner?: string
}

