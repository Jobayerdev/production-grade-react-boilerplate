import { Button, Card, Form, Input, Typography } from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons"

import { IMAGES } from "@shared/assets"
import React from "react"
import { useAuth } from "../hooks/useAuth"

const Login = () => {
	const { loginFn } = useAuth()

	return (
		<div
			className="auth-page"
			style={{
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
					Sign In
				</Typography.Title>
				<Form
					name="normal_login"
					initialValues={{ phoneNumber: "01636476123", password: "123456" }}
					onFinish={(val) => {
						loginFn.mutate(val)
					}}>
					<Form.Item
						name="phoneNumber"
						rules={[
							{ required: true, message: "Please input your phone Number!" },
						]}>
						<Input
							type="tel"
							size="large"
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Phone Number"
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
						<Button
							loading={loginFn.isLoading}
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

export default Login
