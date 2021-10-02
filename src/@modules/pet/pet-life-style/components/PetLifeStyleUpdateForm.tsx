import { Button, Form, Input } from "antd";

import { IUpdatePetLifeStyles } from "@shared/interfaces";
import { useEffect } from "react";

interface IInitialValues {
    name: string
}

interface IFProps {
    initialValues?: IInitialValues
    onFinish?: (values: IUpdatePetLifeStyles) => void
    loading?: boolean
}

const PetLifeStyleUpdateForm: React.FC<IFProps> = ({ initialValues, onFinish, loading }) => {

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
                label="Life Style Name"
                name="name">
                <Input defaultValue={initialValues?.name} />
            </Form.Item>

            <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PetLifeStyleUpdateForm;