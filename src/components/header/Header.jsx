import './header.css'
import { useState, useEffect, useRef } from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";

export const Header = () => {

    const [menu, setMenu] = useState(false);
    const [openDeskMenu, setOpenDeskMenu] = useState(false);
    const [openMobileServices, setOpenMobileServices] = useState(false);
    const deskMenuRef = useRef(null);

    const handleOpenMenu = () => {
        setMenu(!menu);
    };

    const handleOpenDesk = () => {
        setOpenDeskMenu(!openDeskMenu);
    };

    const handleOpenMobileServices = () => {
        setOpenMobileServices(!openMobileServices);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (openDeskMenu && deskMenuRef.current && !deskMenuRef.current.contains(e.target)) {
                setOpenDeskMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDeskMenu]);

    return (
        <>
            <header className="header-mobile">

                {/* NAV MOBILE */}
                <nav className="header-mobile-nav">
                    <NavLink to="/">
                        <img src="/img/logo.png" alt="logo" className="header-logo" />
                    </NavLink>
                    <span className="header-menu" onClick={handleOpenMenu}>MENÚ</span>
                </nav>


                {/* --- MENÚ MOBILE --- */}
                <AnimatePresence>
                    {menu && (
                        <>
                            <motion.div
                                className="blur-overlay"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={handleOpenMenu}
                            />

                            <motion.div
                                className="menu"
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '100%', opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="menu-cerrar" onClick={() => setMenu(false)}>CERRAR</div>

                                <ul className="menu-ul">

                                    <motion.li 
                                        className="menu-li" 
                                        onClick={() => setMenu(false)}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <NavLink to="/espacio-akaal">ESPACIO AKAAL</NavLink>
                                    </motion.li>

                                    <motion.li 
                                        className="menu-li" 
                                        onClick={handleOpenMobileServices}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        SERVICIOS +
                                    </motion.li>

                                    <AnimatePresence>
                                        {openMobileServices && (
                                            <motion.div
                                                className="mobile-services-submenu"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <motion.li 
                                                    className="menu-li submenu-item" 
                                                    onClick={() => { setMenu(false); setOpenMobileServices(false); }}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.1 }}
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <NavLink to="/una-vioska">UNA VIOSKA</NavLink>
                                                </motion.li>

                                                <motion.li 
                                                    className="menu-li submenu-item" 
                                                    onClick={() => { setMenu(false); setOpenMobileServices(false); }}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.15 }}
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <NavLink to="/akaal-viajes">AKAAL VIAJES</NavLink>
                                                </motion.li>

                                                <motion.li 
                                                    className="menu-li submenu-item" 
                                                    onClick={() => { setMenu(false); setOpenMobileServices(false); }}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.2 }}
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <NavLink to="/akaal-retiros">AKAAL RETIROS</NavLink>
                                                </motion.li>

                                                <motion.li 
                                                    className="menu-li submenu-item" 
                                                    onClick={() => { setMenu(false); setOpenMobileServices(false); }}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.2 }}
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <NavLink to="/gong">BAÑOS DE GONG</NavLink>
                                                </motion.li>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <motion.li 
                                        className="menu-li" 
                                        onClick={() => setMenu(false)}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <NavLink to="/about">ACERCA DE</NavLink>
                                    </motion.li>

                                    <motion.li 
                                        className="menu-li" 
                                        onClick={() => setMenu(false)}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <NavLink to="/contacto">CONTACTO</NavLink>
                                    </motion.li>


                                </ul>

                                <div className="menu-rrss">
                                    <NavLink to="/privacidad" className="menu-privacy"  onClick={() => setMenu(false)}>
                                        POLÍTICA <br /> DE PRIVACIDAD
                                    </NavLink>

                                    <a className='icon' href="https://www.instagram.com/espacio.akaal/" target="_blank" style={{color:'var(--background)'}}  onClick={() => setMenu(false)}>
                                        <IoLogoInstagram />
                                    </a>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>




                {/* --- NAV DESKTOP --- */}
                <nav className="header-nav-desk">

                    <NavLink to="/inicio" className="logo">ESPACIO AKAAL</NavLink>

                    <ul className="header-desk-ul">

                        {/* MENU SERVICIOS DESKTOP */}
                        <motion.li
                            className="header-desk-li"
                            onClick={handleOpenDesk}
                            ref={deskMenuRef}
                            style={{ position: 'relative' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            SERVICIOS +

                            <AnimatePresence>
                                {openDeskMenu && (
                                    <motion.ul
                                        className="desk-dropdown"
                                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        style={{ transformOrigin: "top" }}
                                    >
                                        <motion.li 
                                            onClick={() => setOpenDeskMenu(false)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <NavLink to="/espacio-akaal">ESPACIO AKAAL</NavLink>
                                        </motion.li>

                                        <motion.li 
                                            onClick={() => setOpenDeskMenu(false)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <NavLink to="/una-vioska">UNA VIOSKA</NavLink>
                                        </motion.li>

                                        <motion.li 
                                            onClick={() => setOpenDeskMenu(false)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <NavLink to="/akaal-viajes">AKAAL VIAJES</NavLink>
                                        </motion.li>

                                        <motion.li 
                                            onClick={() => setOpenDeskMenu(false)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <NavLink to="/akaal-retiros">AKAAL RETIROS</NavLink>
                                        </motion.li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </motion.li>

                        {/* ABOUT DESKTOP */}
                        <li className="header-desk-li">
                            <NavLink to="/about">ACERCA DE</NavLink>
                        </li>

                    </ul>
                </nav>

            </header>
        </>
    );
};