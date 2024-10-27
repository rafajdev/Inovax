import styles from "./styles.module.css"

export default function AboutUs() {
    return (
        <section className={styles.section} id='about'>
            <img src="./people_working.png" alt="people working" className={styles.section_image}/>
            <div className={styles.section_content}>
                <div className={styles.section_content_container}>
                    <h2 className={styles.section_content_container_title}>About Us</h2>
                    <p className={styles.section_content_container_paragraph}>At Inovax, we’ve been at the forefront of technology for years, transforming business challenges into innovative, scalable solutions. With deep expertise in custom software development, we partner with businesses across industries to optimize operations and drive growth.
                    Our experience enables us to craft tailored digital strategies, from automating processes to leading full-scale digital transformations. We believe technology unlocks new possibilities and are committed to delivering precise, forward-thinking solutions for our clients’ evolving needs.</p>
                </div>
            </div>
        </section>
    )
}