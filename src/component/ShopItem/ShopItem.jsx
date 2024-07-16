import React, { useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import Item1 from "../../image/3600504_1_800x.webp";
import Item2 from "../../image/0606876_3e66cbb8-642d-47a7-93e4-2545179c37fd_800x.webp";
import Item3 from "../../image/0606504_f7b1795a-7ea9-48d7-95a4-3f5016338557_800x.webp";
import Item4 from "../../image/MK3641_1_800x.webp";
import Item5 from "../../image/MK3901_1_800x.webp";
import Item6 from "../../image/MK4438_800x.webp";
import Item7 from "../../image/MK6097_800x.webp";
import Item8 from "../../image/MKT5045_1_800x.webp";
import Item9 from "../../image/MKT5077_1_800x.webp";
import Item10 from "../../image/NAPPB038_2_800x.webp";
import Item11 from "../../image/SF8200519_800x.webp";
import Item12 from "../../image/0606689_800x.webp";
import "./ShopItem.css";
import { redirect } from "react-router-dom";

const ShopItem = () => {
  const [Item, setItem] = useState({ redirect });
  return (
    <div className="shopcontainer">
      <div className="main_shopitem">
        <strong>Luxury Shop</strong>
        <button>Buy Now</button>
      </div>

      {/* cart  */}
      <div className="cartsection">
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div className="cartImg">
            <img src={Item1} alt="" />
          </div>
          <div className="cartdescp">
            <p>Movado Bold Mid-Size Two-Tone Rose Gold Watch</p>
            <p className="cartamount">$550.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item2} alt="" />
          </div>
          <div className="cartdescp">
            <p>MOVADO MUSEUM CLASSIC WATCH</p>
            <p className="cartamount">$595.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item3} alt="" />
          </div>
          <div className="cartdescp">
            <p>MUSEUM CLASSIC STAINLESS STEEL WATCH</p>
            <p className="cartamount">$795.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item4} alt="" />
          </div>
          <div className="cartdescp">
            <p>MICHAEL KORS CINTHIA</p>
            <p className="cartamount">$250.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item5} alt="" />
          </div>
          <div className="cartdescp">
            <p>MICHAEL KORS PYPER</p>
            <p className="cartamount">$225.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item6} alt="" />
          </div>
          <div className="cartdescp">
            <p>MICHAEL KORS JARYN</p>
            <p className="cartamount">$225.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item7} alt="" />
          </div>
          <div className="cartdescp">
            <p>MICHAEL KORS WREN</p>
            <p className="cartamount">$375.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item8} alt="" />
          </div>
          <div className="cartdescp">
            <p>MICHAEL KORS GEN 4 RUNWAY SMARTWATCH</p>
            <p className="cartamount">$350.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item9} alt="" />
          </div>
          <div className="cartdescp">
            <p>MICHAEL KORS GEN 4 LEXINGTON SMARTWATCH</p>
            <p className="cartamount">$350.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item10} alt="" />
          </div>
          <div className="cartdescp">
            <p>
              NAUTICA PACIFIC BEACH STAINLESS STEEL AND SILICONE 3-HAND WATCH
              BOX SET
            </p>
            <p className="cartamount">$160.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item11} alt="" />
          </div>
          <div className="cartdescp">
            <p>SALVATORE FERRAGAMO MINUETTO WATCH</p>
            <p className="cartamount">$1,115.00</p>
          </div>
        </div>
        <div className="carttag">
          <div className="cart">
            <button type="submit" className="btn">
              Add Cart
            </button>
            <FaBagShopping className="carticon" />
          </div>
          <div>
            <img src={Item12} alt="" />
          </div>
          <div className="cartdescp">
            <p>MOVADO TC TWO-TONE WATCH</p>
            <p className="cartamount">$1,495.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
