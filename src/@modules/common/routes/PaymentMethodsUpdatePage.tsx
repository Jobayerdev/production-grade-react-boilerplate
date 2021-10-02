import { useNavigate, useParams } from 'react-router-dom';

import { Authorization } from '@modules/auth';
import { AxiosResponse } from 'axios';
import { PageHeader } from 'antd';
import { Paths } from '@shared/enums';
import PaymentMethodUpdateForm from '../components/PaymentMethodUpdateForm';
import { Purify } from '@shared/utils';
import { useSinglePaymentMethod } from '../hooks/useSinglePaymentMethod';
import { useUpdatePaymentMethod } from '../hooks/useUpdatePaymentMethod';

const PaymentMethodsUpdatePage = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const { data, isLoading } = useSinglePaymentMethod({ id })
    const updatePetTypeMutation = useUpdatePaymentMethod({
        config: {
            onSuccess: (data: AxiosResponse) => {
                navigate(Paths.PaymentMethods)
            },
        },
    })

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <Purify loading={isLoading}>
                <PageHeader onBack={() => navigate(-1)} title="Update Payment Methods" />
                <PaymentMethodUpdateForm
                    initialValues={{
                        name: data?.data?.payload?.name,
                    }}
                    onFinish={(values) =>
                        updatePetTypeMutation.mutateAsync({ ...values, id })
                    }
                />
            </Purify>
        </Authorization>
    );
};

export default PaymentMethodsUpdatePage;