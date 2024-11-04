import { LOGO_IMAGE,CART_IMAGE } from "../utils/Images";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [login,setLogin] = useState("Login");

    return(
        <div className="headl">
            <div className="logoContainer">
                <img className="logo"src={LOGO_IMAGE} alt="Logo"/>
            </div>
            <div className="navItems">
                <ul className="lists">
                    <li>
                        <Link className="linkto" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="linkto" to="/About">About</Link>
                    </li>
                    <li>
                        <Link className="linkto" to="/Contact">Contact</Link>
                    </li>
                    <li><img className="cart" src={CART_IMAGE} alt="cart-logo"/></li>
                    <li><button className="login" onClick={()=>
                    {
                        if(login=="Login") setLogin("Logout");
                        else setLogin("Login");
                    }
                    }>{login}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;