import { Button, Form, Input } from "antd";

import { IUpdatePermissions } from "@shared/interfaces";
import { useEffect } from "react";

interface IInitialValues {
	title: string
}

interface IFProps {
	initialValues?: IInitialValues
	onFinish?: (values: IUpdatePermissions) => void
}

const PermissionUpdateForm: React.FC<IFProps> = ({ initialValues, onFinish }) => {

	const [form] = Form.useForm();

	useEffect(() => {
		form.resetFields();
	}, [form, initialValues])

	return (
		<Form
			form={form}
			size="middle"
			layout="vertical"
			initialValues={initialValues}
			onFinish={onFinish}>
			<Form.Item
				label="Title"
				name="title">
				<Input defaultValue={initialValues?.title} />
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default PermissionUpdateForm;