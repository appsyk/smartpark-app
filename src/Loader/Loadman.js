import './Loadman.css';
import React from 'react';

class Loadman extends React.Component {
    render() {
        return (
            <div title="">
                <div className='bodyStyle' style={{ marginLeft:'-7%', marginTop:'6.5%' }}>
                    <span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className='base'>
                        <span></span>
                        <div className='face'></div>
                    </div>
                </div>
                <div className='longfazers' style={{ marginTop:'-4%' }} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        );
    }
}

export default Loadman;