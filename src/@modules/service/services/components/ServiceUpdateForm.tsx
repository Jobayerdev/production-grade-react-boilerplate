import { Button, Form, Input, Modal, Select, Upload, notification } from "antd";
import React, { useEffect, useState } from "react";

import { AxiosResponse } from 'axios';
import { IUpdateService } from "@shared/interfaces";
import { PlusOutlined } from '@ant-design/icons';
import { useAllServiceCategory } from "@modules/service/service-category/hooks/useAllServiceCategory";
import { usePostImage } from '@modules/image/hooks/usePostImage';

const { Option } = Select;

interface IFProps {
  initialValues?: IUpdateService;
  onFinish: (values: IUpdateService) => void;
  isLoading?: boolean;

}

const ServiceUpdateForm: React.FC<IFProps> = ({ initialValues, onFinish, isLoading }) => {

  const [imgState, setImgState] = useState<any>({
    previewVisible: false,
    file: "",
  });

  const postImageMutation = usePostImage({
    config: {
      onSuccess: (data: AxiosResponse) => {
        console.log(data);
        setImgState({
          ...imgState,
          file: data?.data?.payload.link,
        });
      },
    },
  });

  const [serviceCategorySearch, setServiceCategorySearch] =
    useState<string>("");
  function onServiceCategorySearch(val: any) {
    setServiceCategorySearch(val);
  }
  const serviceCategoryData = useAllServiceCategory({
    options: {
      searchTerm: serviceCategorySearch,
    },
  });

  //Handle Ant Image Upload
  const handleImageUpload = ({ file }: any) => {
    if (file.status !== "removed") {
      const imageData = new FormData();
      imageData.append("image", file.originFileObj);
      postImageMutation.mutateAsync(imageData);
    }
  };



  const handleSubmitForm = (values: IUpdateService) => {

    if (imgState.file || initialValues?.images) {
      values.images = imgState.file || initialValues?.images
      onFinish(values)
    } else {
      notification.warning({
        type: "warning",
        message: "Image link is processing please wait",
      })
    }
  }

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [form, initialValues])

  console.log(initialValues);
  

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmitForm}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input size="middle" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="descriptions"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input size="middle" />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please input your Category!" }]}
      >
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Category"
          // optionFilterProp="children"
          onSearch={onServiceCategorySearch}
          filterOption={(input, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {serviceCategoryData.data?.data?.payload.map((ct: any) => (
            <Option key={ct.id} value={ct.id}>{ct.name}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="Upload Images" name="images">
        <Upload
          listType="picture-card"
          onChange={handleImageUpload}
          onPreview={() => setImgState({ ...imgState, previewVisible: true })}
          maxCount={1}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>

        </Upload>
        {/* image preview modal  */}
        <Modal
          visible={imgState.previewVisible}
          title="Image Preview"
          footer={false}
          onCancel={() => setImgState({ ...imgState, previewVisible: false })}
        >
          <img
            alt="example"
            style={{ width: "100%" }}
            src={imgState.file}
          />
        </Modal>
      </Form.Item>

      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ServiceUpdateForm;