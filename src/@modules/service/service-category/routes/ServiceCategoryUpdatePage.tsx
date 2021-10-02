import { Authorization } from "@modules/auth";
import { usePostImage } from "@modules/image/hooks/usePostImage";
import { Paths } from "@shared/enums";
import { Purify } from "@shared/utils";
import { PageHeader } from "antd";
import { AxiosResponse } from "axios";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ServiceCategoryUpdateForm } from "../components/ServiceCategoryUpdateFrom";
import { useSingleServiceCategory } from "../hooks/useSingleServiceCategory";
import { useUpdateServiceCategory } from "../hooks/useUpdateServiceCategory";


const ServiceCategoryUpdatePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleServiceCategory({ id });
  const udpateServiceCategoryMutation = useUpdateServiceCategory({
    config: {
      onSuccess: (data: AxiosResponse) => {
        navigate(Paths.ServiceCategoryList);
      },
    },
  });

  const [specification, setSpecification] = useState("");

  //Grab Editor Text
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(
      ContentState.createFromText(String(data?.data?.payload?.specification))
    )
  );

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    setSpecification(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  //Post Images
  const [images, setImages] = useState<any[]>([]);

  const postImageMutation = usePostImage({
    config: {
      onSuccess: (data: AxiosResponse) => {
        
        setImages([...images, data.data.payload.link]);
      },
    },
  });

  const [imgState, setImgState] = useState<any>({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: data?.data?.payload?.images.map((img: any) => {
      return {
        name: img.id,
        status: "done",
        url: img.link,
        thumbUrl: img.link,
      };
    }),
  });

  const prevImg = imgState?.fileList?.map((img: any) => img.url);

  return (
    <Authorization allowedAccess={["FORBIDDEN"]}>
      <Purify loading={isLoading} empty={false}>
        <PageHeader
          onBack={() => navigate(-1)}
          title="Update Service Category"
        />

        <ServiceCategoryUpdateForm
          initialValues={{
            name: data?.data?.payload?.name,
            description: data?.data?.payload?.description,
            slug: data?.data?.payload?.slug,
            images: data?.data?.payload?.images,
            specification: data?.data?.payload?.specification,
          }}
          imgState={imgState}
          setImgState={setImgState}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          postImageMutation={postImageMutation}
          isLoading={udpateServiceCategoryMutation.isLoading}
          specification={specification}
          onFinish={(values: any) => {
            values.specification = specification;
            values.images = [...images, ...prevImg];
            
            udpateServiceCategoryMutation.mutateAsync({ ...values, id });
          }}
        />
      </Purify>
    </Authorization>
  );
};

export default ServiceCategoryUpdatePage;
