import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import { Purify } from "@shared/utils";
import { Button, PageHeader } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServiceDetail from "../components/ServiceDetail";
import { useAllPackageAssign } from "../hooks/useAllPackageAssign";
import { useSingleService } from "../hooks/useSingleService";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleService({ id });
  const packageAssignData = useAllPackageAssign({ id });

  return (
    <Authorization allowedAccess={["FORBIDDEN"]}>
      <Purify loading={isLoading}>
        <PageHeader
          onBack={() => navigate(-1)}
          title="Service Detail"
          extra={[
            <Button
              key="one"
              onClick={() => navigate(Paths.ServicesCreate)}
              type="primary"
            >
              Create
            </Button>,
          ]}
        />
        <ServiceDetail
          serviceData={data?.data?.payload}
          packageAssignData={packageAssignData?.data?.data?.payload}
        />
      </Purify>
    </Authorization>
  );
};

export default ServiceDetailPage;
