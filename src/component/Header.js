/* 
	current category가 모든 컴포넌트에서 기억하고 수정되게 하고 싶은데 
	그렇게 하는 방법을 검색하다가 state 끌어올리기 라는 것을 보았다. 
	상위로 끌어올린 후 모든것에 반영하는 것인데 이렇게 되면 어디서 바꼈는지가 어려워서
	찾기 힘들다고 한다. 더 알아봐야겠다.
*/
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/category`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <header className="my-4">
      <a href="/" className="text-black">
        <h1 className="text-center font-bold">🌝 문벅스 메뉴 관리</h1>
      </a>
      <nav className="d-flex justify-center flex-wrap">
        {categories.map((category) => (
          <Link to={`/category/${category.id}`} key={category.name}>
            <button
              key={category.id}
              className="cafe-category-name btn bg-white shadow mx-1"
            >
              {category.name}
            </button>
          </Link>
        ))}
      </nav>
    </header>
  );
}
