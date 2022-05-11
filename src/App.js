// import './App.css';
// import "bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DrinksCalculator from "./components/projects/DrinksCalculator";
import "./scss/main.scss";
import CapitalCityGame from "./components/projects/CapitalCityGame";
import BestShop from "./components/projects/BestShop";
import CarSharing from "./components/projects/CarSharing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route path="/Drinks_Calculator" element={<DrinksCalculator />} />
          <Route path="/Car_Sharing" element={<CarSharing />} />
          <Route path="/Capital_City_Game" element={<CapitalCityGame />} />
          <Route path="/Best_Shop" element={<BestShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
