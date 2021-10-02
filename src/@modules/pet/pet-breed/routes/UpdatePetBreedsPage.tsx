import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { Purify } from "@shared/utils"
import { PageHeader } from "antd"
import { AxiosResponse } from "axios"
import { useNavigate, useParams } from "react-router-dom"
import PetBreedsUpdateForm from "../components/PetBreedsUpdateForm"
import { usePetBreed } from "../hooks/usePetBreed"
import { useUpdatePetBreed } from "../hooks/useUpdatePetBreeds"


export const UpdatePetBreedsPage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = usePetBreed({ id })
	const updatePetBreedsMutation = useUpdatePetBreed({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PetBreedsList)
			},
		},
	})

	return (
		<Authorization allowedAccess={["PetBreedsUpdate"]}>
			<Purify loading={isLoading} empty={false}>
				<PageHeader onBack={() => navigate(-1)} title="Update Pet Breeds" />
				<PetBreedsUpdateForm
					initialValues={{
						name: data?.data?.payload?.name,
					}}
					isLoading={isLoading}
					onFinish={(values) => updatePetBreedsMutation.mutateAsync({ ...values, id })}
				/>
			</Purify>
		</Authorization>
	)
}
