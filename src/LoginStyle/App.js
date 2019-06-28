import React, { Component } from 'react';
import firebase from '../Reserve/Firebase';
import Home from './Home';
import Login from './Login';
// import Header from '../NavBar/Header';

class LoginApp extends Component {

    state = { user: null };

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
            }
        });
    }
    render() {
       console.log(2,this.state.user);
        return (
            <div>{this.state.user ? (
            <Home userin={this.state.user}/>
            ) : (<Login />)}</div>
        );
    }
}
export default LoginApp;