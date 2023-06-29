import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import Main from "./pages/Main";
import MyList from "./pages/MyList";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<SingUp />} />
      <Route path="/main" element={<Main />} />
      <Route path="/mylist" element={<MyList />} />
      <Route path="search/:name" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
