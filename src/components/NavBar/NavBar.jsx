import { NavLink } from "react-router-dom";
import "./NavBar.css"

function Navigation() {
    return (
        <div>
            <div>
                <header>
                    <nav className="navigation_bar">
                        <NavLink to="/dashboard" style={{ color: "#4d4c4c" ,textDecoration: "none"}} >Dashboard</NavLink>
                        <NavLink to="/holdings" style={{ color: "#4d4c4c",textDecoration: "none"}}>Holdings</NavLink>
                        <NavLink to="/positions" style={{ color: "#4d4c4c" ,textDecoration: "none" }}>Positions</NavLink>
                        <NavLink to="/order" style={{ color: "#4d4c4c" ,textDecoration: "none" }}>Order</NavLink>
                        <NavLink to="/funds" style={{ color: "#4d4c4c" ,textDecoration: "none"}}>Funds</NavLink>
                    </nav>
                </header>
            </div>
        </div>
    )
}
export default Navigation;