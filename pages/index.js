import styles from '../styles/Home.module.css'
import Header from "../components/layout/Header"
import Content from "../components/home/Content"
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title={"Bonjour Cyril"}/>
      <Content/>
      <Footer />
    </div>
  )
}
