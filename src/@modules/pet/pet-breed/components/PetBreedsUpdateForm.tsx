import { Button, Form, Input } from "antd";

import { IUpdatePetBreeds } from "@shared/interfaces";
import { useEffect } from "react";

interface IFProps {
	initialValues?: IUpdatePetBreeds
	onFinish?: (values: IUpdatePetBreeds) => void
	isLoading?: boolean
}


const PetBreedsUpdateForm: React.FC<IFProps> = ({ initialValues, onFinish, isLoading }) => {

	const [form] = Form.useForm();

	useEffect(() => {
		form.resetFields();
	}, [form, initialValues])

	return (
		<Form
			form={form}
			size="large"
			layout="vertical"
			initialValues={initialValues}
			onFinish={onFinish}>
			<Form.Item
				label="Pet Breeds"
				name="name"
				rules={[{ required: true, message: "Please input Pet Breeds!" }]}>
				<Input />
			</Form.Item>

			<Form.Item>
				<Button loading={isLoading} type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default PetBreedsUpdateForm;