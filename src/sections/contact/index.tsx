import Input from "../../components/input";
import styles from "./styles.module.css";

export default function Contact() {
    return (
        <section className={styles.section} id='contact'>
            <div className={styles.section_content}>
                <div className={styles.section_content_header}>
                    <h1 className={styles.section_content_header_title}>Contact Us</h1>
                </div>
                <div className={styles.section_content_form}>
                    <Input type='text' placeholder='Name' height='60px'/>
                    <Input type='text' placeholder='Email' height='60px'/>
                    <Input type='text' placeholder='Phone Number' height='60px'/>
                    <Input type='text' placeholder='Message' height='200px'/>
                </div>
                <div className={styles.section_content_right}>

                </div>
            </div>
        </section>
    )
}