import React, { useState } from "react";
import { motion } from "motion/react";

function Navigation() {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return <ul className="nav-ul">
        <li className="nav-li">
            <a className="nav-link" href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
        </li>
        <li className="nav-li">
            <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
        </li>
        <li className="nav-li">
            <a className="nav-link" href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Projects</a>
        </li>
        <li className="nav-li">
            <a className="nav-link" href="#work" onClick={(e) => handleScroll(e, '#work')}>Work</a>
        </li>
        <li className="nav-li">
            <a className="nav-link" href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
        </li>
    </ul>
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40" style={{ width: "100%" }}>
        <div className='mx-auto c-space max-w-7xl'>
            <div className='flex items-center justify-between py-2 sm:py-0'>
                <a href="/" className="transition-colors text-neutral-400 hover:text-white">
                    <img src="assets/gray_on_trans.png" alt="Logo" className="logo-img h-8 w-auto hover:filter hover:brightness-0 hover:invert transition duration-200" />
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6" alt="toggle"></img>

                </button>
                <nav className="hidden sm:flex"><Navigation /></nav>
            </div>
        </div>
        {isOpen && (<motion.div className="block overflow-hidden text-center sm:hidden" initial={{ opacity:0, x: -10 }} animate={{ opacity: 1, x: 0 }} style={{ maxHeight: "100vh" }} transition={{ duration: 1 }}>
            <nav className="pb-5"><Navigation /></nav>
        </motion.div>)}
    </div>
  );
};

export default Navbar;
// This code defines a simple Navbar component using React.