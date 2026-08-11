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
            <div className={styles.heading}>
                <h1>Trading Simulator</h1>
            </div>
            <div className={styles.box}>
                <input type="text" placeholder="Username" className={styles.input} />
                <input type="text" placeholder="Password" className={styles.input2} />
                <div onClick={handleLogin} className={styles.login} >
                    <button>Login</button>
                </div>
                <p className={styles.account}>Don't have an account? Sign up</p>
            </div>


        </div>
    )
}
export default Login;