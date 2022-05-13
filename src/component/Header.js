import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";

export default function Header() {
  return (
    <div className="header">
      <div className={styles.header__wrapper}>
        <Link to="/" className={styles.header}>
          Voca
        </Link>
        <div className={styles.btn__wrapper}>
          <Link to="/createWord">단어 추가</Link>
          <Link to="/createDay">Day 추가</Link>
        </div>
      </div>
    </div>
  );
}