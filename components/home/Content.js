import CallToAction from "../ui/CallToAction";
import Algo from "../../pages/algo";
import styles from "../../styles/Home.module.css"

const Content = () => {
  return (
    <>
      <div className="bloc first">
        <div className="left relative">
          <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1820x1280:format=jpg/path/se8e39f54bcad7664/image/i7062d7b0e054fb69/version/1540632243/image.jpg" alt=""/>
          <div className="img-border"></div>
        </div>
        <div className="right col">
          <h1 className={styles.h1}>Ready not to Stop Talking Design ?</h1>
          <div className="item-right">
            <div className="orange item-right" style={{textAlign: 'center'}}>
              <p className={styles.p}>I want to <br/>join now!</p>
            </div>
          </div>
          <div className="grey">
            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequuntur cum inventore ipsam minus nam nemo quae reiciendis suscipit tempore? Dolorem eum magnam molestias nisi nostrum numquam voluptatibus! Cumque, sunt!</p>
          </div>
        </div>
      </div>
      <div className="bloc second">
        <div className="left">
          <h2 className={styles.h2}>Your luck if you join us now</h2>
        </div>
        <div className="right">
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aperiam aut cupiditate deleniti .</p>
          <CallToAction action={Algo}/>
        </div>
      </div>
    </>
  )
}

export default Content