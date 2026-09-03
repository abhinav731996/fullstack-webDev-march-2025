import { Facebook, Instagram, Linkedin, TwitterX, Youtube } from "react-bootstrap-icons";
import styles from "../styles/scss/theme/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.details}>
        <div className={styles.hov}>Copyright © 2026 Hotelfy</div>
        <div className={styles.hov}>Privacy Policy</div>
        <div className={styles.hov}>Terms & conditions</div>
        <div className={styles.hov}>Contact</div>
      </div>
      <div className={styles.icons}>
      <div className={styles.iconHov}><Facebook/></div>
      <div className={styles.iconHov}><TwitterX/></div>
      <div className={styles.iconHov}><Instagram/></div>
      <div className={styles.iconHov}><Youtube/></div>
      <div className={styles.iconHov}><Linkedin/></div>
      </div>
    </footer>
  );
}
