import { BrandService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type BrandsType = {
	options: IBaseFilter
	config?: QueryConfig<typeof BrandService.filter>
}

export const useAllBrand = ({ options, config }: BrandsType) => {
	
	return useQuery({
		...config,
		queryKey: ["BrandList", options],
		queryFn: () => BrandService.filter(options),
	})
}