import styles from "./styles/CreateDay.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/days`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  function addDay(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: data.length + 1, day: data.length + 1 }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
        navigate("/");
      }
    });
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <h2>현재일수 : {data.length} </h2>
        <a href="/" onClick={addDay}>
          날짜 추가
        </a>
      </div>
    </div>
  );
}
