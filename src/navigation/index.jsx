import { BrowserRouter, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import Home from "../pages/home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import { Route } from "react-router-dom"; 

const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Register" t={<Register />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Navigation;
