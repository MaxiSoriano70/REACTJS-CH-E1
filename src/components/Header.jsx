import styles from '../css/header.module.css';
import logo from '../assets/img/Logo.png';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                <a href="./index.html" className={styles.linkLogo}>
                    <div className={styles.logoPrincipal}>
                    <img src={logo} alt="logo" />
                    </div>
                    Veterinaria
                </a>
                </div>

                <input
                    className={styles.checkHamburguesa}
                    type="checkbox"
                    id="menuBar"
                    checked={menuOpen}
                    onChange={toggleMenu}
                />

                <ul className={`${styles.navLink} ${menuOpen ? styles.showMenu : ''}`}>
                    <li><a href="./index.html" className={styles.link}><i className="fa-solid fa-house"></i> Home</a></li>
                    <li><a href="#Servicios" className={styles.link}><i className="fa-solid fa-shield-dog"></i> Servicios</a></li>
                    <li><a href="#Tips" className={styles.link}><i className="fa-solid fa-circle-info"></i> Tips</a></li>
                    <li><a href="#Contacto" className={styles.link}><i className="fa-solid fa-address-book"></i> Contacto</a></li>
                    <button className={styles.iniciarSesion}>Iniciar Sesión</button>
                </ul>

                <div className={styles.toggleBtn}>
                    <div className={styles.hamburguesa} onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;