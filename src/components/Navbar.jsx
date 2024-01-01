import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css components/navbar.css"

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };
  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };
  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4);
  };
  const toggleDropdown5 = () => {
    setDropdownOpen5(!isDropdownOpen5);
  };

  return (
    <div className="navbar">
      <div id="nav-part1">
        <Link to="/" >LOGO</Link>
      </div>
      <div id="nav-part2">
        <div
          className="dropdown"
          onClick={toggleDropdown}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className={`dropdown-label ${isDropdownOpen ? "open" : ""}`}>
            Qualifications
          </span>
          <div className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}>
          {" "}
          &#9660;{" "}
        </div>
        {isDropdownOpen && (
          <ul
            className="dropdown-content">
            <li>
              <Link to="/">BCA</Link>
            </li>
            <li>
              <Link to="/">MCA</Link>
            </li>
            <li>
              <Link to="/">
                B.E.
              </Link>
            </li>
            <li>
              <Link to="/">
                B.Tech
              </Link>
            </li>
          </ul>
        )}
        </div>
        <div
          className="dropdown"
          onClick={toggleDropdown2}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className={`dropdown-label ${isDropdownOpen2 ? "open" : ""}`}>
            Organizations
          </span>
          <div className={`dropdown-arrow ${isDropdownOpen2 ? "open" : ""}`}>
          {" "}
          &#9660;{" "}
        </div>
        {isDropdownOpen2 && (
          <ul
            className="dropdown-content">
            <li>
              <Link to="/">Google</Link>
            </li>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">
                Orkut
              </Link>
            </li>
            <li>
              <Link to="/">
                Myntra
              </Link>
            </li>
          </ul>
        )}
        </div>
        <div
          className="dropdown"
          onClick={toggleDropdown3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className={`dropdown-label ${isDropdownOpen3 ? "open" : ""}`}>
            Research & Analysis
          </span>
          <div className={`dropdown-arrow ${isDropdownOpen3 ? "open" : ""}`}>
          {" "}
          &#9660;{" "}
        </div>
        {isDropdownOpen3 && (
          <ul
            className="dropdown-content">
            <li>
              <Link to="/">Responsive Websites</Link>
            </li>
            <li>
              <Link to="/">Attractive Design</Link>
            </li>
            <li>
              <Link to="/">
                User Friendly
              </Link>
            </li>
            <li>
              <Link to="/">
                Multifunctional
              </Link>
            </li>
          </ul>
        )}
        </div>
        <div
          className="dropdown"
          onClick={toggleDropdown4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className={`dropdown-label ${isDropdownOpen4 ? "open" : ""}`}>
            Lorem ipsum
          </span>
          <div className={`dropdown-arrow ${isDropdownOpen4 ? "open" : ""}`}>
          {" "}
          &#9660;{" "}
        </div>
        {isDropdownOpen4 && (
          <ul
            className="dropdown-content">
            <li>
              <Link to="/">Cables</Link>
            </li>
            <li>
              <Link to="/">Car Accessories</Link>
            </li>
            <li>
              <Link to="/">
                SuperHero Collectons
              </Link>
            </li>
            <li>
              <Link to="/">
                Trebel for Women
              </Link>
            </li>
          </ul>
        )}
        </div>
        <div
          className="dropdown"
          onClick={toggleDropdown5}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <span className={`dropdown-label ${isDropdownOpen5 ? "open" : ""}`}>
            Lorem ipsum
          </span>
          <div className={`dropdown-arrow ${isDropdownOpen5 ? "open" : ""}`}>
          {" "}
          &#9660;{" "}
        </div>
        {isDropdownOpen5 && (
          <ul
            className="dropdown-content">
            <li>
              <Link to="/">Cables</Link>
            </li>
            <li>
              <Link to="/">Car Accessories</Link>
            </li>
            <li>
              <Link to="/">
                SuperHero Collectons
              </Link>
            </li>
            <li>
              <Link to="/">
                Trebel for Women
              </Link>
            </li>
          </ul>
        )}
        </div>
        <div>
        <i class="ri-search-2-line"></i>
        </div>
        <div className="enrollDiv">
            <button className="enrollbtn">Enrolment</button>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
