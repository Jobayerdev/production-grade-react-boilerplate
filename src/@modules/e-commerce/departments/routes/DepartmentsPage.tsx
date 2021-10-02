import { Button, PageHeader } from 'antd';

import { Authorization } from '@modules/auth';
import DepartmentList from '../components/DepartmentList';
import { Paths } from '@shared/enums';
import { useNavigate } from 'react-router-dom';

const DepartmentsPage = () => {

    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => null}
				title="Departments"
				extra={[
					<Button key="1" onClick={() => navigate(Paths.DepartmentsCreate)} type="primary">
						Create
					</Button>,
				]}
			/>
			<DepartmentList/>
		</Authorization>
    );
};

export default DepartmentsPage;