import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/Courses">All Courses</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                        Hyderabad, Telangana<br />
                        INDIA<br />
                        <i className="fa fa-phone fa-lg"></i>: <a href="tel:+91 9398851695">9398851695</a><br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:shaikafroz990807@gmail.com">
                            shaikafroz990807@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-github" href="https://github.com/shaikafroz016"><i className="fa fa-github"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/people/Shaik-Afroz/100012564463385"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/shaik-afroz-449b60199/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/Shaikafroz99081"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon" href="mailto:shaikafroz990807@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 Course-S</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;