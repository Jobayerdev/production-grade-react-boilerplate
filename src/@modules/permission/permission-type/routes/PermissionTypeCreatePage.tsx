import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import PermissionTypeCreateForm from "../components/PermissionTypeCreateForm"
import { useCreatePermissionType } from "../hooks/useCreatePermissionType"
import { useNavigate } from "react-router-dom"

const PermissionTypeCreatePage = () => {
	const navigate = useNavigate()

	const CreatePermissionTypeMutation = useCreatePermissionType({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PermissionsTypeList)
			},
		},
	})

	return (
		<Authorization allowedAccess={["PermissionTypeCreate"]}>
			<PageHeader onBack={() => window.history.back()} title="Create Permission Type" />
			<PermissionTypeCreateForm
				isLoading={CreatePermissionTypeMutation.isLoading}
				onFinish={(values) => CreatePermissionTypeMutation.mutateAsync(values)}
			/>
		</Authorization>
	)
}

export default PermissionTypeCreatePage
