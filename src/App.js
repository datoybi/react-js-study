import * as React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Category from "./component/Category";

function App() {
  return (
    <div id="app" className="px-4">
      <div className="d-flex justify-center mt-5 w-100">
        <div className="w-100">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/category/:categoryId" element={<Category />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
