import React from 'react';
import Carousel from 'nuka-carousel';

function Onlinebuy(props) {
    return (
        <div>
            {/* health section */}
            <section className="health_section layout_padding">
                <div className="health_carousel-container">
                    <h2 className="text-uppercase">
                        Medicine &amp; Health
                    </h2>
                    <Carousel wrapAround={true} slidesToShow={3}>
                            <img src="Assets/images/p-1.jpg" />
                            <img src="Assets/images/p-2.jpg" />
                            <img src="Assets/images/p-3.jpg" />
                            <img src="Assets/images/p-4.jpg" />
                            <img src="Assets/images/p-5.jpg" />
                </Carousel>
                </div>
                <h2 className="text-uppercase">
                        Medicine &amp; Health
                    </h2>
                <Carousel wrapAround={true} slidesToShow={3}>
                            <img src="Assets/images/p-1.jpg" />
                            <img src="Assets/images/p-2.jpg" />
                            <img src="Assets/images/p-3.jpg" />
                            <img src="Assets/images/p-4.jpg" />
                            <img src="Assets/images/p-5.jpg" />
                </Carousel>
                <div className="d-flex justify-content-center">
                    <a href>
                        See more
                    </a>
                </div>
            </section>
            {/* end health section */}
            {/* info section */}
        </div>
    );
}

export default Onlinebuy;