import { Button, PageHeader } from "antd"

import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import UserRoleList from "../components/UserRoleList"
import { useNavigate } from "react-router-dom"

const UserRoleListPage = () => {

	const navigate = useNavigate()

	return (
		<Authorization allowedAccess={["RoleView"]}>
			<PageHeader 
			onBack={() => null} 
			title="User Role List" 
			extra={[
				<Button key="1" onClick={() => navigate(Paths.RoleCreate)} type="primary">
					Create
				</Button>
			]}
			/>
			<UserRoleList />
		</Authorization>
	)
}

export default UserRoleListPage
