import './Loginform.css';
import React from 'react';

class LoginForm extends React.Component {

    state = { showForm: false, closeForm: true };

    onLoginClick = () => {
        this.setState({ showForm: true });
    }

    onCloseClick = () => {
        this.setState({ closeForm: false });
    }

    renderLoginForm() {

        // if (this.state.showForm === false ) {
        //     return <div>sanju</div>
        // } else
        console.log(this.state.showForm);
        if (this.state.closeForm === true && this.state.showForm === true) {
            console.log('check', this.state.showForm);
            console.log(this.state.closeForm);
            return (
                <div>
                    <div className="">
                        {/* id="id01" */}
                        <form className="modal-content animate loginbox" action="/action_page.php">
                            <div className="imgcontainer">
                                <span onClick={this.onCloseClick} className="close" title="Close Modal">&times;</span>
                                <img src="https://www.parking-mobility.org/wp-content/uploads/2018/01/GettyImages-5145168551.jpg" alt="Avatar" className="avatar" />
                            </div>
                            <div className="containerform">
                                <label htmlFor="uname"><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="uname" required /><br />

                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required />

                                <button class="btn btn-primary btn-lg"><i class="fa fa-circle-o-notch fa-spin"></i> Login</button>
                                <button className="buttStyle signbutt" type="submit">SignUp</button>
                                {/* <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label> */}
                            </div>

                            <div className="containerform" style={{ backgroundColor: '#f1f1f1' }}>
                                <button className="buttstyle" type="button" onClick={this.onCloseClick} className="cancelbtn">Cancel</button>
                                {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderLoginForm()}
                <button onClick={this.onLoginClick} style={{ width: '250px' }}>Login</button>

            </div>
        );
    }
}

export default LoginForm;