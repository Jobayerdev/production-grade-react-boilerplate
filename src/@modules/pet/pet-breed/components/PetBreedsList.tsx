import { Button, Popconfirm, Space, Table } from "antd"

import { IPetBreeds } from "@shared/interfaces/petBreeds.interface"
import { Paths } from "@shared/enums"
import { useDeletePetBreed } from "../hooks/useDeletePetBreed"
import { useNavigate } from "react-router-dom"
import { usePetBreedsList } from "../hooks/usePetBreeds"
import { useState } from "react"

export const PetBreedsList = () => {
	const navigate = useNavigate()
	const [page, setPage] = useState<number>(1)
	const deletePetBreedMutation = useDeletePetBreed()

	const { data, isLoading } = usePetBreedsList({
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
						onClick={() => navigate(`${Paths.PetBreedsUpdate}/${id}`)}>
						Update
					</Button>
					<Popconfirm
						okButtonProps={{
							loading: false,
						}}
						title="Are you sure to delete this task?"
						onConfirm={() => deletePetBreedMutation.mutate(id)}
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
