import { PageHeader, notification } from 'antd';

import AppointmentCreateForm from '../components/AppointmentCreateForm';
import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import { useCreateAppointment } from '../hooks/useCreateAppointment';
import { useNavigate } from 'react-router-dom';

export const AppointmentCreatePage = () => {

    const navigate = useNavigate()

    const CreateAppointmentMutation = useCreateAppointment({
        config: {
            onSuccess: () => {
                navigate(Paths.Appointments)
                notification.success({
                    type: "success",
                    message: "Appointments created successfully"
                })
            },
        },
    })

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <PageHeader
                onBack={() => navigate(-1)}
                title="Appointments Create"

            />
            <AppointmentCreateForm
                loading={CreateAppointmentMutation.isLoading}
                onFinish={(values) => CreateAppointmentMutation.mutateAsync(values)}
            />
        </Authorization>
    );
};
