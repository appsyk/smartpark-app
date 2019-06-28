import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import firebase from '../Firebase';
// import App from '/home/sanju/react/spark/src/mapBox/App';
// import Spinner from '../../Loader/Spinner';
import Loadman from '../../Loader/Loadman';

class BadlapurShow extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('badlapurs');
    this.unsubscribe = null;
    this.state = {
      badlapurs: [], count: 0
    };
  }

  // authListener = ( ) => {
  onCollectionUpdate = (querySnapshot) => {
    const badlapurs = [];
    querySnapshot.forEach((doc) => {
      this.setState({ count: (this.state.count + 1) })

      const { name, vehicle,
        email, phoneNumber, arrivingTime, leavingTime, plotId } = doc.data();
      badlapurs.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        vehicle,
        email,
        phoneNumber,
        arrivingTime,
        leavingTime,
        plotId

      });
    });
    this.setState({
      badlapurs,
    });
  }
  componentDidMount() {
    this.authListener();
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);

  }

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {

      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
        // console.log("email12345", this.state.user.email);

      }
    });
  }
  remainPlace() {
    const rem = (24 - (this.state.count));
    return rem;
  }

  render() {
    // console.log("didmount", this.state.count);
    if (this.state.count >= 24) {
      return (
        <div style={{ textAlign: "center" }}>
          <br /><br /><br /><br /><br />
          <h1>Sorry this place is full !</h1>
          <h3>try for another <a href="/search-maps"><b>place</b></a></h3>
          {/* <h4>for further process</h4> */}
          <Loadman />
        </div>
      );
    } else
      return (
        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="panel panel-default">
                <div className="contact_area text-center">
                  <h3 style={{ fontSize: '190%' }}>kulgaon Badlapur municipal parking</h3>
                </div><h3 style={{ marginTop: '-1%', marginLeft: '1.5%' }} >Total Entries : {this.state.count} /24</h3>
                <h3 style={{ textAlign: 'right', marginTop: '-3%', marginRight: '1.5%', color: 'green' }}>' {this.remainPlace()} ' Parkings Available</h3>
                <div className="panel-heading" style={{ marginTop: '-1%' }}>
                  <h4><Link to="/create@BADLAPUR" className="btn custom-btn btn-success" title="Press the button to book this place for another vehicle."><i class="fa fa-car fa-2x" aria-hidden="true"></i>Book for Another Vehicle</Link></h4>
                  <h4 style={{ textAlign: 'right' }}><Link to="/search-maps" style={{ marginTop: '-7%' }} title="Press the button and it will redirected to map" className="btn custom-btn btn-info"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>Book for Another Place</Link></h4>

                  <h3 className="panel-title" style={{ marginTop: '-2%' }} >
                    LIST OF USERS
            </h3>
                </div>
                <div className="panel-body">
                  <table className="table table-stripe">
                    <thead>
                      <tr>
                        <th>Full Name</th>
                        <th>Vehicle</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Arriving Time</th>
                        <th>Leaving Time</th>
                        <th>Plot Id</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.badlapurs.map(badlapur =>
                        <tr>
                          <td><Link to={`/show/${badlapur.key}`}>{badlapur.name}</Link></td>
                          <td title="You are not authorized user to see this Information.">{badlapur.email === this.state.user.email ? (<td>{badlapur.vehicle}</td>) : (<td>******</td>)}</td>
                          <td title="You are not authorized user to see this Information.">{badlapur.email === this.state.user.email ? (<td>{badlapur.email}</td>) : (<td>******</td>)}</td>
                          <td title="You are not authorized user to see this Information.">{badlapur.email === this.state.user.email ? (<td>{badlapur.phoneNumber}</td>) : (<td>******</td>)}</td>
                          <td>{badlapur.arrivingTime}</td>
                          <td>{badlapur.leavingTime}</td>
                          <td>{badlapur.plotId}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <h4 style={{ color:'green', textAlign: 'right' }} ><b style={{ color:'black' }}>******</b> means you are not authorized user to watch this Information.</h4>
                </div>
              </div>
            </div>
          </div>

          {/* <App free={this.state.count} sdk="sanju bhai" /> */}
        </section>
      );
  }
}

export default BadlapurShow;
