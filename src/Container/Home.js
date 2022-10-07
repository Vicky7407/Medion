import React from 'react';
import Carousel from 'nuka-carousel';



function Home(props) {

    return (
        <div>
            <div>
                
                <Carousel wrapAround={true} slidesToShow={2} cellAlign='center'>
                    <img src="Assets/images/1221.webp" height={"350px"}  />
                    <img src="Assets/images/1221.webp" height={"350px"} />
                </Carousel>
                
                {/* end feature section */}
                {/* discount section */}
                <section className="discount_section">
                    <div className="container-fluid">
                        <div className="row">
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
                                    <img src="../Assets/images/medicines.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end discount section */}
                {/* health section */}
                <section className="health_section layout_padding">
                    <div className="health_carousel-container">
                        <h2 className="text-uppercase">
                            Medicine &amp; Health
                        </h2>
                        <Carousel wrapAround={true} slidesToShow={3}>
                            <img src="Assets/images/p-1.jpg" alt="image"/>
                            <img src="Assets/images/p-2.jpg" alt="image"/>
                            <img src="Assets/images/p-3.jpg" alt="image"/>
                            <img src="Assets/images/p-4.jpg" alt="image"/>
                            <img src="Assets/images/p-5.jpg" alt="image"/>
                </Carousel>
                    </div>
                    <div className="health_carousel-container">
                        <h2 className="text-uppercase">
                            Vitamins &amp; Supplements
                        </h2>
                        <Carousel wrapAround={true} slidesToShow={3}>
                            <img src="Assets/images/p-1.jpg" alt="image" />
                            <img src="Assets/images/p-2.jpg"alt="image" />
                            <img src="Assets/images/p-3.jpg"alt="image" />
                            <img src="Assets/images/p-4.jpg" alt="image"/>
                            <img src="Assets/images/p-5.jpg" alt="image"/>
                </Carousel>
                       
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href>
                            See more
                        </a>
                    </div>
                </section>
                {/* end health section */}
                {/* about section */}
                <section className="about_section layout_padding">
                    <div className="container">
                        <div className="custom_heading-container ">
                            <h2>
                                About Us
                            </h2>
                        </div>
                        <div className="img-box">
                            <img src="../Assets/images/about-medicine.png" alt="image"/>
                        </div>
                        <div className="detail-box">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking
                                at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                opposed to using 'Content here, content here', making it
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end about section */}
                {/* client section */}
                {/* <section className="client_section layout_padding">
                    <div className="container">
                        <div className="custom_heading-container ">
                            <h2>
                                What is says our clients
                            </h2>
                        </div>
                        <div id="carouselExample2Indicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExample2Indicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExample2Indicators" data-slide-to={1} />
                                <li data-target="#carouselExample2Indicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="client_container layout_padding2">
                                        <div className="client_detail">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                                alteration in
                                                some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="client_box ">
                                            <div className="img-box">
                                                <img src="../Assets/images/client.png " alt />
                                            </div>
                                            <div className="name">
                                                <h5>
                                                    Randomised
                                                </h5>
                                                <h6>
                                                    <span>
                                                        Client
                                                    </span>
                                                    <img src="../Assets/images/quote.png" alt />
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="client_container layout_padding2">
                                        <div className="client_detail">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                                alteration in
                                                some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="client_box ">
                                            <div className="img-box">
                                                <img src="../Assets/images/client.png " alt />
                                            </div>
                                            <div className="name">
                                                <h5>
                                                    Randomised
                                                </h5>
                                                <h6>
                                                    <span>
                                                        Client
                                                    </span>
                                                    <img src="../Assets/images/quote.png" alt />
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="client_container layout_padding2">
                                        <div className="client_detail">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                                alteration in
                                                some form, by injected humour, or randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                        <div className="client_box ">
                                            <div className="img-box">
                                                <img src="../Assets/images/client.png " alt />
                                            </div>
                                            <div className="name">
                                                <h5>
                                                    Randomised
                                                </h5>
                                                <h6>
                                                    <span>
                                                        Client
                                                    </span>
                                                    <img src="../Assets/images/quote.png" alt />
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* end client section */}
                {/* contact section */}
                {/* <section className="contact_section">
                    <div className="container">
                        <div className="row">
                            <div className="custom_heading-container ">
                                <h2>
                                    Request A call back
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="container layout_padding2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="form_contaier">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputName1">Name</label>
                                            <input type="text" className="form-control" id="exampleInputName1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputNumber1">Phone Number</label>
                                            <input type="text" className="form-control" id="exampleInputNumber1" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email </label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" />
                                        </div>
                                        <div className="form-group ">
                                            <label htmlFor="inputState">Select medicine</label>
                                            <select id="inputState" className="form-control">
                                                <option selected>Medicine 1</option>
                                                <option selected>Medicine 2</option>
                                                <option selected>Medicine 3</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputMessage">Message</label>
                                            <input type="text" className="form-control" id="exampleInputMessage" />
                                        </div>
                                        <button type="submit" className>Send</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="detail-box">
                                    <h3>
                                        Get Now Medicines
                                    </h3>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* end contact section */}
                {/* info section */}
                {/* <section className="info_section layout_padding2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="info_contact">
                                    <h4>
                                        Contact
                                    </h4>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="../Assets/images/telephone-symbol-button.png" alt />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                +91 7698723316
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="../Assets/images/email.png" alt />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                vinayrathod5475@gmail.com
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="info_menu">
                                    <h4>
                                        Menu
                                    </h4>
                                    <ul className="navbar-nav  ">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html"> About </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="medicine.html"> Medicine </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="buy.html"> Online Buy </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info_news">
                                    <h4>
                                        newsletter
                                    </h4>
                                    <form action>
                                        <input type="text" placeholder="Enter Your email" />
                                        <div className="d-flex justify-content-center justify-content-end mt-3">
                                            <button>
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        </div>
    );
}

export default Home;