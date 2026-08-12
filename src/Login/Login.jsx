import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'
import { useState } from "react";




function Login() {
    const navigate = useNavigate();
    function handleLogin() {
        navigate("/dashboard")
    }
    return (
        <div className={styles.main}>
            <div className={styles.left_side}>
                <h1>Trading simulator</h1>
                <p className={styles.statement}>Full Real Trading Experience</p>
                <p className={styles.statement}>Ultra Fast Execution </p>
                <p className={styles.statement}>Live Charts with BUY and SELL</p>
            </div>
            <div className={styles.container}>

                <div className={styles.box}>
                    <div className={styles.heading}>
                        <h2>Trading Simulator</h2>
                    </div>
                    <input type="text" placeholder="Username" className={styles.input} />
                    <input type="text" placeholder="Password" className={styles.input2} />
                    <div onClick={handleLogin} className={styles.login} >
                        <button>Login</button>
                    </div>
                    <p className={styles.account}>Don't have an account? Sign up</p>
                </div>


            </div>
        </div>
    )
}
export default Login;