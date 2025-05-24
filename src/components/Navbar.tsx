import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu,
  Home,
  UserRound,
  Briefcase,
  Folder,
  Info 
} from "lucide-react";
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
          icon: <Info className="h-5 w-5" /> 
        }
      : { 
          name: t.nav.home, 
          href: "/",
          icon: <Home className="h-5 w-5" /> 
        },
    { 
      name: t.nav.services, 
      href: "/services",
      icon: <Briefcase className="h-5 w-5" /> 
    },
    { 
      name: t.nav.portfolio, 
      href: "/portfolio",
      icon: <Folder className="h-5 w-5" /> 
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
              <Link
                to="/"
                className="text-2xl font-bold font-space bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Train Solution
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

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/50"
                  >
                    {
                      languages.find(
                        (lang) => lang.code === language
                      )?.name
                    }
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`cursor-pointer ${
                        language === lang.code
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }`}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
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

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-50 pt-16 bg-white/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center px-3 py-3 text-base font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="mr-3">
                      {item.icon}
                    </span>
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;