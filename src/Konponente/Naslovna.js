import { Link } from "react-router-dom";
import slika from "./Slike/split.png";


function Naslovna() {
    return (
      <div className="App">
        <header>
          <h1>Naslovna</h1>
          <table>
            <tr id="flex2">

              <td>
                <div id="lokacije">
                  <Link to='/lokacije'><p>Odvedi me na lokacije</p></Link>
                </div>
              </td>

              <td>
                <div id="lokacije">
                  <Link to='/oturizmu'><p>Odvedi me na o turizmu</p></Link>
                </div>
              </td>

              <td>
                <div id="lokacije">
                  <a href="https://croatia.hr/"><p>Hr Turistički savez</p></a>
                </div>
              </td>
              

            </tr>
          </table>          
        </header>
        <br></br>
        <br></br>
        
        <h3>Ovo je stranica posvečena turizmu u dalmaciji</h3>
        <div id="flex">
        <img id="nasSlika" src={slika}/>
        </div>

      </div>
    );
  }
  
  export default Naslovna;