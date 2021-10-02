import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import PermissionCreateForm from "../components/PermissionCreateForm"
import { useCreatePermission } from "../hooks/useCreatePermission"
import { useNavigate } from "react-router-dom"

const PermissionsCreatePage = () => {

    const navigate = useNavigate()

	const CreatePermissionMutation = useCreatePermission({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PermissionsList)
			},
		},
	})



	return (
		<Authorization allowedAccess={["PermissionCreate"]}>
			<PageHeader onBack={() => window.history.back()} title="Create Permission" />
			<PermissionCreateForm
				isLoading={CreatePermissionMutation.isLoading}
				onFinish={(values) => CreatePermissionMutation.mutateAsync(values)}
			/>
		</Authorization>
	);
};

export default PermissionsCreatePage;