import { React } from "react";
import {
    Link
     } from "react-router-dom";

function NavigationMenu(props){
    return(
        <span className="font-bold text-lg">
            The Menu
            <ul>
                <li className="font-medium">
                    <Link to="/"
                    onClick={props.closeMenu}
                    >Home</Link>
                </li>
                <li className="font-medium">
                    <Link to="/about"
                    onClick={props.closeMenu}
                    >About</Link>
                </li>
                <li className="font-medium">
                    <Link to="/products/"
                    onClick={props.closeMenu}
                    >Product</Link>
                </li>
            </ul>
        </span>
    )
}
export default NavigationMenu