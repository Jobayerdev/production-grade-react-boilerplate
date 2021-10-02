import { DepartmentService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SingleDepartmentType = {
    id: string,
    config?: QueryConfig<typeof DepartmentService.filterOne >
}


export const useSingleDepartment = ({ id, config }: SingleDepartmentType) => {
	
	return useQuery({
		...config,
		queryFn: () => DepartmentService.filterOne(id),
	})
}