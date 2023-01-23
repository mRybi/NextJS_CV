import * as styles from "./Education.module.css";
import global from '../../styles/Home.module.css';

export default function Education() {
    return (
        <>
            <h3 className={global.sectionHeader}>03 EDUCATION</h3>
            <div className={global.flexCol}>

                <div className={global.flexRow}>
                    <p className={global.flex1}>Feb 2016 — Sep 2020</p>
                    <div className={global.flex2}>
                        <div className={styles.educationWrapper}>
                            <p className={styles.education}>University of Opole</p>
                            <p className={global.fontItalic}>Opole</p>
                        </div>
                        <p>Bachelor</p>
                        <p>As a Bachelor project programmed a Web application that generates SQL create database script from diagram that user invent in diagram editor. Link to github project</p>
                    </div>
                </div>
            </div>

        </>
    )
}