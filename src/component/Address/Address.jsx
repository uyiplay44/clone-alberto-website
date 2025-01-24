import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./Address.css";

function Address() {
  return (
    <div className="mainhero">
      <div className="main__form">
        <h2>Contact Now</h2>
      </div>

      <form>
        <div className="input-group">
          <input type="name" />
          <label htmlFor="name">
            <IoPersonSharp />
            Full Name
          </label>
        </div>

        <div className="input-group">
          <input type="number" />
          <label htmlFor="number">
            <FaPhoneVolume />
            Phone No.
          </label>
        </div>

        <div className="input-group">
          <textarea name="message" id="" rows="4"></textarea>
          <label htmlFor="message">
            <MdEmail />
            Message
          </label>
        </div>
        <button className="btnAdress">Submit</button>
      </form>
    </div>
  );
}

export default Address;
