// Layout.js

import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="h-screen flex overflow-hidden">
            {/* Left Side: Menu */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Menu />
            </div>

            {/* Right Side: Content Area */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] flex flex-col">
                <Navbar />
                <div className="p-4 overflow-scroll flex flex-col h-full">
                    {/* Content rendered from child components */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
