import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-teal-50">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <img 
                    src="/search.png"
                    alt="search"
                    width={20}
                    height={20}
                />
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
            {/* ICONS AND USER */}
            <div className="flex items-center gap-6 justify-end w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                   <Link to="/appoinments">
                        <img
                            src="/message.png"
                            alt="message"
                            width={20}
                            height={20}
                        />
                   </Link>
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                   <Link to='/announcement'>
                        <img
                            src="/announcement.png"
                            alt="announcement"
                            width={20}
                            height={20}
                        />
                   </Link>
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-sm">1</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">RCP Rajapaksha</span>
                    <span className="text-[12px] text-gray-500 text-right">Admin</span>
                </div>
                <img 
                    src="/avatar.png"
                    alt="avatar"
                    width={36}
                    height={36}
                    className="rounded-full"
                />
            </div>
        </div>
    );
};

export default Navbar;