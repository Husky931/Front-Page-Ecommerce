import styles from './layout.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Layout({ children }) {
return <nav className={styles.navBar}>
        <div className={styles.nav_divs}>
          <p className={styles.para_nav_left}><u>GET THE APP</u></p>
        </div>
        <div className={styles.nav_divs}>
          <ul className={styles.list}>
            <li className={styles.list_items}>
              <a href="#home" className={styles.list_items_href}>Home</a>
            </li>
            <li className={styles.list_items}>
              <a href="#discover" className={styles.list_items_href} >Discover</a>
            </li>
            <li className={styles.list_items}>
              <a href="#about" className={styles.list_items_href} >About</a>
            </li>
          </ul>
        </div>
        <div className={styles.nav_divs}>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
        </div>
        </nav>
}