import './SeatStyle.css';
import React from 'react';


class Register extends React.Component {
  state = { box: null };

  onBoxClick = (e) => {
    this.setState({
      box: e.target.defaultValue,
      // checkB: 'checked'
    })
  }

  render(e) {
    console.log(111, this.state.ckeckB)
    return (
      <div>
        <div className="seat-container">
          {/* <h1 style={{textAlign:"center",fontFamily:'italic bold'}}>Available Parking</h1> */}
          <div className="Seats" style={{ overflowX: 'auto', textAlign: 'center' }}>
            <p id="notification" />
            {this.state.box ? (<div><h3><u>{this.state.box}</u></h3><br /><h5 style={{ color: 'red', marginTop: '-5%', marginLeft: '-10%' }} >* Enter the above <b style={{ color: 'green' }}>Plot Id</b> into form</h5></div>) : (<div></div>)}
            <table className="seatsBlock">
              <tbody><tr>
                <td />
                <td style={{ fontSize: '23px' }}><b>1</b></td>
                <td style={{ fontSize: '23px' }}><b>2</b></td>
                <td style={{ fontSize: '23px' }}><b>3</b></td>
                <td style={{ fontSize: '23px' }}><b>4</b></td>
                <td style={{ fontSize: '23px' }}><b>5</b></td>
                <td />
              </tr>
                <tr>
                  <td style={{ fontSize: '23px' }}><b>A</b></td>
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
                </tr>  
                <tr>
                  <td style={{ fontSize: '23px' }}>B</td>
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
                </tr>  
                  
                <tr>
                  <td style={{ fontSize: '23px' }}>C</td>
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
                </tr>  
                <tr>
                  <td style={{ fontSize: '23px' }}>D</td>
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
                </tr>  
                <tr>
                  <td style={{ fontSize: '23px' }}>E</td>
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
                </tr>
              </tbody></table>

          </div>
          {/* //details after booking displayed here */}
        </div>
      </div>




    );
  }
}
export default Register;