import { useEffect, useState } from "react";

export default function Menu({ menu }) {
  const [isSoldOut, setIsSoldOut] = useState(menu.isSoldOut);
  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
    // 여기 하는 중
    // useEffect(() => {
    // 	fetch(`http://localhost:3001/category`)
    // })
  };

  return (
    <li
      className={`menu-list-item d-flex items-center py-2 ${
        isSoldOut ? "sold-out" : ""
      }`}
    >
      <span className={"w-100 pl-2 menu-name"}>{menu.name}</span>
      <button
        onClick={toggleSoldOut}
        type="button"
        className="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
      >
        품절
      </button>
      <button
        type="button"
        className="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
      >
        수정
      </button>
      <button
        type="button"
        className="bg-gray-50 text-gray-500 text-sm menu-remove-button"
      >
        삭제
      </button>
    </li>
  );
}
