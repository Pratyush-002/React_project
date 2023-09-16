import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () =>{

    const [ loginBtn , setloginBtn] = useState("login")
    return(

        <div className="flex justify-evenly shadow-lg bg-yellow-200 m-[10px_20px] rounded-full">

            <div className="bg-inherit w-24 ">
              <Link to={"/"}>  
              <img className="rounded-full relative right-20" src={LOGO_URL}></img>
               </Link>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center relative left-64">
                    <li className="px-3">
                        <Link to="/" id="link-decoration">Home</Link></li>
                    <li className="px-3">
                        <Link to="/about" id="link-decoration">About Us</Link>
                        </li>
                    <li className="px-3"><Link to="/contact" id="link-decoration">Contact Us</Link></li>
                    <li className="px-3">Cart</li>

                    <button className="text-center rounded-full bg-white  hover:bg-white hover:text-yellow-500 h-8 w-16" 
                         onClick={()=>{
                        loginBtn === 'Login' 
                        ? setloginBtn("Logout") 
                        : setloginBtn("Login")
                    }}>{loginBtn}
                    </button>

                </ul>
            </div>
        </div>
    )
}

export default Header;