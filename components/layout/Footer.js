import styles from '../../styles/Layout.module.css'

export default function Footer() {
  return (
    <footer className="bloc">
      <div className="left">
        <p style={{borderLeft:' 2px solid blue'}}>certificate</p>
      </div>
      <div className="right row" style={{justifyContent: 'space-between'}}>
        <p>material book</p>
        <p>our mission</p>
      </div>
    </footer>
  )
}