import { BrandService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SingleBrandType = {
    id: string,
    config?: QueryConfig<typeof BrandService.filterOne >
}


export const useSingleBrand = ({ id, config }: SingleBrandType) => {
	
	return useQuery({
		...config,
		queryFn: () => BrandService.filterOne(id),
	})
}