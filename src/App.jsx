// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllCatsPage from "./pages/AllCatsPage";
import { Nav } from "./pages/Nav";
import { Login } from "./pages/login/Login";
import { Chart } from "./pages/chart/Chart";
import CatDetails from "./pages/CatDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" elemnt={<Homepage />} />
        <Route path="/cats" element={<AllCatsPage />}></Route>
        <Route path="/cats/:catId" element={<CatDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Chart" Component={Chart}></Route>
      </Routes>
    </>
  );
}

export default App;
