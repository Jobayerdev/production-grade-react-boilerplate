import { MutationConfig } from "@shared/config";
import { ServicesService } from "@shared/services";
import { useMutation } from "react-query";

type UpdateServiceType = {
  config?: MutationConfig<typeof ServicesService.update>;
};

export const useUpdateService = ({ config }: UpdateServiceType = {}) => {
  return useMutation({
    ...config,
    mutationFn: ServicesService.update,
  })
}
