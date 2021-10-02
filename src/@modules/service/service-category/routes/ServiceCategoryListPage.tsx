import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { Button, PageHeader } from "antd"
import { useNavigate } from "react-router-dom"
import { ServiceCategoryList } from "../components/ServiceCategoryList"


const ServiceCategoryListPage = () => {

	const navigate = useNavigate()

	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => null}
				title="Service Category List"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.ServiceCategoryCreate)} type="primary">
						Create
					</Button>,
				]}
			/>
			<ServiceCategoryList />
		</Authorization>
	);
};

export default ServiceCategoryListPage;