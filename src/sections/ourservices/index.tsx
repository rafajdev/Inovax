import Card from '../../components/card'
import styles from './styles.module.css'

export default function Services() {
    return (
        <section className={styles.section} id='services'>
            <div className={styles.section_content}>
                <h1 className={styles.section_content_title}>Our Services</h1>
                <div className={styles.section_content_cards}>
                    <Card title='Custom Solutions' titleBgColor='#E1EEFF' content="We create tailor-made software solutions to meet each client's specific needs, optimizing processes and improving operational efficiency." icon='icon5.png' iconAlt='icon5' buttonContent='Learn More' buttonColor='#E1EEFF' buttonHoverColer='#C0CEDF'/>

                    <Card title='Technology Upgrades' titleBgColor='#B0E0FD' content="We assist companies in upgrading their existing technologies by integrating modern tools and solutions that enhance efficiency and competitiveness." icon='icon6.png' iconAlt='icon6' buttonContent='View Details' buttonColor='#B0E0FD' buttonHoverColer='#93BBD4'/>

                    <Card title='Process Automation' titleBgColor='#8EC2FF' content="We implement automation solutions to simplify routine tasks, reducing errors and freeing up resources for higher-value activities." icon='icon7.png' iconAlt='icon7' buttonContent='Get Details' buttonColor='#8EC2FF' buttonHoverColer='#6D96C6'/>
                </div>
            </div>
        </section>
    )
}