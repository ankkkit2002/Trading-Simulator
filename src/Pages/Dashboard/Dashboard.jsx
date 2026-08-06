import styles from './Dashboard.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
function Dashboard() {

    const[stocks,setStocks] =useState([
        {id:1, name: "Reliance", price:1450},
        {id:2, name: "TCS", price:2250},
        {id:3, name: "INFOSYS", price:1130},
        {id:4, name: "HDFCBANK", price:860},
        {id:5, name: "BPCL", price:420},
        {id:6, name: "JIO", price:280},
        {id:6, name: "ADANIGREEN", price:1350},
        {id:6, name: "NTPC", price:87},
        {id:6, name: "NHPC", price:320},
        {id:6, name: "POWERGRID", price:289},
        {id:6, name: "TECHMAHINDRA", price:2600},
    ])
     useEffect(()=>{
        const interval = setInterval(()=>{
            setStocks((prevStocks)=>
            prevStocks.map((stock)=>{
                const change = (Math.random()*20-10);

                return {
                    ...stock,
                    price: Number((stock.price + change).toFixed(2))
                };
            })
        );
        },5000)
        return () => clearInterval(interval)
     },[])
    return (
        <div className={styles.main}>


            <div className={styles.first_box}>
                <div className={styles.first_row}>
                    <span className={styles.port}>My Portfolio</span>
                    <div className={styles.buttons}>
                        <span><button>All</button></span>
                        <span><button>Stocks</button></span>
                        <span><button>ETFs</button></span>
                    </div>
                </div>
                <div className={styles.second_row}>
                    <div className={styles.invested}>
                        <span className={styles.label}>Invested</span>
                        <p className={styles.rupee}>₹ 0.00</p>
                    </div>
                    <div className={styles.current}>
                        <span className={styles.label}>Current Value</span>
                        <p className={styles.rupee}>₹ 0.00</p>
                    </div>
                    <div className={styles.overall}>
                        <span className={styles.label}>OverAll Pnl</span>
                        <p className={styles.rupee}>₹ 0.00</p>
                    </div>
                </div>

            </div>
            <div className={styles.second_box}>
                <div className={styles.but2}>
                    <button>Gainers</button>
                    <button>Losers</button>
                </div>
                <hr className={styles.hr1} />
                <div className={styles.headings}>
                    <span className={styles.name}>Company</span>
                    <span className={styles.name}>Current Price</span>

                </div>
                {stocks.map((stock)=>{
                    return(
                    <div key={stock.id} className={styles.stockRow}>
                        <span className={styles.stock}>{stock.name}</span>
                        <span className={styles.price}>{"₹ "+stock.price }</span>
                    </div>
                    )
                })}
            </div>


        </div>
    )
}
export default Dashboard;