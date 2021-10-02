import { useNavigate, useParams } from "react-router-dom";

import { Authorization } from "@modules/auth";
import { AxiosResponse } from "axios";
import { PageHeader } from "antd";
import { Paths } from "@shared/enums";
import { Purify } from "@shared/utils";
import ServiceUpdateForm from "../components/ServiceUpdateForm";
import { useSingleService } from "../hooks/useSingleService";
import { useUpdateService } from "../hooks/useUpdateService";

export const ServiceUpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleService({
    id,
    options: {
      relations: ["category"],
    },
  });
  const updateServiceMutation = useUpdateService({
    config: {
      onSuccess: (data: AxiosResponse) => {
        navigate(Paths.ServicesList);
      },
    },
  });

  console.log(data);
  




  return (
    <Authorization allowedAccess={["FORBIDDEN"]}>
      <PageHeader onBack={() => navigate(-1)} title="Update Service" />
      <Purify loading={isLoading}>
        <ServiceUpdateForm
          initialValues={{
            isActive: false,
            name: data?.data?.payload?.name,
            descriptions: data?.data?.payload?.descriptions,
            images: data?.data?.payload?.images,
            category: data?.data?.payload?.category,
          }}
          isLoading={updateServiceMutation.isLoading}
          onFinish={(values) => updateServiceMutation.mutateAsync({ ...values, id })}
        />
      </Purify>

    </Authorization>
  );
};
