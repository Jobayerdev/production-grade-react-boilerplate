import { useNavigate, useParams } from "react-router-dom"

import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import PermissionTypeUpdateForm from "../components/PermissionTypeUpdateForm"
import { Purify } from "@shared/utils"
import { usePermissionType } from "../hooks/usePermissionType"
import { useUpdatePermissionType } from "../hooks/useUpdatePermissionType"

const PermissionTypeUpdatePage = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading } = usePermissionType({ id })

	const updatePermissionTypeMutation = useUpdatePermissionType({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.PermissionsTypeList)
			},
		},
	})

	return (
		<Authorization allowedAccess={["PermissionTypeModify"]}>
			<Purify loading={isLoading}>
				<PageHeader onBack={() => window.history.back()} title="Update Permission Type" />
				<PermissionTypeUpdateForm
					initialValues={{
						title: data?.data?.payload?.title,
					}}
					onFinish={(values) => updatePermissionTypeMutation.mutateAsync({ ...values, id })}
				/>
			</Purify>
		</Authorization>
	);
};

export default PermissionTypeUpdatePage
