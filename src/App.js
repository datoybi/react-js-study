import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateDay from "./component/CreateDay";
import CreateWord from "./component/CreateWord";
import Day from "./component/Day";
import Days from "./component/Days";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Days />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/createWord" element={<CreateWord />} />
          <Route path="/createDay" element={<CreateDay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
