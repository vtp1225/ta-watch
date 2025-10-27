import { Header } from "../Component/Header";
import { LoginAndCreateAccountComponent } from "../Component/LoginAndCreateAccountComponent";
import { Footer } from "../Component/Footer";
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