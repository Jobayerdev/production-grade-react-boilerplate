import { useDeleteImage } from "@modules/image/hooks/useDeleteImage";
import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useState } from "react";
import FormTextEditor from "./FormTextEditor";



interface IInitialValues {
  name: string;
  description: string;
  slug: string;
  images?: string[] | null;
  specification: string;
}

interface IFProps {
  initialValues?: IInitialValues;
  onFinish?: (values: IInitialValues) => void;
  onFinishFailed?: (errorInfo: any) => void;
  isLoading?: boolean;
  onEditorStateChange?: (values: any) => void;
  editorState?: any;
  postImageMutation?: any;
}

export const ServiceCategoryCreateForm: React.FC<IFProps> = ({
  initialValues,
  onFinish,
  onFinishFailed,
  isLoading,
  onEditorStateChange,
  editorState,
  postImageMutation,
}) => {
  const deleteImageMutation = useDeleteImage();
  const [imgState, setImgState] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [],
  });

  const handleCancel = () => setImgState({ previewVisible: false });

  const handleChange = ({ file, fileList }: any) => {
    if (file.status !== "removed") {
      const imageData = new FormData();
      imageData.append("image", file.originFileObj);
      postImageMutation.mutateAsync(imageData);
    }
    setImgState({ fileList });
  };

  const handleRemove = (file: any) => {
    const remainingImgFiles = imgState.fileList.filter((itm: any) => {
      return itm.url !== file.url;
    });
    
    deleteImageMutation.mutate(file.name);
    setImgState({
      fileList: remainingImgFiles,
    });
  };

  return (
    <Form
      layout="vertical"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input defaultValue={initialValues?.name} size="middle" />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input your description!" }]}
      >
        <Input defaultValue={initialValues?.description} size="middle" />
      </Form.Item>
      <Form.Item
        label="Slug"
        name="slug"
        rules={[{ required: true, message: "Please input your Slug!" }]}
      >
        <Input defaultValue={initialValues?.slug} size="middle" />
      </Form.Item>

      <Form.Item
        label="Specification"
        name="specification"
      >
        <FormTextEditor
          onEditorStateChange={onEditorStateChange}
          editorState={editorState}
        />
      </Form.Item>

      <Form.Item
        label="Upload Images"
        name="images"
        valuePropName="images"
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={imgState.fileList}
          onRemove={handleRemove}
          onChange={handleChange}
        >
          {imgState.fileList.length >= 8 ? null : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
        <Modal
          visible={imgState.previewVisible}
          title={imgState.previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{ width: "100%" }}
            src={imgState.previewImage}
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
