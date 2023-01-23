import Head from 'next/head'
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';
import Profile from '../components/Profile/Profile';
import EmploymentHistory from '../components/EmploymentHistory/EmploymentHistory';
import Skills from '../components/Skills/Skills';
import Languages from '../components/Languages/Languages';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Mikołaj Rybiński</h1>
          <h3>Software Developer</h3>
        </div>

<Contact />

        <Profile />
        
        <EmploymentHistory />

        <Education />

        <Skills />

        <Languages />

        <div className={styles.profileHeaderContainer}><h3 className={styles.sectionHeader}>06 PROCESSING OF PERSONAL DATA AGREEMENT</h3></div>
        <p className={styles.fontItalic}>„I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)”.</p>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}