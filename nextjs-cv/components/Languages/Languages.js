import * as styles from "./Languages.module.css"
import global from '../../styles/Home.module.css';

export default function Languages() {
    return (
        <div className={global.flexRow}>
          <div className={global.flex1}><h3 className={global.sectionHeader}>05 LANGUAGES</h3></div>
          <div className={global.flex2}>
            <div className={global.grid2}>
              <p>Polish</p>
              <p>English</p>
            </div>
          </div>
        </div>
    )
}