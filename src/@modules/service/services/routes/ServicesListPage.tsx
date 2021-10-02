import { Authorization } from "@modules/auth"
import { Paths } from "@shared/enums"
import { Button, PageHeader } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import { ServiceList } from "../components/ServicesList"


export const ServicesListPage = () => {
	const navigate = useNavigate()
	return (
		<Authorization allowedAccess={["FORBIDDEN"]}>
			<PageHeader
				onBack={() => navigate(-1)}
				title="Service List"
				extra={[
					<Button key="one" onClick={() => navigate(Paths.ServicesCreate)} type="primary">
						Create
					</Button>,
				]}
			/>
			<ServiceList />
		</Authorization>
	)
}
