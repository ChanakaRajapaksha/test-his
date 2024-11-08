// Menu.js
import { Link } from "react-router-dom";
import { role } from "../lib/data";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin"],
            },
            {
                icon: "/doctor.png",
                label: "Doctors",
                href: "/doctor",
                visible: ["admin"],
            },
            {
                icon: "/patient.png",
                label: "Patients",
                href: "/patient",
                visible: ["admin"],
            },
            {
                icon: "/appoinment.png",
                label: "Appoinments",
                href: "/appoinments",
                visible: ["admin"],
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/announcement",
                visible: ["admin"],
            },
            {
                icon: "/calendar.png",
                label: "Calendar",
                href: "/calendar",
                visible: ["admin"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin"],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin"],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/",
                visible: ["admin"],
            },
        ],
    },
];

const Menu = () => {
    return (
        <div className="h-screen">
            {/* Logo Section */}
            <div className="flex items-center justify-center lg:justify-start gap-2 p-4 mb-6">
                <Link to="/" className="flex items-center justify-center gap-2 outline-none">
                    <img src="/logo.png" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block font-bold">RCP Health Lab</span>
                </Link>
            </div>

            {/* Menu Items */}
            {menuItems.map((i) => (
                <div className="flex flex-col gap-2" key={i.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                        {i.title}
                    </span>
                    {i.items.map((item) => {
                        if (item.visible.includes(role)) {
                            return (
                                <a
                                    href={item.href}
                                    key={item.label}
                                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-2 rounded-md hover:bg-slate-100"
                                >
                                    <img src={item.icon} alt="items" width={20} height={20} />
                                    <span className="hidden lg:block">{item.label}</span>
                                </a>
                            );
                        }
                    })}
                </div>
            ))}
        </div>
    );
};

export default Menu;
