import React from 'react';
import './SeatStyle.css';
// import Register from './Register';

class SeatBox extends React.Component{
    state={ box: null, ckeckB: '' };

    onBoxClick=(e)=>{
        this.setState({
            box: e.target.defaultValue,
            checkB: 'checked'
        })
    }


    sanju(e){
        return(
        <input defaultValue={this.state.box} checked/>
        );
    }
 render(e){
console.log(111,this.state.ckeckB)
 return(
 <div>
     {/* <Register free={this.props.free}/> */}
     {this.state.checkB}
 <div className="seat-container">
 {/* <h1 style={{textAlign:"center",fontFamily:'italic bold'}}>Available Parking</h1> */}
 <div className="Seats"style={{overflowX: 'auto',textAlign:'center'}}>
 <p id="notification" />
 {this.state.box ? (<div><h3><u>{this.state.box}</u></h3><br /><h5 style={{ color: 'red', marginTop: '-5%', marginLeft: '-10%' }} >* Enter the above <b style={{ color: 'green'}}>Plot Id</b> into form</h5></div>):(<div></div> )}
 <table className="seatsBlock">
 <tbody><tr>
 <td />
 <td style={{fontSize:'23px'}}><b>1</b></td>
 <td style={{fontSize:'23px'}}><b>2</b></td>
 <td style={{fontSize:'23px'}}><b>3</b></td>
 <td style={{fontSize:'23px'}}><b>4</b></td>
 <td style={{fontSize:'23px'}}><b>5</b></td>
 <td />
 <td style={{fontSize:'23px'}}><b>6</b></td>
 <td style={{fontSize:'23px'}}><b>7</b></td>
 <td style={{fontSize:'23px'}}><b>8</b></td>
 <td style={{fontSize:'23px'}}><b>9</b></td>
 <td style={{fontSize:'23px'}}><b>10</b></td>
 <td style={{fontSize:'23px'}}><b>11</b></td>
 <td style={{fontSize:'23px'}}><b>12</b></td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}><b>A</b></td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A1" null={this.state.ckeckB} />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A5" />
 </td>
 <td className="seatGap" />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="A12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>B</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="B12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>C</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="C12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>D</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="D12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>E</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="E12" />
 </td>
 </tr>
 <tr className="seatVGap" />
 <tr>
 <td style={{fontSize:'23px'}}>F</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="F12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>G</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="G12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>H</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="H12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}>I</td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="I12" />
 </td>
 </tr>
 <tr>
 <td style={{fontSize:'23px'}}><b>J</b></td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J1" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J2" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J3" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J4" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J5" />
 </td>
 <td />
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J6" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J7" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J8" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J9" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J10" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J11" />
 </td>
 <td>
 <input type="checkbox" className="seats" onClick={this.onBoxClick} defaultValue="J12" />
 </td>
 </tr>
 </tbody></table>
 
 </div>
 {/* //details after booking displayed here */}
 </div>
 </div>
 
 
 
 
 );
 }
}
export default SeatBox;
