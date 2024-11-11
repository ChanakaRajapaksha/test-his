import { Link } from "react-router-dom";
import { useUser } from "../userContext";

const Menu = () => {
    const user = useUser();

    console.log(user)

    if (user === null) {
        return null; 
    }

    const menuItems = [
        {
            title: "MENU",
            items: [
                {
                    icon: "/home.png",
                    label: "Home",
                    href: "/dashboard",
                },
                {
                    icon: "/doctor.png",
                    label: "Doctors",
                    href: "/doctor",
                },
                {
                    icon: "/patient.png",
                    label: "Patients",
                    href: "/patient",
                },
                {
                    icon: "/appoinment.png",
                    label: "Appointments",
                    href: "/appoinments",
                },
                {
                    icon: "/announcement.png",
                    label: "Announcements",
                    href: "/announcement",
                },
                {
                    icon: "/calendar.png",
                    label: "Calendar",
                    href: "/calendar",
                },
            ],
        },
        {
            title: "OTHER",
            items: [
                {
                    icon: "/profile.png",
                    label: "Profile",
                    href: `/profile/${user.id}`,
                },
                {
                    icon: "/setting.png",
                    label: "Settings",
                    href: "/settings",
                },
                {
                    icon: "/logout.png",
                    label: "Logout",
                    href: "/",
                },
            ],
        },
    ];

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
            {menuItems.map((section) => (
                <div className="flex flex-col gap-2" key={section.title}>
                    <span className="hidden lg:block text-gray-400 font-light my-4">
                        {section.title}
                    </span>
                    {section.items.map((item) => (
                        <Link
                            to={item.href}
                            key={item.label}
                            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 px-2 rounded-md hover:bg-slate-100"
                        >
                            <img src={item.icon} alt="items" width={20} height={20} />
                            <span className="hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;
