import React from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import { Rate } from "antd";
import Header from "../../../components/header/Header";
import { useSelector } from "react-redux";
const profileImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseRj5MjxLYtgPrmGHS01YBytPjIkGKk8Zaw&s";
export default function ProfilePage() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={profileImage}
              className="img-fluid rounded-circle"
              alt="Product"
            />
          </div>
          <div className="col-md-6">
            <h1 className="product-title">{userInfo.name}</h1>
            <p className="product-description">total prices : 500 </p>
            <p className="product-description">
              birthday : {userInfo.birthday}{" "}
            </p>
            <p className="product-description">email :{userInfo.email} </p>
            <p className="product-description">
              total purshase : {userInfo.sumOfBuyingOperation}{" "}
            </p>
            <p className="product-description">
              number of purshase opertaions :{" "}
              {userInfo.nummberOfBuyingOperation}{" "}
            </p>
            <p className="product-description">
              user rate : {userInfo.userRate}{" "}
            </p>
            <p className="product-description">region : {userInfo.region}</p>
            <p className="product-description">
              country : {userInfo.country ? userInfo.country : "_"}{" "}
            </p>
            <p className="product-description">city : {userInfo.city} </p>
            <p className="product-description">
              country : {userInfo.country ? userInfo.country : "_"}
            </p>
            <p className="product-description">
              phone number : {userInfo.phoneNumber ? userInfo.phoneNumber : "_"}{" "}
            </p>
            <p className="product-description">
              another phone :{" "}
              {userInfo.phoneNumber2 ? userInfo.phoneNumber2 : "_"}
            </p>
          </div>
          <div className="col-md-6 pt-3 d-flex justify-content-between w-100">
            <Rate
              disabled={true}
              defaultValue={userInfo.userRate ? userInfo.userRate : "0"}
              allowHalf={true}
            />
          </div>

          <div className="col-md-6 pt-3 d-flex justify-content-between w-100 flex-wrap gap-5">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                navigate("/profileEdite");
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
          {userInfo.isAdmin ? (
            <>
              <div className="d-flex justify-content-between align-items-center p-2">
                <p>go to Admin Page !</p>
                <button
                  className="btn btn-dark btn-lg"
                  onClick={() => {
                    navigate("/admin");
                  }}
                >
                  Admin
                </button>
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-between p-2">
              <p>let's start your company and sall your product</p>
              <button
                className="btn btn-dark btn-lg"
                onClick={() => {
                  navigate("/createCompany");
                }}
              >
                join Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
