import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalProvider";
import CommonTable from "../../Components/Table/CommonTable";
import { useNavigate } from "react-router-dom";

const Products = () => {
   const initialData = {
      image: "",
      category: "",
      name: "",
      status: "",
      price: "",
    };
    const {
      products = [],
      handleAddProduct = () => {},
      setProducts = () => {},
    } = useContext(GlobalContext);
  
  
    const [formData, setFormData] = useState(initialData);
    const handleRowDelete = (row) => {
      const updatedProducts = products.filter((curr, idx) => curr.id !== row.id);
      setProducts(updatedProducts);
      console.log(row);
    };
    const handleEditRow = (row, index) => {
      let updatedProducts = [row];
      setFormData(updatedProducts);
      console.log(updatedProducts);
    };
    
  const openFormEdit= (id)=>{
    navigate(`edit/${id}`)
  }
  
  const staticHeaders = [
    {
      id: "image",
      label: "Image",
      render: (row) => (
        <img
          src={row.image}
          alt=""
          className="p-3 img-thumbnail object-fit-fill rounded "
          style={{ height: "5rem", width: "5rem" }}
        ></img>
      ),
    },
    { id: "name", label: "Name", render: (row) => row.name },
    { id: "price", label: "Price", render: (row) => row.price },
    { id: "category", label: "Category", render: (row) => row.category },
    { id: "status", label: "Status", render: (row) => row.status },
    {
      id: "action",
      label: "Action",
      render: (row) => (
        <button className="btn btn-danger" onClick={() => handleRowDelete(row)}>
          Delete
        </button>
      ),
    },
    {
      id: "action",
      label: "Action",
      render: (row,index) => (
        <button className="btn btn-secondary" onClick={() => openFormEdit(row.id)}>
          Edit
        </button>
      ),
    },
  ];
const navigate= useNavigate()
const openForm =(e)=>{
  navigate("add");
}
  
  return (
    <div className="container-fluid" >
      <div className="" style={{height:"100vh"}}>
        <div className="p-2 m-2 ">
          <h3 className="p-2 m-2 ">Products</h3>
          <div>
            
            <div>
              <CommonTable data={products} headers={staticHeaders} />
            </div>
          </div>
          <button className="btn btn-primary" onClick={(e)=>openForm(e)}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
