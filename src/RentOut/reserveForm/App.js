import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from './Firebase';

class ResForm extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('rents');
    this.unsubscribe = null;
    this.state = {
      rents: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const rents = [];
    querySnapshot.forEach((doc) => {
      const { userName, parkingPlace, vehicleName, vehicleNumber,
        email, phoneNumber, arrivingTime, leavingTime } = doc.data();
      rents.push({
        key: doc.id,
        doc, // DocumentSnapshot
        userName,
        parkingPlace,
        vehicleName,
        vehicleNumber,
        email,
        phoneNumber,
        arrivingTime,
        leavingTime,
      });
    });
    this.setState({
      rents
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              BOARD LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create" className="btn btn-primary">Add Board</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>userName</th>
                  <th>parkingPlace</th>
                  <th>vehicleName</th>
                  <th>vehicleNumber</th>
                  <th>email</th>
                  <th>phoneNumber</th>
                  <th>arrivingTime</th>
                  <th>leavingTime</th>
                </tr>
              </thead>
              <tbody>
                {this.state.rents.map(rent =>
                  <tr>
                    <td><Link to={`/show/${rent.key}`}>{rent.userName}</Link></td>
                    <td>{rent.parkingPlace}</td>
                    <td>{rent.vehicleName}</td>
                    <td>{rent.vehicleNumber}</td>
                    <td>{rent.email}</td>
                    <td>{rent.phoneNumber}</td>
                    <td>{rent.arrivingTime}</td>
                    <td>{rent.leavingTime}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ResForm;
