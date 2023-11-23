import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
import {useSelector} from "react-redux";

const Header = () => {
    //let btnName = "Login";
    const onlineStatus = useOnlineStatus();
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const {loggedInUser} = useContext(UserContext);
    //console.log("loggedInUser", loggedInUser);
    //console.log("Header called");

    //subscribing to the store using the selector 
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItems", cartItems);
    
    //no dependency array useEffect is called on every rendering of component
    useEffect(()=>{
        //console.log("useEffect called");
    }, [btnNameReact])

    return (
        <div className="header flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg--green-50">
            <div className="logo-container">
                <img className="logo w-36" src={LOGO_URL} />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                       Online Status: {onlineStatus ? "✅" : "🔴"} 
                    </li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery
                        </Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                        <Link to="/cart">🛒({cartItems.length} items)</Link>
                    </li>
                    
                    <button className="login-btn" onClick={()=>{
                        //btnName="Logout"
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                        //console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;