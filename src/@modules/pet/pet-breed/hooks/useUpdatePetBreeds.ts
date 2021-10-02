import { MutationConfig } from "@shared/config";
import { PetBreedsService } from "@shared/services/petBreeds.service";
import { useMutation } from "react-query";

type PetBreedUpdateType = {
  config?: MutationConfig<typeof PetBreedsService.update>;
};

export const useUpdatePetBreed = ({ config }: PetBreedUpdateType = {}) => {
  return useMutation({
    ...config,
    mutationFn: PetBreedsService.update,
  })
}
