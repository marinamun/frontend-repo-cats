// import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AllCatsPage from "./pages/AllCatsPage";
import { Nav } from "./pages/Nav";
import { Login } from "./pages/login/Login";
import Sellyourcat from "./pages/sell/Sellyourcat";
import CatDetails from "./pages/CatDetails";
import About from "./pages/About";
import ShoppingCart from "./pages/ShoppingCart";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/cats" element={<AllCatsPage />}></Route>
        <Route
          path="/cats/:catId"
          element={<CatDetails setCartItem={setCartItem} item={cartItem} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart item={cartItem} />}
        ></Route>

        <Route path="/Sellyourcat" element={<Sellyourcat />}></Route>
      </Routes>
    </>
  );
}

export default App;
