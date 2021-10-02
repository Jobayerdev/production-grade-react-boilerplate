import {
    Button,
    Col,
    DatePicker,
    Form,
    Input,
    Radio,
    Row,
    Select,
    Upload,
    message,
} from "antd"

import { ICreatePetProfile } from "@shared/interfaces";
import axios from "axios";
import { useAllPetLifeStyle } from "@modules/pet/pet-life-style/hooks/useAllPetLifeStyle";
import { useAllPetType } from "../../pet-type/hooks/useAllPetType";
import { usePetBreedsList } from "../../pet-breed/hooks/usePetBreeds";
import { useState } from "react";
import { useUsers } from "@modules/users/hooks/useUsers";

const { TextArea } = Input

const { Option } = Select;

interface IFProps {
    onFinish: (values: ICreatePetProfile) => void;
    loading?: boolean
}

const PetProfileCreateForm: React.FC<IFProps> = ({ onFinish, loading }) => {

    const [image, setImage] = useState<object[]>([])

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
                setImage([...image, response?.data?.payload?.link]);
            })
            .catch(error => {
                
            });
    };

    const handleSubmitForm = (values: any) => {
        values.images = image;
        values.dob = values.dob._d.toString().substr(0, 15)
        onFinish(values)
    }

    const [petTypeSearchTerm, setPetTypeSearchTerm] = useState<string>('')
    function onPetTypeSearch(val: string) {
        setPetTypeSearchTerm(val);

    }
    const petTypeData = useAllPetType({
        options: {
            searchTerm: petTypeSearchTerm,
        },
    })

    const [petBreedSearchTerm, setPetBreedSearchTerm] = useState<string>('')
    function onPetBreedSearch(val: string) {
        setPetBreedSearchTerm(val);

    };
    const petBreedData = usePetBreedsList({
        options: {
            searchTerm: petBreedSearchTerm,
        },
    })

    const [petLifeStyleSearchTerm, setPetLifeStyleSearchTerm] = useState<string>('')
    function onPetLifeStyleSearch(val: string) {
        setPetLifeStyleSearchTerm(val);

    };
    const petLifeStyleData = useAllPetLifeStyle({
        options: {
            searchTerm: petLifeStyleSearchTerm,
        },
    })

    const [petOwnerSearchTerm, setOwnerSearchTerm] = useState<string>('')
    function onPetOwnerSearch(val: string) {
        setOwnerSearchTerm(val);

    };
    
    const petOwnerData = useUsers({
        options: {
            searchTerm: petOwnerSearchTerm,
        },
    })


    return (
        <Form
            className="pet-profile-form"
            layout="vertical"
            size="large"
            onFinish={handleSubmitForm}
            initialValues={{ remember: true }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={16}>
                    <Form.Item
                        label="Pet For"
                        name="petFor"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <Radio.Button value="Profile" className="w-full">
                                        Profile
                                    </Radio.Button>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <Radio.Button value="Adoption" className="w-full">
                                        Adoption
                                    </Radio.Button>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <Radio.Button value="Engage" className="w-full">
                                        Engage
                                    </Radio.Button>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                                    <Radio.Button value="Sale" className="w-full">
                                        Sale
                                    </Radio.Button>
                                </Col>
                            </Row>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Pet Photo"
                        name="images"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Upload
                            action=""
                            beforeUpload={beforeUpload}
                            onChange={handleUpload}
                        >
                            <Button>Upload a Photo</Button>
                        </Upload>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Pet Name"
                        name="name"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Input placeholder="Pet's name" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Pet Type"
                        name="petType"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Select
                            placeholder="Select your pet type"
                            style={{ width: "100%" }}
                            showSearch
                            optionFilterProp="children"
                            onSearch={onPetTypeSearch}
                            filterOption={(input, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                petTypeData.data?.data?.payload.map((type: any) => <Option value={type.id}>{type.name}</Option>)
                            }

                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Breed"
                        name="breed"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Select
                            placeholder="Pet's breed"
                            style={{ width: "100%" }}
                            showSearch
                            optionFilterProp="children"
                            onSearch={onPetBreedSearch}
                            filterOption={(input, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                petBreedData.data?.data?.payload.map((breed: any) => <Option value={breed.id}>{breed.name}</Option>)
                            }

                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Pet Gender"
                        name="gender"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value="Female" className="w-2/4">
                                Female
                            </Radio.Button>
                            <Radio.Button value="Male" className="w-2/4">
                                Male
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Birthday"
                        name="dob"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Pet Weight"
                        name="weight"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Input type="number" placeholder="Pet's Weight" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Primary Color"
                        name="primaryColor"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Input placeholder="Primary Fur Color" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Secondary Color"
                        name="secondaryColor"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Input placeholder="Secondary Fur Color" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Eye Color"
                        name="eyeColor"
                        rules={[{ required: true, message: "Please fill this felid !" }]}>
                        <Input placeholder="Eye Color" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Vaccinated"
                        name="vaccinated"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Spayed or Neutered"
                        name="spayed"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Any injury"
                        name="injured"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Purebred"
                        name="purebred"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Heat"
                        name="heat"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Potty Trained"
                        name="pottyTrained"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Special Diet"
                        name="specialDiet"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Hypoallergenic"
                        name="hypollergenic"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Radio.Group
                            buttonStyle="solid"
                            className="w-full text-center">
                            <Radio.Button value={true} className="w-2/4">
                                Yes
                            </Radio.Button>
                            <Radio.Button value={false} className="w-2/4">
                                No
                            </Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Active area"
                        name="activeArea"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Select placeholder="Select pet active area" style={{ width: "100%" }}>
                            <Option value="Indoor">Indoor</Option>
                            <Option value="Outdoor">Outdoor</Option>
                            <Option value="Both">Both</Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Lifestyle"
                        name="lifeStyle"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Select
                            placeholder="Pet Life Style"
                            style={{ width: "100%" }}
                            showSearch
                            optionFilterProp="children"
                            onSearch={onPetLifeStyleSearch}
                            filterOption={(input, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                petLifeStyleData.data?.data?.payload.map((style: any) => <Option value={style.id}>{style.name}</Option>)
                            }

                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        label="Pet Owner"
                        name="owner"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <Select
                            placeholder="Select pet lifestyle"
                            style={{ width: "100%" }}
                            showSearch
                            optionFilterProp="children"
                            onSearch={onPetOwnerSearch}
                            filterOption={(input, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                petOwnerData.data?.data?.payload.map((owner: any) => <Option value={owner.id}>{owner.name}</Option>)
                            }
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                    <Form.Item
                        className="col-span-2"
                        label="Food"
                        name="food"
                        rules={[{ required: true, message: "Please fill this field!" }]}>
                        <TextArea
                            size="small"
                            showCount
                            maxLength={150}
                            placeholder="Tell us the what, when, and where of food"
                        />
                    </Form.Item>
                </Col>

            </Row>

            <div className="text-right mt-6">
                <Button loading={loading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </div>

        </Form>
    );
};

export default PetProfileCreateForm;