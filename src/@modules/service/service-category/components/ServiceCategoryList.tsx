import { Paths } from "@shared/enums";
import { IFServiceCategory } from "@shared/interfaces";
import { Button, Popconfirm, Space, Table, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAllServiceCategory } from "../hooks/useAllServiceCategory";
import { useDeleteServiceCategory } from "../hooks/useDeleteServiceCategory";


const { Paragraph } = Typography;

const toText = (node: any) => {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
};

export const ServiceCategoryList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const deletedServiceCategoryMutation = useDeleteServiceCategory();

  const { data, isLoading } = useAllServiceCategory({
    options: {
      page: page,
      take: 10,
      relations: [`images`, `service`],
    },
  });

  const dataSource = data?.data?.payload?.map((x: IFServiceCategory) => ({
    id: x?.id,
    name: x?.name,
    description: x?.description,
    slug: x?.slug,
    images: x?.images,
    specification: x?.specification,
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
            <img src={images[0]?.link} alt="" />
          </div>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Slug",
      dataIndex: "slug",
      key: "slug",
    },
    {
      title: "Specification",
      key: "specification",
      dataIndex: "specification",
      width: 300,
      render: (record: any) => {
        const rows = 2;

        const textFromHtml = toText(record).slice(0, 100);
        return (
          <Paragraph
            ellipsis={{
              rows,
              expandable: true,
            }}
          >
            {textFromHtml}
          </Paragraph>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id: any) => (
        <Space>
          <Button
            type="primary"
            onClick={() => navigate(`${Paths.ServiceCategoryUpdate}/${id}`)}
          >
            Update
          </Button>
          <Popconfirm
            okButtonProps={{
              loading: false,
            }}
            title="Are you sure to delete this task?"
            onConfirm={() => deletedServiceCategoryMutation.mutate(id)}
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
