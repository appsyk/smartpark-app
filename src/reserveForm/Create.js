import React, { Component } from 'react';
import firebase from '../Reserve/Firebase';
import { Link } from 'react-router-dom';
import Spinner from '../Loader/Spinner';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      userName: '',
      parkingPlace: '',
      vehicleName: '',
      vehicleNumber: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: '',
      user: null,
      count : 0
      
    };
  }

  // state = { user: null };

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
                console.log("email12345",this.state.user.email);

            }
        });
    }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
     
    // this.setState({ email1:  });
    // this.setState({ email: (this.state.user.email)});
    

    console.log("email1____2",this.state.email1);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { userName, parkingPlace, vehicleName, vehicleNumber,
      email, phoneNumber, arrivingTime, leavingTime, count } = this.state;

    this.ref.add({
      userName,
        parkingPlace,
        vehicleName,
        vehicleNumber,
        email ,
        phoneNumber,
        arrivingTime,
        leavingTime,
        count
    })
    .then((docRef) => {
      this.setState({
      userName: '',
      parkingPlace: '',
      vehicleName: '',
      vehicleNumber: '',
      email: '',
      phoneNumber: '',
      arrivingTime: '',
      leavingTime: '',
      count : this.state.count + 1
      });
      this.props.history.push("/app")
      console.log(123,email);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error adding document: ", error);
    });
    // this.ref.getChildrenCount();
  }

  render() {
    console.log(120,this.state.count);
    

    // const email1=(this.state.email);
    if(!this.state.user){
     //alert("you are not logged in");
      return(
        <div style={{ textAlign: "center" }}>
          <br/><br/><br/><br/><br/>
          <h1>You are currently not logged in !</h1>
          <h3>to reserve a parking..you have to logged in first..!</h3>
          <Spinner />
        </div>
      );
    }
    

    const { userName, parkingPlace, vehicleName, vehicleNumber,
       phoneNumber, arrivingTime, leavingTime } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD BOARD
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/app" className="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="userName">Username:</label>
                <input type="text" className="form-control" name="userName" value={userName} onChange={this.onChange} placeholder="userName" />
              </div>

              <div className="form-group">
                <label htmlFor="parkingPlace">Parking Place:</label>
                <input type="text" className="form-control" name="parkingPlace" value={parkingPlace} onChange={this.onChange} placeholder="parkingPlace" />
              </div>

              <div className="form-group">
                <label htmlFor="vehicleName">Vehicle Name:</label>
                <input type="text" className="form-control" name="vehicleName" value={vehicleName} onChange={this.onChange} placeholder="vehicleName" />
              </div>

              <div className="form-group">
                <label htmlFor="vehicleNumber">Vehicle Number:</label>
                <input type="text" className="form-control" name="vehicleNumber" value={vehicleNumber} onChange={this.onChange} placeholder="vehicleNumber" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="form-control" name="email" value={this.state.user.email} onChange={this.onChange} placeholder="email" />

              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" className="form-control" name="phoneNumber" value={phoneNumber} onChange={this.onChange} placeholder="phoneNumber" />
              </div>

              <div className="form-group">
                <label htmlFor="arrivingTime">Arriving Time:</label>
                <input type="text" className="form-control" name="arrivingTime" value={arrivingTime} onChange={this.onChange} placeholder="arrivingTime" />
              </div>

              <div className="form-group">
                <label htmlFor="leavingTime">Leaving Time:</label>
                <input type="text" className="form-control" name="leavingTime" value={leavingTime} onChange={this.onChange} placeholder="leavingTime" />
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
      </div>
    );
  }
}

export default Create;
