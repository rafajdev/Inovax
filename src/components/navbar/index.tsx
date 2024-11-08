import { useState } from "react";
import styles from "./styles.module.css"
import { Link } from 'react-scroll';

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 187) {
            setNav(true);
        } else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? styles.nav_active: styles.nav}>
            <div className={styles.nav_container}>
                <Link to="home" smooth={true} duration={500} className={styles.links}>
                    <img src="./logo.png" alt="logo" />
                </Link>
                <section className={styles.nav_container_linksSection}>
                    <Link to="home" smooth={true} duration={500} className={styles.links}>Home</Link>
                    <Link to="about" smooth={true} duration={500} className={styles.links}>About Us</Link>
                    <Link to="services" smooth={true} duration={500} className={styles.links}>Services</Link>
                    <Link to="contact" smooth={true} duration={500} className={styles.links}>Contact</Link>  
                </section>
            </div>
        </nav>
    )
}