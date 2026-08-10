import { useNavigate } from "react-router-dom";
import styles from './Login.module.css'
import { useState } from "react";




function Login() {
    const navigate = useNavigate();
    function handleLogin() {
        navigate("/dashboard")
    }
    return (
        <div>
            <div className={styles.heading}>
                <h1>Trading Simulator</h1>
            </div>
            <div onClick={handleLogin} className={styles.login} >
                <button>Login</button>
            </div>

        </div>
    )
}
export default Login;