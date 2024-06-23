import { Outlet } from "react-router-dom";
import Navbar from "../Sherd/Navbar";
import Footer from "../Sherd/Footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className=' min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Main;