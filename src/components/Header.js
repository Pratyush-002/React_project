import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{

    const [ loginBtn , setloginBtn] = useState("login")
    return(
        <div className="header">
            <div className="logo-container">
              <Link to={"/"}>  <img className="logo" src={LOGO_URL}></img> </Link>
            </div>
            <div className="list">
                <ul className="list-items">
                    <li>
                        <Link to="/" id="link-decoration">Home</Link></li>
                    <li>
                        <Link to="/about" id="link-decoration">About Us</Link>
                        </li>
                    <li><Link to="/contact" id="link-decoration">Contact Us</Link></li>

                    <li>Cart</li>

                    <button className="login-btn" onClick={()=>{
                        loginBtn === 'login' 
                        ? setloginBtn("logout") 
                        : setloginBtn("login")
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;