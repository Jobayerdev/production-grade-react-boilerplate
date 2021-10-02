import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { Button, PageHeader } from "antd"
import { useNavigate } from "react-router-dom"
import { PetBreedsList } from "../components/PetBreedsList"


export const PetBreedsPage = () => {
	const navigate = useNavigate()
	return (
		<Authorization allowedAccess={["UserView"]}>
			<PageHeader
				onBack={() => navigate(-1)}
				title="Pet Breeds List"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.PetBreedsCreate)} type="primary">
						Create
					</Button>
				]}
			/>
			<PetBreedsList />
		</Authorization>
	)
}
