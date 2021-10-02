import { Button, PageHeader } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

import { Authorization } from "@modules/auth";
import BannerList from "../components/BannerList";
import CreateBannerForm from "../components/CreateBannerForm";
import Modal from "antd/lib/modal/Modal";

const BannersPage = () => {

    const navigate = useNavigate()
    const { search } = useLocation();


    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <PageHeader
                onBack={() => null}
                title="Banners"
                extra={[
                    <Button key="1" onClick={() => navigate("?createBanner")} type="primary">
                        Create Banner
                    </Button>
                ]}
            />

            <BannerList />

            <Modal
                centered
                title="Create Banner"
                width={700}
                maskClosable={false}
                visible={search.startsWith("?createBanner") ? true : false}
                onCancel={() => navigate('')}
                footer={false}
            >
                {
                    search.startsWith("?createBanner") && <CreateBannerForm />
                }
                
            </Modal>
        </Authorization>
    );
};

export default BannersPage;