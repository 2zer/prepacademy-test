import Head from 'next/head'
import styles from '../../styles/Layout.module.css'

export default function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className="bloc">
          <div className="left">
            <h1 className={styles.barTitle}>Seminarin</h1>
          </div>
          <div className="right">
            <div className="nav">
              <ul className={styles.ul}>
                <li>Home</li>
                <li>Events</li>
                <li>Features</li>
                <li>Demos</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}