import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AppStyle.css';
import firebase from '../Reserve/Firebase';

class ResForm extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { userName, parkingPlace, vehicleName, vehicleNumber,
        email, phoneNumber, arrivingTime, leavingTime } = doc.data();
      boards.push({
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
      boards
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
            <h4><Link to="/reserve-ur-place" className="btn btn-primary">Add Board</Link></h4>
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
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.userName}</Link></td>
                    <td>{board.parkingPlace}</td>
                    <td>{board.vehicleName}</td>
                    <td>{board.vehicleNumber}</td>
                    <td>{board.email}</td>
                    <td>{board.phoneNumber}</td>
                    <td>{board.arrivingTime}</td>
                    <td>{board.leavingTime}</td>
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
