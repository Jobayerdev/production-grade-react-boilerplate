import { Button, Form, Input, Upload, message } from "antd";

import axios from "axios";
import { useState } from "react";

interface IFProps {
    onFinish?: any
}

const DepartmentCreateForm: React.FC<IFProps> = ({ onFinish }) => {


    const [image, setImage] = useState<string>()

    const beforeUpload = (file: any) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleUpload = (info: any) => {

        const imageData = new FormData();
        imageData.append("image", info.file.originFileObj)

        axios.post('https://mighty-mickey.poshapets.com/api/v1/images/upload', imageData)
            .then(response => {
                setImage( response?.data?.payload?.link);
            })
            .catch(error => {
                
            });
    };

    const handleSubmitForm = (values: any) => {
        values.image = image;
        onFinish(values)
    }

    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={handleSubmitForm}>
            <Form.Item
                label="Department Name"
                name="name"
                rules={[{ required: true, message: "Please input a name!" }]}>
                <Input placeholder="Enter a name" />
            </Form.Item>

            <Form.Item
                label="Department Slug"
                name="slug"
                rules={[{ required: true, message: "Please input a slug!" }]}>
                <Input placeholder="Enter a slug" />
            </Form.Item>

            <Form.Item
                label="Department Slug"
                name="image"
                rules={[{ required: true, message: "Please upload a image!" }]}>

                <Upload
                    action=""
                    beforeUpload={beforeUpload}
                    onChange={handleUpload}
                >
                    <Button>Upload a Photo</Button>
                </Upload>

            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default DepartmentCreateForm;