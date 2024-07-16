import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import Logo from "../../image/Logo1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navContainer">
      <Link to="/" className="Link">
        Home
      </Link>

      <Link to="/shop" className="Link">
        Shop
      </Link>

      <div>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>

      <Link to="/blog" className="Link">
        Blog
      </Link>

      <Link to="/contact" className="Link">
        Contact
      </Link>
      <span>
        <FaBars />
      </span>
    </div>
  );
};

export default Navbar;
