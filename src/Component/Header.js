import { React } from "react";
import Navigation from './Navigation'
import { BrowserRouter as Router, 
    Switch,
    Route,
    Link
     } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
function Header(){
    return(
            <header className="border-b p-3 flex justify-between item-center">
                <span className="text-xl font-bold text-blue-500">
                    Mazonga
                </span>
                    <Navigation/>
            </header>
                
    )
}
export default Header