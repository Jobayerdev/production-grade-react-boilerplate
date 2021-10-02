import { Button, Form, Input } from "antd";

import { IPaymentMethods } from "@shared/interfaces";

interface IFProps {
    onFinish: (values: IPaymentMethods) => void;
    isLoading?: boolean
}


const PaymentMethodCreateForm: React.FC<IFProps> = ({ onFinish }) => {
    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={onFinish}>
            <Form.Item
                label="Methods Name"
                name="name"
                rules={[{ required: true, message: "Please input a methods name!" }]}>
                <Input placeholder="Type here" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PaymentMethodCreateForm;