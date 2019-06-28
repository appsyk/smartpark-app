import './Loginform.css';
import React from 'react';
import firebase from '../Reserve/Firebase';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
    showForm: false,
    closeForm: true,
    loadBut: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    this.setState({ loadBut: true });
    console.log(e.name);
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    })
      .catch((err) => {
        // this.setState = ({ errorMessage: err.message });
        alert(err.message);
      });
  }

  signup = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).then((u) => { console.log(u) })
      .catch(error => {
        alert(error.message);
      }
      )
  }

  // state = { showForm: false, closeForm: true };

  onLoginClick = () => {
    this.setState({ showForm: true });
  }

  onCloseClick = () => {
    this.setState({ closeForm: false });
  }

  renderLoginForm() {
      if (this.state.closeForm === true){
      console.log('check', this.state.showForm);
      console.log(this.state.closeForm);
      return (
        <div>
          <div className="">
            <form className="modal-content animate, loginbox">
              <div className="imgcontainer">
                <a href="/"><span className="close" title="Close Modal">&times;</span></a>
                <img src="https://www.parking-mobility.org/wp-content/uploads/2018/01/GettyImages-5145168551.jpg" alt="Avatar" className="avatar" />
              </div>
              <div className="containerform">
                <label htmlFor="email"><b>Email</b></label>
                <input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
                <br />

                <label htmlFor="password"><b>Password</b></label>
                
                <input
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  required
                /><br /><br />
                {this.state.loadBut === true ?
                (<button class="btn btn-info custom-btn btn-lg" type="submit" onClick={this.login} ><i class="fa fa-refresh fa-spin"></i> Login</button>):
                (<button class="btn btn-primary custom-btn btn-lg" type="submit" onClick={this.login} > Login</button>)}
                <button style={{ marginLeft: '20%' }} className="btn btn-secondary custom-btn btn-lg" onClick={this.signup} >Signup</button>                
              </div>

              <div className="containerform" style={{ backgroundColor: '#f1f1f1' }}>
                <a href="/"><button className="btn btn-danger custom-btn btn-lg" onClick={this.onCloseClick} >Cancel</button></a>

              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  


  render() {

    return (
      <div className="backimage">
        {this.renderLoginForm()}
      </div>
    );
  }
}
export default Login;