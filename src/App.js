import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Naslovna from "./Konponente/Naslovna";
import Lokacija from "./Konponente/Lokacije";
import Turizam from "./Konponente/TurizamUHr";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Naslovna/>}></Route>
          <Route path='/lokacije' element={<Lokacija/>} />
          <Route path='/oturizmu' element={<Turizam/>} />
        </Routes>
      </Router>
      <footer>
        <p id='footer'>Toma Ljubica, g2p</p>
      </footer>
    </div>
  );
}

export default App;
