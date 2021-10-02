import { Button, Popconfirm, Space, Table } from "antd"

import { IRole } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useDeleteRole } from "../hooks/useDeleteRole"
import { useNavigate } from "react-router-dom"
import { useRoles } from "../hooks/useRoles"
import { useState } from "react"

const UserRoleList = () => {

	const deleteRole = useDeleteRole({});
	const navigate = useNavigate()
	const [page, setPage] = useState<number>(1)

	const { data, isLoading } = useRoles({
		options: {
			page: page,
			take: 10,
		},
	});

	const dataSource = data?.data?.payload?.map((x: IRole) => ({
		id: x.id,
		title: x.title,
		isActive: x.isActive.toString(),
	}));



	const columns = [
		{
			title: "Role Title",
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
                        onClick={() => navigate(`${Paths.RoleUpdate}/${id}`)}>
                        Update
                    </Button>

					<Popconfirm
						title="Are you sure to delete this role?"
						onConfirm={() => deleteRole.mutateAsync(id)}
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
	)
}

export default UserRoleList
