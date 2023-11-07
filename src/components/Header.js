import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Header = () => {
    //let btnName = "Login";

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header called");

    //no dependency array useEffect is called on every rendering of component
    useEffect(()=>{
        console.log("useEffect called");
    }, [btnNameReact])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us
                        </Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        //btnName="Logout"
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                        //console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;