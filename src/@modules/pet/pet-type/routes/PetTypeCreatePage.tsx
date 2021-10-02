import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { PageHeader } from "antd"
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import PetTypeCreateForm from "../components/PetTypeCreateForm"
import { useCreatePetType } from "../hooks/useCreatePetType"

export const PetTypeCreatePage = () => {
	const navigate = useNavigate()
	const createPetBreedsMutation = useCreatePetType({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PetTypeList)
			},
		},
	})
	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader onBack={() => null} title="Create Pet Type" />
			<PetTypeCreateForm
				isLoading={createPetBreedsMutation.isLoading}
				onFinish={(values) => createPetBreedsMutation.mutateAsync(values)}
			/>
		</Authorization>
	)
}
