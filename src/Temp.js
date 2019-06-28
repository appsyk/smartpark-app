import './greenfair/css/style.css';
import './greenfair/css/isotope/style.css';
import './greenfair/css/animate.min.css';
import './greenfair/css/bootstrap.min.css';
import './greenfair/css/carousel.css';
import './greenfair/css/font-awesome.min.css';
import './greenfair/css/responsive.css';
import './LoginStyle/style.css';
import React from 'react';
import firebase from './Reserve/Firebase';
import { NavLink } from 'react-router-dom';

class Temp extends React.Component {

    state = { user: null };

    componentDidMount() {
        this.authListener();
    }

    authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }


    logout = () => {
        firebase.auth().signOut();
    }

    onBooking = () => {
        if (this.state.user) {
            return <div> <NavLink to="/reserve-ur-place"></NavLink></div>;
        }
        else {
            return <div> <NavLink href="/login"></NavLink></div>;
        }
    }


    renderHelper() {
        return (
            <div>

                {/* ); */}


                <section id="slider">

                    <div id="carousel-example-generic" className="carousel slide carousel-fade" data-ride="carousel" data-interval="8000">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            {/* <li data-target="#carousel-example-generic" data-slide-to="2"></li> */}
                        </ol>

                        <div className="carousel-inner" role="listbox" >
                            <div className="item active">
                                <div className="slider_overlay">
                                    {/* <img src="https://images.wallpaperscraft.com/image/parking_underground_marking_118795_1920x1080.jpg" alt="..."></img> */}
                                    <img src="http://newschool.co.il/wp-content/uploads/2018/11/pexels-photo-408503-1500x630.jpeg" alt="slider" style={{ height: '30%' }} ></img>
                                    <div className="carousel-caption">
                                        <div className="slider_text">
                                            <h3>Smart Park</h3>
                                            <h2>Search for Parking</h2>
                                            <p>Now you can search here and get parking place immadiately.</p>
                                            {/* <a href={Test.js} className="custom_btn">Read  More</a> */}


                                            <div>
                                                <NavLink to='/search-maps'>
                                                    <button className="btn btn-success custom-btn btn-lg faa-bounce animated" style={{ borderRadius: '19px' }}>
                                                        <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/zoom-search-2-icon.png" alt="srch" height='50px' width='50px' style={{ marginRight: '17px' }} />
                                                        Search for places
                                                    </button>
                                                </NavLink><br /><br /><br />

                                                <div>
                                                    {/* <Route path="/search-maps" exact component={App} /> */}
                                                    {/* Sanju<Route path="/login" exact component={LoginApp} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of item With Active--> */}
                            <div className="item">
                                <div className="slider_overlay">
                                    <img src="https://images.wallpaperscraft.com/image/bike_street_sidewalk_cars_parking_57304_1920x1080.jpg" alt="..."></img>
                                    <div className="carousel-caption">
                                        <div className="slider_text">
                                            <h3>Smart Park</h3>
                                            <h2>Rent Out Your Parking Places</h2>
                                            <p>You can give your places on rent for parking.</p>
                                            {/* <a href="" className="button">On Rent</a> */}
                                            <div>
                                                <NavLink to='/rent-out-ur-places'>
                                                    <button className="btn btn-light custom-btn btn-lg faa-bounce animated" style={{ borderRadius: '19px' }}>
                                                        <img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="srch" height='50px' width='50px' style={{ marginRight: '17px' }} />
                                                        Add your space
                                                    </button>
                                                </NavLink><br /><br /><br />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of Item--> */}
                            {/* <div className="item">
                                <div className="slider_overlay">
                                    <img src="https://hdwallsource.com/img/2014/5/street-parking-wallpaper-45023-46185-hd-wallpapers.jpg" alt="..."></img>
                                    <div className="carousel-caption">
                                        <div className="slider_text">
                                            <h3>Smart Park</h3>
                                            <h2>Follow traffic rules, save your future</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <div>
                                                <NavLink to='#contact'>
                                                    <button className="button12 faa-bounce animated">
                                                        <img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="srch" height='50px' width='50px' style={{ marginRight: '17px' }} />
                                                        <b>Add your space</b>
                                                    </button>
                                                </NavLink><br /><br /><br />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!--End of item--> */}
                        </div>
                        {/* <!--End of Carousel Inner--> */}
                    </div>
                </section>
                {/* <!--end of slider section--> */}

                {/* <!--Start of welcome section--> */}
                <section id="welcome" >
                    <br /><br /><br /><br /><br />
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

                                            {this.state.user ?
                                                (<a href="/rent-out-ur-places">
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Rent out your places</h4>
                                                </a>) :
                                                (<a href="/login">
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-40/256/Vacation_Rental-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Booking</h4>
                                                </a>)}
                                            {/* <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of col-md-3--> */}
                            <div className="col-md-6">
                                <div className="item">
                                    <div className="single_item">
                                        <div className="item_list">
                                        <NavLink to='/search-maps'>
                                            <div className="welcome_icon">
                                                <i className="fa fa-globe fa-10x"></i>
                                            </div>
                                            <h4>Google maps</h4>
                                            {/* <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p> */}
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of col-md-3--> */}
                            <div className="col-md-3">
                                <div className="item" >
                                    {/* <a href="/search-maps"> */}
                                    <div className="single_item">
                                        <div className="item_list">
                                            {this.state.user ?
                                                (<div>
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-hand-drawn-icons/64/travel_25-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Booking</h4>
                                                </div>) :
                                                (<div>
                                                    <div className="welcome_icon">
                                                        <i className=""><img src="https://cdn1.iconfinder.com/data/icons/travel-hand-drawn-icons/64/travel_25-512.png" alt="Pic_slider3"></img></i>
                                                    </div>
                                                    <h4>Booking</h4>
                                                 </div>)}

                                            {/* <p>Lorem ipsum dolor sit amet, eu qui modo expetendis reformidans ex sit set appetere sententiae seo eum in simul homero.</p> */}
                                        </div>
                                    </div>
                                    {/* </a> */}
                                </div>
                            </div>
                            {/* <!--End of col-md-3--> */}
                            {/* <div className="col-md-3">
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
                            </div> */}
                            {/* <!--End of col-md-3--> */}
                        </div>
                        {/* <!--End of row--> */}
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--end of welcome section--> */}

                {/* <section id="map" style={{ height: '500px' }}>
                    <div >
                        <div>
                            <div>
                                <iframe width="100%" height="520" src="https://www.youtube.com/embed/I4g2UkG6Qs8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <App />
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!--Start of volunteer--> */}
                <section id="volunteer" >
                    <div className="container ">
                        <div className="row vol_area">
                            <div className="col-md-8">
                                <div className="volunteer_content">
                                    <h3>Become a <span>Smart</span></h3>
                                    <p>Join to Our Application And be safe with your vehicle.</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-md-offset-1">
                                <div className="join_us">
                                    <a href="/login" className="vol_cust_btn">join us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
{/* 
                <section id="counter">
                    <div className="counter_img_overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="counter_header">
                                        <h2>OUR achivement</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/tree.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">1542</span>
                                                <p>tree cut</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/hand.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">1458</span>
                                                <p>animal lost</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/tuhnder.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">9854</span>
                                                <p>blubs collected</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="counter_item text-center">
                                        <div className="sigle_counter_item">
                                            <img src="img/cloud.png" alt=""></img>
                                            <div className="counter_text">
                                                <span className="counter">5412</span>
                                                <p>water level</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section id="event">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="event_header text-center">
                                    <h2>latest event</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_img">
                                                <img src="img/tree_cut_1.jpg" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_text text-center">
                                                <a href=""><h4>One Tree Thousand Hope</h4></a>
                                                <h6>15-16 May in Dhaka</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adip scing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <a href="" className="event_btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_text text-center">
                                                <a href=""><h4>One Tree Thousand Hope</h4></a>
                                                <h6>15-16 May in Dhaka</h6>
                                                <p>Lorem ipsum dolor sit amet, consectetur adip scing elit. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <a href="" className="event_btn">read more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 zero_mp">
                                        <div className="event_item">
                                            <div className="event_img">
                                                <img src="img/tree_cut_2.jpg" alt=""></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_3.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>Let’s plant 200 tree each...</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_4.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>Keep your house envirome..</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_3.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>Urgent Clothe Needed Needed</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_4.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>One Tree Thousand Hope</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="event_news">
                                    <div className="event_single_item fix">
                                        <div className="event_news_img floatleft">
                                            <img src="img/tree_cut_3.jpg" alt=""></img>
                                        </div>
                                        <div className="event_news_text">
                                            <a href="#"><h4>One Tree Thousand Hope</h4></a>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, veniam.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
 */}


                {/* <!--Start of testimonial--> */}
                <section id="testimonial">
                    <div className="testimonial_overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="testimonial_header text-center">
                                        <h2>Team Members</h2>
                                        <p>This is our team who takes a great effort to build such excellent Application.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End of row--> */}
                            <section id="carousel">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <div className="carousel slide" id="fade-quote-carousel" data-ride="carousel" data-interval="3000">
                                                {/* <!-- Carousel indicators --> */}
                                                <ol className="carousel-indicators">
                                                    <li data-target="#fade-quote-carousel" data-slide-to="0" className="active"></li>
                                                    <li data-target="#fade-quote-carousel" data-slide-to="1"></li>
                                                </ol>
                                                {/* <!-- Carousel items --> */}
                                                <div className="carousel-inner">
                                                    <div className="active item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom6-1.fna.fbcdn.net/v/t1.0-9/38419280_2079795722235376_3399470742247571456_n.jpg?_nc_cat=102&_nc_ht=scontent.fbom6-1.fna&oh=383b79ebf9375977f5b643864f48981e&oe=5D6C0763" alt="Sanjay"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p> */}
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Sanjay D. Khatal</h5>
                                                                    <p>Front-End Developer</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/49339611_943675479175900_8481323038111956992_n.jpg?_nc_cat=104&_nc_ht=scontent.fbom10-1.fna&oh=6ecc8d0165f2a88a2b6eaec3ae8d2aea&oe=5CFF4CC6" alt="Vrushabh"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p> */}
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Vrushabh B. Patil</h5>
                                                                    <p>Front-End Developer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--End of item with active--> */}
                                                    <div className="item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/15871784_390781751270703_8610257851502050117_n.jpg?_nc_cat=105&_nc_ht=scontent.fbom10-1.fna&oh=1219b157eae15068a1745c6f44075bef&oe=5CDE0F09" alt="Suraj" zoom="100%"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p> */}
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Suraj S. Kadole</h5>
                                                                    <p>Back-End Developer</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="profile-circle">
                                                                    <img src="https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/19894971_917577431714953_9012173854566277390_n.jpg?_nc_cat=108&_nc_ht=scontent.fbom10-1.fna&oh=a45113db069b9bea08477a4393002d6c&oe=5CDD9067" alt="Dinesh"></img>
                                                                </div>
                                                                <div className="testimonial_content">
                                                                    <i className="fa fa-quote-left"></i>
                                                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio aut eius animi. Impedit temporibus nisi accusamus.</p> */}
                                                                </div>
                                                                <div className="testimonial_author">
                                                                    <h5>Dinesh R. Kurkute</h5>
                                                                    <p>Back-End Developer</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <!--ENd of item--> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--End of row--> */}
                                </div>
                                {/* <!--End of container--> */}
                            </section>
                            {/* <!--End of carousel--> */}
                        </div>
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--end of testimonial--> */}


                {/* 
                <section id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="latest_blog text-center">
                                    <h2>latest blog</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cum libero vitae quos eaque commodi.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blog_news">
                                    <div className="single_blog_item">
                                        <div className="blog_img">
                                            <img src="img/climate_effect.jpg" alt=""></img>
                                        </div>
                                        <div className="blog_content">
                                            <a href=""><h3>Climate change is affecting bird migration</h3></a>
                                            <div className="expert">
                                                <div className="left-side text-left">
                                                    <p className="left_side">
                                                        <span className="clock"><i className="fa fa-clock-o"></i></span>
                                                        <span className="time">Aug 19, 2016</span>
                                                        <a href=""><span className="admin"><i className="fa fa-user"></i> Admin</span></a>
                                                    </p>
                                                    <p className="right_side text-right">
                                                        <a href=""><span className="right_msg text-right"><i className="fa fa-comments-o"></i></span>
                                                            <span className="count">0</span></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="blog_news_content">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                                            <a href="" className="blog_link">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_news">
                                    <div className="single_blog_item">
                                        <div className="blog_img">
                                            <img src="img/air_pollutuon.jpg" alt=""></img>
                                        </div>
                                        <div className="blog_content">
                                            <a href=""><h3>How to avoid indoor air pollution?</h3></a>
                                            <div className="expert">
                                                <div className="left-side text-left">
                                                    <p className="left_side">
                                                        <span className="clock"><i className="fa fa-clock-o"></i></span>
                                                        <span className="time">Aug 19, 2016</span>
                                                        <a href=""><span className="admin"><i className="fa fa-user"></i> Admin</span></a>
                                                    </p>
                                                    <p className="right_side text-right">
                                                        <a href=""><span className="right_msg text-right"><i className="fa fa-comments-o"></i></span>
                                                            <span className="count">0</span></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="blog_news_content">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                                            <a href="" className="blog_link">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog_news">
                                    <div className="single_blog_item">
                                        <div className="blog_img">
                                            <img src="img/threat_bear.jpg" alt=""></img>
                                        </div>
                                        <div className="blog_content">
                                            <a href=""><h3>Threat to Yellowstone’s grizzly bears.</h3></a>
                                            <div className="expert">
                                                <div className="left-side text-left">
                                                    <p className="left_side">
                                                        <span className="clock"><i className="fa fa-clock-o"></i></span>
                                                        <span className="time">Aug 19, 2016</span>
                                                        <a href=""><span className="admin"><i className="fa fa-user"></i> Admin</span></a>
                                                    </p>
                                                    <p className="right_side text-right">
                                                        <a href=""><span className="right_msg text-right"><i className="fa fa-comments-o"></i></span>
                                                            <span className="count">0</span></a>
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="blog_news_content">Lorem ipsum dolor sit amet, consectetur adipscing elit. Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. consectetur Lorem ipsum dolor sitamet, conse ctetur adipiscing elit. </p>
                                            <a href="" className="blog_link">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}



                {/* <!--Start of Purches--> */}
                {/* <section id="purches">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="purches_title">Buy our wordpress theme</h2>
                            </div>
                            <div className="col-md-2 col-md-offset-4">
                                <a href="" className="purches_btn">purches</a>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <!--End of purches--> */}

                {/* <!--Start of footer--> */}
                <section id="footer">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6">
                                <div className="copyright">
                                    <p>@ 2019 - Design By</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="designer">
                                    <p>A Design By The A Team</p>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of row--> */}
                    </div>
                    {/* <!--End of container--> */}
                </section>
                {/* <!--End of footer--> */}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHelper()}
                {/* {this.renderLoginForm()} */}
            </div>
        );
    }
}

export default Temp;