import { Button, PageHeader } from "antd";

import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import PetLifeStyleList from "../components/PetLifeStyleList";
import { useNavigate } from "react-router-dom";

const PetLifeStyleListPage = () => {

    const navigate = useNavigate()

    return (
        <Authorization allowedAccess={["FORBIDDEN"]}>
            <PageHeader
                onBack={() => null}
                title="Pet Life Style List"
                extra={[
                    <Button key="1" onClick={() => navigate(Paths.PetLifeStyleCreate)} type="primary">
                        Create
                    </Button>
                ]}
            />
            <PetLifeStyleList />
        </Authorization>
    );
};

export default PetLifeStyleListPage;