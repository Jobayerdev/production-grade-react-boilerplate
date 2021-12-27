import "./style.scss"

import {
	AiOutlineDashboard,
	AiOutlineMenuFold,
	AiOutlineMenuUnfold,
} from "react-icons/ai"
import { Button, Divider, Dropdown, Layout, Menu } from "antd"
import React, { ReactNode, useEffect, useState } from "react"

import { DownOutlined } from "@ant-design/icons"
import { FaAngleRight } from "react-icons/fa"
import { FiHelpCircle } from "react-icons/fi"
import { IMAGES } from "../../assets/index"
import { Paths } from "../../enums/index"
import { TiStopwatch } from "react-icons/ti"
import { useAuth } from "@features/auth"
import { useNavigate } from "react-router-dom"
import { useResponsive } from "ahooks"

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
interface IFProps {
	children: ReactNode
	pageTitle?: string
}
export const WinterLayout: React.FC<IFProps> = ({ children, pageTitle }) => {
	const responsive = useResponsive()
	const { logoutFn } = useAuth()
	// const userQuery = useUser({})

	const isMobileView = responsive.lg === false
	const [sideBarCollapse, setSideBarCollapse] = useState(false)
	const navigation = useNavigate()
	useEffect(() => {
		if (isMobileView) {
			setSideBarCollapse(true)
		}
		// eslint-disable-next-line
	}, [])
	const user: any = {}

	const menu = (
		<Menu className="winter__dropdown">
			<div
				className="winter__dropdown__head"
				onClick={() => navigation(Paths.UsersMe)}>
				<h2 className="text-sm text-secondary font-medium">
					{user?.userInfo?.name}
				</h2>
				<p className="text-xs text-secondary mt-1 font-normal">
					Your workspace
				</p>
				<FaAngleRight className="absolute text-xl  text-secondary right-2 top-6" />
			</div>
			<Menu.Item
				className="winter__dropdown__item"
				onClick={() => navigation(Paths.UsersMe)}>
				Preference
			</Menu.Item>
			<Menu.Item
				className="winter__dropdown__item"
				onClick={() => navigation(Paths.UsersMe)}>
				Security
			</Menu.Item>
			<Menu.Item
				className="winter__dropdown__item"
				onClick={() => {
					logoutFn()
				}}>
				Logout
			</Menu.Item>
		</Menu>
	)
	return (
		<Layout className="winter-layout">
			<Sider
				trigger={null}
				collapsible
				collapsed={sideBarCollapse}
				className="winter-layout__sider"
				style={{
					position: "absolute",
					left: 0,
					height: "100%",
				}}
				collapsedWidth={0}
				width={200}>
				<div className="py-5 flex pl-5 justify-start items-center">
					<img src={IMAGES.Logo} className="w-8" alt="" />
					<p className="font-medium text-base ml-2">Appxify</p>
					<div className="absolute right-4 cursor-pointer lg:hidden">
						<AiOutlineMenuFold
							onClick={() => {
								setSideBarCollapse(true)
							}}
							className="text-xl text-secondary "
						/>
					</div>
				</div>
				<Menu
					theme="light"
					defaultSelectedKeys={["1"]}
					mode="inline"
					className="border-none">
					<Menu.Item
						onClick={() => navigation("Paths.Dashboard")}
						key="Dashboard"
						icon={<AiOutlineDashboard />}>
						Dashboard
					</Menu.Item>
					<Divider className="my-2" />
					<SubMenu key="Campaign" icon={<TiStopwatch />} title="Campaign">
						<Menu.Item
							onClick={() => navigation("Paths.CampaignOverview")}
							key="CampaignOverview">
							Overview
						</Menu.Item>
						<Menu.Item
							onClick={() => navigation("Paths.CreateSmsCampaign")}
							key="CreateCampaign">
							Create Campaign
						</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout
				className="winter-layout__inner"
				style={{
					marginLeft: isMobileView ? 0 : 200,
				}}>
				<Header
					className="header"
					style={{
						marginLeft: isMobileView ? 0 : 200,
					}}>
					<div className="header__left">
						<h3 className="header__sidebar__toggler inline-block lg:hidden">
							<AiOutlineMenuUnfold
								className="text-xl mr-2 text-secondary cursor-pointer"
								onClick={() => {
									setSideBarCollapse(false)
								}}
							/>
						</h3>
						<h3 className="header__page-title">{pageTitle}</h3>
					</div>
					<div className="header__right">
						<div className="header__nav">
							<ul>
								<li>
									<a href="/" className="flex items-center space-x-2">
										<span>Support</span> <FiHelpCircle />
									</a>
								</li>
							</ul>
						</div>
						<div className="header__keys">
							<Button type="dashed" className="text-primary border-2">
								Balance $12
							</Button>
						</div>
						<div className="header__actions">
							<Dropdown overlay={menu}>
								<div className="flex items-center cursor-pointer">
									<img
										className="header__actions__avater"
										src={user?.userInfo?.image}
										alt=""
									/>
									<h3 className="header__actions_username">
										{user?.userInfo?.name}
									</h3>
									<DownOutlined />
								</div>
							</Dropdown>
						</div>
					</div>
				</Header>
				<Content className="winter-layout__content">{children}</Content>
			</Layout>
		</Layout>
	)
}
