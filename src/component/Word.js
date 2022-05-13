import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Word.module.css";

export default function Word(props) {
  const [word, setWord] = useState(props.word);
  const [isDone, setIsDone] = useState(word.isDone);
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const toggleDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...word, isDone: !isDone }),
    })
      .then((res) => {
        if (res.ok) {
          setIsDone(!isDone);
        }
      })
      .catch((error) => console.log(error));
  };

  const deleteWord = (e) => {
    e.preventDefault();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          alert("삭제되었습니다.");
          setWord({ id: 0 });
          navigate(`/day/${word.day}`);
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? `${styles.off}` : ""}>
      <td>
        <input
          onChange={toggleDone}
          type="checkbox"
          checked={isDone ? true : false}
        />
      </td>
      <td>
        <span>{word.kor}</span>
      </td>
      <td>
        <span>{isShow && word.eng}</span>
      </td>
      <td>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setIsShow(!isShow);
          }}
        >
          {isShow ? "뜻 숨기기" : "뜻 보기"}
        </a>
        <a className={styles.deL_btn} href="/" onClick={deleteWord}>
          삭제
        </a>
      </td>
    </tr>
  );
}
