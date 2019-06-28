import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../Loader/Spinner';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginLeft: '-12px'
    // overflow: 'hidden',
  // },
  // smallmap: {
  //   position: 'absolute',
  //   width: '50%',
  //   height: '40%'
  // }
  }
};
export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }
// ----------------------------------------------------------------------------------------
  // async componentDidMount() {
  //   const { lat, lng } = await this.getcurrentLocation();
  //   this.setState(prev => ({
  //     fields: {
  //       ...prev.fields,
  //       location: {
  //         lat,
  //         lng
  //       }
  //     },
  //     currentLocation: {
  //       lat,
  //       lng
  //     }
  //   }));
  // }

  //  getcurrentLocation() {
  //   if (navigator && navigator.geolocation) {
  //     return new Promise((resolve, reject) => {
  //       navigator.geolocation.getCurrentPosition(pos => {
  //         const coords = pos.coords;
  //         resolve({
  //           lat: coords.latitude,
  //           lng: coords.longitude
  //         });
  //       });
  //     });
  //   }
  //   return {
  //     lat: 0,
  //     lng: 0
  //   };
  // }
  // addMarker = (location, map) => {
  //   this.setState(prev => ({
  //     fields: {
  //       ...prev.fields,
  //       location
  //     }
  //   }));
  //   map.panTo(location);
  // };

// -------------------------------------------------------------------------

  render() {
    const style = Object.assign({}, mapStyles.map);

    return (
      <div>
        <div style={style} ref="map">
          <Spinner />
        </div>
        {this.renderChildren()}
      </div>
    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 11,
  initialCenter: {
    lat: 19.1580995,
    lng: 72.9943447
  },
  centerAroundCurrentLocation: false,
  visible: true
};
