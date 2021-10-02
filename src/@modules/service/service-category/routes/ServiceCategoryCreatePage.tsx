import { Authorization } from "@modules/auth";
import { usePostImage } from "@modules/image/hooks/usePostImage";
import { Paths } from "@shared/enums";
import { PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceCategoryCreateForm } from "../components/ServiceCategoryCreateForm";
import { useCreateServiceCategory } from "../hooks/useCreateServiceCategory";


const ServiceCategoryCreatePage = () => {

  const navigate = useNavigate();
  const createServiceCategory = useCreateServiceCategory({
    config: {
      onSuccess: (data: AxiosResponse) => {
        navigate(Paths.ServiceCategoryList);
      },
    },
  });

  //Grab Editor Text
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [specification, setSpecification] = useState("");

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    setSpecification(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  //Post Images 
  const [images, setImages] = useState<string[]>([]);

  const postImageMutation = usePostImage({
    config: {
      onSuccess: (data: AxiosResponse) => {
        
        setImages([...images, data.data.payload.link]);
      },
    },
  });


  return (
    <Authorization allowedAccess={["FORBIDDEN"]}>
      <PageHeader onBack={() => null} title="Create Service Category" />
      <ServiceCategoryCreateForm
        initialValues={{
          name: "",
          description: "",
          slug: "",
          images: images,
          specification: "",
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        postImageMutation={postImageMutation}
        isLoading={createServiceCategory.isLoading}
        onFinish={(values) => {
          
          values.specification = specification;
          values.images = images;
          createServiceCategory.mutateAsync(values);
        }}
      />
    </Authorization>
  );
};

export default ServiceCategoryCreatePage;