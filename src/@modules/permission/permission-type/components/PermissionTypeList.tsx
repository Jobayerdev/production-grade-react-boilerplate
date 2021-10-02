import { Button, Popconfirm, Space, Table } from "antd"

import { IPermissionType } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { useDeletePermissionType } from "../hooks/useDeletePermissionType"
import { useNavigate } from "react-router-dom"
import { usePermissionTypes } from "../hooks/usePermissionTypes"
import { useState } from "react"

const PermissionTypeList = () => {

	const deletePermissionType = useDeletePermissionType({})
	const navigate = useNavigate()
	const [page, setPage] = useState<number>(1)

	const { data, isLoading } = usePermissionTypes({
		options: {
			page: page,
			take: 10,
		},
	})
	
	const dataSource = data?.data?.payload?.map((x: IPermissionType) => ({
		title: x.title,
		id: x.id,
		isActive: x.isActive.toString(),
	}));

	const columns = [
		{
			title: "Permission Type",
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
			render: (id: any) => (
				<Space size="middle">
					<Button
                        type="primary"
                        onClick={() => navigate(`${Paths.PermissionsTypeUpdate}/${id}`)}>
                        Update
                    </Button>

					<Popconfirm
						title="Are you sure to delete this permission type?"
						onConfirm={() => deletePermissionType.mutateAsync(id)}
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
export default PermissionTypeList;
