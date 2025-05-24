import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart2, Home, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavbar = ({ items }) => {
    const { t } = useLanguage();

    const location = useLocation();

    const isHome = location.pathname === "/";

    const navItems = [
        {
            name: isHome ? t.nav.about : t.nav.home,
            href: isHome ? "/about" : "/",
            icon: isHome ? <Search size={20} /> : <Home size={20} />,
        },
        {
            name: t.nav.services,
            href: "/services",
            icon: <BarChart2 size={20} />,
        },
        {
            name: t.nav.portfolio,
            href: "/portfolio",
            icon: <User size={20} />,
        },
    ];

    return (
        <nav className="fixed bottom-0 z-50 w-full bg-white border-t border-gray-200 md:hidden">
            <div className="flex justify-between px-4 py-2">
                {items.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="flex flex-col items-center justify-center text-xs group"
                        >
                            <div
                                className={`p-1 rounded-full transition-colors duration-200 ${
                                    isActive
                                        ? "text-violet-600"
                                        : "text-gray-500 group-hover:text-violet-600"
                                }`}
                            >
                                {item.icon}
                            </div>
                            <span
                                className={`text-[10px] mt-1 ${
                                    isActive
                                        ? "text-violet-600 font-semibold"
                                        : "text-gray-500"
                                }`}
                            >
                                {item.name}
                            </span>
                            {isActive && (
                                <div className="h-[2px] w-6 mt-1 bg-violet-600 rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavbar;
