import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import PetLifeStyleUpdateForm from "../components/PetLifeStyleUpdateForm"
import { Purify } from "@shared/utils"
import { useSinglePetLifeStyle } from "../hooks/useSinglePetLifeStyle"
import { useUpdatePetLifeStyle } from "../hooks/useUpdatePetLifeStyle"

const PetLifeStyleUpdatePage = () => {

	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = useSinglePetLifeStyle({ id })

	const updatePetLifeStyleMutation = useUpdatePetLifeStyle({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PetLifeStyleList)
			},
		},
	})


	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<Purify loading={isLoading}>
				<PageHeader onBack={() => window.history.back()} title="Update Pet Life Style" />
				<PetLifeStyleUpdateForm
					initialValues={{
						name: data?.data?.payload?.name,
					}}
					loading={updatePetLifeStyleMutation.isLoading}
					onFinish={(values) => updatePetLifeStyleMutation.mutateAsync({ ...values, id })}
				/>
			</Purify>
		</Authorization>
	);

};

export default PetLifeStyleUpdatePage;