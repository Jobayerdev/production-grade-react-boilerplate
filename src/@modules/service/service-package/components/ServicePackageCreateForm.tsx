import { Button, Form, Input, Radio } from "antd";

interface IFProps {
    onFinish?: any
}

const ServicePackageCreateForm: React.FC<IFProps> = ({ onFinish }) => {
    
    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={onFinish}>
            <Form.Item
                label="Package Name"
                name="name"
                rules={[{ required: true, message: "Please input a name!" }]}>
                <Input placeholder="Enter a name" />
            </Form.Item>

            <Form.Item
                label="Duration"
                name="duration"
                rules={[{ required: true, message: "Please input duration!" }]}>
                <Input placeholder="Type here" />
            </Form.Item>

            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please input price!" }]}>
                <Input placeholder="Type here" />
            </Form.Item>

            <Form.Item
                label="Is Active"
                name="isActive"
                rules={[{ required: true, message: "Please select value!" }]}>
                <Radio.Group
                    buttonStyle="solid"
                    className="w-full text-center">
                    <Radio.Button value={true} className="w-2/4">
                        True
                    </Radio.Button>
                    <Radio.Button value={false} className="w-2/4">
                        False
                    </Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ServicePackageCreateForm;