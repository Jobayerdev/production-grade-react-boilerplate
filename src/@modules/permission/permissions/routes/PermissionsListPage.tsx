import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import PermissionsList from '../components/PermissionsList';
import { useNavigate } from 'react-router-dom';

const PermissionsListPage = () => {

    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["PermissionView"]}>
            <PageHeader
                onBack={() => null}
                title="Permissions List"
                extra={[
                    <Button key="1" onClick={() => navigate(Paths.PermissionsCreate)} type="primary">
                        Create
                    </Button>
                ]}
            />
            <PermissionsList />
        </Authorization>
    );
};

export default PermissionsListPage;