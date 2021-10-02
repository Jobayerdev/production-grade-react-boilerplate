import { Button, Popconfirm, Space, Table } from "antd"
import React, { useState } from "react"

import { IUser } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useDeleteUser } from "../hooks/useDeleteUser"
import { useNavigate } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"

export const UsersList = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState<number>(1)
	const deleteUserMutation = useDeleteUser()

	const { data, isLoading } = useUsers({
		options: {
			page: page,
			take: 10,
		},
	})
	const dataSource = data?.data?.payload?.map((x: IUser) => ({
		id: x.id,
		name: x.name,
		email: x.email,
		address: x.address || "N/A",
		phoneNumber: x.phoneNumber,
		type: x.type,
	}))

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Email",
			dataIndex: "email",
			key: "email",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
		{
			title: "phoneNumber",
			key: "phoneNumber",
			dataIndex: "phoneNumber",
		},
		{
			title: "Type",
			key: "type",
			dataIndex: "type",
		},
		{
			title: "Action",
			dataIndex: "id",
			key: "id",
			render: (id: any) => (
				<Space>
					<Button
						type="primary"
						onClick={() => navigate(`${Paths.UserUpdate}/${id}`)}>
						Update
					</Button>
					<Popconfirm
						okButtonProps={{
							loading: false,
						}}
						title="Are you sure to delete this task?"
						onConfirm={() => deleteUserMutation.mutate(id)}
						okText="Yes"
						cancelText="No">
						<Button danger type="primary">
							Delete
						</Button>
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
	)
}
