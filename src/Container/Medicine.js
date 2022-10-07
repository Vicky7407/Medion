import React from 'react';
import Carousel from 'nuka-carousel';

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
                                    <img src="Assets/images/medicines.jpg" alt="medicine" className='b-red' />

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
                    <Carousel wrapAround={true} slidesToShow={3}>
                            <img src="Assets/images/p-1.jpg" />
                            <img src="Assets/images/p-2.jpg" />
                            <img src="Assets/images/p-3.jpg" />
                            <img src="Assets/images/p-4.jpg" />
                            <img src="Assets/images/p-5.jpg" />
                </Carousel>
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