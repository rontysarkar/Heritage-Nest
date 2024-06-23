import { Outlet } from "react-router-dom";
import Navbar from "../Sherd/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className=' min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;