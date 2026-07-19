import "./Fund.css"
function Funds() {
    return (
        <div>
            <div className="walletLine">
                <h1 id="virtual" >Virtual Wallet</h1>
                <button id="add">Add Funds</button>
            </div>


            <div className="box">

                <div className="funds_box">
                    <div className="virtual">
                        <span>Virtual Balance </span>
                        <span>₹ 50,000 </span>
                    </div>
                    <div className="margin">
                        <span>F&O Margin Used</span>
                        <span>₹ 0.00</span>
                    </div>
                    <div className="total">
                        <span>Total Margin Used</span>
                        <span>₹ 0.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Funds;