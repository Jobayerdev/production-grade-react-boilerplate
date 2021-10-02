import { DepartmentService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type DepartmentsType = {
	options: IBaseFilter
	config?: QueryConfig<typeof DepartmentService.filter>
}

export const useAllDepartment = ({ options, config }: DepartmentsType) => {
	
	return useQuery({
		...config,
		queryKey: ["DepartmentList", options],
		queryFn: () => DepartmentService.filter(options),
	})
}