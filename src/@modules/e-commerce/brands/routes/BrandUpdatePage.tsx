import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import BrandUpdateForm from "../components/BrandUpdateForm"
import { IUpdateBrand } from "@shared/interfaces"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import { Purify } from "@shared/utils"
import { useSingleBrand } from "../hooks/useSingleBrand"
import { useUpdateBrand } from "../hooks/useUpdateBrand"

const BrandUpdatePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useSingleBrand({ id })

    const updateBrandMutation = useUpdateBrand({
        config: {
            onSuccess: (data: AxiosResponse) => {
                if (data?.data?.success) {
                    navigate(Paths.Brands)
                }
            },
        },
    })

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <Purify loading={isLoading}>
                <PageHeader onBack={() => navigate(-1)} title="Update Brand" />
                <BrandUpdateForm
                    initialValues={{
                        name: data?.data?.payload?.name,
                        slug: data?.data?.payload?.slug,
                        isActive: data?.data?.payload?.isActive,
                        isFeatured: data?.data?.payload?.isFeatured,
                        image: data?.data?.payload.image,
                    }}
                    onFinish={(values: IUpdateBrand) => updateBrandMutation.mutateAsync({ id, ...values })}
                />
            </Purify>
        </Authorization>
    );

};

export default BrandUpdatePage;