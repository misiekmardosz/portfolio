import logo from './logo.svg';
// import './App.css';
// import "bootstrap/dist/css/bootstrap.css"
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DrinksCalculator from "./components/projects/DrinksCalculator";
import "./scss/main.scss"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/Drinks_Calculator" element={<DrinksCalculator/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
