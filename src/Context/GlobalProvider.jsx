import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: parseInt(Math.random() * (10 - 1) + 1),
    };
    setProducts((pre) => [...pre, newProduct]);
  };

  const handleUpdateProduct = (id,values) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex((curr) => curr.id === parseInt(id));
    if (index !== -1) {
      updatedProducts[index]=values
      setProducts(updatedProducts)
    }
  };
  
  const values = {
    products,
    setProducts,
    handleAddProduct,
    handleUpdateProduct
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
