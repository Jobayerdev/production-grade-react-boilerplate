import { Authorization } from "@modules/auth"
import { AxiosResponse } from "axios"
import { PageHeader } from "antd"
import { Paths } from "@shared/enums"
import React from "react"
import { UserForm } from "../components/elements/UserForm"
import { useCreateUser } from "../hooks/useCreateUser"
import { useNavigate } from "react-router-dom"

export const CreateUserPage = () => {
	const navigate = useNavigate()
	const createUserMutation = useCreateUser({
		config: {
			onSuccess: (data: AxiosResponse) => {
				navigate(Paths.UserList)
			},
		},
	})
	return (
		<Authorization allowedAccess={["UserCreate"]}>
			<PageHeader onBack={() => null} title="Create User" />
			<UserForm
				initialValues={{
					name: "",
					email: "",
					phoneNumber: "",
					password: "",
					gender: "",
					address: "",
					type: "",
				}}
				isLoading={createUserMutation.isLoading}
				onFinish={(values) => createUserMutation.mutateAsync(values)}
			/>
		</Authorization>
	)
}
