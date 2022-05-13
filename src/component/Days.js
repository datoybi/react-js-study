import { Link } from "react-router-dom";
import styles from "./styles/Days.module.css";
import useFetch from "./hooks/useFetch";

export default function Days() {
  const days = useFetch(`http://localhost:3001/days`);
  return (
    <div className={styles.Days}>
      <div className={styles.wrapper}>
        {days.map((day) => (
          <Link to={`/day/${day.day}`} key={day.id} className={styles.btn}>
            {day.day} Day
          </Link>
        ))}
      </div>
    </div>
  );
}
