import styles from "./styles.module.css";
import Button from "../button";

export default function Card({title, titleBgColor, content, icon, iconAlt, buttonContent, buttonColor, buttonHoverColer}: {title: string, titleBgColor: string ,content: string, icon: string, iconAlt: string, buttonContent: string, buttonColor: string, buttonHoverColer: string}) {
    return (
        <div className={styles.card}>
            <img src={`./${icon}`} alt={iconAlt} className={styles.card_icon}/>
            <h3 className={styles.card_title} style={{backgroundColor: titleBgColor}}>{title}</h3>
            <p className={styles.card_content}>{content}</p>
            <Button content={buttonContent} width='394px' backgroundColor={buttonColor} fontColor='#080C23;' backgroundColorHover={buttonHoverColer} fontColorHover='#080C23;'/>
        </div>
    )
}