import { useState } from "react";
import styles from "./styles.module.css";

export default function Button({
   content,
   width,
   fontColor,
   backgroundColor,
   fontColorHover,
   backgroundColorHover,
   borderColor,
   borderColorHover,
}: {
   content: string;
   width: string;
   fontColor: string;
   backgroundColor: string;
   fontColorHover: string;
   backgroundColorHover: string;
   borderColor?: string;
   borderColorHover?: string;
}) {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <button
         className={styles.button}
         style={{
            width: width,
            color: isHovered ? fontColorHover : fontColor,
            backgroundColor: isHovered ? backgroundColorHover : backgroundColor,
            border: `4px solid ${
               isHovered ? borderColorHover : borderColor || "transparent"
            }`,
         }}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         {content}
      </button>
   );
}
