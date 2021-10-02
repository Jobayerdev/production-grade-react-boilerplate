import { Avatar, Layout, Menu, Tag, Typography } from "antd"
import {
	DashboardOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	PoweroffOutlined,
	UserOutlined
} from "@ant-design/icons"
import React, { useState } from "react"

import { IMAGES } from "@shared/assets"
import { Paths } from "@shared/enums"
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
								src={IMAGES.LogoSmall}
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
							onClick={() => navigate(Paths.DefaultDashboard)}
							key={String(`${Paths.DefaultDashboard}`)}>
							Analytics
						</Menu.Item>
						<SubMenu key="Sub1" icon={<UserOutlined />} title="User">
							<Menu.Item
								onClick={() => navigate(Paths.UserCreate, { replace: true })}
								key={Paths.UserCreate}>
								Create
							</Menu.Item>
							<Menu.Item
								onClick={() => navigate(Paths.UserList)}
								key={Paths.UserList}>
								List
							</Menu.Item>
						</SubMenu>

						<SubMenu key="Sub2" icon={<UserOutlined />} title="Permission">
							<Menu.Item
								onClick={() => navigate(Paths.PermissionsList, { replace: true })}
								key={Paths.PermissionsList}>
								Permissions
							</Menu.Item>

							<Menu.Item
								onClick={() =>
									navigate(Paths.PermissionsTypeList, { replace: true })
								}
								key={Paths.PermissionsTypeList}>
								Permission Type
							</Menu.Item>

							<Menu.Item
								onClick={() => navigate(Paths.RolesList, { replace: true })}
								key={Paths.RolesList}>
								Roles
							</Menu.Item>
						</SubMenu>

						<SubMenu key="Sub3" icon={<UserOutlined />} title="Pets">
							<Menu.Item
								onClick={() => navigate(Paths.PetLifeStyleList, { replace: true })}
								key={Paths.PetLifeStyleList}>
								Pet Life Style
							</Menu.Item>

							<Menu.Item
								onClick={() => navigate(Paths.PetProfileList, { replace: true })}
								key={Paths.PetProfileList}>
								Pet Profiles
							</Menu.Item>

							<Menu.Item
								onClick={() => navigate(Paths.PetTypeList, { replace: true })}
								key={Paths.PetTypeList}>
								Pet Type List
							</Menu.Item>

							<Menu.Item
								onClick={() => navigate(Paths.PetBreedsList)}
								key={Paths.PetBreedsList}>
								Pet Breeds
							</Menu.Item>
						</SubMenu>

						<SubMenu key="Sub4" icon={<UserOutlined />} title="Common">
							<Menu.Item
								onClick={() => navigate(Paths.PaymentMethods, { replace: true })}
								key={Paths.PaymentMethods}>
								Payment Methods
							</Menu.Item>
						</SubMenu>

						<Menu.Item
							icon={<UserOutlined />}
							onClick={() => navigate(Paths.Banners)}
							key={Paths.Banners}>
							Banners
						</Menu.Item>

						<SubMenu key="Sub5" icon={<UserOutlined />} title="Service">
							<Menu.Item
								onClick={() => navigate(Paths.ServicesList, { replace: true })}
								key={Paths.ServicesList}>
								Service List
							</Menu.Item>
							<Menu.Item
								onClick={() => navigate(Paths.ServiceCategoryList, { replace: true })}
								key={Paths.ServiceCategoryList}>
								Category List
							</Menu.Item>

							<Menu.Item
								onClick={() => navigate(Paths.ServicePackageList, { replace: true })}
								key={Paths.ServicePackageList}>
								Packages
							</Menu.Item>
						</SubMenu>

						<SubMenu key="Sub6" icon={<UserOutlined />} title="E-commerce">
							<Menu.Item
								onClick={() => navigate(Paths.Departments, { replace: true })}
								key={Paths.Departments}>
								Departments
							</Menu.Item>

							<Menu.Item
								onClick={() => navigate(Paths.Brands, { replace: true })}
								key={Paths.Brands}>
								Brands
							</Menu.Item>
						</SubMenu>

						<Menu.Item
							icon={<UserOutlined />}
							onClick={() => navigate(Paths.Appointments)}
							key={Paths.Appointments}>
							Appointments
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
const { SubMenu } = Menu
