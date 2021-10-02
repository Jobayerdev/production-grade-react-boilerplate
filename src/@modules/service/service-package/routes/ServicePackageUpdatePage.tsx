import { PageHeader, notification } from "antd"
import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { IUpdateServicePackage } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import { Purify } from "@shared/utils"
import ServicePackageUpdateForm from "../components/ServicePackageUpdateForm"
import { useSingleServicePackage } from "../hooks/useSingleServicePackage"
import { useUpdateServicePackage } from "../hooks/useUpdateServicePackage"

const ServicePackageUpdatePage = () => {
    
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useSingleServicePackage({ id })

    const updateServicePackageMutation = useUpdateServicePackage({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.ServicePackageList)
                    notification.success({
                        type: 'success',
                        message: "Updated successfully"
                    })
                }
            },
        },
    })

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <Purify loading={isLoading}>
                <PageHeader onBack={() => navigate(-1)} title="Update Service Package" />
                <ServicePackageUpdateForm
                    initialValues={{
                        name: data?.data?.payload?.name,
                        duration: data?.data?.payload?.duration,
                        price: data?.data?.payload?.price,
                        isActive: data?.data?.payload?.isActive,
                    }}
                    onFinish={(values: IUpdateServicePackage) => updateServicePackageMutation.mutateAsync({ id, ...values })}
                />
            </Purify>
        </Authorization>
    );
};

export default ServicePackageUpdatePage;