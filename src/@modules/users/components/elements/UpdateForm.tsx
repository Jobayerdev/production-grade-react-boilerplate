import { Button, Form, Input, Select } from "antd"

import React from "react"
const { Option } = Select
interface IInitialValues {
	name: string
	email: string
	phoneNumber: string
	password: string
	gender: string
	address: string
	type: string
}
interface IFProps {
	initialValues?: IInitialValues
	onFinish?: (values: IInitialValues) => void
	onFinishFailed?: (errorInfo: any) => void
	isLoading?: boolean
}
export const UpdateForm: React.FC<IFProps> = ({
	initialValues,
	onFinish,
	onFinishFailed,
	isLoading,
}) => {
	return (
		<Form
			layout="vertical"
			initialValues={initialValues}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}>
			<Form.Item
				label="Name"
				name="name"
				rules={[{ required: true, message: "Please input your name!" }]}>
				<Input value={initialValues?.name} size="middle" />
			</Form.Item>
			<Form.Item
				label="Email"
				name="email"
				rules={[
					{ required: true, message: "Please input your email!" },
					{ type: "email", message: "Invalid email" },
				]}>
				<Input value={initialValues?.email} type="email" size="middle" />
			</Form.Item>
			<Form.Item
				label="PhoneNumber"
				name="phoneNumber"
				rules={[{ required: true, message: "Please input your phoneNumber!" }]}>
				<Input value={initialValues?.phoneNumber} size="middle" type="tel" />
			</Form.Item>
			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: "Please input your password!" }]}>
				<Input.Password value={initialValues?.password} size="middle" />
			</Form.Item>
			<Form.Item
				label="Gender"
				name="gender"
				rules={[{ required: true, message: "Please input your gender!" }]}>
				<Select placeholder="select your gender" value={initialValues?.gender}>
					<Option value="male">Male</Option>
					<Option value="female">Female</Option>
					<Option value="other">Other</Option>
				</Select>
			</Form.Item>
			<Form.Item
				label="Address"
				name="address"
				rules={[{ required: true, message: "Please input your address!" }]}>
				<Input value={initialValues?.address} size="middle" type="tel" />
			</Form.Item>
			<Form.Item
				label="Type"
				name="type"
				rules={[{ required: true, message: "Please input your Type!" }]}>
				<Select placeholder="select your Type" value={initialValues?.type}>
					<Option value="INDIVIDUAL">INDIVIDUAL</Option>
					<Option value="INDIVIDUAL">INDIVIDUAL</Option>
					<Option value="PET_OWNER">PET OWNER</Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<Button loading={isLoading} type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
