import React from 'react';
import Temp from './Temp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './NavBar/Header';
import App from './mapBox/App';
import LoginApp from './LoginStyle/App';
import Create from './reserveForm/Create';
import Edit from './reserveForm/Edit';
import Show from './reserveForm/Show';
import ResForm from './reserveForm/App';
import RentApp from './RentOut/RentApp';
// import firebase from './Reserve/Firebase';
import DmceShow from './Reserve/DMCE/App';
import CreateDmce from './Reserve/DMCE/Create';
import OrionShow from './Reserve/OrionMall/App';
import CreateOrion from './Reserve/OrionMall/Create';
import BadlapurShow from './Reserve/Badlapur/App';
import CreateBadlapur from './Reserve/Badlapur/Create';
// import Spinner from './Loader/Spinner';
import CreateAiroliStation from './Reserve/AiroliStation/Create';
import AiroliStationShow from './Reserve/AiroliStation/App';
import ArihantRabaleShow from './Reserve/ArihantRabale/App';
import CreateArihantRabale from './Reserve/ArihantRabale/Create';
import RentReq from './RentOut/RentForm';





class Test extends React.Component {
    // state = { count: 0 };

    // onCollectionUpdate = (querySnapshot) => {
    //     const badlapurs = [];
    //     querySnapshot.forEach((doc) => {
    //         this.setState({ count: (this.state.count + 1) })

    //         const { name, vehicle,
    //           email, phoneNumber, arrivingTime, leavingTime } = doc.data();
    //         badlapurs.push({
    //           key: doc.id,
    //           doc, // DocumentSnapshot
    //           name,
    //           vehicle,
    //           email,
    //           phoneNumber,
    //           arrivingTime,
    //           leavingTime,

    //         });
    //     });
    //     this.setState({
    //         badlapurs,
    //     });
    // }

    render() {
        // console.log("anusha",this.state.count);
        return (

            <BrowserRouter>
                <div>
                    {/* <LoginApp /> */}
                    <Header />
                    <Switch />
                    <div>
                        <Route path='/' exact component={Temp} />
                        <Route path='/search-maps' exact render={(props) => <App test="sanju" />} />
                        <Route path='/login' exact component={LoginApp} />
                        {/* <Route path='/sanju' exact component={ResTest} /> */}
                        <Route exact path='/app' component={ResForm} />
                        <Route path='/edit/:id' component={Edit} />
                        <Route path='/reserve-ur-place' exact component={Create} />
                        <Route path='/show/:id' component={Show} />
                        <Route path='/rent-out-ur-places' component={RentApp} />
                        <Route path='/show-rent-out-places' component={RentReq} />
                        <Route path='/reserve-place@DMCE' component={DmceShow} />
                        <Route path='/create@DMCE' component={CreateDmce} />
                        <Route path='/reserve-place@ORION' component={OrionShow} />
                        <Route path='/create@ORION' component={CreateOrion} />
                        <Route path='/reserve-place@BADLAPUR' component={BadlapurShow} />
                        <Route path='/create@BADLAPUR' component={CreateBadlapur} />
                        <Route path='/reserve-place@AIROLI_STATION' component={AiroliStationShow} />
                        <Route path='/create@AIROLI_STATION' component={CreateAiroliStation} />
                        <Route path='/reserve-place@ARIHANT_RABALE' component={ArihantRabaleShow} />
                        <Route path='/create@ARIHANT_RABALE' component={CreateArihantRabale} />

                        {/* <Route component={Spinner} /> */}
                        {/* <Register /> */}
                    </div>
                    {/* </Switch>  */}
                </div>

            </BrowserRouter>
        );
    }
}

export default Test;