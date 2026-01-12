import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
      if (window.innerWidth > 1100) {
        setIsOpen(false);
      }
    };

    // Close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "masáže", to: "masaze" },
    { name: "galerie", to: "galerie" },
    { name: "dárkové poukazy", to: "poukazy" },
    { name: "ceník", to: "cenik" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 lg:px-0 lg:justify-center lg:gap-[160px] relative max-w-[1800px] mx-auto">
      {/* logo */}
      <img src="logo-masaze.svg" alt="logo" className="h-20 lg:h-24" />

      {/* Desktop links */}
      <div className="hidden lg:flex justify-center items-center gap-14 font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            className="text-black/75 hover:text-black link cursor-pointer transition-colors duration-200"
            to={link.to}
            smooth={true}
            duration={500}
          >
            {link.name}
          </Link>
        ))}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            className="text-white cursor-pointer py-2.5 shadow-lg/20 px-8 rounded-xl bg-[#71645c] hover:bg-[#5a4f48] transition-colors duration-200"
            to="objednavka"
            smooth={true}
            duration={500}
          >
            objednat masáž
          </Link>
        </motion.div>
      </div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden text-[#71645c] focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {isOpen ? (
          <FaTimes size={28} className="text-[#71645c]" />
        ) : (
          <FaBars size={28} className="text-[#71645c]" />
        )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 py-4 px-6"
          ref={menuRef}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                className="text-black/75 hover:text-black py-2 cursor-pointer"
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} className="pt-2">
              <Link
                className="block text-white cursor-pointer py-2.5 shadow-lg/20 px-8 rounded-xl bg-[#71645c] text-center hover:bg-[#5a4f48] transition-colors duration-200"
                to="objednavka"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                objednat masáž
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;