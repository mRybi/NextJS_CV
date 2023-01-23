import * as styles from "./EmploymentHistory.module.css";
import global from '../../styles/Home.module.css';

export default function EmploymentHistory() {
    return (
        <>
        <h3 className={global.sectionHeader}>02 EMPLOYMENT HISTORY</h3>
        <div className={global.flexCol}>

        <div className={global.flexRow}>
            <p className={global.flex1}>10/2022 — Present</p>
            <div className={global.flex2}>
              <div className={styles.positionWrapper}>
                <p className={styles.position}>React Developer at Procodice</p>
                <p className={global.fontItalic}>Warsaw</p>
              </div>
              <p>
              Worked in 2 projects using React, Redux, Typescript stack.
              Effectively coded software changes and alterations based on specific design specifications. Utilized the latest software development tools, techniques, and approaches.
              Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout.
              </p>
            </div>
          </div>

          <div className={global.flexRow}>
            <p className={global.flex1}>09/2020 — 10/2022</p>
            <div className={global.flex2}>
              <div className={styles.positionWrapper}>
                <p className={styles.position}>Fullstack software developer at Medicover</p>
                <p className={global.fontItalic}>Warsaw</p>
              </div>
              <p>
                Worked mainly as a Frontend developer using React, Redux Toolkit with RTK-Query, Typescript, Emotion (Styled components) and Chakra-UI.

                Developed fully functional component library in React based on Chakra-UI for internal and external usage.

                Rarely developed some of backend features in .Net Core and .Net 5.

                Worked in SCRUM methodology in 2 weeks sprints with daily meetings, demo meetings, retrospective, sprint planning and backlog refinements.
              </p>
            </div>
          </div>

          <div className={global.flexRow}>
            <p className={global.flex1}>11/2019 — 02/2020</p>
            <div className={global.flex2}>
              <div className={styles.positionWrapper}>
                <p className={styles.position}>Fullstack software developer at Employsystem</p>
                <p className={global.fontItalic}>Opole</p>
              </div>
              <p>
                Got promoted to mid position.
                Worked on SQL Backend system using TSQL (writing Views, Procedures, Table/Scalar Functions) for Frontend ussage.

                Frontend React + Redux + Typescript. Switched to functional components in React with version 16.8 that introduced hooks.</p>
            </div>
          </div>

          <div className={global.flexRow}>
            <p className={global.flex1}>07/2018 — 11/2019</p>
            <div className={global.flex2}>
              <div className={styles.positionWrapper}>
                <p className={styles.position}>Junior software developer at Weegree IT</p>
                <p className={global.fontItalic}>Opole</p>
              </div>
              <p>
                First job after summer internship, getting used to work in SCRUM methodology. Worked as Junior Full Stack developer, developed few microservices in .Net Core/Node JS with MSSQL/Mongo database.
                Frontend side React + Redux + Typescript.</p>
            </div>
          </div>
        </div>
        </>
    )
}