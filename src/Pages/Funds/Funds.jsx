import styles from "./Fund.module.css"
function Funds() {
    return (
        <div>
            <div className={styles.walletLine}>
                <h1 className={styles.virtual_wallet} >Virtual Wallet</h1>
                <button className={styles.add}>Add Funds</button>
            </div>


            <div className={styles.box}>

                <div className={styles.funds_box}>
                    <div className={styles.virtual}>
                        <span>Virtual Balance </span>
                        <span>₹ 50,000 </span>
                    </div>
                    <div className={styles.margin}>
                        <span>F&O Margin Used</span>
                        <span>₹ 0.00</span>
                    </div>
                    <div className={styles.total}>
                        <span>Total Margin Used</span>
                        <span>₹ 0.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Funds;