import { Button, Form, Input } from "antd";

import { IUpdatePaymentMethods } from "@shared/interfaces";

interface IInitialValues {
    name: string
}

interface IFProps {
    initialValues?: IInitialValues
    onFinish?: (values: IUpdatePaymentMethods) => void
}


const PaymentMethodUpdateForm: React.FC<IFProps> = ({ initialValues, onFinish }) => {
    return (
        <Form
            size="middle"
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}>
            <Form.Item
                label="Method Name"
                name="name">
                <Input defaultValue={initialValues?.name} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PaymentMethodUpdateForm;