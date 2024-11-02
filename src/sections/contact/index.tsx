import Input from "../../components/input";
import styles from "./styles.module.css";

export default function Contact() {
    return (
        <section className={styles.section} id='contact'>
            <div className={styles.section_content}>
                <div>
                    <h1 className={styles.section_content_title}>Ready to take your business to the next level? 
                    Contact us now!</h1>
                </div>
                <section>
                    <Input type='text' placeholder='Full Name' height='75px'/>
                </section>
                <section>
                    <div>
                            
                    </div>
                </section>


            </div>
        </section>
    )
}