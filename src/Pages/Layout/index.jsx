import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";

const DashboardLayout = () => {

  return (
    <div className="container-fluid p-0">
      <div >
        <div className="d-flex">
          <div className="col-2 flow bg-nav">
            <Sidebar />
          </div>
          <div className="col-10 bg-secondary-subtle ">
            <div className="">
              <div className="bgc">
                <Header />
              </div>
              <div className="">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
