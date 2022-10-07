import React from 'react';

function Medicine(props) {
    return (
        <> 
            <div className="layout_padding-top">
                <section className="discount_section ">
                    <div className="container-fluid ">
                        <div className="row ">
                            <div className="col-lg-3 col-md-5 offset-md-2">
                                <div className="detail-box">
                                    <h2>
                                        You get <br />
                                        any medicine <br />
                                        on
                                        <span>
                                            10% discount
                                        </span>
                                    </h2>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                    </p>
                                    <div>
                                        <a href>
                                            Buy Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-5">
                                <div className="img-box">
                                    <img src="Assets/images/medicines.jpg" alt="" className='b-red'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                
            <div className="health_section layout_padding">
                <div className="health_carousel-container">
                    <h2 className="text-uppercase">
                        Vitamins &amp; Supplements
                    </h2>
                    <div className="carousel-wrap layout_padding2">
                        <div className="owl-carousel owl-2">
                            <div className="item">
                                <div className="box">
                                    <div className="btn_container">
                                        <a href>
                                            Buy Now
                                        </a>
                                    </div>
                                    <div className="img-box">
                                        <p>hhhhhh</p>
                                        <img src="Assets/images/client.png" alt="" className='b-red' />
                                    </div>
                                    <div className="detail-box">
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                        </div>
                                        <div className="text">
                                            <h6>
                                                Medicine
                                            </h6>
                                            <h6 className="price">
                                                <span>
                                                    $
                                                </span>
                                                30
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="btn_container">
                                        <a href>
                                            Buy Now
                                        </a>
                                    </div>
                                    <div className="img-box">
                                        <img src="Assets/images/p-6.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                        </div>
                                        <div className="text">
                                            <h6>
                                                Medicine
                                            </h6>
                                            <h6 className="price">
                                                <span>
                                                    $
                                                </span>
                                                30
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="btn_container">
                                        <a href>
                                            Buy Now
                                        </a>
                                    </div>
                                    <div className="img-box">
                                        <img src="Assets/images/p-6.jpg" alt =""/>
                                    </div>
                                    <div className="detail-box">
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                        </div>
                                        <div className="text">
                                            <h6>
                                                Medicine
                                            </h6>
                                            <h6 className="price">
                                                <span>
                                                    $
                                                </span>
                                                30
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="box">
                                    <div className="btn_container">
                                        <a href>
                                            Buy Now
                                        </a>
                                    </div>
                                    <div className="img-box">
                                        <img src="Assets/images/p-6.jpg" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <div className="star_container">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                        </div>
                                        <div className="text">
                                            <h6>
                                                Medicine
                                            </h6>
                                            <h6 className="price">
                                                <span>
                                                    $
                                                </span>
                                                30
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a href>
                        See more
                    </a>
                </div>
            </div>
        </>

    );
}
export default Medicine;