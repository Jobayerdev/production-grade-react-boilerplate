import { Button, Popconfirm, Space, Table } from "antd"

import { IServicePackage } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useAllServicePackage } from "../hooks/useAllServicePackage"
import { useDeleteServicePackage } from "../hooks/useDeleteServicePackage"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const ServicePackageList = () => {

    const deleteServicePackage = useDeleteServicePackage({})
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(1)

    const { data, isLoading } = useAllServicePackage({
        options: {
            page: page,
            take: 10,
        },
    })

    const dataSource = data?.data?.payload?.map((x: IServicePackage) => ({
        id: x.id,
        name: x.name,
        duration: x.duration,
        price: x.price,
        isActive: x.isActive.toString(),

    }))



    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Is Active",
            dataIndex: "isActive",
            key: "isActive",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",

            render: (id: any) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.ServicePackageUpdate}/${id}`)}>
                        Update
                    </Button>

                    <Popconfirm
                        title="Are you sure to delete this department?"
                        onConfirm={() => deleteServicePackage.mutateAsync(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger> Delete </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ]
    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            loading={isLoading}
            bordered
            pagination={{
                pageSize: 10,
                total: data?.data?.total,
                onChange: (page: number) => {
                    setPage(page)
                },
            }}
        />
    );
};

export default ServicePackageList;