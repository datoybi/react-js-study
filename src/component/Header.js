import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState("espresso");
  useEffect(() => {
    fetch(`http://localhost:3001/category`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log(JSON.stringify(data));
  return (
    <header className="my-4">
      <a href="/" className="text-black">
        <h1 className="text-center font-bold">🌝 문벅스 메뉴 관리</h1>
      </a>
      <nav className="d-flex justify-center flex-wrap">
        {/* {data.map((el) => {
          return <div>{el.name}</div>;
        })} */}
        {/* {data.map((el) => (
          <div>{el.name}</div>

          // 	<button
          // 	data-category-name="{el.id}"
          // 	className="cafe-category-name btn bg-white shadow mx-1"
          // >
          // 	{el.name}
          // </button>
        ))} */}

        <button
          data-category-name="espresso"
          className="cafe-category-name btn bg-white shadow mx-1"
        >
          ☕ 에스프레소
        </button>
        <button
          data-category-name="frappuccino"
          className="cafe-category-name btn bg-white shadow mx-1"
        >
          🥤 프라푸치노
        </button>
        <button
          data-category-name="blended"
          className="cafe-category-name btn bg-white shadow mx-1"
        >
          🍹 블렌디드
        </button>
        <button
          data-category-name="teavana"
          className="cafe-category-name btn bg-white shadow mx-1"
        >
          🍸 티바나
        </button>
        <button
          data-category-name="desert"
          className="cafe-category-name btn bg-white shadow mx-1"
        >
          🍰 디저트
        </button>
      </nav>
    </header>
  );
}
