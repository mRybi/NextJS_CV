import * as styles from "./Profile.module.css"
import global from '../../styles/Home.module.css';

export default function Profile() {
    return (
        <div className={global.flexRow}>
            <div className={global.flex1}><h3 className={global.sectionHeader}>01 PROFILE</h3></div>
            <p className={global.flex2}>Software Developer with ~4 years of experience. Worked on 2 big and several smaller projects. Started as Full Stack with .Net, TSQL and React stack. Developed dozen of React apps as well as few microservices with MERN Stack. Later on transitioned to more of a Frontend position with React, Redux and Typescript as a main language. Feels great in both front and back -end parts of a software development but for now seeks a job as Frontend developer with React. Good at communicating with a team. Quickly learns new technologies. Open for new challenges.</p>
        </div>
    )
}