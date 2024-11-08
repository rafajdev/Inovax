import styles from "./styles.module.css";
import { Link } from "react-scroll";

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <Link to="home" smooth={true} duration={500} className={styles.links}>
            <img src="./logo.png" alt="logo" />
         </Link>
         <section className={styles.footer_linksSection}>
            <Link
               to="home"
               smooth={true}
               duration={500}
               className={styles.links}
            >
               Home
            </Link>
            <Link
               to="about"
               smooth={true}
               duration={500}
               className={styles.links}
            >
               About Us
            </Link>
            <Link
               to="services"
               smooth={true}
               duration={500}
               className={styles.links}
            >
               Services
            </Link>
            <Link
               to="contact"
               smooth={true}
               duration={500}
               className={styles.links}
            >
               Contact
            </Link>
         </section>
         <section className={styles.footer_socials}>
            <a href="https://www.linkedin.com" target="_blank">
               <img src="./footer_icon1.png" alt="linkedin" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
               <img src="./footer_icon2.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
               <img src="./footer_icon3.png" alt="instagram" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
               <img src="./footer_icon4.png" alt="youtube" />
            </a>
         </section>
         <p className={styles.footer_copyright}>© Inovax 2024. All Rights Reserved</p>
      </footer>
   );
}
