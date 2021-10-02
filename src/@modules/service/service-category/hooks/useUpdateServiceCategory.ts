import { MutationConfig } from "@shared/config";
import { ServiceCategoryService } from "@shared/services";
import { useMutation } from "react-query";

type ServiceCategoryType = {
  config?: MutationConfig<typeof ServiceCategoryService.update>;
};

export const useUpdateServiceCategory = ({ config }: ServiceCategoryType = {}) => {
  return useMutation({
    ...config,
    mutationFn: ServiceCategoryService.update,
  })
}
