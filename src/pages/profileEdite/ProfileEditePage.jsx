import React, { useState } from "react";
import "./ProfileEditePage.css";
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

export default function ProfileEditePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [imageinput, setImageInput] = useState("");
  const userInfo = useSelector((state) => state.userInfo);
  const [profile, setProfile] = useState({
    ...userInfo,
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
    if (profile.isAdmin) {
      const adminInfo = await getAdminInfo(profile.Id);
      const newData = { ...adminInfo, ...profile };
      await updateUserData(profile, localStorage.getItem("userId"), setLoading);
      await updateAdminInfo(profile.Id, newData, dispatch);
      await updateProductUserData(profile.Id,newData);
    }else{
      await updateUserData(profile, localStorage.getItem("userId"), setLoading);
    }
    setLoading(false);
    navigate("/profile");
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
                  <label>{profile.name}</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Id"
                    disabled={true}
                    value={profile.Id}
                  />
                </h1>
                <p className="product-description">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    disabled={true}
                    value={profile.email}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>Client name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phoneNumber"
                    value={profile.phoneNumber || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>Birthday</label>
                  <input
                    type="date"
                    className="form-control"
                    name="birthday"
                    value={profile.birthday || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>Country</label>
                  <input
                    type="text"
                    className="form-control"
                    name="country"
                    value={profile.country || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>Region</label>
                  <input
                    type="text"
                    className="form-control"
                    name="region"
                    value={profile.region || ""}
                    onChange={handleChange}
                  />
                </p>
                <p className="product-description">
                  <label>Another Phone number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phoneNumber2"
                    value={profile.phoneNumber2 || ""}
                    onChange={handleChange}
                  />
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
                      !equal(profile, userInfo)
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
                      navigate("/profile");
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
