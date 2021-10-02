import { MutationConfig } from "@shared/config";
import { PetTypeService } from "@shared/services/petType.service";
import { useMutation } from "react-query";

type PetTypeUpdateType = {
  config?: MutationConfig<typeof PetTypeService.update>;
};

export const useUpdatePetType = ({ config }: PetTypeUpdateType = {}) => {
  return useMutation({
    ...config,
    mutationFn: PetTypeService.update,
  })
}
