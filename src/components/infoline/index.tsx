import styles from "./styles.module.css";

export default function InfoLine({title, content, icon}: {title: string, content: string, icon: string}) {
     return (
          <div className={styles.infoline}>
               <div className={styles.infoline_icon}>
                    <img src={`./${icon}`} alt={icon}/>
               </div>
               <div>
                    <h4 className={styles.infoline_title}>{title}</h4>
                    <p className={styles.infoline_content}>{content}</p>
               </div>
          </div>
     )
}