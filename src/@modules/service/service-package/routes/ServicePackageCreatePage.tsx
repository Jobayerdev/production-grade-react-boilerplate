import { PageHeader, notification } from "antd"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { ICreateServicePackage } from "@shared/interfaces"
import { Paths } from "@shared/enums"
import ServicePackageCreateForm from "../components/ServicePackageCreateForm"
import { useCreateServicePackage } from "../hooks/useCreateServicePackage"
import { useNavigate } from "react-router-dom"

const ServicePackageCreatePage = () => {
    const navigate = useNavigate()

	const CreateServicePackageMutation = useCreateServicePackage({
		config: {
			onSuccess: (data: AxiosResponse) => {
				if (data?.data?.success) {
					navigate(Paths.ServicePackageList)
					notification.success({
                        type: 'success',
                        message: "Service Package created successfully"
                    })
				}
			},
		},
	})


	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader onBack={() => navigate(-1)} title="Create Service Package" />
			<ServicePackageCreateForm
				onFinish={(values: ICreateServicePackage) => CreateServicePackageMutation.mutateAsync(values)}
			/>
		</Authorization>
	);
};

export default ServicePackageCreatePage;