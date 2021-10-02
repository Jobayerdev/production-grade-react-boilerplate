import { BannerService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type SingleBannerType = {
    id: string,
    config?: QueryConfig<typeof BannerService.filterOne >
}


export const useSingleBanner = ({ id, config }: SingleBannerType) => {
	
	return useQuery({
		...config,
		queryFn: () => BannerService.filterOne(id),
	})
}