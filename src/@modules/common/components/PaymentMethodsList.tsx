import { Button, Popconfirm, Space, Table } from "antd"

import { IPetLifeStyles } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useAllPaymentMethod } from "../hooks/useAllPaymentMethod"
import { useDeletePaymentMethod } from "../hooks/useDeletePaymentMethod"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const PaymentMethodsList = () => {


    const deletePaymentMethod = useDeletePaymentMethod({})
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(1)

    const { data, isLoading } = useAllPaymentMethod({
        options: {
            page: page,
            take: 10,
        },
    })

    const dataSource = data?.data?.payload?.map((x: IPetLifeStyles) => ({
        id: x.id,
        name: x.name,
        isActive: x.isActive.toString(),
    }))

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
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
                        onClick={() => navigate(`${Paths.PaymentMethodsUpdate}/${id}`)}>
                        Update
                    </Button>

                    <Popconfirm
                        title="Are you sure to delete this permission?"
                        onConfirm={() => deletePaymentMethod.mutateAsync(id)}
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

export default PaymentMethodsList;