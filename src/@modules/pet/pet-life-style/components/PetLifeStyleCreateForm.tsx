import { Button, Form, Input } from "antd";

import { IPetLifeStyles } from "@shared/interfaces";

interface IFProps {
    onFinish?: (values: IPetLifeStyles) => void;
    loading?: boolean
}

const PetLifeStyleCreateForm: React.FC<IFProps> = ({ onFinish, loading }) => {

    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={onFinish}>
            <Form.Item
                label="Life Style Name"
                name="name"
                rules={[{ required: true, message: "Please input a life style name!" }]}>
                <Input placeholder="Type here" />
            </Form.Item>

            <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PetLifeStyleCreateForm;