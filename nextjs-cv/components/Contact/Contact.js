import * as styles from "./Contact.module.css"
import global from '../../styles/Home.module.css';

export default function Contact() {
    return (
        <div className={global.grid2}>
            <p className={styles.contactHeader}>Phone  <span className={global.link}>516052071</span></p>
            <p className={styles.contactHeader}>Email  <span className={global.link}>mikolajrybinski@outlook.com</span></p>
            <p className={styles.contactHeader}>Links  <a className={global.link} href="https://www.linkedin.com/in/miko%25C5%2582aj-rybi%25C5%2584ski-042227181/">LinkedIn</a>, <a className={global.link} href="https://github.com/mRybi">Github</a></p>
        </div>
    )
}