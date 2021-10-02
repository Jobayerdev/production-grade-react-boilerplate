import { Button, Col, DatePicker, Form, Radio, Row, Select } from "antd";

import { ICreateAppointment } from "@shared/interfaces";
import moment from "moment";
import { useAllPetProfile } from "@modules/pet/pet-profiles/hooks/useAllPetProfile";
import { useAllServicePackage } from "@modules/service/service-package/hooks/useAllServicePackage";
import { useAllServices } from "@modules/service/services/hooks/useAllServices";
import { useState } from "react";
import { useUsers } from "@modules/users/hooks/useUsers";

const { Option } = Select;

interface IFProps {
    loading?: boolean
    onFinish: (value: ICreateAppointment) => void
}

const AppointmentCreateForm: React.FC<IFProps> = ({ loading, onFinish, }) => {

    const [serviceSearchTerm, setServiceSearchTerm] = useState<string>()
    const services = useAllServices({
        options: {
            searchTerm: serviceSearchTerm
        }
    })

    const [servicePackageSearchTerm, setPackageSearchTerm] = useState<string>()
    const servicePackages = useAllServicePackage({
        options: {
            searchTerm: servicePackageSearchTerm
        }
    })

    const [userSearchTerm, setUserSearchTerm] = useState<string>()
    const users = useUsers({
        options: {
            searchTerm: userSearchTerm,
        },
    })

    const [petSearchTerm, setPetSearchTerm] = useState<string>()
    const pets = useAllPetProfile({
        options: {
            searchTerm: petSearchTerm,
        },
    })

    const handleSubmitForm = (values:any) => {
        values.scheduleAt = values.scheduleAt._d.toString().substr(0, 24)
        onFinish(values)
    }

    return (
        <Form
            size="large"
            layout="vertical"
            onFinish={handleSubmitForm}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Frequency"
                        name="frequency"
                        rules={[{ required: true, message: "Select a frequency" }]}>
                        <Select
                            allowClear
                            placeholder="Select a frequency"
                        >
                            <Option value={"RECURRING"}>RECURRING</Option>
                            <Option value={"ONE_TIME"}>ONE_TIME</Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Schedule At"
                        name="scheduleAt"
                        rules={[{ required: true, message: "Please input a time!" }]}>
                        <DatePicker
                            format="YYYY-MM-DD HH:mm a"
                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm a') }}
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Service"
                        name="service"
                        rules={[{ required: true, message: "Please Select a service" }]}>
                        <Select
                            allowClear
                            showSearch
                            placeholder="Select a service"
                            loading={services.isLoading}
                            onSearch={(val) => setServiceSearchTerm(val)}
                            optionFilterProp="children"
                            filterOption={(input: any, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                services?.data?.data?.payload.map((s: any) => <Option key={s.id} value={s.id}>{s.name || s.id}</Option>)
                            }

                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Service Package"
                        name="servicePackage"
                        rules={[{ required: true, message: "Please Select a servicePackage" }]}>
                        <Select
                            allowClear
                            showSearch
                            placeholder="Select a servicePackage"
                            loading={servicePackages.isLoading}
                            onSearch={(val) => setPackageSearchTerm(val)}
                            optionFilterProp="children"
                            filterOption={(input: any, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                servicePackages?.data?.data?.payload.map((pk: any) => <Option key={pk.id} value={pk.id}>{pk.name}</Option>)
                            }

                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Pet Owner"
                        name="user"
                        rules={[{ required: true, message: "Chose a owner" }]}
                    >
                        <Select
                            allowClear
                            showSearch
                            loading={users.isLoading}
                            placeholder="select by user"
                            onSearch={(val) => setUserSearchTerm(val)}
                            optionFilterProp="children"
                            filterOption={(input: any, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                users?.data?.data?.payload.map((user: any) => <Option key={user.id} value={user.id}>{user.name || user.id}</Option>)
                            }
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Pet"
                        name="pet"
                        rules={[{ required: true, message: "Chose a pet" }]}
                    >
                        <Select
                            allowClear
                            showSearch
                            loading={pets.isLoading}
                            placeholder="select by pet"
                            onSearch={(val) => setPetSearchTerm(val)}
                            optionFilterProp="children"
                            filterOption={(input: any, option: any) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                pets?.data?.data?.payload.map((pet: any) => <Option key={pet.id} value={pet.id}>{pet.name}</Option>)
                            }
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Form.Item style={{ marginTop: 40 }}>
                        <Button loading={loading} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default AppointmentCreateForm;