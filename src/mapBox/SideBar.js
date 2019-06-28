import React from 'react';



class SideBar extends React.Component {
    render() {
        return (
            <div className=" no-float" style={{ backgroundColor: 'white' }} >
                <ul>
                    <li>
                        <div class="card nameHeight" style={{ backgroundColor: '#B8CBCB' }}>
                            <h5 class="card-header"> </h5>
                            <div class="card-body">
                                <h3 class="card-title text-uppercase">Orion Mall, Panvel</h3>
                                <p class="card-text">Bus Depot, Final Plot No 311, Near ST, Forest Colony, Panvel, Navi Mumbai, Maharashtra 410206</p>
                                <a href="/create@ORION" class="btn btn-primary custom-btn">Park Here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card nameHeight" style={{ backgroundColor: '#B8CBCB' }}>
                            <h5 class="card-header"> </h5>
                            <div class="card-body">
                                <h3 class="card-title text-uppercase">Arihant Parking Systems</h3>
                                <p class="card-text">R-399, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701</p>
                                <a href="/create@ARIHANT_RABALE" class="btn btn-primary custom-btn">Park Here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card nameHeight" style={{ backgroundColor: '#B8CBCB' }}>
                            <h5 class="card-header"> </h5>
                            <div class="card-body">
                                <h3 class="card-title text-uppercase">DMCE, Airoli</h3>
                                <p class="card-text">Sector 3,Airoli Navi Mumbai,Maharashtra 400708</p><br />
                                <a href="/create@DMCE" class="btn btn-primary custom-btn">Park Here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card nameHeight" style={{ backgroundColor: '#B8CBCB' }}>
                            <h5 class="card-header"> </h5>
                            <div class="card-body">
                                <h3 class="card-title text-uppercase">Airoli Station parking</h3>
                                <p class="card-text">Sector 3, Airoli, Navi Mumbai, Maharashtra 400708</p><br />
                                <a href="/create@AIROLI_STATION" class="btn btn-primary custom-btn">Park Here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="card nameHeight" style={{ backgroundColor: '#B8CBCB' }}>
                            <h5 class="card-header"> </h5>
                            <div class="card-body">
                                <h3 class="card-title text-uppercase">Badlapur parking</h3>
                                <p class="card-text">Station Rd, Patil Pada, Kulgaon, Badlapur, Maharashtra 421503</p>
                                <a href="/create@BADLAPUR" class="btn btn-primary custom-btn">Park Here</a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        );
    }
}

export default SideBar;