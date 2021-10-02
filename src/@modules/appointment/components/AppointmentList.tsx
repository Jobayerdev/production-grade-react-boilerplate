import { Button, Popconfirm, Space, Table } from "antd"

import AppointmentFilter from "./AppointmentFilter"
import { IAppointment } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useAppointments } from "../hooks/useAppointments"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const AppointmentList = () => {

    const navigate = useNavigate()
    const [page, setPage] = useState<number>(1)
    const [filter, setFilter] = useState<object>({

    })

    console.log(filter);

    const { data, isLoading } = useAppointments({
        options: {
            ...filter,
            page: page,
            take: 10,
        },
    })

    const dataSource = data?.data?.payload?.map((x: IAppointment) => ({
        id: x.id,
        code: x.code,
        frequency: x.frequency,
        scheduleAt: x.scheduleAt,
        paymentStatus: x.paymentStatus,
        appointmentStatus: x.appointmentStatus,
        isActive: x.isActive.toString(),
    }))

    const columns = [
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "frequency",
            dataIndex: "frequency",
            key: "frequency",
        },
        {
            title: "Schedule At",
            dataIndex: "scheduleAt",
            key: "scheduleAt",
        },
        {
            title: "Is Active",
            dataIndex: "isActive",
            key: "isActive",
        },
        {
            title: "Payment Status",
            dataIndex: "paymentStatus",
            key: "paymentStatus",
        },
        {
            title: "Appointment Status",
            dataIndex: "appointmentStatus",
            key: "appointmentStatus",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",

            render: (id: any) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.AppointmentUpdate}/${id}`)}>
                        Update
                    </Button>

                    <Popconfirm
                        title="Are you sure to delete this profile?"
                        onConfirm={() => null}
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
        <>
            <AppointmentFilter onSearch={(values) => setFilter(values)} />
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
        </>
    );
};

export default AppointmentList;