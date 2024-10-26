import styles from "./styles.module.css"
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
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