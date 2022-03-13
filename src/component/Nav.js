import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-right">
        <Link to="/">
        <h5>EMPLOYEE</h5>
        </Link>
        
      </div>
     
      <div className="nav-left">
        <ul>
          <li><div className="">
        <input type="text" placeholder="search employee" className="search"/>
      </div></li>
          <li>
           <Link to="/add"> <button className="add-btn">ADD EMPLOYEE</button>{" "}</Link>
           <Link to="/eom"> <button className="add-btn">EMPLOYEE OF THE MONTH</button>{" "}</Link>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
// json-server --watch db.json