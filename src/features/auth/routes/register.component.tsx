import { Button, Card, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { IMAGES } from '../../../assets/index';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Register = () => {
	const { registerFn } = useAuth();
	const onFinish = (values: any) => {
		registerFn.mutate(values);
	};
	return (
		<div
			className='auth-page'
			style={{
				minHeight: '100vh',
				minWidth: '100vw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: `url(${IMAGES.LightBd})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center right',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Card
				style={{
					maxWidth: '500px',
					width: '100%',
					boxShadow: '0 0 20px #0815420d',
					borderRadius: 10,
				}}
			>
				<img
					style={{ maxWidth: 100, margin: '20px auto', display: 'block' }}
					className='rounded-md'
					src={IMAGES.Logo}
					alt=''
				/>
				<Typography.Title
					level={2}
					style={{ textAlign: 'center', marginBottom: 30 }}
				>
					Register
				</Typography.Title>
				<Form
					name='normal_Register'
					className='Register-form'
					initialValues={{
						firstName: '',
						lastName: '',
						email: '',
						password: '',
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name='firstName'
						rules={[
							{ required: true, message: 'Please input your first Name!' },
						]}
					>
						<Input
							type='text'
							size='large'
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='firstName'
						/>
					</Form.Item>
					<Form.Item
						name='lastName'
						rules={[
							{ required: true, message: 'Please input your last Name!' },
						]}
					>
						<Input
							type='text'
							size='large'
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='lastName'
						/>
					</Form.Item>
					<Form.Item
						name='email'
						rules={[
							{ required: true, message: 'Please input your email!' },
							{ type: 'email', message: 'Invalid Email' },
						]}
					>
						<Input
							type='email'
							size='large'
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='email'
						/>
					</Form.Item>
					<Form.Item
						name='password'
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input
							size='large'
							prefix={<LockOutlined className='site-form-item-icon' />}
							type='password'
							placeholder='Password'
						/>
					</Form.Item>
					<Form.Item>
						<Button
							loading={registerFn.isLoading}
							size='large'
							style={{ display: 'block', width: '100%' }}
							type='primary'
							htmlType='submit'
						>
							Sign Up
						</Button>
					</Form.Item>
					<Form.Item>
						<Typography.Text type='secondary'>
							Already have an account? <Link to='/login'>Login</Link>
						</Typography.Text>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Register;
