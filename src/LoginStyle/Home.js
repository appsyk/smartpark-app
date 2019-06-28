import React, { Component } from 'react';
import firebase from './Firebase';
import Header from '../NavBar/Header';
// import Temp from '../Temp';
import App from '../mapBox/App';

class Home extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         email: 'Exist ?'
    //     };

    //     this.setState({ email: (this.props.userin.email) })
    //     console.log(this.props.userin.email);

    // }

    logout = () => {
        firebase.auth().signOut();
    }

    render(props) {
        console.log(1212,this.props.userin.email);
        if(this.props.userin !== null){
            console.log("jkjk52")
            return<div>
            {/* <h1>Welcome to my World</h1> */}
            <Header embutt={this.props.userin.email} />
            <App emlmap={this.props.userin.email} />
            </div>
        }
        return (
            <div>
                
               <button className='button' onClick={this.logout}>logout</button>
            </div>
        );

    }

}

export default Home;