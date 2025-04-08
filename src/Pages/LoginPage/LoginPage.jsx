import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import loginImage from "../../assets/images/loginBgImage.jpg";
import { useNavigate } from "react-router-dom";
import { FaCube } from "react-icons/fa";
const LoginPage = ({ isLoggedIn = false, setIsLoggedIn = () => {} }) => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const admin = { email: "fazil@gmail.com", password: "fazil123" };
  localStorage.setItem("admin", JSON.stringify(admin));
  const getAdminData = JSON.parse(localStorage?.getItem("admin"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      getAdminData.email === loginFormData.email &&
      getAdminData.password === loginFormData.password
    ) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  };
  return (
    <Container fluid>
      <Container style={{ height: "100vh" }}>
        <Row style={{ height: "100vh" }}>
          <Col>
            <div className="my-2 p-2">
              <div>
                <span className="px-2">
                  <FaCube />
                </span>
                The <span style={{ fontWeight: "bold" }}>Cube</span> Factory
              </div>
              <div className=" ">
                <div
                  className=" align-content-center justify-content-center p-2 m-2"
                  style={{ height: "100vh", width: "70%" }}
                >
                  <h2 className="px-2 mx-2">Welcome Back</h2>
                  <p className="px-2 mx-2" style={{ color: "grey" }}>
                    Enter Your Details
                  </p>
                  <div>
                    <form className="" onSubmit={(e) => handleSubmit(e)}>
                      <div className="p-2 m-2">
                        <label className="form-label">Email Address</label>
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter Your Email"
                          value={loginFormData.email}
                          onChange={(e) =>
                            setLoginFormData((pre) => ({
                              ...pre,
                              email: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="p-2 m-2">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control"
                          type="Password"
                          placeholder="Enter your Password"
                          value={loginFormData.password}
                          onChange={(e) =>
                            setLoginFormData((pre) => ({
                              ...pre,
                              password: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="d-flex">
                        <div className="d-flex col p-2 m-2">
                          <input type="checkbox"></input>
                          <label className="mx-2 ">Remember for 30 days</label>
                        </div>
                        <div className="col p-2 m-2">
                          <p className="">Forgot Password</p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center p-2 m-2">
                        <button className="btn btn-primary" type="submit">
                          sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="bgImg d-flex align-items-center">
            
            <div className="">
              <img
                className="object-fit-fill"
                width="100%"
                height="100%"
                src={loginImage}
                alt="img"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LoginPage;
