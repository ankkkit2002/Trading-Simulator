import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css"
import ProfileMenu from "./ProfileMenu";
import { useState, useRef, useEffect } from "react";


function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const profileRef = useRef(null);
    // use ref for clicking outside so the search box can go back
    const searchRef = useRef(null);
    useEffect(() => {
        function handleClick(event) {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowMenu(false)
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSuggestions([])
            }


        }
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, []);


    // for search box

    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    //for adding stocks from serach box to watchlist
    const [watchlist, setWatchlist] = useState([]);
    const stocks = [
        "RELIANCE",
        "TCS",
        "INFY",
        "SBIN",
        "HDFCBANK",
        "ICICIBANK",
        "ITC",
        "WIPRO",
    ];

    function handleSearch(e) {
        const value = e.target.value;
        setSearch(value);
        if (value.trim() === "") {
            setSuggestions(stocks.slice(0, 6));
            return;
        }
        const filtered = stocks.filter(stock =>
            stock.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered.slice(0, 6));
    }

    //for adding stocks from serach box to watchlist
    function addtowatchlist(stock) {
        if (!watchlist.includes(stock)) {
            setWatchlist([...watchlist, stock])
        }
        setSearch("");
        setSuggestions([])
    }


    // for dark mode
    const [darkMode, setDarkMode]= useState(false);
    function toggleDarkMode() {
        setDarkMode(prev => !prev);
        document.body.classList.toggle("dark-mode")
    }

    return (
        <div>

            <header className={styles.navigation_bar}>
                <h1 className={styles.heading}>Trading Simulator </h1>
                <div>

                    <nav className={styles.nav1} >
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} >Dashboard</NavLink>
                        <NavLink to="/holdings" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Holdings</NavLink>
                        <NavLink to="/positions" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Positions</NavLink>
                        <NavLink to="/order" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Order</NavLink>
                        <NavLink to="/funds" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Funds</NavLink>

                    </nav>
                </div>

                <div className={styles.profile} ref={profileRef}>
                    <button className={styles.but_profile} type="button"
                        onClick={() => setShowMenu(!showMenu)}>
                        👤 <span className={styles.user_name}>Ankit</span>
                    </button>
                    {showMenu && <div className={styles.overlay}
                        onClick={() => setShowMenu(false)}>
                    </div>}
                    {showMenu && <ProfileMenu toggleDarkMode ={toggleDarkMode} />}
                </div>

            </header>



            <div className={styles.main_watchlist}>
                <div className={styles.searchContainer} ref={searchRef}>
                    <input type="text" placeholder="Search Stocks" value={search} onChange={handleSearch} onFocus={() => setSuggestions(stocks.slice(0, 6))} className={styles.search} />

                    {suggestions.length > 0 && (
                        <div className={styles.dropdown}>
                            {suggestions.map((stock) =>
                                <div key={stock} className={styles.item} onClick={() => {

                                    setSuggestions([])
                                    addtowatchlist(stock)
                                }}
                                >
                                    {stock}

                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className={styles.watchlist}>
                    {watchlist.map((stock) =>
                        <div key={stock} className={styles.watchlistItem}>
                            {stock}
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
export default Navigation;