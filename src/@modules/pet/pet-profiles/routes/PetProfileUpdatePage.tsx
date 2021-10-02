import { PageHeader, notification } from "antd"
import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { IUpdatePetProfile } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import PetProfileUpdateForm from "../components/PetProfileUpdateForm"
import { Purify } from "@shared/utils"
import { useSinglePetProfile } from "../hooks/useSinglePetProfile"
import { useUpdatePetProfile } from "../hooks/useUpdatePetProfile"

const PetProfileUpdatePage = () => {


	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = useSinglePetProfile({ id })

	const updatePetProfileMutation = useUpdatePetProfile({
		config: {
			onSuccess: (data: AxiosResponse) => {
				if (data?.data?.success) {
					navigate(Paths.PetProfileList)
					notification.success({
						type: 'success',
						message: "Pet Profile Updated successfully"
					})
				}
			},
		},
	})

	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<Purify loading={isLoading}>
				<PageHeader onBack={() => navigate(-1)} title="Update Pet Profile" />
				<PetProfileUpdateForm
					initialValues={data?.data?.payload}
					loading={updatePetProfileMutation.isLoading}
					onFinish={(values: IUpdatePetProfile) => updatePetProfileMutation.mutateAsync({ ...values, id })}
				/>
			</Purify>
		</Authorization>
	);

};

export default PetProfileUpdatePage;