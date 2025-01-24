import React from "react";
import "../index.css";
import Navbar from "../component/Nav/Navbar";
import Address from "../component/Address/Address";
import Footer from "../component/Footer/Footer";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <Address />
      <Footer />
    </div>
  );
}

export default Contact;
