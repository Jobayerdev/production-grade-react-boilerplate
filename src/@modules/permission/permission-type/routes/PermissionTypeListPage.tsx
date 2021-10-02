import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import PermissionTypeList from '../components/PermissionTypeList';
import { useNavigate } from 'react-router-dom';

const PermissionTypeListPage = () => {

    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["PermissionTypeView"]}>
            <PageHeader
                onBack={() => null}
                title="Permission Type List"
                extra={[
                    <Button key="1" onClick={() => navigate(Paths.PermissionsTypeCreate)} type="primary">
                        Create
                    </Button>
                ]}
            />
            <PermissionTypeList />
        </Authorization>
    );
};

export default PermissionTypeListPage;