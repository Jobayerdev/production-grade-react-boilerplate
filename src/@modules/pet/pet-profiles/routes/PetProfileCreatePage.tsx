import { PageHeader, notification } from 'antd';

import { Authorization } from '@modules/auth';
import { AxiosResponse } from 'axios';
import { Paths } from '@shared/enums';
import PetProfileCreateForm from '../components/PetProfileCreateForm';
import { useCreatePetProfile } from '../hooks/useCreatePetProfile';
import { useNavigate } from 'react-router-dom';

const PetProfileCreatePage = () => {

	const navigate = useNavigate()

	const CreatePetProfileMutation = useCreatePetProfile({
		config: {
			onSuccess: (data: AxiosResponse) => {
				if (data?.data?.success) {
					navigate(Paths.PetProfileList)
					notification.success({
						type: 'success',
						message: "Pet Profile Created successfully"
					})
				}
			},
		},
	})


	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader onBack={() => window.history.back()} title="Create Pet Profile" />
			<PetProfileCreateForm
				onFinish={(values) => CreatePetProfileMutation.mutateAsync(values)}
				loading={CreatePetProfileMutation.isLoading}
			/>
		</Authorization>
	);
};

export default PetProfileCreatePage;