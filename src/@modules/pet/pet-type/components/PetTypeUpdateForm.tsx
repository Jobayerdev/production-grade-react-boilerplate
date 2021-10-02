import { Button, Form, Input } from "antd"

import { useEffect } from "react"

interface IInitialValues {
	name: string
}
interface IFProps {
	initialValues?: IInitialValues
	onFinish?: (values: IInitialValues) => void
	isLoading?: boolean
}
export const PetTypeUpdateForm: React.FC<IFProps> = ({
	initialValues,
	onFinish,
	isLoading,
}) => {

	const [form] = Form.useForm();

	useEffect(() => {
		form.resetFields();
	}, [form, initialValues])

	return (
		<Form
			form={form}
			layout="vertical"
			initialValues={initialValues}
			onFinish={onFinish}>
			<Form.Item
				label="Pet Type"
				name="name"
				rules={[{ required: true, message: "Please input Pet Type!" }]}>
				<Input defaultValue={initialValues?.name} size="middle" />
			</Form.Item>

			<Form.Item>
				<Button loading={isLoading} type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}
