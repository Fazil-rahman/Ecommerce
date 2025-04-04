import React from "react";
import { NavLink } from "react-router-dom";
import { FaArchway,FaAtlassian, FaUser  } from "react-icons/fa";
import { CiLogin} from "react-icons/ci";
import { IoLogoApple } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="">
      <div className="">
        <div className=" p-2 px-4  d-flex ">
        {/* <FontAwesomeIcon icon={faUsers} /> */}
        <span className="" ><IoLogoApple /></span><p className="brand-name px-2">Brand Name</p>
        </div>
        <div>
          <nav>
            <ul className="list-group p-2">
              <li className="p-2">
              <span className="p-2"><FaArchway/></span> <NavLink to="dashboard">Dashboard</NavLink>
              </li>
              <li className="p-2">
              <span className="p-2"><FaAtlassian/></span><NavLink to="products">Products</NavLink>
              </li>
              <li className="p-2">
              <span className="p-2"><FaUser/></span><NavLink to="users">Users</NavLink>
              </li>
              <li className="p-2">
              <span className="p-2"><CiLogin/></span> <NavLink to="signin">Sign Out</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
