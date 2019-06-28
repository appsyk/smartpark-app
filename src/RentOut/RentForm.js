import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';
import firebase from '../Reserve/Firebase';
// import Spinner from '../../Loader/Spinner';

class RentReq extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('rents');
        this.unsubscribe = null;
        this.state = {
            rents: [], count: 0
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const rents = [];
        querySnapshot.forEach((doc) => {
            this.setState({ count: (this.state.count + 1) })

            const { firstName, email, lat,
                noOfSpaces, lng, address, describe } = doc.data();
            rents.push({
                key: doc.id,
                doc, // DocumentSnapshot
                firstName,
                // lastName,
                email,
                lat,
                noOfSpaces,
                lng,
                address,
                describe
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

                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="panel panel-default">
                                <div className="contact_area text-center">
                                    <h3 style={{ fontSize: '190%' }}>Rent Out Places</h3>
                                </div>
                                <h3 style={{ marginTop: '-1%', marginLeft: '1.5%' }} >TOTAL ENTRIES : {this.state.count} </h3>
                                {/* <h3 style={{ textAlign: 'right', marginTop: '-3%', marginRight: '1.5%' }}>' {this.remainPlace()} ' Parkings Available</h3> */}
                                <div className="panel-heading" style={{ marginTop: '-1%' }}>
                                    <h4><Link to="/rent-out-ur-places" className="btn custom-btn btn-success" title="Press the button to apply for rent out places"><i class="fa fa-home fa-2x" aria-hidden="true"></i>rent out your place</Link></h4>
                                    <h4 style={{ textAlign: 'right' }}><Link to="/search-maps" style={{ marginTop: '-7%' }} title="Press the button and it will redirected to map" className="btn custom-btn btn-info"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>Book for Another Place</Link></h4>

                                    <h3 className="panel-title" style={{ marginTop: '-2%' }} >
                                        LIST OF REQUESTED PLACES
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-stripe">
                                        <thead>
                                            <tr>
                                                <th>Full Name</th>
                                                {/* <th>Last Name</th> */}
                                                <th>Email</th>
                                                <th>Lattitude</th>
                                                <th>Longitude</th>
                                                <th>No. of Spaces</th>
                                                {/* <th>Phone Number</th> */}
                                                <th>Address</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.rents.map(rent =>
                                                <tr>
                                                    <td><Link to={`/show/${rent.key}`}>{rent.firstName}</Link></td>
                                                    {/* <td>{rent.lastName}</td> */}
                                                    <td>{rent.email}</td>
                                                    <td>{rent.lat}</td>
                                                    <td>{rent.lng}</td>
                                                    <td>{rent.noOfSpaces}</td>
                                                    <td>{rent.address}</td>
                                                    {/* <td>{rent.lat}</td> */}
                                                    <td>{rent.describe}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
    }
}

export default RentReq;
