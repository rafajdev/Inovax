import Button from "../../components/button";
import InfoLine from "../../components/infoline";
import Input from "../../components/input";
import styles from "./styles.module.css";

export default function Contact() {
   return (
      <section className={styles.section} id="contact">
         <div className={styles.section_content}>
            <div className={styles.section_content_header}>
               <h1 className={styles.section_content_header_title}>
                  Contact Us
               </h1>
            </div>
            <div className={styles.section_content_form}>
               <Input type="text" placeholder="Name" height="60px" />
               <Input type="text" placeholder="Email" height="60px" />
               <Input type="text" placeholder="Phone Number" height="60px" />
               <Input type="text" placeholder="Message" height="200px" />
            </div>
            <div className={styles.section_content_right}>
               <div className={styles.section_content_right_info}>
                  <InfoLine
                     title="Send us an email"
                     content="inovaxcontact@inovax.com"
                     icon="icon8.png"
                  />
                  <InfoLine
                     title="Or make a call"
                     content="+1 (123) 456-7890"
                     icon="icon9.png"
                  />
                  <InfoLine
                     title="Come visit us"
                     content="Generic adress, at Generic adress. Generic adress."
                     icon="icon10.png"
                  />
               </div>

               <Button
                  content="Send Message"
                  width="100%"
                  backgroundColor="#536EF3"
                  fontColor="#F8F8F8"
                  backgroundColorHover="#3A4CA5"
                  fontColorHover="#F8F8F8"
               />
            </div>
         </div>
      </section>
   );
}
