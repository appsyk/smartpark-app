import React, { Component } from 'react';
import firebase from './Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rent: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('rents').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          rent: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
        alert("No such document!");
      }
    });
  }

  delete(id) {
    firebase.firestore().collection('rents').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      alert("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
      alert("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4><Link to="/">Board List</Link></h4>
            <h3 className="panel-title">
              {this.state.rent.userName}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Parking Place:</dt>
              <dd>{this.state.rent.parkingPlace}</dd>
              <dt>Vehicle Number:</dt>
              <dd>{this.state.rent.vehicleNumber}</dd>
              <dt>Arriving Time:</dt>
              <dd>{this.state.rent.arrivingTime}</dd>
              <dt>Leaving Time:</dt>
              <dd>{this.state.rent.leavingTime}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;