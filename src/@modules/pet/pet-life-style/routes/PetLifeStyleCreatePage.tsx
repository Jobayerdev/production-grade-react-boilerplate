import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import PetLifeStyleCreateForm from "../components/PetLifeStyleCreateForm"
import { useCreatePetLifeStyle } from "../hooks/useCreatePetLifeStyle"
import { useNavigate } from "react-router-dom"

const PetLifeStyleCreatePage = () => {

	const navigate = useNavigate()

	const CreatePetLifeStyleMutation = useCreatePetLifeStyle({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PetLifeStyleList)
			},
		},
	})


	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader onBack={() => window.history.back()} title="Create Pet Life Style" />
			<PetLifeStyleCreateForm
				onFinish={(values) => CreatePetLifeStyleMutation.mutateAsync(values)}
				loading={CreatePetLifeStyleMutation.isLoading}
			/>
		</Authorization>
	);
};

export default PetLifeStyleCreatePage;
