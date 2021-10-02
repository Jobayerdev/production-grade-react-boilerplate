import { AppointmentService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useMutation } from "react-query";

type IProps = {
	config?: QueryConfig<typeof AppointmentService.create>
}

export const useCreateAppointment = ({ config={} }: IProps = {}) => {
	return useMutation({
		...config,
		mutationFn: AppointmentService.create,
	})
}