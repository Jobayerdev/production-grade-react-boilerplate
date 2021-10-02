import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

import { IMAGES } from "@shared/assets"
import React from "react"

const Register = () => {
	const onFinish = (values: any) => {}
	return (
		<div
			className="auth-page"
			style={{
				cursor: "not-allowed",
				opacity: 0.5,
				minHeight: "100vh",
				minWidth: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: `url(${IMAGES.LightBd})`,
				backgroundSize: "cover",
				backgroundPosition: "center right",
				backgroundRepeat: "no-repeat",
			}}>
			<Card
				style={{
					maxWidth: "500px",
					width: "100%",
					boxShadow: "0 0 20px #0815420d",
					borderRadius: 10,
				}}>
				<img
					style={{ maxWidth: 180, margin: "20px auto", display: "block" }}
					src={IMAGES.Logo}
					alt=""
				/>
				<Typography.Title
					level={2}
					style={{ textAlign: "center", marginBottom: 30 }}>
					Register
				</Typography.Title>
				<Form
					name="normal_Register"
					className="Register-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}>
					<Form.Item
						name="email"
						rules={[
							{ required: true, message: "Please input your email!" },
							{ type: "email", message: "Invalid Email" },
						]}>
						<Input
							type="email"
							size="large"
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="email"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: "Please input your Password!" },
						]}>
						<Input
							size="large"
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Space style={{ display: "flex", justifyContent: "space-between" }}>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>Remember me</Checkbox>
							</Form.Item>
							{/* <a href="/">Forgot password</a> */}
						</Space>
					</Form.Item>
					<Form.Item>
						<Button
							loading={false}
							size="large"
							style={{ display: "block", width: "100%" }}
							type="primary"
							htmlType="submit">
							Sign in
						</Button>
					</Form.Item>
					{/* Or <a href="/">register now!</a> */}
				</Form>
			</Card>
		</div>
	)
}

export default Register
