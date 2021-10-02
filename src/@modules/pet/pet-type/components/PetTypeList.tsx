import { Button, Popconfirm, Space, Table } from "antd"

import { IPetBreeds } from "@shared/interfaces/petBreeds.interface"
import { Paths } from "@shared/enums"
import { useAllPetType } from "../hooks/useAllPetType"
import { useDeletePetType } from "../hooks/useDeletePetType"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const PetTypeList = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState<number>(1)
	const deletePetTypeMutation = useDeletePetType()

	const { data, isLoading } = useAllPetType({
		options: {
			page: page,
			take: 10,
		},
	})
	const dataSource = data?.data?.payload?.map((x: IPetBreeds) => ({
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
				<Space>
					<Button
						type="primary"
						onClick={() => navigate(`${Paths.PetTypeUpdate}/${id}`)}>
						Update
					</Button>
					<Popconfirm
						title="Are you sure to delete this task?"
						onConfirm={() => deletePetTypeMutation.mutate(id)}
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
