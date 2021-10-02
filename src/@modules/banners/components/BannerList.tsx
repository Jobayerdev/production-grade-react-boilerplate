import { Pagination, Popconfirm } from "antd"
import { useLocation, useNavigate } from "react-router-dom"

import EditBannerForm from "./EditBannerForm"
import Modal from "antd/lib/modal/Modal"
import { Purify } from "@shared/utils"
import { useBanners } from "../hooks/useBanners"
import { useDeleteBanner } from "../hooks/useDeleteBanner"
import { useState } from "react"

const BannerList = () => {
	const deleteBanner = useDeleteBanner({})
	const navigate = useNavigate()
	const { search } = useLocation()

	const [page, setPage] = useState<number>(1)

	const { data, isLoading } = useBanners({
		options: {
			page: page,
			take: 8,
		},
	})

	const BannerData = data?.data?.payload

	return (
		<Purify loading={isLoading} empty={data?.data?.total === 0 ? true : false}>
			<div className="banner-list">
				<div className="grid grid-cols-4 gap-6">
					{BannerData?.map((banner: any) => (
						<div key={banner.id} className="banner-card">
							<div className="banner-image">
								<img src={banner.image} alt="" />
							</div>

							<div className="banner-details">
								<h2 className="title">{banner.title}</h2>
								<div className="action">
									<button onClick={() => navigate(`?edit=${banner.id}`)}>
										Edit
									</button>
									<button>Details</button>
									<Popconfirm
										title="Are you sure to delete this banner?"
										onConfirm={() => deleteBanner.mutateAsync(banner.id)}
										okText="Yes"
										cancelText="No">
										<button>Remove</button>
									</Popconfirm>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="list-pagination">
					<Pagination
						pageSize={8}
						total={data?.data?.total}
						onChange={(page) => setPage(page)}
					/>
				</div>

				<Modal
					centered
					title="Update Banner"
					width={700}
					maskClosable={false}
					visible={search.startsWith("?edit") ? true : false}
					onCancel={() => navigate("")}
					footer={false}>
					{search.startsWith("?edit") && <EditBannerForm />}
				</Modal>
			</div>
		</Purify>
	)
}

export default BannerList
