import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_wrap}>
                <footer className={styles.footer}>
                    <ul className={styles.social_list}>
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaLinkedin /></li>
                    </ul>
                    <p><span>Costs</span> &copy; 2024</p>
                </footer>
            </div>
        </div>
    )
}
export default Footer