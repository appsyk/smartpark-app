import React, { Component } from 'react';
import firebase from '../Reserve/Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
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
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
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
      <div className="container" style={{ width:'20%', marginTop: '100px' }}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4><Link to="/app">Board List</Link></h4>
            <h3 className="panel-title">
              {this.state.board.userName}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Parking Place:</dt>
              <dd>{this.state.board.parkingPlace}</dd>
              <dt>Vehicle Number:</dt>
              <dd>{this.state.board.vehicleNumber}</dd>
              <dt>Arriving Time:</dt>
              <dd>{this.state.board.arrivingTime}</dd>
              <dt>Leaving Time:</dt>
              <dd>{this.state.board.leavingTime}</dd>
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