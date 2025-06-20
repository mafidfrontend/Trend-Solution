import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, UserRound, Briefcase, Folder, Info } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navigation = [
    isHome
      ? {
          name: t.nav.about,
          href: "/about",
          icon: <Info className="h-5 w-5" />,
        }
      : {
          name: t.nav.home,
          href: "/",
          icon: <Home className="h-5 w-5" />,
        },
    {
      name: t.nav.services,
      href: "/services",
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      name: t.nav.portfolio,
      href: "/portfolio",
      icon: <Folder className="h-5 w-5" />,
    },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "uz", name: "O'zbekcha" },
    { code: "ru", name: "Русский" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="">
                <img width={60} height={60} src="./logo.png" alt="" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="bg-white/50">
                    {languages.find((lang) => lang.code === language)?.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`cursor-pointer ${
                        language === lang.code ? "bg-blue-50 text-blue-600" : ""
                      }`}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-around items-center h-16">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex flex-col items-center justify-center p-2"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center ${
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                {item.icon}
                <motion.span
                  className="text-xs mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.name}
                </motion.span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
