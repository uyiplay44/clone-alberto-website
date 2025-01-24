import React from "react";
import "../index.css";
import Navbar from "../component/Nav/Navbar";
import ShopItem from "../component/ShopItem/ShopItem";
// import Footer from "../component/Footer/Footer";

function Shop() {
  return (
    <div className="shop">
      <Navbar />
      <ShopItem />
      {/* <Footer /> */}
    </div>
  );
}

export default Shop;
