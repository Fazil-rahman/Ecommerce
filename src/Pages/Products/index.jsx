import React from "react";

const Products = () => {
  const productData = [
    { name: "Laptop", price: "800$", payment: "Paid", status: "Delivered" },
    { name: "Refrigerator", price: "200$", payment: "Due", status: "Pending" },
    { name: "Cooler", price: "400$", payment: "Due", status: "In progress" },
    { name: "Speaker", price: "50$", payment: "Paid", status: "Delivered" },
    { name: "Laptop", price: "800$", payment: "Paid", status: "Delivered" },
    { name: "Refrigerator", price: "200$", payment: "Due", status: "Pending" },
    { name: "Cooler", price: "400$", payment: "Due", status: "In progress" },
    { name: "Speaker", price: "50$", payment: "Paid", status: "Delivered" }
  ];
  return (
    <div className="container-fluid">
      <div className="">
        <div className="p-2 m-2 ">
          <h3 className="p-2 m-2 ">Recent Orders</h3>
          <div >
            <table className="table table-responsive p-2 m-2 ">
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
  );
};

export default Products;
