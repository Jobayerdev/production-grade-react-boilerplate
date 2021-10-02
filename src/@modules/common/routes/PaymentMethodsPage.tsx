import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import { Paths } from '@shared/enums';
import PaymentMethodsList from '../components/PaymentMethodsList';
import { useNavigate } from 'react-router-dom';

const PaymentMethodsPage = () => {

    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <PageHeader
                onBack={() => null}
                title="Payment Methods"
                extra={[
                    <Button key="1" onClick={() => navigate(Paths.PaymentMethodsCreate)} type="primary">
                        Create
                    </Button>
                ]}
            />
            
            <PaymentMethodsList />
        </Authorization>
    );
};

export default PaymentMethodsPage;