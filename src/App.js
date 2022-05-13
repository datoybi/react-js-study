import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Category from "./component/Category";

function App() {
  return (
    <div id="app" class="px-4">
      <div class="d-flex justify-center mt-5 w-100">
        <div class="w-100">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Category />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
