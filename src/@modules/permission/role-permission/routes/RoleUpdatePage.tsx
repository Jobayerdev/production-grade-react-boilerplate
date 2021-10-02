import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import { Purify } from "@shared/utils"
import RoleUpdateForm from "../components/RoleUpdateForm"
import { useRole } from "../hooks/useRole"
import { useUpdateRole } from "../hooks/useUpdateRole"

const RoleUpdatePage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = useRole({ id })

	const updateRoleMutation = useUpdateRole({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.RolesList)
			},
		},
	})


	return (
		<Authorization allowedAccess={["RoleModify"]}>
			<Purify loading={isLoading}>
				<PageHeader onBack={() => window.history.back()} title="Update Role" />
				<RoleUpdateForm
					initialValues={{
						title: data?.data?.payload?.title,
					}}
					onFinish={(values) => updateRoleMutation.mutateAsync({ ...values, id })}
				/>
			</Purify>
		</Authorization>
	);
};

export default RoleUpdatePage
