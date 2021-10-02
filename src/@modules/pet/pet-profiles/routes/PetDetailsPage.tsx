import { Button, PageHeader } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import PetDetails from '../components/PetDetails';
import { Purify } from '@shared/utils';
import { useSinglePetProfile } from '../hooks/useSinglePetProfile';

const PetDetailsPage = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useSinglePetProfile({
        id,
        options: {
            relations: ["owner", "petType", "breed", "images"],
        }
    })

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <PageHeader
                onBack={() => navigate(-1)}
                title={data?.data?.payload?.name}
                extra={[
                    <Button key="1" onClick={() => navigate(`${Paths.PetProfileUpdate}/${id}`)} type="primary">
                        Edit Profile
                    </Button>
                ]}
            />

            <Purify loading={isLoading}>
                <PetDetails data={data?.data?.payload} />
            </Purify>

        </Authorization>
    );
};

export default PetDetailsPage;