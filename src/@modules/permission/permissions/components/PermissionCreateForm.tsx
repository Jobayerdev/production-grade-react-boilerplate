import { Button, Form, Input, Select } from "antd";

import { IPermissions } from "@shared/interfaces";
import { usePermissionTypes } from "@modules/permission/permission-type/hooks/usePermissionTypes";
import { useState } from "react";

const { Option } = Select;

interface IFProps {
    onFinish: (values: IPermissions) => void;
    isLoading?: boolean
}


const PermissionCreateForm: React.FC<IFProps> = ({ onFinish }) => {

    const [searchTerm, setSearchTerm] = useState<string>("")

    const { data } = usePermissionTypes({
		options: {
			searchTerm: searchTerm
		},
	})

    function onSearch(val:string) {
        setSearchTerm(val)
    }

    interface ISelectOptions { 
            id: string
            title: string
        }
    

    const selectOptions = data?.data?.payload;

    return (
        <Form
            size="middle"
            layout="vertical"
            onFinish={onFinish}>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input role title!" }]}>
                <Input placeholder="Type here" />
            </Form.Item>
            <Form.Item
                label="Permission Type"
                name="permissionType"
                rules={[{ required: true, message: "Please select permission type" }]}>

                <Select
                    placeholder="select a value"
                    showSearch
                    optionFilterProp="children"
                    onSearch={onSearch}
                    filterOption={(input, option:any) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        selectOptions?.map((op:ISelectOptions) => <Option key={op.id} value={op.id}>{op.title}</Option>)
                    }
                    
                </Select>
            </Form.Item>



            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PermissionCreateForm;