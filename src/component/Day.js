import { useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import styles from "./styles/Day.module.css";
import Word from "./Word";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div className="day">
      <div className={styles.wrapper}>
        <div className={styles.title__wrapper}>
          <p className={styles.title}>Day {day}</p>
        </div>
        <div className={styles.table__wrapper}>
          <table className={styles.table}>
            <tbody>
              {words.map((word) => (
                <Word word={word} key={word.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
