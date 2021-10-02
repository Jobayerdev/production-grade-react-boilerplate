import { useAllServicePackage } from "@modules/service/service-package/hooks/useAllServicePackage";
import { queryClient } from "@shared/config";
import { Paths } from "@shared/enums";
import { Button, Col, Input, Row, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useServicePackageAssign } from "../hooks/useServicePackageAssign";
import { useServicePackageUnAssign } from "../hooks/useServicePackageUnAssign";
import { PlusOutlined } from '@ant-design/icons';

interface IFProps {
  serviceData?: any;
  packageAssignData?: any;
}

const { Search } = Input;

const ServiceDetail: React.FC<IFProps> = ({
  serviceData,
  packageAssignData,
}) => {
  const navigate = useNavigate();
  const servicePackageAssignMutation = useServicePackageAssign({
    config: {
      onSuccess: () => {
        queryClient.invalidateQueries("packageList");
      },
    },
  });
  const servicePackageUnAssignMutation = useServicePackageUnAssign({
    config: {
      onSuccess: () => {
        queryClient.invalidateQueries("packageList");
      },
    },
  });

  const [servicePackageSearchTerm, setServicePackageSearchTerm] =
    useState<any>("");

  const servicePackageData = useAllServicePackage({
    options: {
      searchTerm: servicePackageSearchTerm,
      take: 10,
      page: 1,
    },
  });
  const onSearch = (value: any) => setServicePackageSearchTerm(value);
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 64 }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={6}>
        <Title level={4}>Overview</Title>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-base font-bold">Name:</p>
            <p>{serviceData?.name}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-bold">Is Active:</p>
            <p>
              <Tag color="volcano">
                {serviceData?.isActive === true ||
                serviceData?.isActive === false
                  ? serviceData?.isActive.toString()
                  : ""}
              </Tag>
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-bold">Description:</p>
            <p>{serviceData?.description}</p>
          </div>
        </div>
        <hr />
        <div className="my-3">
          <Button
            key="one"
            onClick={() => navigate(Paths.ServicesUpdate)}
            type="primary"
          >
            Update
          </Button>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={18}>
        <Title level={4}>Package Assign</Title>
        <hr />
        <div className="w-2/4 my-5 mx-auto">
          <Search
            placeholder="Search for packages"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="flex my-2">
          {servicePackageData?.data?.data?.payload.length > 0 &&
          servicePackageSearchTerm.length > 0 ? (
            servicePackageData?.data?.data?.payload.map((spd: any) => (
              <Tag
                key={spd.id}
                onClick={() =>
                  servicePackageAssignMutation.mutateAsync({
                    servicePackage: [spd.id],
                    id: serviceData.id,
                  })
                }
                className="flex items-center justify-between"
                color="volcano"
              >
                <button>
                <PlusOutlined /> 
                </button>
                {spd.name}
              </Tag>
            ))
          ) : (
            <div>
              <p>"No Package Found!!!"</p>
            </div>
          )}
        </div>
        <div>
          <p className="text-base font-bold">Package List</p>
          <div className="flex">
            {packageAssignData?.length > 0 ? (
              packageAssignData?.map((spd: any) => (
                <Tag
                  key={spd.id}
                  onClose={() =>
                    servicePackageUnAssignMutation.mutateAsync({
                      servicePackage: [spd.id],
                      id: serviceData.id,
                    })
                  }
                  closable
                  color="volcano"
                >
                  {spd.name}
                </Tag>
              ))
            ) : (
              <div>
                <p>"No Package Found!!!"</p>
              </div>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ServiceDetail;
