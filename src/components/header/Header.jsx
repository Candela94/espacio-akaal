import './header.css'
import { useState, useEffect, useRef } from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router";

export const Header = () => {

    const [menu, setMenu] = useState(false);
    const [openDeskMenu, setOpenDeskMenu] = useState(false);
    const deskMenuRef = useRef(null);

    const handleOpenMenu = () => {
        setMenu(!menu);
    };

    const handleOpenDesk = () => {
        setOpenDeskMenu(!openDeskMenu);
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
                        <img src="/img/logo-icono.png" alt="logo" className="header-logo" />
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

                                    <li className="menu-li" onClick={() => setMenu(false)}>
                                        <NavLink to="/espacio-akaal">ESPACIO AKAAL</NavLink>
                                    </li>

                                    <li className="menu-li" onClick={() => setMenu(false)}>
                                        <NavLink to="/una-vioska">UNA VIOSKA</NavLink>
                                    </li>

                                    <li className="menu-li" onClick={() => setMenu(false)}>
                                        <NavLink to="/akaal-viajes">AKAAL VIAJES</NavLink>
                                    </li>

                                    <li className="menu-li" onClick={() => setMenu(false)}>
                                        <NavLink to="/akaal-retiros">AKAAL RETIROS</NavLink>
                                    </li>

                                    <li className="menu-li" onClick={() => setMenu(false)}>
                                        <NavLink to="/about">ACERCA DE</NavLink>
                                    </li>

                                </ul>

                                <div className="menu-rrss">
                                    <NavLink to="/privacidad" className="menu-privacy">
                                        POLÍTICA <br /> DE PRIVACIDAD
                                    </NavLink>

                                    <a href="https://instagram.com" target="_blank">
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
                        <li
                            className="header-desk-li"
                            onClick={handleOpenDesk}
                            ref={deskMenuRef}
                            style={{ position: 'relative' }}
                        >
                            SERVICIOS +

                            <AnimatePresence>
                                {openDeskMenu && (
                                    <motion.ul
                                        className="desk-dropdown"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <li onClick={() => setOpenDeskMenu(false)}>
                                            <NavLink to="/espacio-akaal">ESPACIO AKAAL</NavLink>
                                        </li>

                                        <li onClick={() => setOpenDeskMenu(false)}>
                                            <NavLink to="/una-vioska">UNA VIOSKA</NavLink>
                                        </li>

                                        <li onClick={() => setOpenDeskMenu(false)}>
                                            <NavLink to="/akaal-viajes">AKAAL VIAJES</NavLink>
                                        </li>

                                        <li onClick={() => setOpenDeskMenu(false)}>
                                            <NavLink to="/akaal-retiros">AKAAL RETIROS</NavLink>
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>

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


