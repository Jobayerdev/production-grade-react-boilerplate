import { Button, PageHeader } from "antd";

import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import ServicePackageList from "../components/ServicePackageList";
import { useNavigate } from "react-router-dom";

const ServicePackageListPage = () => {

	const navigate = useNavigate()

	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => null}
				title="Service Package List"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.ServicePackageCreate)} type="primary">
						Create
					</Button>
				]}
			/>
			<ServicePackageList />
		</Authorization>
	);
};

export default ServicePackageListPage;