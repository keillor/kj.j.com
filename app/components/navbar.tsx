import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import KJLogo from "./kj_logo";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>
        <KJLogo height={100}/>
      </div>
      <ul className={styles.navlist}>
        <Link className={styles.buttons} href={"#"}>
          About Me
        </Link>
        <Link className={styles.buttons} href={"#"}>
          Projects
        </Link>
        <Link className={styles.buttons} href={"#"}>
          Site Map
        </Link>
      </ul>
    </div>
  );
}
