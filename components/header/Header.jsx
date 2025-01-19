import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Add this line
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAdminInfo, getUserInfoById } from "../../firebase/firebaseData";
import { setUserInfo } from "../../redux/UserInfo";
import { setAdminInfo } from "../../redux/adminInfo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await getUserInfoById(localStorage.getItem("userId"));
    dispatch(setUserInfo(data));
    if (data.isAdmin) {
      const data = await getAdminInfo(dispatch);
      dispatch(setAdminInfo(data));
    }
  };
  useEffect(() => {
    getData();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light myNav">
        <a className="navbar-brand">Brand</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav myNav2">
            <li className="nav-item active">
              <a
                className={
                  location.pathname == "/home"
                    ? "nav-link text-primary"
                    : "nav-link"
                }
                // href="#"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname === "/purchase"
                    ? "nav-link text-primary"
                    : "nav-link"
                }
                onClick={() => {
                  navigate("/purchase");
                }}
              >
                my burchas
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname == "/profile"
                    ? "nav-link text-primary"
                    : "nav-link"
                }
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile Page
              </a>
            </li>
            {userInfo.isAdmin ? (
              <li className="nav-item w-100">
                <button
                  className="nav-link"
                  tabIndex="-1"
                  onClick={() => {
                    navigate("/adminProducts");
                  }}
                >
                  my products
                </button>
              </li>
            ) : (
              <></>
            )}
            {userInfo.isAdmin ? (
              <li className="nav-item w-100">
                <button
                  className="nav-link "
                  tabIndex="-1"
                  onClick={() => {
                    navigate("/admin");
                  }}
                >
                  Admin
                </button>
              </li>
            ) : (
              <></>
            )}
            <li className="nav-item w-100">
              <button
                className="nav-link "
                tabIndex="-1"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                myCart
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
