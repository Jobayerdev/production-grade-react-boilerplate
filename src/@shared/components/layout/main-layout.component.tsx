import { Avatar, Layout, Menu, Tag, Typography } from "antd"
import {
	DashboardOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PoweroffOutlined,
} from "@ant-design/icons"
import React, { useState } from "react"

import { IMAGES } from "@shared/assets"
import { useAuth } from "@modules/auth"
import { useNavigate } from "react-router-dom"
import { useResponsive } from "ahooks"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography
interface IFProps {
	children: any
}
const MainLayout: React.FC<IFProps> = ({ children }) => {
	const navigate = useNavigate()
	const { md } = useResponsive()
	const auth = useAuth()
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
	let pathname = window.location.pathname
	const styles = {
		sider: {
			background: "#fff",
			boxShadow: "0 0 20px #0815420d",
			borderRight: "1px solid #ecf3fa",
			overflow: "auto",
			height: "100vh",
			position: "fixed",
			left: !md && isCollapsed ? "-100%" : 0,
			zIndex: 9,
		},

		header: {
			position: "fixed",
			width: "100%",
			background: "#fff",
			padding: "0 14px",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			zIndex: 8,
			paddingLeft: !md ? (isCollapsed ? 20 : 220) : isCollapsed ? 100 : 220,
			right: 0,
			boxShadow: "0 0 20px #0815420d",
			borderBottom: "1px solid #ecf3fa",
		},
		layout: {
			background: "#f6f8fa",
			marginLeft: !md ? 0 : isCollapsed ? 80 : 200,
			padding: 14,
			paddingTop: 0,
		},

		content: {
			borderRadius: 5,
			padding: 14,
			minHeight: 280,
			background: "#fff",
			// marginTop: 63,
			marginTop: 77,
			marginLeft: 0,
			marginRight: 14,
		},
	}
	return (
		<>
			<Layout style={{ minHeight: "100vh" }}>
				<Sider
					style={styles.sider as any}
					breakpoint="md"
					onBreakpoint={(broken) => {
						if (broken === true) {
							setIsCollapsed(true)
						}
					}}
					trigger={null}
					collapsible
					collapsed={isCollapsed}>
					<div
						style={{ margin: 15, display: "flex", justifyContent: "center" }}>
						{isCollapsed ? (
							<img
								className="logo"
								src={IMAGES.Logo}
								style={{ width: 30 }}
								alt="logo"
							/>
						) : (
							<img
								className="logo"
								src={IMAGES.Logo}
								style={{ width: 110 }}
								alt="logo"
							/>
						)}
					</div>
					<div
						style={{
							marginTop: 30,
							marginBottom: 15,
						}}>
						{isCollapsed ? (
							<div style={{ display: "flex", justifyContent: "center" }}>
								<Avatar src={`https://i.ibb.co/LNCj9Fd/mostbeautiful.jpg`} />
							</div>
						) : (
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									paddingLeft: 10,
								}}>
								<Avatar
									size="large"
									src={`https://i.ibb.co/LNCj9Fd/mostbeautiful.jpg`}
								/>
								<div style={{ flex: 1, marginLeft: 15 }}>
									<Text type="secondary">Welcome,</Text>
									<Title
										style={{
											fontSize: 14,
											textTransform: "capitalize",
											margin: 0,
										}}
										level={5}>
										Econ
									</Title>
								</div>
							</div>
						)}
					</div>

					<Menu
						theme="light"
						mode="inline"
						defaultSelectedKeys={[String(pathname)]}
						defaultOpenKeys={[String(pathname)]}>
						<Menu.Item
							icon={<DashboardOutlined />}
							onClick={() => navigate("/")}
							key={"/"}>
							Analytics
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout style={styles.layout as any}>
					<Header style={styles.header as any}>
						<div
							style={{ fontSize: 22, cursor: "pointer" }}
							onClick={() => setIsCollapsed(!isCollapsed)}>
							{isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
						</div>

						<Tag
							onClick={() => {
								auth.logoutFn()
							}}
							style={{ cursor: "pointer" }}
							icon={<PoweroffOutlined />}
							color="default">
							Logout
						</Tag>
					</Header>
					<Content style={styles.content as any}>{children}</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default MainLayout
