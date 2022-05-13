import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/CreateWord.module.css";

export default function CreateWord() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const engEl = useRef(null);
  const korEl = useRef(null);
  const dayEl = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3001/days`)
      .then((resonse) => resonse.json())
      .then((data) => setData(data));
  }, []);

  const addWord = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.ceil(Math.random() * 100000),
        day: parseInt(dayEl.current.value),
        eng: engEl.current.value,
        kor: korEl.current.value,
        isDone: false,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("생성이 완료되었습니다.");
        navigate(`/day/${dayEl.current.value}`);
      }
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2>단어 추가</h2>
        <input tpye="text" placeholder="eng" ref={engEl} />
        <input tpye="text" placeholder="kor" ref={korEl} />
        <label>등록할 날짜를 선택하세요.</label>
        <select ref={dayEl}>
          {data.map((day) => (
            <option key={day.id}>{day.day}</option>
          ))}
        </select>
        <a onClick={addWord} href="/">
          단어 추가
        </a>
      </div>
    </div>
  );
}
