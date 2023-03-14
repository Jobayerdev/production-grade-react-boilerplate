import { Button, Table } from 'antd';

import { ApiServices } from '../../services/api.service';
import { AppLayout } from '../../themes/AppLayout';
import { ColumnsType } from 'antd/lib/table';
import { IFilterUsersRequest } from '../../interfaces/request.interfaces';
import moment from 'moment';
import qs from 'qs';
import { toSafeArray } from '../../utils/util-function';
import { useQuery } from 'react-query';
import { useState } from 'react';

const UsersPage = () => {
	const columns: ColumnsType<any> = [
		{
			title: 'First Name',
			dataIndex: 'firstName',
			key: 'firstName',
			render: (text) => <a href='/'>{text}</a>,
		},
		{
			title: 'Last Name',
			dataIndex: 'lastName',
			key: 'lastName',
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'Type',
			key: 'type',
			dataIndex: 'type',
		},
		{
			title: 'Is Active',
			key: 'isActive',
			dataIndex: 'isActive',
		},
		{
			title: 'Created At',
			key: 'createdAt',
			dataIndex: 'createdAt',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<div className='flex'>
					<Button type='primary' className='mr-2' size='small'>
						Edit
					</Button>
					<Button type='primary' className='mr-2' size='small' danger>
						Delete
					</Button>
				</div>
			),
		},
	];
	const [options] = useState<IFilterUsersRequest>({
		page: 1,
		take: 10,
		searchTerm: '',
		isActive: null,
		type: '',
	});
	const userQuery = useQuery({
		queryKey: [`${ApiServices.filerUsers.name}`, qs.stringify(options)],
		queryFn: () => ApiServices.filerUsers(options),
	});
	const data: any[] = toSafeArray(userQuery?.data?.data?.payload)?.map(
		(item: any) => ({
			key: '1',
			firstName: item?.userInfo?.firstName || 'N/A',
			lastName: item?.userInfo?.lastName || 'N/A',
			email: item?.email || 'N/A',
			type: item?.type || 'N/A',
			isActive: item?.isActive,
			createdAt: moment(item?.createdAt).format('DD/MM/YYYY') || 'N/A',
		})
	);
	return (
		<AppLayout pageTitle='Users Management'>
			<Table
				columns={columns}
				dataSource={data}
				loading={userQuery.isLoading}
			/>
		</AppLayout>
	);
};
export default UsersPage;
