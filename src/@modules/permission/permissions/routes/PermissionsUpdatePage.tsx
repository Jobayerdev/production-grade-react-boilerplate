import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import PermissionUpdateForm from "../components/PermissionUpdateForm"
import { Purify } from "@shared/utils"
import { usePermission } from "../hooks/usePermission"
import { useUpdatePermission } from "../hooks/useUpdatePermission"

const PermissionsUpdatePage = () => {

	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = usePermission({ id })

	const updatePermissionMutation = useUpdatePermission({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PermissionsList)
			},
		},
	})

	return (
		<Authorization allowedAccess={["PermissionModify"]}>
			<Purify loading={isLoading}>
				<PageHeader onBack={() => window.history.back()} title="Update Permission" />
				<PermissionUpdateForm
					initialValues={{
						title: data?.data?.payload?.title,
					}}
					onFinish={(values) => updatePermissionMutation.mutateAsync({ ...values, id })}
				/>
			</Purify>
		</Authorization>
	);
};

export default PermissionsUpdatePage;