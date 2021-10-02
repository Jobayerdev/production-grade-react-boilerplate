import { Button, Popconfirm, Space, Table } from "antd"

import { IDepartment } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useAllDepartment } from "../hooks/useAllDepartment"
import { useDeleteDepartment } from "../hooks/useDeleteDepartment"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const DepartmentList = () => {

    const deleteDepartment = useDeleteDepartment({})
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(1)

    const { data, isLoading } = useAllDepartment({
        options: {
            page: page,
            take: 10,
        },
    })

    const dataSource = data?.data?.payload?.map((x: IDepartment) => ({
        id: x.id,
        name: x.name,
        slug: x.slug,
        isActive: x.isActive.toString(),
        image: x.image

    }))



    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Slug",
            dataIndex: "slug",
            key: "slug",
        },
        {
            title: "Is Active",
            dataIndex: "isActive",
            key: "isActive",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image:string) => (
                <a href={image} rel="noreferrer" target="_blank">Image link</a>
            )
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",

            render: (id: any) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.DepartmentsUpdate}/${id}`)}>
                        Update
                    </Button>

                    <Popconfirm
                        title="Are you sure to delete this department?"
                        onConfirm={() => deleteDepartment.mutateAsync(id)}
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

export default DepartmentList;