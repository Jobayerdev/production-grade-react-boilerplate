import { BannerService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type BannerListType = {
	options: IBaseFilter
	config?: QueryConfig<typeof BannerService.filter>
}

export const useAllBanner = ({ options, config }: BannerListType) => {
	
	return useQuery({
		...config,
		queryKey: ["BannerList", options],
		queryFn: () => BannerService.filter(options),
	})
}