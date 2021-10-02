import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { PageHeader } from "antd"
import { AxiosResponse } from "axios"
import { useNavigate } from "react-router-dom"
import PetBreedsForm from "../components/PetBreedsForm"
import { useCreatePetBreeds } from "../hooks/useCreatePetBreeds"

export const CreatePetBreedsPage = () => {
	const navigate = useNavigate()
	const createPetBreedsMutation = useCreatePetBreeds({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PetBreedsList)
			},
		},
	})
	return (
		<Authorization allowedAccess={["PetBreedsCreate"]}>
			<PageHeader onBack={() => null} title="Create Pet Breeds" />
			<PetBreedsForm
				isLoading={createPetBreedsMutation.isLoading}
				onFinish={(values) => createPetBreedsMutation.mutateAsync(values)}
			/>
		</Authorization>
	)
}
