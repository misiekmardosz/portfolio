import logo from './logo.svg';
import './App.css';
import "./scss/main.scss"
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DrinksCalculator from "./components/DrinksCalculator";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/DrinksCalculator" element={<DrinksCalculator/>}/>
                {/*<Route path="/logowanie" element={<Login/>}/>*/}
                {/*<Route path="/rejestracja" element={<Register/>}/>*/}
                {/*<Route path="/wylogowano" element={<Logout/>}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
