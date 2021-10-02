import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { Purify } from "@shared/utils"
import { PageHeader } from "antd"
import { AxiosResponse } from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { PetTypeUpdateForm } from "../components/PetTypeUpdateForm"
import { useSinglePetType } from "../hooks/useSinglePetType"
import { useUpdatePetType } from "../hooks/useUpdatePetType"


export const PetTypeUpdatePage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = useSinglePetType({ id })
	const updatePetTypeMutation = useUpdatePetType({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PetTypeList)
			},
		},
	})

	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<Purify loading={isLoading} empty={false}>
				<PageHeader onBack={() => navigate(-1)} title="Update Pet Type" />
				<PetTypeUpdateForm
					initialValues={{
						name: data?.data?.payload?.name,
					}}
					isLoading={updatePetTypeMutation.isLoading}
					onFinish={(values) =>
						updatePetTypeMutation.mutateAsync({ ...values, id })
					}
				/>
			</Purify>
		</Authorization>
	)
}
