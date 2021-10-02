import { Button, PageHeader } from 'antd';

import AppointmentList from '../components/AppointmentList';
import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import { useNavigate } from 'react-router-dom';

const AppointmentPage = () => {
    
    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <PageHeader
                onBack={() => null}
                title="Appointments Bookings"
                extra={[
                    <Button key="1" onClick={() => navigate(Paths.AppointmentCreate)} type="primary">
                        Create
                    </Button>
                ]}
            />
            <AppointmentList />
        </Authorization>
    );
};

export default AppointmentPage;