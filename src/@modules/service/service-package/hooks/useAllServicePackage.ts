import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { ServicePackageService } from "@shared/services";
import { useQuery } from "react-query";

type ServicePackagesType = {
    options: IBaseFilter
    config?: QueryConfig<typeof ServicePackageService.filter>
}

export const useAllServicePackage = ({options, config}: ServicePackagesType) => {
    return useQuery({
        ...config,
        queryKey: ["ServicePackageList", options],
        queryFn: () => ServicePackageService.filter(options),
    })
}