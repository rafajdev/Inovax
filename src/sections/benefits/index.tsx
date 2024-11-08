import styles from "./styles.module.css";
import Button from "../../components/button";
import InfoBlock from "../../components/infoblock";
import ScrollAnimation from "react-animate-on-scroll";

export default function Benefits() {
   return (
      <section className={styles.section} id="about">
         <div className={styles.section_content}>
            <div className={styles.section_content_left}>
               <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
                  <article className={styles.section_content_left_article}>
                     <h2 className={styles.section_content_left_article_title}>
                        Why Choose Inovax?
                     </h2>
                     <p
                        className={
                           styles.section_content_left_article_paragraph
                        }
                     >
                        Inovax stands out as your premier technology partner,
                        offering expertise across industries, custom solutions
                        tailored to your needs, a client-centric approach that
                        prioritizes your vision, cutting-edge technology to keep
                        you ahead, and scalable, sustainable solutions for
                        long-term growth. With a proven track record of
                        successful projects and satisfied clients, Inovax is the
                        trusted partner you need to innovate, transform, and
                        thrive in today's digital landscape.
                     </p>
                  </article>
                  <section className={styles.section_content_left_buttons}>
                     <Button
                        content="See our services"
                        width="270px"
                        backgroundColor="#536EF3"
                        fontColor="#F8F8F8"
                        backgroundColorHover="#3A4CA5"
                        fontColorHover="#F8F8F8"
                     />

                     <Button
                        content="Contact us"
                        width="270px"
                        backgroundColor="transparent"
                        fontColor="#080C23"
                        backgroundColorHover="#080C23"
                        fontColorHover="#F8F8F8"
                        borderColor="#080C23"
                        borderColorHover="#080C23"
                     />
                  </section>
               </ScrollAnimation>
            </div>

            <div className={styles.section_content_right}>
               <div className={styles.section_content_right_container}>
                  <ScrollAnimation animateIn="flipInX" animateOnce={true}>
                     <InfoBlock
                        imageName="icon1.png"
                        imageAlt="icon1"
                        text="Custom Solutions"
                     />
                  </ScrollAnimation>

                  <ScrollAnimation
                     animateIn="flipInX"
                     animateOnce={true}
                     delay={200}
                  >
                     <InfoBlock
                        imageName="icon2.png"
                        imageAlt="icon2"
                        text="Client-Centric Approach"
                     />
                  </ScrollAnimation>

                  <ScrollAnimation
                     animateIn="flipInX"
                     animateOnce={true}
                     delay={400}
                  >
                     <InfoBlock
                        imageName="icon3.png"
                        imageAlt="icon3"
                        text="Expertise Across Industries"
                     />
                  </ScrollAnimation>

                  <ScrollAnimation
                     animateIn="flipInX"
                     animateOnce={true}
                     delay={600}
                  >
                     <InfoBlock
                        imageName="icon4.png"
                        imageAlt="icon4"
                        text="Cutting-Edge Technology"
                     />
                  </ScrollAnimation>
               </div>
            </div>
         </div>
      </section>
   );
}
