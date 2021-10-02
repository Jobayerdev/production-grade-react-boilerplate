import { Authorization } from "@modules/auth";
import { AxiosResponse } from "axios";
import { PageHeader } from "antd";
import { Paths } from "@shared/enums";
import PaymentMethodCreateForm from "../components/PaymentMethodCreateForm";
import { useCreatePaymentMethod } from "../hooks/useCreatePaymentMethod";
import { useNavigate } from "react-router-dom";

const PaymentMethodsCreatePage = () => {

    const navigate = useNavigate()

	const CreatePaymentMethodsMutation = useCreatePaymentMethod({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PaymentMethods)
			},
		},
	})

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
        <PageHeader onBack={() => window.history.back()} title="Create Payment Methods" />
        <PaymentMethodCreateForm
            onFinish={(values) => CreatePaymentMethodsMutation.mutateAsync(values)}
        />
    </Authorization>
    );
};

export default PaymentMethodsCreatePage;