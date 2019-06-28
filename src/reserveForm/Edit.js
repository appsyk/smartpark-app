import React, { Component } from 'react';
import firebase from '../Reserve/Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      userName: '',
      parkingPlace: '',
      vehicleName: '',
      vehicleNumber: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        this.setState({
          key: doc.id,
          userName: board.userName,
          parkingPlace: board.parkingPlace,
          vehicleName: board.vehicleName,
          vehicleNumber: board.vehicleNumber,
          email: board.email,
          phoneNumber: board.phoneNumber,
          arrivingTime: board.arrivingTime,
          leavingTime: board.leavingTime
        });
      } else {
        console.log("No such document!");
        alert("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({board:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {  userName, parkingPlace, vehicleName, vehicleNumber,
      email, phoneNumber, arrivingTime, leavingTime  } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      userName,
      parkingPlace,
      vehicleName,
      vehicleNumber,
      email,
      phoneNumber,
      arrivingTime,
      leavingTime

    }).then((docRef) => {
      this.setState({
        key: '',
        userName: '',
      parkingPlace: '',
      vehicleName: '',
      vehicleNumber: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT BOARD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/show/${this.state.key}`} className="btn btn-primary">Board List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>

              <div className="form-group">
                <label htmlFor="userName">Username:</label>
                <input type="text" className="form-control" name="userName" value={this.state.userName} onChange={this.onChange} placeholder="userName" required/>
              </div>

              <div className="form-group">
                <label htmlFor="parkingPlace">Parking Place:</label>
                <input type="text" className="form-control" name="parkingPlace" value={this.state.parkingPlace} onChange={this.onChange} placeholder="parkingPlace" required/>
              </div>

              <div className="form-group">
                <label htmlFor="vehicleName">Vehicle Name:</label>
                <input type="text" className="form-control" name="vehicleName" value={this.state.vehicleName} onChange={this.onChange} placeholder="vehicleName" required/>
              </div>

              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Number:</label>
                <input type="text" className="form-control" name="vehicleNumber" value={this.state.vehicleNumber} onChange={this.onChange} placeholder="vehicleNumber" required/>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChange} placeholder="email" required/>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" className="form-control" name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChange} placeholder="phoneNumber" required/>
              </div>

              <div className="form-group">
                <label htmlFor="arrivingTime">Arriving Time:</label>
                <input type="text" className="form-control" name="arrivingTime" value={this.state.arrivingTime} onChange={this.onChange} placeholder="arrivingTime" required/>
              </div>

              <div className="form-group">
                <label htmlFor="leavingTime">Leaving Time:</label>
                <input type="text" className="form-control" name="leavingTime" value={this.state.leavingTime} onChange={this.onChange} placeholder="leavingTime" required/>
              </div>
              {/* <div className="form-group">
                <label for="description">Description:</label>
                <input type="text" className="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
              </div> */}
              <button type="submit" className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
