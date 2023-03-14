import { Button, Card, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { IMAGES } from '../../../assets/index';
import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
	const { loginFn } = useAuth();
	const onSubmit = (v: any) => {
		loginFn.mutate(v);
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
					src={IMAGES.Logo}
					className='rounded-md'
					alt=''
				/>
				<Typography.Title
					level={2}
					style={{ textAlign: 'center', marginBottom: 30 }}
				>
					Sign In
				</Typography.Title>
				<Form
					name='normal_login'
					initialValues={{ email: 'jon@gmail.com', password: '123456' }}
					onFinish={onSubmit}
				>
					<Form.Item
						name='email'
						rules={[{ required: true, message: 'Please input your Email!' }]}
					>
						<Input
							type='email'
							size='large'
							prefix={<UserOutlined className='site-form-item-icon' />}
							placeholder='Email'
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
							size='large'
							style={{ display: 'block', width: '100%' }}
							type='primary'
							htmlType='submit'
							loading={loginFn.isLoading}
						>
							Sign in
						</Button>
					</Form.Item>

					<Form.Item>
						<Typography.Text type='secondary'>
							Don't have an account? <Link to='/auth/register'>Register</Link>
						</Typography.Text>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
