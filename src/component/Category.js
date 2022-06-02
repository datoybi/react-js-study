import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreateMenu from "./CreateMenu";
import Menu from "./Menu";

export default function Category() {
  let { categoryId } = useParams();
  const [categoryName, setCategoryName] = useState([]);
  const [menu, setMenu] = useState([]);
	
  useEffect(() => {
    // 카테고리 이름 가져오기
    fetch(`http://localhost:3001/category?id=${categoryId}`)
      .then((response) => response.json())
      .then((data) => setCategoryName(data[0].name));
  }, [categoryId]);

  useEffect(() => {
    // 하위메뉴들 가져오기
    fetch(`http://localhost:3001/${categoryId}`)
      .then((response) => response.json())
      .then((data) => setMenu(data));
  }, [menu]);

  return (
    <main className="mt-10 d-flex justify-center">
      <div className="wrapper bg-white p-10">
        <div className="heading d-flex justify-between">
          <h2 className="mt-1">{categoryName} 메뉴 관리</h2>
          <span className="mr-2 mt-4 menu-count">총 {menu.length}개</span>
        </div>
        <CreateMenu categoryName={categoryName} categoryId={categoryId} />
        <ul id="espresso-menu-list" className="mt-3 pl-0">
          {menu.map((el) => (
            <Menu menu={el} key={el.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}
