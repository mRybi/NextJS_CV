import * as styles from "./Skills.module.css"
import global from '../../styles/Home.module.css';

export default function Skills() {
    return (
        <>
            <div className={global.flexRow}>
                <div className={global.flex1}><h3 className={global.sectionHeader}>04 SKILLS</h3></div>
                <div className={global.flex2}>
                    <div className={global.grid2}>
                        <p>React</p>
                        <p>Javascript/Typescript</p>
                        <p>HTML & CSS</p>
                        <p>Redux</p>
                        <p>Redux-Toolkit</p>
                        <p>RTK-Query</p>
                        <p>Chakra-UI</p>
                        <p>React Hook-From</p>
                        <p>Emotion</p>
                        <p>Jest/React-Testing-Library</p>
                        <p>C#</p>
                        <p>.NET</p>
                        <p>T-SQL</p>
                    </div>
                </div>
            </div>
        </>
    )
}