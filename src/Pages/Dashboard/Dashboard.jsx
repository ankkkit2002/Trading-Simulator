import styles from './Dashboard.module.css'
function Dashboard() {
    return (
        <div>
            <div className={styles.first_box}>
                <span>Holdings</span>
                <span><button>All</button></span>
                <span><button>Stocks</button></span>
            </div>
        </div>
    )
}
export default Dashboard;