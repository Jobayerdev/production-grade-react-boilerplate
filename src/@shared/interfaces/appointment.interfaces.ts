import { IBaseFilter } from '@shared/interfaces';

export interface IBaseAppointmentFilter extends IBaseFilter {
   code?: string
   user?: string
}


export interface IAppointment {
    id: string
	isActive: boolean
    code: string
    frequency: string
    scheduleAt: string
    paymentStatus: string
    appointmentStatus: string
    service: string
    servicePackage: string
    pet: string
    user: string
}

export interface ICreateAppointment {
    frequency: string
    scheduleAt: string
    service: string
    servicePackage: string
    pet: string
    user: string
}