import { NavLink } from "react-router-dom";
import "./NavBar.css"
import ProfileMenu from "./ProfileMenu";
import { useState,useRef,useEffect } from "react";

function Navigation() {
    const [showMenu, setShowMenu]=useState(false);
    const profileRef = useRef(null);
    useEffect(()=>{
        function handleClick(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowMenu(false)
            }
           
            
        }
         document.addEventListener("click", handleClick);
         return()=>{
            document.removeEventListener("click", handleClick);
         }
    },[]);
    return (
        <div>

            <header className="navigation_bar">
               <h1 id="heading">Trading Simulator </h1>
                <div>
                     
                    <nav className="nav1" >
                        <NavLink to="/dashboard" style={{ color: "#4d4c4c", textDecoration: "none" }} >Dashboard</NavLink>
                        <NavLink to="/holdings" style={{ color: "#4d4c4c", textDecoration: "none" }}>Holdings</NavLink>
                        <NavLink to="/positions" style={{ color: "#4d4c4c", textDecoration: "none" }}>Positions</NavLink>
                        <NavLink to="/order" style={{ color: "#4d4c4c", textDecoration: "none" }}>Order</NavLink>
                        <NavLink to="/funds" style={{ color: "#4d4c4c", textDecoration: "none" }}>Funds</NavLink>

                    </nav>
                </div>

                <div id="profile" ref={profileRef}>
                    <button id="but_profile" type="button"
                    onClick={()=> setShowMenu(!showMenu)}>
                        👤 <span id="user_name">Ankit</span>
                    </button>
                     
                      {showMenu && <ProfileMenu/>}
                </div>

            </header>

            <hr id="first_hr" />
        </div>
    )
}
export default Navigation;