import React from 'react';



function Footer(props) {
    return (
        <div>
            <section className="info_section layout_padding2">
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
                                        <a className="nav-link" href="Home">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="About"> About </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="Medicine"> Medicine </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="OnlineBuy"> Online Buy </a>
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
                                        <button >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
<script>
function myFunction() {
    
  alert("U are Subscribed")
}
</script>


export default Footer;