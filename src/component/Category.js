import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";

export default function Category() {
  let { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/category?id=${categoryId}`)
      .then((response) => response.json())
      .then((data) => setCategoryName(data[0].name));
  }, [categoryId]);

  const uniqueKey = () => Math.random().toString(36).substr(2, 16);

  const addMenu = () => {
    const input = document.querySelector("#espresso-menu-name");
    fetch(`http://localhost:3001/${categoryId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: uniqueKey(), name: input.value }),
    });
    input.value = "";
  };

  const onEnterPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      addMenu();
    }
  };

  return (
    <main className="mt-10 d-flex justify-center">
      <div className="wrapper bg-white p-10">
        <div className="heading d-flex justify-between">
          <h2 className="mt-1">{categoryName} 메뉴 관리</h2>
          <span className="mr-2 mt-4 menu-count">총 0개</span>
        </div>
        <form id="espresso-menu-form">
          <div className="d-flex w-100">
            <input
              type="text"
              id="espresso-menu-name"
              name="espressoMenuName"
              className="input-field"
              placeholder={`${categoryName.slice(
                2,
                categoryName.length
              )} 메뉴 이름`}
              autoComplete="off"
              onKeyPress={onEnterPress}
            />
            <button
              type="button"
              name="submit"
              id="espresso-menu-submit-button"
              className="input-submit bg-green-600 ml-2"
              onClick={addMenu}
            >
              확인
            </button>
          </div>
        </form>
        <Menu />
      </div>
    </main>
  );
}
