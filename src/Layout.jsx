
import NavBar from './components/NavBar/NavBar';
import { Outlet } from "react-router-dom";
import Funds from './Pages/Funds';
import Holdings from './Pages/Holdings';

function Layout() {
    return (
        <div className='layout' style={{width:"85%", margin: "0 auto"}}>
            <NavBar />
            <Outlet />

        </div>
    )
}
export default Layout;