import { Button, Form, Input } from "antd";

import { ICreateRole } from "@shared/interfaces";

interface IFProps {
    onFinish?: (value: ICreateRole) => void;
    isLoading?: boolean
}


const RoleCreateForm: React.FC<IFProps> = ({ onFinish, isLoading }) => {
    
    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={onFinish}>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input role title!" }]}>
                <Input placeholder="Role title" />
            </Form.Item>


            <Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RoleCreateForm;