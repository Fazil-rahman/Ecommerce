import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import Users from "./Pages/Users/Users";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import AddProducts from "./Pages/AddProducts";
import EditProducts from "./Pages/EditProducts";
import { createContext } from "react";
import { GlobalProvider } from "./Context/GlobalProvider";

const App = () => {
  const initialState = [
    {
      name: "Laptop",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "800$",
      category: "Delivered",
      status: "In stock",
    },
    {
      name: "Refrigerator",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "200$",
      category: "Pending",
      status: "In stock",
    },
    {
      name: "Cooler",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "400$",
      category: "In progress",
      status: "In stock",
    },
  ];
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [tableList, setTableList] = useState(initialState);

  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={
              <LoginPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/" element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route element={<DashboardLayout />}>
              <Route index element={<Navigate to="/dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products">
                <Route index element={<Products />} />
                <Route path="add" element={<AddProducts />} />
                <Route path="edit/:id" element={<EditProducts />} />
              </Route>
              <Route path="users" element={<Users />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
