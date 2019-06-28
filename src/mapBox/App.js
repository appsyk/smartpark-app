import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
// import Header from '../NavBar/Header';
// import { NavLink } from 'react-router-dom';
// import Login from '../LoginStyle/Login';
import CurrentLocation from './Map';
// import LoginApp from '../LoginStyle/App';
import firebase from '../Reserve/Firebase';
// import Spinner from '../Loader/Spinner';
import SideBar from './SideBar';



export class MapContainer extends Component {
  constructor() {
    super();

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      showForm: false,
      user: null
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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


  iconMarker = new window.google.maps.MarkerImage(
    'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(50, 50)
  );
  iconMarker4Rent = new window.google.maps.MarkerImage(
    'https://cdn4.iconfinder.com/data/icons/business-red/512/home_marker-512.png',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new window.google.maps.Size(40, 40)
  );


  render() {
    return (
      <div>
        <div className="containerMap">
          <div className="rowT" style={{  overflow: 'scroll' }} >
            <div className="nameScroll" style={{ height: '586px' }}>
              <SideBar />
            </div>
            <div className="col-md-9 no-float overflow-hidden fixed-bottom" style={{ overflow: 'hidden' }} >
              <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker
                  onClick={this.onMarkerClick}
                  name={'Your location'}
                  title={'Your location'}
                  img={'http://getdrawings.com/free-icon/home-icon-for-website-55.png'} />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                    {/* <button onClick={this.onMark}>Login</button> */}
                  </div>
                </InfoWindow>
                <Marker
                  onClick={this.onMarkerClick}
                  //options={{icon: 'https://cdn4.iconfinder.com/data/icons/usefull-geo-points-for-maps/512/parking-place-geo-point-location-512.png', scaledSize:(12,12), size: '12,12'}}
                  icon={this.iconMarker}
                  title={'Airoli Station parking'}
                  name={'Airoli Station parking'}
                  addrs={'Sector 3, Airoli, Navi Mumbai, Maharashtra 400708'}
                  img={'https://lh5.googleusercontent.com/p/AF1QipMhD0murA228gczv9D9QYUw_B06U9XnA1h8_In4=w408-h229-k-no'}
                  rform={'/create@AIROLI_STATION'}
                  position={{ lat: 19.1596806, lng: 72.9986323 }} />
                <Marker
                  onClick={this.onMarkerClick}
                  icon={this.iconMarker}
                  title={'Datta Meghe College Of Engineering,Airoli'}
                  name={'Datta Meghe College Of Engineering,Airoli'}
                  addrs={'Sector 3,Airoli Navi  Mumbai,Maharashtra 400708'}
                  count={this.state.count}
                  abcd={this.props.free}

                  img={'https://lh3.googleusercontent.com/2UJJmRViC6PQgK7dShfrMoF-WDM7nBykmQStMsRIkC2yPi6QdUR-QCmEv84CsI_BEgCbGV2A6mWP7eop50LMfVVO4ZgpKWJEUn4v_JxBZjbG_Kgc-fD5Zs2DMcpoLNwCD4kglYTm6Nr4U5snPNWLW1rGsLiSwJA4oJ6NMu5C_50I6_CmmxigPPMf-or_HEfN0ofyMNG_y8sMOhz_-SYrkvTOw-iYP6L56ZQnAXDj187bQCXCOJvfyp7c9Moagw4rEFnOJay2sNkqV7V8-SGL7mAaVtXmRoCD0CJ-WTRZGJ1V3xhNAsZ3Gq_t_ry4Nb0bXQK4ihgkhXidYEPyaF1X8BKijiYOPZG9XVzdK1uPOExS9N41l3JL6R_H4E9IiwMLzkELaGMt5YyGFY0BxqoFRWbSA8q0fEBKtd7V2UGxf_lYObE_c7LN_Ujy3mmLerntSkJVL4y2-Upkzof3gBNaGht0I2opieccKSk_Iieve17O6qwuBhiWrZKwVSdAfzw3-0bEftyDz35K1f8vxvVPER_S7I1UzaSKpVkziDhlCsfDN6XGuW_TPsSR7nkZPIyAgC3tdAk3J0_qstt29hebV_-uRydGOqp3PLgoj1GV-wXcxWgctuv8ofPwLmH2rzUncA5O1iZby8lMV88p8e4ApPUFisDgWtGQBdQfsaMxkO6YauXZPAauUq9mejow0lJpykrKcylstEkEOAhvTfMGdG6E=w892-h669-no'}
                  rform={'/create@DMCE'}
                  position={{ lat: 19.1580995, lng: 72.9943447 }} />
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Pay & Park'}
              name={'Pay & Park'}
              count={this.state.count}

              addrs={'Plot No.31, Vaishakh Marg, Sector 2, New Panvel East, Panvel, Navi Mumbai, Maharashtra 410206'}
              img={'https://lh3.googleusercontent.com/p/AF1QipOM-SpCpYiIuQqPaBD-NWNm8fH-f510_W7_d6GS=s0'}
              position={{ lat: 18.9911581, lng: 73.1232492 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking, Panvel'}
              name={'Parking, Panvel'}
              position={{ lat: 18.9918067, lng: 73.122032 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Koparkhairne Station Parking'}
              name={'Koparkhairne Station Parking'}
              addrs={'RS Regency Road, Kopar Khairane, Navi Mumbai, Maharashtra 400709'}
              img={'https://lh3.googleusercontent.com/p/AF1QipPbDoyNvIYfzyqQOempbrjj9Q2yrNwkLmOGu9bT=s0'}
              
              position={{ lat: 19.103879, lng: 73.0117614 }} /> */}

                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'voltas Praking'}
              name={'Voltas Prking'}
              position={{ lat: 18.9646497, lng: 72.7990557 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Bike Parking'}
              name={'Bike Parking'}
              position={{ lat: 19.0381493, lng: 72.8590869 }} /> */}
                <Marker
                  onClick={this.onMarkerClick}
                  icon={this.iconMarker}
                  title={'kulgaon Badlapur municipal parking'}
                  name={'kulgaon Badlapur municipal parking'}
                  count={this.state.count}
                  addrs={'Station Rd, Patil Pada, Kulgaon, Badlapur, Maharashtra 421503'}
                  freeSpace={this.props.free}
                  img={'https://lh3.googleusercontent.com/p/AF1QipNfT2c8R-abKhNHxi3rfjTxW9Htwgx6_RZhM8Cn=s0'}
                  rform={'/create@BADLAPUR'}
                  dsk={this.props.sdk}
                  position={{ lat: 19.1667863, lng: 73.2379882 }} />
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking'}
              name={'Parking'}
              img={'https://lh3.googleusercontent.com/p/AF1QipM3SrxRoNseXGFWA6tJZJcbgf3Q5bvOEuqxKxxl=s0'}

              position={{ lat: 19.1141415, lng: 72.9884291 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking place for 2 and 4 wheelers underground'}
              name={'Parking place for 2 and 4 wheelers underground'}
              position={{ lat: 19.1979305, lng: 72.9185063 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking Lot'}
              name={'Parking Lot'}
              position={{ lat: 19.2196375, lng: 72.9572959 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'Parking,Ghansoli'}
              name={'Parking,Ghansoli'}
              position={{ lat: 19.103879, lng: 73.0117614 }} /> */}
                <Marker
                  onClick={this.onMarkerClick}
                  icon={this.iconMarker}
                  title={'Arihant Parking Systems'}
                  name={'Arihant Parking Systems'}
                  img={'https://lh3.googleusercontent.com/p/AF1QipM-oqvZ05gDilGO-_DIH3nZFiF6n-eDLU4D6UJg=s0'}
                  addrs={'R-399, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701'}
                  rform={'/create@ARIHANT_RABALE'}
                  test={this.props.test}
                  position={{ lat: 19.1228043, lng: 73.0132679 }} />
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'RCP Parking P13'}
              name={'RCP Parking P13'}
              img={'https://lh3.googleusercontent.com/p/AF1QipPBGnimDYqIyS463e1JIkrW5BwyJfDwCAP5VDfE=s0'}
              addrs={'Unnamed Rd, Reliance Corporate Park, MIDC Industrial Area, Ghansoli, Navi Mumbai, Maharashtra 400701'}
              position={{ lat: 19.1272599, lng: 73.0099789 }} /> */}
                {/* <Marker
              onClick={this.onMarkerClick}
              icon={this.iconMarker}
              title={'CSP Society Parking'}
              name={'CSP Society Parking'}
              addrs={'Pandit Jawaharlal Nehru Rd, Hira Nagar, Mulund West, Mumbai, Maharashtra 400080'}
              img={'https://lh3.googleusercontent.com/p/AF1QipN5yIXZviAXOFRzQw0zlShnjV31nUMfwiGuDqmv=s0'}

              position={{ lat: 19.1633806, lng: 72.9450292 }} /> */}
                <Marker
                  onClick={this.onMarkerClick}
                  icon={this.iconMarker}
                  title={'Orion Mall, Panvel'}
                  name={'Orion Mall, Panvel'}
                  addrs={'Bus Depot, Final Plot No 311, Near ST, Forest Colony, Panvel, Navi Mumbai, Maharashtra 410206'}
                  img={'http://rma-upload.s3.amazonaws.com/2016_04_20_04_07_45Orion_Mall_11.jpg'}
                  // spin={<Spinner />}
                  rform={'/create@ORION'}
                  position={{ lat: 18.9931809, lng: 73.1154138 }} />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                  onClick={this.onMark}
                >
                  <div style={{ backgroundColor: '#E5E5E5', marginLeft: '2.5%' }}>{this.state.selectedPlace.abcd}
                    <h2 style={{ textAlign: 'center' }}>{this.state.selectedPlace.name}</h2>
                    <h4 style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'center' }}>{this.state.selectedPlace.addrs}</h4>
                    {/* {this.state.selectedPlace.spin}<h1>count:{this.state.selectedPlace.count}</h1> */}
                    {/* freespace:{this.state.selectedPlace.dsk} */}
                    <img src={this.state.selectedPlace.img} alt={this.state.selectedPlace.name} style={{ height: '200px', width: '380px' }} />
                    <h1>{this.state.user ? (<a href={this.state.selectedPlace.rform}><button className="btn custom-btn col-md-12" style={{ backgroundColor: '#068FC2', height: '20%' }}>Park Here</button></a>) : (<h1 style={{ textAlign: 'center' }} > You have to <a href="/login"><b>Login</b></a> first !</h1>)}</h1>

                  </div>
                </InfoWindow>
                {/* <Marker
                  onClick={this.onMarkerClick}
                  icon={this.iconMarker4Rent}
                  title={'Sanjay Khatal'}
                  name={'Sanjay Khatal'}
                  // img={'https://lh3.googleusercontent.com/p/AF1QipM-oqvZ05gDilGO-_DIH3nZFiF6n-eDLU4D6UJg=s0'}
                  addrs={'E119, Nere, Navi Mumbai, Maharashtra 410206'}
                  rform={'/create@ARIHANT_RABALE'}
                  position={{ lat: 19.0021632, lng: 73.1537408 }} /> */}
              </CurrentLocation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapContainer);
