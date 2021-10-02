import { Button, Popconfirm, Space, Table } from "antd"

import { IPermissions } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useDeletePermission } from "../hooks/useDeletePermission"
import { useNavigate } from "react-router-dom"
import { usePermissions } from "../hooks/usePermissions"
import { useState } from "react"

const PermissionsList = () => {

    const deletePermission = useDeletePermission({})
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(1)

    const { data, isLoading } = usePermissions({
        options: {
            page: page,
            take: 10,
        },
    })

    
    

    const dataSource = data?.data?.payload?.map((x: IPermissions) => ({
        id: x.id,
        title: x.title,
        isActive: x.isActive.toString(),
    }))

    const columns = [
        {
            title: "Permission Title",
            dataIndex: "title",
            key: "title",
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
            render: (id: string) => (
                <Space size="middle">

                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.PermissionsUpdate}/${id}`)}>
                        Update
                    </Button>

                    <Popconfirm
                        title="Are you sure to delete this permission?"
                        onConfirm={() => deletePermission.mutateAsync(id)}
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

export default PermissionsList;