import React from 'react';
import { Link } from 'react-router-dom';



function Header(props) {
    return (
        <div className="hero_area">
            <header className="header_section">
                <div className="container">
                    <div className="top_contact-container">
                        <div className="tel_container">
                            <a href>
                                <img src="Assets/images/telephone-symbol-button.png" alt /> Call : +91 7698723316
                            </a>
                        </div>
                        <div className="social-container">
                            <a href>
                                <img src="Assets/images/fb.png" alt className="s-1" />
                            </a>
                            <a href>
                                <img src="Assets/images/twitter.png" alt className="s-2" />
                            </a>
                            <a href>
                                <img src="Assets/images/instagram.png" alt className="s-3" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                        <a className="navbar-brand" href="index.html">
                            <img src="../Assets/images/logo.png" alt />
                            <span>
                                Medicine
                            </span>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="d-flex  flex-column flex-lg-row align-items-center w-100 justify-content-between">
                                <ul className="navbar-nav  ">
                                    <li className="nav-item active">
                                        <Link to='/home'>Home</Link>
        
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/about'>About</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/Medicine'>Medicine</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/Onlinebuy'>Onlinebuy</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/News'>News</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to='/Contectus'>Contectus</Link>
                                    </li>
                                </ul>
                                <form className="form-inline ">
                                    <input type="search" placeholder="Search" />
                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit" />
                                </form>
                                <div className="login_btn-contanier ml-0 ml-lg-5">
                                    <a href>
                                        <img src="Assets/images/user.png" alt />
                                        <span>
                                            Login
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
  );
}
export default Header;
            