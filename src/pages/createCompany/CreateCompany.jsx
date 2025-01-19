import React, { useState } from "react";
import "./CreateCompany.css";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import Header from "../../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  saveCompanyInfo,
  updateUserData,
} from "../../../firebase/firebaseData";
import Loader from "../../../components/loader/Loader";

export default function CreateCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector((state) => state.userInfo);

  function getCurrentDate() {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
    const day = now.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }


  const [profile, setProfile] = useState({
    ...userInfo,
    companyName: "",
    comapnyEmail: "",
    comapnyCity: "",
    companyCountry: "",
    comppanyLogo: "",
    compnayCreateTime: getCurrentDate(),
    companyPhone: "",
    companyPhone2: "",
    companyPhone3: "",
    companyPhone4: "",
    companySomeInfo: "",
    companyPurshaseNumber: "",
    companyItemsNumber: "",
    companyTotalMony: "",
    companyNumberRate: "",
    companyTotalRate: "",
    companyRate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const createCompanyButtonClicked = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    setLoading(true);
    await updateUserData(
      {
        ...userInfo,
        isAdmin: true,
      },
      localStorage.getItem("userId"),
      setLoading
    );
    await saveCompanyInfo(userInfo.Id, { ...profile, isAdmin: true }, dispatch);
    setLoading(false);
    navigate("/home");
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://via.placeholder.com/500"
                className="img-fluid rounded-circle"
                alt="Profile"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={createCompanyButtonClicked}>
                <h1 className="product-title">
                  <label>Company Name</label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="companyName"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </h1>
                <p className="product-description">
                  <label htmlFor="comapnyEmail">company Email</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    name="comapnyEmail"
                    onChange={handleChange}
                  />
                </p>
                <p className="color-danger" style={{ color: "red" }}>
                  at least 2 phone numbers
                </p>
                <p className="product-description">
                  <label htmlFor="companyPhone">Phone number 1</label>
                  <input
                    type="number"
                    id="companyPhone"
                    className="form-control"
                    name="companyPhone"
                    onChange={handleChange}
                    required={true}
                  />
                </p>
                <p className="product-description">
                  <label htmlFor="companyPhone1">Phone number 2</label>
                  <input
                    type="number"
                    id="companyPhone1"
                    className="form-control"
                    name="companyPhone1"
                    onChange={handleChange}
                    required={true}
                  />
                </p>
                <p className="product-description">
                  <label htmlFor="companyPhone2">Phone number 3</label>
                  <input
                    type="number"
                    id="companyPhone2"
                    className="form-control"
                    name="companyPhone2"
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label htmlFor="companyPhone3">Phone number 4</label>
                  <input
                    type="number"
                    id="companyPhone3"
                    className="form-control"
                    name="companyPhone3"
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label htmlFor="companyPhone4">Phone number 5</label>
                  <input
                    type="number"
                    id="companyPhone4"
                    className="form-control"
                    name="companyPhone4"
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label htmlFor="companyCountry">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyCountry"
                    id="companyCountry"
                    onChange={handleChange}
                    required={true}
                  />
                </p>
                <p className="product-description">
                  <label htmlFor="comapnyCity">company city</label>
                  <input
                    type="text"
                    className="form-control"
                    name="comapnyCity"
                    onChange={handleChange}
                    required={true}
                  />
                </p>
                <p className="color-danger" style={{ color: "red" }}>
                  description about your company at least 100 characters
                </p>

                <p className="product-description">
                  <label htmlFor="companySomeInfo">some description</label>
                  <textarea
                    type="text"
                    name="companySomeInfo" // Updated name attribute
                    value={profile.companySomeInfo || ""} // Bind value to profile state
                    onChange={handleChange}
                    required={true}
                    className={
                      profile.companySomeInfo.length > 100
                        ? "form-control border-color-green"
                        : "form-control border-color-red disabled"
                    }
                  />
                </p>
                <div className="pt-3 d-flex justify-content-between w-100 flex-wrap gap-5 align-items-center">
                  <button
                    type="submit"
                    className={
                      profile.companySomeInfo.length > 100
                        ? "btn btn-primary btn-lg "
                        : " btn btn-primary btn-lg disabled"
                    }
                  >
                    create company
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => navigate("/profile")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
