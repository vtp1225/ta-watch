import { Header } from "../Component/Header";
import { LoginAndCreateAccountComponent } from "../Component/LoginAndCreateAccountComponent";
import { Footer } from "../Component/Footer";
export function CreateAccount() {
    return (
        <>
        <Header />
            <LoginAndCreateAccountComponent  isLogin={false} />
        <Footer />
        </>
    );
}