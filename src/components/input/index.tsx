import styles from "./styles.module.css"

export default function Input({type, placeholder, height}: {type: string, placeholder: string, height: string}) {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} style={{height: height}}/>
    )
}