import styles from "./styles.module.css";

export default function Home() {
   return (
      <section className={styles.section} id="home">
            <div className={styles.section_container}>
               <h1 className={styles.section_container_title}>
                  IN<span className={styles.span}>O</span>VAX
               </h1>
               <p className={styles.section_container_subtitle}>
                  Developing innovative solutions for your success
               </p>
            </div>
      </section>
   );
}
