import { Link } from "react-router-dom";
import Slika1 from "./Slike/tur1.jpg";
import Klasa from "./ClassKomp";

function Naslovna() {
    return (
      <div className="App">
        <header>
          <h1>Više o Hrvatskom turizmu</h1>
          <div id="lokacije">
            <Link to='/'><p>Odvedi me na naslovnu</p></Link>
            </div>
        </header>
        <h1>Turizam u Dalmaciji</h1>
        <p>Turizam je ključan za ekonomiju cijele Hrvatske, naročito Dalmacije. Različite lokacije koje vrijedi posjetiti omogućuju jedinstven način života.</p>
        <br></br>
        <a href="https://croatia.hr/"><img id="img" src={Slika1} /></a>
        
        {/* <Klasa id='klas'/> */}
      </div>
    );
  }
  
  export default Naslovna;