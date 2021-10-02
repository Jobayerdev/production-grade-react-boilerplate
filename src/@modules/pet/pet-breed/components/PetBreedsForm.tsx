import { Button, Form, Input } from "antd"

import { ICreatePetBreeds } from "@shared/interfaces"
import React from "react"

interface IFProps {
	onFinish?: (values: ICreatePetBreeds) => void
	isLoading?: boolean
}

const PetBreedsForm: React.FC<IFProps> = ({ onFinish, isLoading }) => {
	return (
		<Form
			layout="vertical"
			onFinish={onFinish}>
			<Form.Item
				label="Pet Breeds"
				name="name"
				rules={[{ required: true, message: "Please input Pet Breeds!" }]}>
				<Input size="middle" />
			</Form.Item>

			<Form.Item>
				<Button loading={isLoading} type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default PetBreedsForm
