import React, { useEffect, useState } from "react";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import Header from "../../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getAdminInfo } from "../../../firebase/firebaseData";

export default function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [adminInfo, setAdminInfo] = useState({
    Id: "",
    name: "",
    phoneNumber: "",
    city: "",
    birthday: "",
    email: "",
    sumOfBuyingOperation: 0,
    nummberOfBuyingOperation: 0,
    userRate: 0.0,
    isAdmin: false,
    country: "",
    region: "",
    phoneNumber2: "",
    companyName: "",
    comapnyEmail: "",
    comapnyCity: "",
    companyCountry: "",
    comppanyLogo: "",
    compnayCreateTime: "",
    companyPhone: "",
    companyPhone2: "",
    companyPhone3: "",
    companyPhone4: "",
    companySomeInfo: "",
    companyPurshaseNumber: 0,
    companyItemsNumber: 0,
    companyTotalMony: 0.0,
    companyNumberRate: 0,
    companyTotalRate: 0,
    companyRate: 0.0,
  });
  const setData = async () => {
    const adminInfo = await getAdminInfo(dispatch);
    setAdminInfo(adminInfo);
  };
  console.log(adminInfo);
  useEffect(() => {
    setData();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500"
              className="img-fluid rounded-circle"
              alt="Product"
            />
          </div>
          <div className="col-md-6">
            <p className="color-danger" style={{ color: "red" }}>
              give the right information and answer all questions to Attract
              customers' attention
            </p>
            <h1 className="product-title">{adminInfo.companyName ? "" : ""}</h1>
            <p className="product-description">
              {" "}
              company Number Rate :{" "}
              {adminInfo.companyNumberRate
                ? adminInfo.companyNumberRate
                : "no rate yet"}
            </p>
            <p className="product-description">
              craete time : {adminInfo.compnayCreateTime}{" "}
            </p>
            <p className="product-description">
              email :{adminInfo.comapnyEmail}{" "}
            </p>
            <p className="product-description">
              total Mony :{" "}
              {adminInfo.companyTotalMony ? adminInfo.companyTotalMony : " 0"}
            </p>
            <p className="product-description">
              number of purshase opertaions :
              {adminInfo.companyPurshaseNumber
                ? adminInfo.companyPurshaseNumber
                : 0}{" "}
            </p>
            <p className="product-description">
              company rate :{" "}
              {adminInfo.companyRate ? adminInfo.companyRate : 0.0}
            </p>
            <p className="product-description">
              company country :{" "}
              {adminInfo.companyCountry ? adminInfo.companyCountry : "_"}{" "}
            </p>
            <p className="product-description">
              city : {adminInfo.comapnyCity ? adminInfo.comapnyCity : "_"}
            </p>
            <p className="product-description">
              phone number1 :
              {adminInfo.companyPhone ? adminInfo.companyPhone : "_"}{" "}
            </p>
            <p className="product-description">
              phone number 2:{" "}
              {adminInfo.companyPhone1 ? adminInfo.companyPhone1 : "_"}
            </p>
            <p className="product-description">
              phone number 3:{" "}
              {adminInfo.companyPhone2 ? adminInfo.companyPhone2 : "_"}
            </p>
            <p className="product-description">
              phone number 4:{" "}
              {adminInfo.companyPhone3 ? adminInfo.companyPhone3 : "_"}
            </p>
            <p className="product-description">
              phone number 5:{" "}
              {adminInfo.companyPhone4 ? adminInfo.companyPhone4 : "_"}
            </p>
            <textarea
              rows={4}
              minLength={100}
              className="form-control my-field"
            >
              {adminInfo.companySomeInfo}
            </textarea>
          </div>
          <div className="col-md-6 pt-3 d-flex justify-content-between w-100">
            <Rate
              disabled={true}
              defaultValue={adminInfo.companyRate ? adminInfo.companyRate : "0"}
              allowHalf={true}
            />
          </div>

          <div className="col-md-6 pt-3 d-flex justify-content-between w-100 flex-wrap gap-5">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                navigate("/adminEdite");
              }}
            >
              edite information
            </button>
            <button
              className={"btn btn-primary btn-lg"}
              onClick={() => {
                navigate("/home");
              }}
            >
              back to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
