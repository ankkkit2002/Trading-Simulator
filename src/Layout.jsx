
import NavBar from './components/NavBar/NavBar';
import { Outlet } from "react-router-dom";
import Funds from './Pages/Funds/Funds';
import Holdings from './Pages/Holdings/Holdings';
import Order from './Pages/Order/Order';
import Position from './Pages/Position/Position';
import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.layout}>
            <NavBar />
            <div className={styles.pagecontent}>
                <Outlet />
            </div>


        </div>
    )
}
export default Layout;

