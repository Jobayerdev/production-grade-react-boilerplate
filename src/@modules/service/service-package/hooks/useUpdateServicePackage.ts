import { MutationConfig } from "@shared/config";
import { ServicePackageService } from "@shared/services";
import { useMutation } from "react-query";

type ServicePackageUpdateType = {
  config?: MutationConfig<typeof ServicePackageService.update>;
};

export const useUpdateServicePackage = ({ config }: ServicePackageUpdateType = {}) => {
  return useMutation({
    ...config,
    mutationFn: ServicePackageService.update,
  })
}
