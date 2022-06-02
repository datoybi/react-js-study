import { useNavigate } from "react-router-dom";

export default function CreateMenu({ categoryName, categoryId }) {
  const navigate = useNavigate();
  const uniqueKey = () => Math.random().toString(36).substr(2, 16);

  const addMenu = () => {
    const input = document.querySelector("#espresso-menu-name");
    fetch(`http://localhost:3001/${categoryId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uniqueKey(),
        name: input.value,
        isSoldOut: false,
      }),
    }).then((res) => {
      if (res.ok) {
        navigate(`/category/${categoryId}`);
      }
    });
    input.value = "";
  };

  const onEnterPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      e.preventDefault();
      addMenu();
    }
  };
  return (
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
  );
}
