import { Authorization } from "@modules/auth";
import { AxiosResponse } from "axios";
import { PageHeader } from "antd";
import { Paths } from "@shared/enums";
import ServiceCreateForm from "../components/ServiceCreateForm";
import { useCreateService } from "../hooks/useCreateService";
import { useNavigate } from "react-router-dom";

export const ServicesCreatePage = () => {
  const navigate = useNavigate();
  const createServiceMutation = useCreateService({
    config: {
      onSuccess: (data: AxiosResponse) => {
        navigate(Paths.ServicesList);
      },
    },
  });



  return (
    <Authorization allowedAccess={["FORBIDDEN"]}>
      <PageHeader onBack={() => null} title="Create Service" />
      <ServiceCreateForm

        isLoading={createServiceMutation.isLoading}
        onFinish={(values) => createServiceMutation.mutateAsync(values)}
      />
    </Authorization>
  );
};
