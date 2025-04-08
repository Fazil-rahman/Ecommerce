import React from "react";
import { Fa500Px, FaDollarSign } from "react-icons/fa";
import { IoLogoAppleAppstore, IoLogoAppleAr } from "react-icons/io5";

const Dashboard = () => {
  const productData = [
    { name: "Laptop", price: "800$", payment: "Paid", status:"Delivered" },
    { name: "Refrigerator", price: "200$", payment: "Due", status:"Pending" },
    { name: "Cooler", price: "400$", payment: "Due", status:"In progress" },
    { name: "Speaker", price: "50$", payment: "Paid", status:"Delivered" },
    { name: "Laptop", price: "800$", payment: "Paid", status:"Delivered" },
    { name: "Refrigerator", price: "200$", payment: "Due", status: "Pending" },
    { name: "Cooler", price: "400$", payment: "Due", status: "In progress" },
    { name: "Speaker", price: "50$", payment: "Paid", status: "Delivered" },
  ];
  return (
    <div className="">
      <div className="">
        <div className="p-2 m-2 ">
          <div className="row p-2 m-2 ">
            <div className="col border border-secondary-subtle bgc rounded-3 mx-4 m-2 p-2">
              <div className="d-flex justify-content-between ">
                <p className="px-2">1024</p>
                <p className="px-2"> <IoLogoAppleAr color="blue" /></p>
              </div>
              <div className="col px-2">Daily views</div>
            </div>
            <div className="col border border-secondary-subtle bgc rounded-3 mx-4  m-2 p-2">
              <div className="d-flex justify-content-between">
                <p className="px-2">80</p>
                <p className="px-2"> <Fa500Px color="blue" /></p>
              </div>
              <div className="px-2">Sales</div>
            </div>
            <div className="col border border-secondary-subtle bgc rounded-3 mx-4 m-2 p-2">
              <div className="d-flex justify-content-between">
                <p className="px-2">208</p>
                <p className="px-2"> <IoLogoAppleAppstore color="blue" /></p>
              </div>
              <div className="px-2">Comments</div>
            </div>
            <div className="col border border-secondary-subtle bgc rounded-3 mx-4 m-2 p-2">
              <div className="d-flex justify-content-between">
                <p className="px-2">$6042</p>
                <p className="px-2"> <FaDollarSign color="blue" /></p>
              </div>
              <div className="px-2">Earnings</div>
            </div>
          </div>
          <div className="m-2 bgc">
          <h3 className=" p-2">Recent Orders</h3>
          <div>
            <table className="table table-responsive p-2  ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.payment}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
