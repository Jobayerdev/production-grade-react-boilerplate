import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import DepartmentCreateForm from "../components/DepartmentCreateForm"
import { ICreateDepartment } from "@shared/interfaces"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import { useCreateDepartment } from "../hooks/useCreateDepartment"
import { useNavigate } from "react-router-dom"

const DepartmentsCreatePage = () => {
	const navigate = useNavigate()

	const CreateDepartmentMutation = useCreateDepartment({
		config: {
			onSuccess: (data: AxiosResponse) => {
				if (data?.data?.success) {
					navigate(Paths.Departments)
				}
			},
		},
	})


	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader onBack={() => navigate(-1)} title="Create Departments" />
			<DepartmentCreateForm
				onFinish={(values: ICreateDepartment) => CreateDepartmentMutation.mutateAsync(values)}
			/>
		</Authorization>
	);
};

export default DepartmentsCreatePage;