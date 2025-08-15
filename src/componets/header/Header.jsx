import styles from "./header.module.css"


function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src="./a.png" alt="" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
        <div className={styles.box}>
          <button className={styles.btn}>Login</button>
          <button className={styles.btn}>Sign Up</button>
        </div>
          </ul>
        </nav>
      </header>
      <div className={styles.ota}>
        <div className={styles.textota}>
        <h1 className="h1"><span className="{styles.st}">Studying</span> Online is now much easier</h1>
        <p className={styles.skil}>Skilline is an interesting platform that will teach you in more an interactive way</p>
        <button className={styles.btn2}>Join for free</button>
        </div>
        <img src="./qiz.png" alt="" />
      </div>
    </div>
  )
}

export default Header