import { Button, Form, Input } from "antd";

import { ICreatePermissionType } from "@shared/interfaces";

interface IFProps {
    onFinish?: (values:ICreatePermissionType) => void;
    isLoading?: boolean
}


const PermissionTypeCreateForm: React.FC<IFProps> = ({ onFinish, isLoading }) => {
    
    return (
        <Form
            size="middle"
            layout="vertical"
            onFinish={onFinish}>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input type title!" }]}>
                <Input placeholder="Type here" />
            </Form.Item>


            <Form.Item>
                <Button loading={isLoading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PermissionTypeCreateForm;