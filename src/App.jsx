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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={
            <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/"element={<PrivateRoutes isLoggedIn={isLoggedIn}/>}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
