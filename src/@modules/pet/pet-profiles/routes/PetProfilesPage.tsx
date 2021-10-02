import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import PetProfileList from '../components/PetProfileList';
import { useNavigate } from 'react-router-dom';

const PetProfilesPage = () => {
	const navigate = useNavigate()
	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => null}
				title="Pet Profiles"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.PetProfileCreate)} type="primary">
						Create
					</Button>
				]}
			/>
			<PetProfileList />
		</Authorization>
	);
};

export default PetProfilesPage;