import { Button, Form, Input, Select } from "antd"

import { useState } from "react";
import { useUsers } from "@modules/users/hooks/useUsers"

const { Option } = Select;

interface IFProps {
    onSearch: (value: object) => void;
}
const AppointmentFilter: React.FC<IFProps> = ({ onSearch }) => {

    const [userSearchTerm, setUserSearchTerm] = useState<string>()
    const { data, isLoading } = useUsers({
        options: {
            searchTerm: userSearchTerm,
        },
    })

    return (

        <div className="my-6">
            <Form
                className="justify-end"
                name="appointment-filter"
                layout="inline"
                onFinish={onSearch}
            >
                <Form.Item
                    name="code"
                >
                    <Input placeholder="Search by code" />
                </Form.Item>
                <Form.Item
                    name="appointmentStatus"
                >
                    <Input placeholder="Search by AppointmentStatus" />
                </Form.Item>

                <Form.Item
                    name="user"
                >
                    <Select
                        style={{ width: 150 }}
                        allowClear
                        showSearch
                        loading={isLoading}
                        placeholder="Search by user"
                        onSearch={(val) => setUserSearchTerm(val)}
                        optionFilterProp="children"
                        filterOption={(input: any, option: any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            data?.data?.payload.map((user: any) => <Option key={user.id} value={user.id}>{user.name || user.id}</Option>)
                        }
                    </Select>

                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AppointmentFilter;