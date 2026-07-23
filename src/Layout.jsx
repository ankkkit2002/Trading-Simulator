
import NavBar from './components/NavBar/NavBar';
import { Outlet } from "react-router-dom";
import Funds from './Pages/Funds/Funds';
import Holdings from './Pages/Holdings/Holdings';
import Order from './Pages/Order/Order';
import Position from './Pages/Position/Position';

function Layout() {
    return (
        <div className='layout' style={{width:"85%", margin: "0 auto"}}>
            <NavBar />
            <Outlet />

        </div>
    )
}
export default Layout;