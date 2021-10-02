import { MutationConfig } from "@shared/config";
import { UsersService } from "@shared/services";
import { useMutation } from "react-query";

type UserUpdateOptions = {
  config?: MutationConfig<typeof UsersService.update>;
};

export const useUpdateUser = ({ config }: UserUpdateOptions = {}) => {
  return useMutation({
    ...config,
    mutationFn: UsersService.update,
  })
}
