import { Button, Form, Input } from "antd"

import { IFCreatePetType } from "@shared/interfaces"

interface IFProps {
	onFinish?: (values: IFCreatePetType) => void
	isLoading?: boolean
}

const PetTypeCreateForm: React.FC<IFProps> = ({
	onFinish,
	isLoading,
}) => {
	return (
		<Form
			layout="vertical"
			onFinish={onFinish}>
			<Form.Item
				label="Pet Type"
				name="name"
				rules={[{ required: true, message: "Please input Pet Type!" }]}>
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

export default PetTypeCreateForm
