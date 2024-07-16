import React from "react";
import "../index.css";
import Navbar from "../component/Nav/Navbar";
import ShopItem from "../component/ShopItem/ShopItem";

function Shop() {
  return (
    <div className="shop">
      <Navbar />
      <ShopItem />
    </div>
  );
}

export default Shop;
