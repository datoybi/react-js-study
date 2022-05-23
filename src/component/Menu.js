export default function Menu() {
  return (
    <main className="mt-10 d-flex justify-center">
      <div className="wrapper bg-white p-10">
        <div className="heading d-flex justify-between">
          <h2 className="mt-1">☕ 에스프레소 메뉴 관리</h2>
          <span className="mr-2 mt-4 menu-count">총 0개</span>
        </div>
        <form id="espresso-menu-form">
          <div className="d-flex w-100">
            <label className="input-label" hidden>
              에스프레소 메뉴 이름
            </label>
            <input
              type="text"
              id="espresso-menu-name"
              name="espressoMenuName"
              className="input-field"
              placeholder="에스프레소 메뉴 이름"
              autoComplete="off"
            />
            <button
              type="button"
              name="submit"
              id="espresso-menu-submit-button"
              className="input-submit bg-green-600 ml-2"
            >
              확인
            </button>
          </div>
        </form>
        <ul id="espresso-menu-list" className="mt-3 pl-0"></ul>
      </div>
    </main>
  );
}
