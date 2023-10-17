import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;