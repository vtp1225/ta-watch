import { Header } from "../Components/Header";
import { LoginAndCreateAccountComponent } from "../Components/Login/LoginAndCreateAccountComponent";
import { Footer } from "../Components/Footer";
import { useState } from "react";
export function LoginRegister() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
        <Header style={{}} />
            <LoginAndCreateAccountComponent  isLogin={isLogin} setIsLogin={setIsLogin} />
        <Footer />
        </>
    );
}