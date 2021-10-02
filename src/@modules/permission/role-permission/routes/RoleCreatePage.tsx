import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import RoleCreateForm from "../components/RoleCreateForm"
import { useCreateRole } from "../hooks/useCreateRole"
import { useNavigate } from "react-router-dom"

const RoleCreatePage = () => {
	const navigate = useNavigate()

	const CreateRoleMutation = useCreateRole({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.RolesList)
			},
		},
	})



	return (
		<Authorization allowedAccess={["RoleCreate"]}>
			<PageHeader onBack={() => window.history.back()} title="Create Role" />
			<RoleCreateForm
				isLoading={CreateRoleMutation.isLoading}
				onFinish={(values) => CreateRoleMutation.mutateAsync(values)}
			/>
		</Authorization>
	)
}

export default RoleCreatePage
