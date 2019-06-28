import React, { Component } from 'react';
import firebase from './Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('rents');
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      lat: '',
      noOfSpaces: '',
      lng: '',
      address: '',
      describe: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, lat,
      noOfSpaces, lng, address, describe } = this.state;

    this.ref.add({
      firstName, lastName, email, lat,
      noOfSpaces, lng, address, describe

    }).then((docRef) => {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        lat: '',
        noOfSpaces: '',
        lng: '',
        address: '',
        describe: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { userName, parkingPlace, vehicleName, vehicleNumber,
       email, phoneNumber, arrivingTime, leavingTime } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD BOARD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/" className="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="userName">Username:</label>
                <input type="text" className="form-control" name="userName" value={userName} onChange={this.onChange} placeholder="userName" required/>
              </div>

              <div className="form-group">
                <label htmlFor="parkingPlace">Parking Place:</label>
                <input type="text" className="form-control" name="parkingPlace" value={parkingPlace} onChange={this.onChange} placeholder="parkingPlace" required/>
              </div>

              <div className="form-group">
                <label htmlFor="vehicleName">Vehicle Name:</label>
                <input type="text" className="form-control" name="vehicleName" value={vehicleName} onChange={this.onChange} placeholder="vehicleName" required/>
              </div>

              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Number:</label>
                <input type="text" className="form-control" name="vehicleNumber" value={vehicleNumber} onChange={this.onChange} placeholder="vehicleNumber" required/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" name="email" value={email} onChange={this.onChange} placeholder="email" required/>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" className="form-control" name="phoneNumber" value={phoneNumber} onChange={this.onChange} placeholder="phoneNumber" required/>
              </div>

              <div className="form-group">
                <label htmlFor="arrivingTime">Arriving Time:</label>
                <input type="text" className="form-control" name="arrivingTime" value={arrivingTime} onChange={this.onChange} placeholder="arrivingTime" required/>
              </div>

              <div className="form-group">
                <label htmlFor="leavingTime">Leaving Time:</label>
                <input type="text" className="form-control" name="leavingTime" value={leavingTime} onChange={this.onChange} placeholder="leavingTime" required/>
              </div>
              {/* <div className="form-group">
                <label htmlFor="vehicleNumber">Description:</label>
                <textArea className="form-control" name="vehicleNumber" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
              </div> */}
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
{/* --------------------------------------------------------------------------------------------------- */}
        <div>
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="colmd-12">
                  <div className="contact_area text-center">
                    <h3>Rent out your parking places</h3>
                    {/* <p>You can Rentout your own places for parking.</p> */}
                  </div>
                </div>
              </div>
              {/* <!--End of row--> */}
              <div className="row">
                <div className="col-md-6">
                  <div className="office">
                    <div className="title">
                      <h5>click on <b style={{ color: 'red' }}>red</b> marker</h5><h4>To grab Lattitude and Longitude of your location</h4>
                      
                    </div>
                    <div className="office_location">
                      <div className="address">
                        <i className="fa fa-map-marker">
                          {this.state.selectedPlace.map ? (
                            <a href={this.state.selectedPlace.map.rmiUrl} style={{ marginLeft: '20px' }}>Your current location</a>)
                             : (console.log("Click on marker to Rent out your place..!"))}
                        </i>
                      </div>
                      <div className="phone">
                        <i className="fa fa-phone"><span>+ 91 9595949873</span></i>
                      </div>
                      <div className="email">
                        <i className="fa fa-envelope"><span>imatom19@gmail.com</span></i>
                      </div>
                      {/* <div id="map">
                        <div>
                          <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                            <Marker onClick={this.onMarkerClick} name={'Now fill the form'} />
                            <InfoWindow
                              marker={this.state.activeMarker}
                              visible={this.state.showingInfoWindow}
                              onClose={this.onClose}
                              style={{ backgroundColor:'#98dbc6'}}
                            >
                              <div>
                                <h3 style={{ marginTop: '20%', color:'black' }} ><b>{this.state.selectedPlace.name}</b></h3>
                              </div>
                            </InfoWindow>
                          </CurrentLocation>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="msg">
                    <div className="msg_title">
                      <h5>Drop A Message</h5>
                    </div>
                    <div className="form_area">
                      {/* <!-- CONTACT FORM --> */}
                      <div className="contact-form wow fadeIn animated" data-wow-offset="10" data-wow-duration="1.5s">
                        <div id="message"></div>
                        <form action="scripts/contact.php" className="form-horizontal contact-1" name="contactform" id="contactform">
                          <div className="form-group">
                            <div className="col-sm-6">
                              <input type="text" className="form-control" name="first-name" id="name" placeholder="FIRST NAME" />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" className="form-control" name="last-name" id="name" placeholder="LAST NAME" />
                            </div>
                            <div className="col-sm-6">
                              <input type="text" className="form-control" value= {this.state.user.email} name="email" id="email" placeholder="EMAIL" />
                            </div>
                          </div>
                          {/* <div class="row">
                            <div class=" btn-group-justified" data-toggle="buttons">
                              <label class="btn btn-success active">
                                <input type="radio" name="options" id="name" autocomplete="off" defaultChecked /> Radio 1 (preselected)
                              </label>
                              <label class="btn btn-info">
                                <input type="radio" name="options" id="name" autocomplete="off" /> Radio 2
                              </label>
                              <label class="btn btn-warning">
                                <input type="radio" name="options" id="name" autocomplete="off" /> Radio 3
                              </label>
                            </div>          
                          </div> */}
                          <div className="form-group">
                            <div className="col-sm-6">
                              {this.state.selectedPlace.mapCenter ? (<input type="text" className="form-control" value={this.state.selectedPlace.mapCenter.lat} name="lat" id="name" placeholder="LATTITUDE" />)
                                : (<input type="text" className="form-control"  name="lat" id="name" placeholder="LATTITUDE" />)}

                            </div>

                            <div className="col-sm-6">
                              <input type="number" className="form-control" name="no-of-spaces" id="name" placeholder="NO OF SPACES" />
                            </div>


                            <div className="col-sm-6">
                              {this.state.selectedPlace.mapCenter ? (<input type="text" className="form-control" value={this.state.selectedPlace.mapCenter.lng} name="lng" id="name" placeholder="LONGITUDE" />)
                                : (<input type="text" className="form-control" name="lng" id="name" placeholder="LONGITUDE" />)}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-sm-12">
                              <input type="subject" className="form-control" id="subject" placeholder="ADDRESS *" />
                              <div className="text_area">
                                <textarea name="contact-message" id="msg" className="form-control" cols="30" rows="8" 
                                  placeholder="DESCRIBE YOUR SPACE  (types of spce: Driveway/ Garage/ Car park), width of Space, (Features: Electric charging/ CCTV ?)" ></textarea>
                              </div>
                              <button type="submit" className="btn custom-btn" data-loading-text="Loading...">Submit your form</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--End of col-md-6--> */}
              </div>
              {/* <!--End of row--> */}
            </div>
            {/* <!--End of container--> */}
          </section>

        </div>


      </div>
    );
  }
}

export default Create;
