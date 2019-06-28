//import './VruFormStyle.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


class ResTest extends React.Component{


    state = { showForm: false, closeForm: true };

    onLoginClick = () => {
        this.setState({ showForm: true });
    }

    onCloseClick = ( ) => {
        this.setState({ closeForm: false });
    }

    renderLoginForm() {

        // if (this.state.showForm === false ) {
        //     return <div>sanju</div>
        // } else
            console.log(this.state.showForm);
            // if( this.state.closeForm === true && this.state.showForm === true ){
                console.log('check',this.state.showForm);
                console.log(this.state.closeForm);
        return (
            <div>
                <div  className="">
                {/* id="id01" */}
                    <form className="modal-content animate loginbox" action="/action_page.php">
                        <div className="imgcontainer">
                            <span onClick={this.onCloseClick} className="close" title="Close Modal">&times;</span>
                            <img src="https://cdn1.iconfinder.com/data/icons/travel-hand-drawn-icons/64/travel_25-512.png" alt="Avatar" className="avatar" />
                        </div>
                        <div className="containerform">

                        <label htmlFor="uname"><b>Full Name</b></label>
                            <input type="email" placeholder="Enter Full Name" name="uname" required /><br/>

                            <label htmlFor="Vehiclename"><b>Vehicle Name</b></label>
                            <input type="text" placeholder="Enter Vehicle Name" name="Vehiclename" required />

                            <label htmlFor="VehicleNo"><b>Vehicle Number</b></label>
                            <input type="text" placeholder="Enter Vehicle Number" name="VehicleNo" required /><br/>

                            <label htmlFor="Mobile"><b>Mobile Number</b></label>
                            <input type="text" placeholder="Enter Mobile Number" name="MobNO" required />



                            <label htmlFor="uname"><b>Email</b></label>
                            <input type="Email" placeholder="Enter Email" name="uname" required /><br/>

                            <label htmlFor="ArrivalTime"><b>Arrival Time</b></label>
                            <input type="datetime-local"  name="ArrivalTime" required />

                            
                            <label htmlFor="LeavingTime"><b> Leaving Time</b></label>
                            <input type="datetime-local"  name="LeavingTime" required />

                            <button className="button55" type="submit">Letzzz GO....!</button>
                            {/* <button className="signbutt" type="submit">SignUp</button> */}
                            {/* <label>
                                <input type="checkbox" checked="checked" name="remember" /> Remember me
                                </label> */}
                        </div>
                        
                        <div className="containerform" style={{ backgroundColor: '#f1f1f1' }}>
                            <NavLink to='/'><button type="button" onClick={this.onCloseClick} className="cancelbtn">Cancel</button></NavLink>
                            {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
                        </div>
                     </form>
                </div>
            </div>
        );
    }
    

    render() {
        return (
            <div>
                {this.renderLoginForm()}
                {/* <button onClick={this.onLoginClick} style={{ width: '250px' }}>Login</button> */}

            </div>
        );
    }
}

export default ResTest;