import { Button, Popconfirm, Space, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { IService } from "@shared/interfaces";
import { Paths } from "@shared/enums";
import { useAllServices } from "../hooks/useAllServices";
import { useDeleteService } from "../hooks/useDeleteService";

export const ServiceList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const deleteServiceMutation = useDeleteService();

  const { data, isLoading } = useAllServices({
    options: {
      page: page,
      take: 10,
      relations: ["category"],
    },
  });
  const dataSource = data?.data?.payload?.map((x: IService) => ({
    id: x.id,
    isActive: x.isActive,
    name: x.name,
    descriptions: x.descriptions,
    images: x.images,
    category: x.category,
  }));

  const columns = [
    {
      title: "Images",
      key: "images",
      dataIndex: "images",
      width: 100,
      render: (images: any) => {
        return (
          <div className="m-1 w-full">
            <img src={images} alt="" />
          </div>
        );
      },
    },
    {
      title: "Name",
      key: "name",
      render: (record: any) => (
        <Link style={{color: "blue", textDecoration:"underline"}} to={`${Paths.ServiceDetail}/${record.id}`}>{record.name}</Link>
     ),
    },
    {
      title: "Is Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (record: boolean) => record.toString(),
    },
    {
      title: "Descriptions",
      dataIndex: "descriptions",
      key: "descriptions",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      render: (record: any) => record?.name.toString(),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: any) => (
        <Space>
          <Button
            key="one"
            type="primary"
            onClick={() => navigate(`${Paths.ServicesUpdate}/${id}`)}
          >
            Update
          </Button>
          <Popconfirm
            key="two"
            okButtonProps={{
              loading: false,
            }}
            title="Are you sure to delete this task?"
            onConfirm={() => {
              deleteServiceMutation.mutate(id);
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="primary">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={isLoading}
      pagination={{
        pageSize: 10,
        total: data?.data?.total,
        onChange: (page: number) => {
          setPage(page);
        },
      }}
    />
  );
};
