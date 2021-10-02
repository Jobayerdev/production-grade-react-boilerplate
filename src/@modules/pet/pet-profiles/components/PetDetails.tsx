import { Carousel, Col, Row } from "antd";

import { IPetProfile } from "@shared/interfaces";

interface IFProps {
    data: IPetProfile
}

const PetDetails: React.FC<IFProps> = ({ data }) => {

    console.log(data);

    return (
        <div className="pet-details">

            <div className="pet-images">
                <Carousel autoplay>
                    {
                        data.images.map(img =>
                            <div key={img.id} className="image-holder">
                                <img src={img.link} alt="pet-img" />
                            </div>
                        )
                    }
                </Carousel>
            </div>

            <Row
                gutter={[
                    { xs: 20, sm: 20, md: 50, lg: 80 },
                    { xs: 80, sm: 80, md: 80 },
                ]}
            >
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="pet-primary-info">
                        <h3 className="title">Pet Primary Info</h3>
                        <div className="primary-info-box">
                            <ul>
                                <li><b>Name: </b> {data.name}</li>
                                <li><b>Gender: </b> {data.gender}</li>
                                <li><b>Pet type: </b> {data.petType.name}</li>
                                <li><b>Pet Breed: </b> {data.breed.name}</li>
                                <li><b>Pet for: </b> {data.petFor}</li>
                                <li><b>Weight: </b> {data.weight}</li>
                                <li><b>Date of Birth: </b> {data.dob}</li>
                            </ul>
                        </div>
                    </div>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div className="pet-owner-info">
                        <h3 className="title">Pet Owner Info</h3>
                        <div className="owner-info-box">
                            <ul>
                                <li><b>Name: </b> {data.owner.name}</li>
                                <li><b>Is Active: </b> {data.owner.isActive.toString()}</li>
                                <li><b>Gender: </b> {data.owner.gender}</li>
                                <li><b>Phone: </b> {data.owner.phoneNumber}</li>
                                <li><b>Email: </b> {data.owner.email}</li>
                                <li><b>Eye color: </b> {data.owner.type}</li>
                                <li><b>Address: </b> {data.owner.address}</li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="pet-details-area">
                <div className="d-title">
                    <h1>Full Details </h1>
                </div>


                <div className="more-details">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-2  gap-10">
                        <div className="info-box">
                            <h4>Eye color</h4>
                            <span>{data.eyeColor}</span>
                        </div>
                        <div className="info-box">
                            <h4>Primary color</h4>
                            <span>{data.primaryColor}</span>
                        </div>
                        <div className="info-box">
                            <h4>Secondary color</h4>
                            <span>{data.secondaryColor}</span>
                        </div>
                        <div className="info-box">
                            <h4>Active area</h4>
                            <span>{data.activeArea}</span>
                        </div>
                        <div className="info-box">
                            <h4>Is Active</h4>
                            <span>{data.isActive.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Vaccinate</h4>
                            <span>{data.vaccinated.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Heat</h4>
                            <span>{data.heat.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Injured</h4>
                            <span>{data.injured.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Purebred</h4>
                            <span>{data.purebred.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Spayed</h4>
                            <span>{data.spayed.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Hypoallergenic</h4>
                            <span>{data.hypollergenic.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Special Diet</h4>
                            <span>{data.specialDiet.toString()}</span>
                        </div>
                        <div className="info-box">
                            <h4>Potty Trained</h4>
                            <span>{data.pottyTrained.toString()}</span>
                        </div>
                        <div className="info-box col-span-2">
                            <h4>Food</h4>
                            <span>{data.food}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;