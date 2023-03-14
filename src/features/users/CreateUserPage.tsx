import { Button, Card, Form, Input, Upload } from 'antd';

import { ApiServices } from '../../services/api.service';
import { AppLayout } from '../../themes/AppLayout';
import { ENV } from '../../ENV';
import { PlusOutlined } from '@ant-design/icons';
import { useMutation } from 'react-query';
import { useState } from 'react';

const CreateUserPage = () => {
	const createUserMutation = useMutation(ApiServices.createUser, {
		onSuccess: (data) => {},
	});
	const [form] = Form.useForm();
	const [files, setFiles] = useState<any>({
		selfie: '',
		nidFront: '',
		nidBack: '',
		driveLicenseFront: '',
		driveLicenseBack: '',
	});
	const onFinish = (values: any) => {
		createUserMutation.mutate({
			...values,
			selfie: values?.selfie?.file?.response?.payload?.links[0],
			nidFront: values?.nidFront?.file?.response?.payload?.links[0],
			driveLicenseFront:
				values?.driveLicenseFront?.file?.response?.payload?.links[0],
			driveLicenseBack:
				values?.driveLicenseBack?.file?.response?.payload?.links[0],
		});
	};
	return (
		<AppLayout pageTitle='Create new User'>
			<Card>
				<Form
					form={form}
					layout='vertical'
					name='basic'
					initialValues={{
						firstName: '',
						lastName: '',
						phone: '',
						email: '',
						password: '',
						selfie: '',
						nidFront: '',
						nidBack: '',
						driveLicenseFront: '',
						driveLicenseBack: '',
					}}
					onFinish={onFinish}
					autoComplete='off'
				>
					<div className='grid grid-cols-2 gap-7'>
						<div className=''>
							<Form.Item
								label='FirstName'
								name='firstName'
								rules={[
									{ required: true, message: 'Please input your firstName!' },
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label='LastName'
								name='lastName'
								rules={[
									{ required: true, message: 'Please input your lastName!' },
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label='Phone'
								name='phone'
								rules={[
									{ required: true, message: 'Please input your phone!' },
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label='Email'
								name='email'
								rules={[
									{ required: true, message: 'Please input your email!' },
								]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label='Password'
								name='password'
								rules={[
									{ required: true, message: 'Please input your password!' },
								]}
							>
								<Input.Password />
							</Form.Item>
						</div>
						<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-1'>
							<Form.Item
								label='Selfie'
								name='selfie'
								valuePropName='selfie'
								rules={[{ required: true, message: 'Please input Selfie!' }]}
							>
								<Upload
									accept='image/*'
									onChange={(info) => {
										if (info?.file.status === 'done') {
											setFiles({
												...files,
												selfie: info?.file,
											});
										}
										if (info?.file.status === 'removed') {
											setFiles({
												...files,
												selfie: null,
											});
										}
									}}
									multiple={false}
									maxCount={1}
									listType='picture-card'
									action={ENV.IMAGE_UPLOAD_END_POINT}
									locale={{ uploading: 'Uploading...' }}
									customRequest={(options: any) => {
										const data = new FormData();
										data.append('files', options.file);
										fetch(options.action, {
											method: 'POST',
											body: data,
										})
											.then((res) => res.json())
											.then((res) => {
												options.onSuccess(res, options.file);
											})
											.catch((error) => {
												options.onError(error);
											});
									}}
								>
									{!files.selfie && (
										<div>
											<PlusOutlined />
											<div style={{ marginTop: 8 }}>Upload</div>
										</div>
									)}
								</Upload>
							</Form.Item>
							<Form.Item
								label='NID Front'
								name='nidFront'
								valuePropName='nidFront'
								rules={[{ required: true, message: 'Please input nidFront!' }]}
							>
								<Upload
									accept='image/*'
									onChange={(info) => {
										if (info?.file.status === 'done') {
											setFiles({
												...files,
												nidFront: info?.file,
											});
										}
										if (info?.file.status === 'removed') {
											setFiles({
												...files,
												nidFront: null,
											});
										}
									}}
									multiple={false}
									maxCount={1}
									listType='picture-card'
									action={ENV.IMAGE_UPLOAD_END_POINT}
									locale={{ uploading: 'Uploading...' }}
									customRequest={(options: any) => {
										const data = new FormData();
										data.append('files', options.file);
										fetch(options.action, {
											method: 'POST',
											body: data,
										})
											.then((res) => res.json())
											.then((res) => {
												options.onSuccess(res, options.file);
											})
											.catch((error) => {
												options.onError(error);
											});
									}}
								>
									{!files.nidFront && (
										<div>
											<PlusOutlined />
											<div style={{ marginTop: 8 }}>Upload</div>
										</div>
									)}
								</Upload>
							</Form.Item>
							<Form.Item
								label='NID Back'
								name='nidBack'
								valuePropName='nidBack'
								rules={[{ required: true, message: 'Please input nidBack!' }]}
							>
								<Upload
									accept='image/*'
									onChange={(info) => {
										if (info?.file.status === 'done') {
											setFiles({
												...files,
												nidBack: info?.file,
											});
										}
										if (info?.file.status === 'removed') {
											setFiles({
												...files,
												nidBack: null,
											});
										}
									}}
									multiple={false}
									maxCount={1}
									listType='picture-card'
									action={ENV.IMAGE_UPLOAD_END_POINT}
									locale={{ uploading: 'Uploading...' }}
									customRequest={(options: any) => {
										const data = new FormData();
										data.append('files', options.file);
										fetch(options.action, {
											method: 'POST',
											body: data,
										})
											.then((res) => res.json())
											.then((res) => {
												options.onSuccess(res, options.file);
											})
											.catch((error) => {
												options.onError(error);
											});
									}}
								>
									{!files.nidBack && (
										<div>
											<PlusOutlined />
											<div style={{ marginTop: 8 }}>Upload</div>
										</div>
									)}
								</Upload>
							</Form.Item>
							<Form.Item
								label='Drive License Front'
								name='driveLicenseFront'
								valuePropName='driveLicenseFront'
								rules={[
									{
										required: true,
										message: 'Please input driveLicenseFront!',
									},
								]}
							>
								<Upload
									accept='image/*'
									onChange={(info) => {
										if (info?.file.status === 'done') {
											setFiles({
												...files,
												driveLicenseFront: info?.file,
											});
										}
										if (info?.file.status === 'removed') {
											setFiles({
												...files,
												driveLicenseFront: null,
											});
										}
									}}
									multiple={false}
									maxCount={1}
									listType='picture-card'
									action={ENV.IMAGE_UPLOAD_END_POINT}
									locale={{ uploading: 'Uploading...' }}
									customRequest={(options: any) => {
										const data = new FormData();
										data.append('files', options.file);
										fetch(options.action, {
											method: 'POST',
											body: data,
										})
											.then((res) => res.json())
											.then((res) => {
												options.onSuccess(res, options.file);
											})
											.catch((error) => {
												options.onError(error);
											});
									}}
								>
									{!files.driveLicenseFront && (
										<div>
											<PlusOutlined />
											<div style={{ marginTop: 8 }}>Upload</div>
										</div>
									)}
								</Upload>
							</Form.Item>
							<Form.Item
								label='Drive License Back'
								name='driveLicenseBack'
								valuePropName='driveLicenseBack'
								rules={[
									{
										required: true,
										message: 'Please input driveLicenseBack!',
									},
								]}
							>
								<Upload
									accept='image/*'
									onChange={(info) => {
										if (info?.file.status === 'done') {
											setFiles({
												...files,
												driveLicenseBack: info?.file,
											});
										}
										if (info?.file.status === 'removed') {
											setFiles({
												...files,
												driveLicenseBack: null,
											});
										}
									}}
									multiple={false}
									maxCount={1}
									listType='picture-card'
									action={ENV.IMAGE_UPLOAD_END_POINT}
									locale={{ uploading: 'Uploading...' }}
									customRequest={(options: any) => {
										const data = new FormData();
										data.append('files', options.file);
										fetch(options.action, {
											method: 'POST',
											body: data,
										})
											.then((res) => res.json())
											.then((res) => {
												options.onSuccess(res, options.file);
											})
											.catch((error) => {
												options.onError(error);
											});
									}}
								>
									{!files.driveLicenseBack && (
										<div>
											<PlusOutlined />
											<div style={{ marginTop: 8 }}>Upload</div>
										</div>
									)}
								</Upload>
							</Form.Item>
						</div>
					</div>
					<Form.Item>
						<Button
							loading={createUserMutation.isLoading}
							type='primary'
							htmlType='submit'
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</AppLayout>
	);
};
export default CreateUserPage;
