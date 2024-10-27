import styles from './styles.module.css'

export default function Benefits() {
    return (
        <section className={styles.section} id='about'>
            <div className={styles.section_content}>
                <div className={styles.section_content_left}>
                    <article className={styles.section_content_left_article}>
                        <h2 className={styles.section_content_left_article_title}>Why Choose Inovax?</h2>.
                        <p className={styles.section_content_left_article_paragraph}>Inovax stands out as your premier technology partner, offering expertise  across industries, custom solutions tailored to your needs, a  client-centric approach that prioritizes your vision, cutting-edge  technology to keep you ahead, and scalable, sustainable solutions for  long-term growth. With a proven track record of successful projects and  satisfied clients, Inovax is the trusted partner you need to innovate,  transform, and thrive in today's digital landscape.</p>
                    </article>
                    <section className={styles.section_content_left_buttons}>

                    </section>
                </div>
                <div className={styles.section_content_right}>

                </div>
            </div>
        </section>
    )
}