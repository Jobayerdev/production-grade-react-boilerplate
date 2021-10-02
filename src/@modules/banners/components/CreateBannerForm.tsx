import { Button, Col, Form, Input, Row, Select, Upload, message, notification } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import axios, { AxiosResponse } from 'axios';

import { ICreateBanner } from '@shared/interfaces';
import { queryClient } from '@shared/config';
import { useCreateBanner } from '../hooks/useCreateBanner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const { Option } = Select;

const CreateBannerForm = () => {

    const navigate = useNavigate()

    const [image, setImage]: any = useState({
        loading: false,
        imageUrl: null,
    })
    const { loading, imageUrl } = image;


    const CreateBannerMutation = useCreateBanner({

        config: {
            onSuccess: (data: AxiosResponse) => {
                navigate('')
                queryClient.invalidateQueries("BannerList")
                notification.success({
                    type: "success",
                    message: "Banner Created",
                })
            },
        },
    })

    const onFinish = (values: ICreateBanner) => {
        values.image = imageUrl;
        CreateBannerMutation.mutateAsync(values);
    }

    function beforeUpload(file: any) {
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


    const handleChange = (info: any) => {

        setImage({
            loading: true,
            imageUrl: null
        });

        const imageData = new FormData();
        imageData.append("image", info.file.originFileObj)

        axios.post('https://mighty-mickey.poshapets.com/api/v1/images/upload', imageData)
            .then(function (response) {
                setImage({
                    loading: false,
                    imageUrl: response?.data?.payload?.link
                });
            })
            .catch(function (error) {
                
            });
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload Image</div>
        </div>
    )

    return (
        <div className="banner-create-form">
            <Form

                size="large"
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={{ xs: 10, sm: 16, md: 24, lg: 32 }} align="middle">
                    <Col span={10}>
                        <Form.Item
                            name="image"
                            rules={[{ required: true, message: 'Please input a image!' }]}
                        >
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>

                    </Col>

                    <Col span={14}>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please input a title!' }]}
                        >
                            <Input placeholder="Banner title"></Input>
                        </Form.Item>

                        <Form.Item
                            label="Banner Url"
                            name="bannerUrl"
                            rules={[{ required: true, message: 'Please input a url!' }]}
                        >
                            <Input id="bannerImageInput" placeholder="Banner Ulr"></Input>
                        </Form.Item>

                        <Form.Item
                            label="Banner Type"
                            name="type"
                            rules={[{ required: true, message: 'Please input a title!' }]}
                        >
                            <Select placeholder="Select a type" >
                                <Option value="FULL_BANNER">FULL_BANNER</Option>
                                <Option value="POP_UP_BANNER">POP_UP_BANNER</Option>
                                <Option value="SLIDER_HOMEPAGE">SLIDER_HOMEPAGE</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <div className="text-right">
                    <Button loading={CreateBannerMutation.isLoading} type="primary" htmlType="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default CreateBannerForm;