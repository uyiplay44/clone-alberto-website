import React from "react";
import Photo1 from "../../image/img10.png";
import Photo2 from "../../image/img12.png";
import Photo3 from "../../image/img6.png";
import Photo4 from "../../image/img2.png";
import Photo5 from "../../image/img8.png";
import Photo6 from "../../image/img9.png";
import "./Item.css";

const Item = () => {
  return (
    <div className="main">
      <div className="mainTitle">
        <h1>Shop Item</h1>
      </div>

      <div className="mainSection">
        <div className="section">
          <div className="sectionImg">
            <img src={Photo1} alt="" />
          </div>
          <div className="sectionDescp">
            <h2>DATE 002</h2>
            <p>$300</p>
          </div>
        </div>
        <div className="section">
          <div className="sectionImg">
            <img src={Photo2} alt="" />
          </div>
          <div className="sectionDescp">
            <h2>SKELETON 002</h2>
            <p>$450</p>
          </div>
        </div>
        <div className="section">
          <div className="sectionImg">
            <img src={Photo3} alt="" />
          </div>
          <div className="sectionDescp">
            <h2>FKM RUBBER STRAP</h2>
            <p>$300</p>
          </div>
        </div>
        <div className="section">
          <div className="sectionImg">
            <img src={Photo4} alt="" />
          </div>
          <div className="sectionDescp">
            <h2>ULTA THIN MIRROR</h2>
            <p>$220</p>
          </div>
        </div>
        <div className="section">
          <div className="sectionImg">
            <img src={Photo5} alt="" />
          </div>
          <div className="sectionDescp">
            <h2>FKM SKELETON 001</h2>
            <p>$350</p>
          </div>
        </div>
        <div className="section">
          <div className="sectionImg">
            <img src={Photo6} alt="" />
          </div>
          <div className="sectionDescp">
            <h2>SKELETON 002</h2>
            <p>$450</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
