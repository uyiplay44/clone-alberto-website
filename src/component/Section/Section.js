import React from "react";
import "./Section.css";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="container">
      <div>
        <Link to="/shop">
          <button type="Submit">Shop More</button>
        </Link>
      </div>
    </div>
  );
}

export default Section;
