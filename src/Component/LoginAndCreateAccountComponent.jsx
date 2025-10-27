
import React from "react";
import styles from "../styles/login.module.css";
export function LoginAndCreateAccountComponent({isLogin, setIsLogin}) {
    function handleTabClick(event) {
        // Logic to switch between Login and Create Account tabs
        const clickedTab = event.target;
        clickedTab.classList.add(styles.active);
        const siblingTab = clickedTab.nextSibling || clickedTab.previousSibling;
        siblingTab.classList.remove(styles.active);
        if (clickedTab.innerText === "Login") {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
        
    }
    return (
        <>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                </div>
                <div className={styles.container}>
                    <div className={styles.card}>

                        <div className={styles.logo}>
                            <img src="../public/logoPNG.png" className={styles.logoImg} alt="" />
                            <p className={styles.subtitle}>Shop đồng hồ chính hãng</p>
                        </div>

                        <div className={styles.welcome}>
                            <h2> <img
                                width="40px"
                                height="40px"
                                src="https://img.icons8.com/led/32/watches-front-view.png"
                                alt="watches-front-view--v2"
                                style={{ verticalAlign: "middle", marginRight: "8px" }}
                            />
                                Welcome</h2>
                            <p>Sign in to your account to continue</p>
                        </div>

                        <div className={styles.tabs}>
                            <button className={`${styles.tab} ${isLogin ? styles.active : ""}`} onClick={(e) =>
                                handleTabClick(e)}>Login</button>
                            <button className={`${styles.tab} ${!isLogin ? styles.active : ""}`} onClick={(event) => handleTabClick(event)}>Create Account</button>
                        </div>
                        {/* Login Form */}
                        {isLogin ? (
                            <form>
                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" required />

                            <label>Password</label>
                            <div className={styles.passwordField}>
                                <input type="password" placeholder="••••••••" required />
                                <span className={styles.eye}>👁</span>
                            </div>

                            <div className={styles.options}>
                                <label><input type="checkbox" /> Remember me</label>
                                <a href="#" className={styles.forgot}>Forgot password?</a>
                            </div>

                            <button type="submit" className={styles.signinBtn}>Sign In</button>
                        </form>
                        ) : (
                            // Create Account Form
                            <form className={styles.createAccountForm}>
                                <div className={styles.nameFields}>
                                    <label>First Name</label>
                                    <input type="text" placeholder="John" required />
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Doe" required />
                                </div>

                                <label>Email</label>
                                <input type="email" placeholder="you@example.com" required />

                            <label>Password</label>
                            <div className={styles.passwordField}>
                                <input type="password" placeholder="••••••••" required />
                                <span className={styles.eye}>👁</span>
                            </div>
                            <label>Confirm Password</label>
                            <div className={styles.passwordField}>
                                <input type="password" placeholder="••••••••" required />
                                <span className={styles.eye}>👁</span>
                            </div>
                            
                            <div className={styles.options}>
                                <label><input type="checkbox" /> Remember me</label>
                                <a href="#" className={styles.forgot}>Forgot password?</a>
                            </div>

                            <button type="submit" className={styles.signinBtn}>Sign In</button>
                        </form>
                        )}

                        <footer>
                            © 2025 TAWATCH. All rights reserved.
                        </footer>
                    </div>


                </div>
                <div className={styles.imgContent}>
                </div>
            </div>
        </>
    );
}

export default LoginAndCreateAccountComponent;