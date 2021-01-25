import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from "../components/Header"
import Footer from "../components/Footer";

import Algo from "./algo";

export default function Home() {
  return (
    <div className={styles.container}>

      {/*SEO*/}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*header*/}
      <Header/>

      {/*first bloc*/}
      <div className="bloc first">
        {/*left side*/}
        <div className="left relative">
          {/*<div style={{height: '480px', backgroundImage: `url("https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/se8e39f54bcad7664/image/i7062d7b0e054fb69/version/1540632243/image.jpg"`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>*/}
          <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/se8e39f54bcad7664/image/i7062d7b0e054fb69/version/1540632243/image.jpg" alt=""/>
          <div className="img-border"></div>
        </div>
        {/*right side*/}
        <div className="right col">
          <h1>Ready not to Stop Talking Design ?</h1>
          <div className="item-right">
            <div className="orange item-right" style={{textAlign: 'center'}}>
              <p>I want to <br/>join now!</p>
            </div>
          </div>
          <div className="grey">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur cum inventore ipsam minus nam nemo quae reiciendis suscipit tempore? Dolorem eum magnam molestias nisi nostrum numquam voluptatibus! Cumque, sunt!</p>
          </div>
        </div>

      </div>

      <div className="bloc second">

        <div className="left">
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <br/><br/><br/>
          <h2>Your luck if you join us now</h2>

        </div>
        <div className="right">
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aperiam aut cupiditate deleniti .</p>
          <button onClick={Algo()} className="cta">join now</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
