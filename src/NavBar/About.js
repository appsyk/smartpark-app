import React from 'react';

const About = () => {
    return (
        <div>

            <section id="welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="wel_header">
                                <h2>welcome to Smart Park</h2>
                                <p>Our Smart Park Organization is one of the non profit organization near you. Get our services like</p>
                            </div>
                        </div>
                    </div>
                    {/* <!--End of row--> */}
                    <div className="row">
                        <div className="col-md-3">
                            <div className="item">
                                <div className="single_item">
                                    <div className="item_list">
                                        <div className="welcome_icon">
                                            <i className=""></i>
                                            <img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png"></img>
                                        </div>
                                        <h4>Rent out your places</h4>
                                        <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of col-md-3--> */}
                        <div className="col-md-3">
                            <div className="item">
                                <div className="single_item">
                                    <div className="item_list">
                                        <div className="welcome_icon">
                                            <i className="fa fa-refresh"></i>
                                        </div>
                                        <h4>recycling</h4>
                                        <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of col-md-3--> */}
                        <div className="col-md-3">
                            <div className="item">
                                <div className="single_item">
                                    <div className="item_list">
                                        <div className="welcome_icon">
                                            <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-hand-drawn-icons/64/travel_25-512.png"></img></i>
                                        </div>
                                        <a href="Search/map"><h4>Booking</h4></a>
                                        <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of col-md-3--> */}
                        <div className="col-md-3">
                            <div className="item">
                                <div className="single_item">
                                    <div className="item_list">
                                        <div className="welcome_icon">
                                            <i className="fa fa-cog"></i>
                                        </div>
                                        <h4>solar system</h4>
                                        <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of col-md-3--> */}
                    </div>
                    {/* <!--End of row--> */}
                </div>
                {/* <!--End of container--> */}
            </section>


        </div>
    );
};

export default About;