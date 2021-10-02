import { AppointmentService } from '@shared/services';
import { IBaseAppointmentFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"

type IProps = {
    options?: IBaseAppointmentFilter
    config?: QueryConfig<typeof AppointmentService.filter>
}
export const useAppointments = ({ options = {}, config = {} }: IProps) => {
    return useQuery({
        ...config,
        queryKey: ["appointments", options],
        queryFn: () => AppointmentService.filter(options),
    })
}
