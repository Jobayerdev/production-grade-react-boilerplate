import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import BrandList from '../components/BrandList';
import { Paths } from '@shared/enums';
import { useNavigate } from 'react-router-dom';

const BrandsPage = () => {
    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => null}
				title="Brands"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.BrandsCreate)} type="primary">
						Create
					</Button>,
				]}
			/>
			<BrandList/>
		</Authorization>
    );
};

export default BrandsPage;