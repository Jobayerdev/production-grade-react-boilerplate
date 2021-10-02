import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import DepartmentUpdateForm from "../components/DepartmentUpdateForm"
import { IUpdateDepartment } from "@shared/interfaces"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import { Purify } from "@shared/utils"
import { useSingleDepartment } from "../hooks/useSingleDepartment"
import { useUpdateDepartment } from "../hooks/useUpdateDepartment"

const DepartmentUpdatePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useSingleDepartment({ id })

    const updateDepartmentMutation = useUpdateDepartment({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.Departments)
                }
            },
        },
    })


    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <Purify loading={isLoading}>
                <PageHeader onBack={() => navigate(-1)} title="Update Department" />
                <DepartmentUpdateForm
                    initialValues={{
                        name: data?.data?.payload?.name,
                        slug: data?.data?.payload?.slug,
                        image: data?.data?.payload.image,
                    }}
                    onFinish={(values: IUpdateDepartment) => updateDepartmentMutation.mutateAsync({ ...values, id })}
                />
            </Purify>
        </Authorization>
    );

};

export default DepartmentUpdatePage;