import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import BrandCreateForm from "../components/BrandCreateForm"
import { ICreateBrand } from "@shared/interfaces"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import { useCreateBrand } from "../hooks/useCreateBrand"
import { useNavigate } from "react-router-dom"

const BrandCreatePage = () => {
    const navigate = useNavigate()

	const CreateBrandMutation = useCreateBrand({
		config: {
			onSuccess: (data: AxiosResponse) => {
				if (data?.data?.success) {
					navigate(Paths.Brands)
				}
			},
		},
	})


	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader onBack={() => navigate(-1)} title="Create Brands" />
			<BrandCreateForm
				onFinish={(values: ICreateBrand) => CreateBrandMutation.mutateAsync(values)}
			/>
		</Authorization>
	);
};

export default BrandCreatePage;