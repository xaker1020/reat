import styles from './footer.module.css'

function Footer() {
  return (
    <div>
       <footer >
        <div className={styles.logo}>
          <img src="./a.png" alt="" />
          <h4>Virtual Class <br />
            for Zoom</h4>
        </div>
        <p className={styles.to}>Subscribe to get our Newsletter</p>
        <div>
        <div className={styles.div}>
           <button className={styles.btn5}>Your Email</button>
           <button  className={styles.btn4}>Subscribe</button>
        </div>
           
        </div>
        <div className={styles.links}>
            Careers | Privacy Policy | Terms & Conditions <br />
            © 2021 Class Technologies Inc.
        </div>
    </footer>   
    </div>
  )
}

export default Footer
