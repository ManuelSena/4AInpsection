﻿import * as React from "react";

export const Home: React.StatelessComponent<{}> = () => {

    return (
        <div className="fahome">
            <header className="masthead">
                <div className="container">
                    <div className="masthead-heading text-uppercase">Foray Inspection</div>
                    <div className="masthead-subheading">Limited Liability Company</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#contact">Contact</a>
                </div>
            </header>

            <section style={{ color: "#fff" }} className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 welding">
                            <h2 className="my-3">Certified Welding Inspector</h2>
                            <h3 className="text-muted">License#: 1911311</h3>
                        </div>
                        <div className="col-md-4 cali">
                            <h2 className="my-3 ">Southern Califonia Regional</h2>
                            <h3 className="text-muted">Greater Los Angeles Area</h3>
                        </div>
                        <div className="col-md-4 vetpwnd">
                            <h2 className="my-3">Vet Owned</h2>
                            <h3 className="text-muted">The Owner Has Served In The United States Navy</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h4 className="section-subheading text-muted">Feel Free To Give Us A Call Or Email.</h4 >
                        <h2 style={{ color: "white" }}>Anthony Ramirez</h2>
                        <ul>
                        <a href="tel:5624566001">Phone: (562) 456-6001</a>
                        <br/>
                            <a href="mailto:dispatch@forayinspection.com?subject=Contact">Dispatch@ForayInspection.com</a>
                        </ul>
                    </div>
                </div>
            </section>


            <footer className="footer row">
                <div className="container">
                    <div className="ep-footerbar">
                        <span className="ep-copyright" style={{ color: "white" }}>Elicit ©2020  |  All Rights Reserved</span>
                        <nav className="footer-nav pull-right">
                            <ul>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>

        </div>
    );
}








//<section className="page-section bg-light" id="team">
//    <div className="container">
//        <div className="text-center">
//            <h2 className="section-heading text-uppercase">AyMazing Team</h2>
//        </div>
//        <div className="row">
//            <div className="col-md-12">
//                <div className="team-member">
//                    <img className="mx-auto rounded-circle" src="assets/img/mrbeansofunny.png" alt="" />
//                    <h4>Anthony "AyOne" Ramirez</h4>
//                    <p className="text-muted">Owner</p>
//                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a>
//                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
//                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
//                    <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-instagram"></i></a>
//                </div>
//            </div>
//        </div>
//        <div className="row">
//            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Anthony has come a long way from playing computer games and working a Jack in the Box Drive Thru. Through out the years hes exposed himself to the most lethal enviornments. Now that he's been back home he can really prove to himself on the soil he fought for. Anthony is heavily trained for combat but his customer service has always exceeded his customers expectations with his aggressive attitude to find solution.</p></div>
//        </div>
//    </div>
//</section>