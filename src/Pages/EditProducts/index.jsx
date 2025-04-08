import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Context/GlobalProvider";

const initialData = {
  image: "",
  category: "",
  name: "",
  status: "",
  price: "",
};
const EditProduct = () => {
  const { id } = useParams();
  
  const {
    products = [],
    handleUpdateProduct = () => {},
  } = useContext(GlobalContext);

  const handleChange = (event) => {
    setFormData((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();
  const openProducts = (e) => {
    navigate("/products");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateProduct(id,formData);
    navigate("/products");
  };

  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    if (id) {
      const editedProduct = products?.find((curr) => curr.id === parseInt(id));
      if (editedProduct) {
        setFormData(editedProduct);
      }
    }
  }, [id, products]);

  return (
    <div className="container-fluid">
      <div style={{ height: "100vh" }}>
        <form onSubmit={handleSubmit} className="d-flex bg-white p-2 m-2">
          <div className="col">
            <div className=" p-2 m-2">
              <label className="form-label fs-6 text fw-medium">Image:</label>
              <input
                type="url"
                name="image"
                placeholder="Enter the url of your image"
                className="form-control"
                value={formData.image}
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="p-2 m-2">
              <label className="form-label fs-6 text fw-medium">Name:</label>
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Enter the product Name"
                value={formData.name}
                onChange={(event) => handleChange(event)}
              ></input>
            </div>

            <div className="p-2 m-2">
              <label className="form-label fs-6 text fw-medium">Price:</label>
              <input
                className="form-control"
                name="price"
                type="number"
                placeholder="Enter the product Price"
                value={formData.price}
                onChange={(event) => handleChange(event)}
              ></input>
            </div>
          </div>
          <div className="col">
            <div className="p-2 m-2">
              <label className="form-label fs-6 text fw-medium">
                Category:
                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={(event) => handleChange(event)}
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Jewellery">Jewellery</option>
                  <option value="Men's Clothing">Men's Clothing</option>
                  <option value="Women's Clothing">Women's Clothing</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </label>
            </div>
            <div className="p-2 m-2">
              <label className="form-label fs-6 text fw-medium">
                Status:
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={(event) => handleChange(event)}
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="In stock">In stock</option>
                  <option value="Low stock">Low stock</option>
                </select>
              </label>
            </div>

            <div className="p-2 m-2">
              <button className="btn btn-outline-primary" type="submit">
                Update Product
              </button>
            </div>
          </div>
        </form>
        <div>
          <button onClick={(e) => openProducts(e)} className="btn btn-primary">
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
