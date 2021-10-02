import { Button, Col, Form, Input, Row, Select, Upload, message, notification } from 'antd';
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Purify } from '@shared/utils';
import { queryClient } from '@shared/config';
import { useSingleBanner } from '../hooks/useSingleBanner';
import { useUpdateBanner } from '../hooks/useUpdateBanner';

const { Option } = Select;


const EditBannerForm = () => {

    const navigate = useNavigate()
    const id = useLocation().search.split("=")[1];

    const [image, setImage] = useState<string>('')

    const UpdateBannerMutation = useUpdateBanner({
        config: {
            onSuccess: (data: AxiosResponse) => {
                navigate('')
                queryClient.invalidateQueries("BannerList")
                notification.success({
                    type: "success",
                    message: "Banner Updated",
                })
            },
        },
    })

    const { data, isLoading } = useSingleBanner({ id })

    const onFinish = (values: any) => {
        values.image = image || data?.data?.payload?.image;
        UpdateBannerMutation.mutateAsync({ ...values, id })
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


        const imageData = new FormData();
        imageData.append("image", info.file.originFileObj)

        axios.post('https://mighty-mickey.poshapets.com/api/v1/images/upload', imageData)
            .then(function (response) {
                setImage(response?.data?.payload?.link);
            })
            .catch(function (error) {
                
            });
    };


    const [form] = Form.useForm();

    useEffect(() => {
        form.resetFields();
    }, [form, data, id])

    return (
        <Purify loading={isLoading}>
            <div className="banner-create-form">
                <Form
                    form={form}
                    initialValues={data?.data?.payload}
                    size="large"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={{ xs: 10, sm: 16, md: 24, lg: 32 }} align="middle">
                        <Col span={10}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                <img src={image ? image : data?.data?.payload?.image} alt="avatar" style={{ width: '100%' }} />
                            </Upload>
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
                            >
                                <Input placeholder="Banner Ulr"></Input>
                            </Form.Item>

                            <Form.Item
                                label="Banner Type"
                                name="type"
                            >
                                <Select placeholder="Select a type"  >
                                    <Option value="FULL_BANNER">FULL_BANNER</Option>
                                    <Option value="POP_UP_BANNER">POP_UP_BANNER</Option>
                                    <Option value="SLIDER_HOMEPAGE">SLIDER_HOMEPAGE</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="text-right">
                        <Button loading={UpdateBannerMutation.isLoading} type="primary" htmlType="submit">Update</Button>
                    </div>
                    
                </Form>
            </div>
        </Purify>
    );
};

export default EditBannerForm;