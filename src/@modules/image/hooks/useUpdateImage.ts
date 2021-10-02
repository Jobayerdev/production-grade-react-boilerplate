import { MutationConfig } from "@shared/config";
import { ImageService } from "@shared/services";
import { useMutation } from "react-query";

type ImageUpdateType = {
  id: string
  config?: MutationConfig<typeof ImageService.update>;
};

export const useUpdateImage = ({ id, config }: ImageUpdateType) => {
  return useMutation({
    ...config,
    mutationFn: ImageService.update,
  })
}
