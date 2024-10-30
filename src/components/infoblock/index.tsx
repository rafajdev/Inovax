import styles from "./styles.module.css";

export default function InfoBlock({
   imageName,
   imageAlt,
   text,
}: {
   imageName: string;
   imageAlt: string;
   text: string;
}) {
   return (
      <div className={styles.infoblock} >
        <img src={`./${imageName}`} alt={`${imageAlt}`} />
        <h3>{text}</h3>
      </div>
   );
}