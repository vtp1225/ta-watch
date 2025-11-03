
import React from "react";
import axiosClient from "../../../api/axiosApi";
import styles from "../../styles/login.module.css";
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
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target.closest("form");
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        axiosClient.post("/users", data)
            .then((response) => {
                console.log("Account created successfully:", response.data);
                alert("Account created successfully!");
                setIsLogin(true);
            })
            .catch((error) => {
                console.error("Error creating account:", error);
                alert("Error creating account. Please try again.");
            });
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
                            <form  className={styles.createAccountForm}>
                                <div className={styles.nameFields}>
                                    <label>First Name</label>
                                    <input name="firstname" type="text" placeholder="John" required />
                                    <label>Last Name</label>
                                    <input name="lastname" type="text" placeholder="Doe" required />
                                </div>

                                <label>Email</label>
                                <input name="email" type="email" placeholder="you@example.com" required />

                            <label>Password</label>
                            <div className={styles.passwordField}>
                                <input name="password" type="password" placeholder="••••••••" required />
                                <span className={styles.eye}>👁</span>
                            </div>
                            <label>Confirm Password</label>
                            <div className={styles.passwordField}>
                                <input name="confirmPassword" type="password" placeholder="••••••••" required />
                                <span className={styles.eye}>👁</span>
                            </div>
               

                            <button type="submit" onClick={(e) => {
                                handleSubmit(e);
                            }} className={`${styles.signinBtn} createAccountBtn`}>Submit</button>
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