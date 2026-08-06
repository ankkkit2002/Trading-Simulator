import styles from "./Order.module.css"
function Order() {
    return (
        <div className={styles.main}>
            <h1>You have no orders today</h1>
            <button className={styles.but}>Previous Orders</button>
            
            
        </div>
    )
}
export default Order;