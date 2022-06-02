### npx create-react-app .

### npm install react-router-dom

### npm install -g json-server

### json-server --watch ./src/db/data.json --port 3001

#### https://www.npmjs.com/package/json-server

# Getting Started with Create React App

!:요구사항
!: html 컴포넌트화 하기
[x] header - 문벅스 메뉴 관리, 각각의 메뉴 버튼들
[x] category - 에스프레소 메뉴 관리 라는 소제목 부분과 input, 버튼들
[x] 카테고리 정보를 json에 API(get /category) 저장
[x] 카테고리 정보를 화면에 뿌려주기
[x] menu - 생성된 메뉴들 그에 맞게 json 구현

!: 이벤트 기능 구현
[x] category 버튼 누를 때 ㅇㅇ메뉴 관리 부분 렌더링
[x] 확인 버튼 누를시 메뉴 더해지기
[x] 카테고리 버튼 누를 시 각 카테고리에 맞는 하위 메뉴 렌더링하기
[x] 확인 버튼 누름과 동시에 하위 메뉴 rerendering 하기
[x] 확인버튼 누를시 총 x개 업데이트 되기
품절 버튼 클릭을 json 형태로 저장하고 싶은데
지금 문제가 카테고리 명을 가져오는거에 대해서 문제가 있는데 
일단 json 형태를 바꿔보는걸로 해결해보고 안되면 category id 가져오는걸로 하기
[] 품절 버튼 누를시 선 긋기
[] 수정 버튼 누를시 
[] prompt 띄우기
[] prompt에 기존 메뉴 명 넣기
[] 확인 누를 시 메뉴명 수정 반영하기
[] 삭제 누를시 confirm 창 뜨게 하기
[] 확인 누를시 메뉴 삭제 반영하기

!: API 정의서
