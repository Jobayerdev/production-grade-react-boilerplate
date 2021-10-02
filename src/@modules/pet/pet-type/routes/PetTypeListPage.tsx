import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { Button, PageHeader } from "antd"
import { useNavigate } from "react-router-dom"
import { PetTypeList } from "../components/PetTypeList"


export const PetTypeListPage = () => {
	const navigate = useNavigate()
	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => navigate(-1)}
				title="Pet Type List"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.PetTypeCreate)} type="primary">
						Create
					</Button>,
				]}
			/>
			<PetTypeList />
		</Authorization>
	)
}
