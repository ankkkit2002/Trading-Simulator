import { NavLink } from "react-router-dom";
import "./NavBar.css"

function Navigation() {
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

                <div id="profile">
                    <button id="but_profile" type="button">
                        👤 <span id="user_name">Ankit</span>
                    </button>
                     

                </div>

            </header>

            <hr id="first_hr" />
        </div>
    )
}
export default Navigation;