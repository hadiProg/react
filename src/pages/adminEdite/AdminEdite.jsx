import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Rate } from "antd";
import Header from "../../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { FaRegImage } from "react-icons/fa6";
import {
  getAdminInfo,
  updateAdminInfo,
  updateProductUserData,
  updateUserData,
} from "../../../firebase/firebaseData";
import Loader from "../../../components/loader/Loader";

export default function AdminEdite() {
  const navigate = useNavigate();
  const  dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [imageinput, setImageInput] = useState("");
  const adminInfo = useSelector((state) => state.adminInfo);
  const [profile, setProfile] = useState({
    ...adminInfo,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    setLoading(true);
    updateUserData(profile, localStorage.getItem("userId"), setLoading);
      await updateAdminInfo(profile.Id, profile,dispatch);
      await updateProductUserData(profile.Id,profile);
    setLoading(false);
    navigate("/admin");
  };
  const equal = (op1, op2) => {
    return JSON.stringify(op1) === JSON.stringify(op2);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <Header></Header>
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://via.placeholder.com/500"
                  className="img-fluid rounded-circle"
                  alt="Profile"
                />
              </div>
              <div className="col-md-6">
                <h1 className="product-title">
                  <label>{profile.companyName}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Id"
                    disabled={true}
                    value={profile.Id}
                  />
                </h1>
                <p className="product-description">
                  <label>Company Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="comapnyEmail"
                    disabled={true}
                    value={profile.comapnyEmail}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>company city</label>
                  <input
                    type="text"
                    className="form-control"
                    name="comapnyCity"
                    value={profile.comapnyCity}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companyCountry</label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyCountry"
                    value={profile.companyCountry || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companyPhone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="companyPhone"
                    value={profile.companyPhone || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companyPhone1</label>
                  <input
                    type="number"
                    className="form-control"
                    name="companyPhone1"
                    value={profile.companyPhone1 || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companyPhone 2 </label>
                  <input
                    type="number"
                    className="form-control"
                    name="companyPhone2"
                    value={profile.companyPhone2 || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companyPhone 3</label>
                  <input
                    type="number"
                    className="form-control"
                    name="companyPhone3"
                    value={profile.companyPhone3}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companyPhone 4</label>
                  <input
                    type="number"
                    className="form-control"
                    name="companyPhone4"
                    value={profile.companyPhone4 || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>companySomeInfo</label>
                  <textarea
                    type="number"
                    className="form-control"
                    name="companySomeInfo"
                    onChange={handleChange}
                  >
                    {profile.companySomeInfo}
                  </textarea>
                </p>
                <div className="pt-3 d-flex justify-content-between w-100">
                  <Rate
                    disabled={true}
                    defaultValue={profile.userRate}
                    allowHalf={true}
                  />
                </div>
                <div className="pt-3 d-flex justify-content-between w-100 flex-wrap gap-5 aligen-items-center">
                  <button
                    className={
                      !equal(profile, adminInfo)
                        ? "btn btn-primary btn-lg"
                        : "btn btn-primary btn-lg disabled"
                    }
                    onClick={handleSave}
                  >
                    Save Information
                  </button>
                  <Modal
                    open={openModal}
                    title="Title"
                    // onOk={this.handleOk}
                    onCancel={() => {
                      setOpenModal(false);
                    }}
                    footer={[
                      <Button
                        key="back"
                        size="large"
                        onClick={() => {
                          setOpenModal(false);
                        }}
                      >
                        cancel
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        size="large"
                      >
                        Submit
                      </Button>,
                    ]}
                  >
                    <label
                      htmlFor="image"
                      className="d-flex justify-content-between w-100"
                    >
                      upload your image here{" "}
                      <FaRegImage className="fs-20 cursor-pointer" />
                    </label>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setImageInput(e.target);
                      }}
                    />
                  </Modal>
                  <button
                    className={"btn btn-primary btn-lg "}
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    edite your Image
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => {
                      navigate("/admin");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
