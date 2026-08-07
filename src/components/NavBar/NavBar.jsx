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
        if(value.trim()=== ""){
            setSuggestions(stocks.slice(0,5));
            return;
        }
        const filtered = stocks.filter(stock =>
            stock.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered.slice(0,5));
    }

    return (
        <div>

            <header className={styles.navigation_bar}>
                <h1 className={styles.heading}>Trading Simulator </h1>
                <div>

                    <nav className={styles.nav1} >
                        <NavLink to="/dashboard" style={{ color: "#4d4c4c", textDecoration: "none" }} >Dashboard</NavLink>
                        <NavLink to="/holdings" style={{ color: "#4d4c4c", textDecoration: "none" }}>Holdings</NavLink>
                        <NavLink to="/positions" style={{ color: "#4d4c4c", textDecoration: "none" }}>Positions</NavLink>
                        <NavLink to="/order" style={{ color: "#4d4c4c", textDecoration: "none" }}>Order</NavLink>
                        <NavLink to="/funds" style={{ color: "#4d4c4c", textDecoration: "none" }}>Funds</NavLink>

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
                    {showMenu && <ProfileMenu />}
                </div>

            </header>

            <hr className={styles.first_hr} />

            <div className={styles.main_watchlist}>
                <div ref={searchRef} className={styles.searchContainer}>
                    <input type="text" placeholder="Search Stocks" value={search} onChange={handleSearch} onFocus={() => setSuggestions(stocks.slice(0,4))} className={styles.search} />
                    
                    {suggestions.length > 0 && (
                        <div className={styles.dropdown}>
                            {suggestions.map((stock) =>
                                <div key={stock} className={styles.item} onClick={() => {
                                    setSearch(stock);
                                    setSuggestions([])
                                }}
                                >
                                    {stock}

                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className={styles.watchlist}>

                </div>
            </div>
        </div>
    )
}
export default Navigation;