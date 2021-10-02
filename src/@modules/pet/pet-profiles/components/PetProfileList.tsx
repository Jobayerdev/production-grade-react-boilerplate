import { Button, Popconfirm, Space, Table } from "antd"

import { IPetProfile } from "@shared/interfaces"
import { Link } from "react-router-dom"
import { Paths } from "@shared/enums"
import { useAllPetProfile } from "@modules/pet/pet-profiles/hooks/useAllPetProfile"
import { useDeletePetProfile } from "../hooks/useDeletePetProfile"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const PetProfileList = () => {

    const deletePetProfile = useDeletePetProfile({})
    const navigate = useNavigate()
    const [page, setPage] = useState<number>(1)

    const { data, isLoading } = useAllPetProfile({
        options: {
            page: page,
            take: 10,
            relations: ["images"],
        },
    })

    const dataSource = data?.data?.payload?.map((x: IPetProfile) => ({
        id: x.id,
        name: x.name,
        image: x.images[0].link,
        petFor: x.petFor,
        gender: x.gender,
        isActive: x.isActive.toString(),
    }))



    const columns = [
        {
            title: "Name",
            key: "name",
            render: (record: any) => (
               <div style={{display: "flex", gap: 15, alignItems: "center"}}>
                   <img style={{width: 50}} src={record.image} alt="" />
                   <Link style={{color: "blue", textDecoration:"underline"}} to={`${Paths.PetProfile}/${record.id}`}>{record.name}</Link>
               </div>
            ),
        },
        {
            title: "Pet For",
            dataIndex: "petFor",
            key: "petFor",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
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
                        onClick={() => navigate(`${Paths.PetProfileUpdate}/${id}`)}>
                        Update
                    </Button>

                    <Popconfirm
                        title="Are you sure to delete this profile?"
                        onConfirm={() => deletePetProfile.mutateAsync(id)}
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

export default PetProfileList;