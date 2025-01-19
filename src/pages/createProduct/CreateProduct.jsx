import React, { useState } from "react";
import "./CreateProduct.css";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addProductToUserProductArray,
} from "../../../firebase/firebaseData";
import Loader from "../../../components/loader/Loader";
import { Button, Modal } from "antd";

export default function CreateProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const adminInfo = useSelector((state) => state.adminInfo);

  function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    productSomeInfo: "",
    productCategory: "",
    productOffer: "",
    productlastOfferDate: "",
    productNumber: "",
    productInitialNumber:"",
    productId: crypto.randomUUID(),
    ...adminInfo,
    comments: [],
    numberOfRate: 0,
    sumOfStars: 0,
    rateNumber: 0,
    rate: 0.0,
    addedDate: getCurrentDateTime(),
    purshaseNumber: "",
    intialNumber: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const createCompanyButtonClicked = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addProduct(product.productId, product);
    await addProductToUserProductArray(adminInfo.Id, product);
    setLoading(false);
    navigate("/adminProducts");
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
                className="img-fluid rounded-circle shadow-sm"
                alt="Profile"
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={createCompanyButtonClicked}>
                <div className="alert alert-warning" role="alert">
                  All fields are required.
                </div>
                <h1 className="product-title mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="productName"
                    onChange={handleChange}
                  />
                </h1>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    name="productPrice"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Category</label>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="electronics"
                      name="productCategory"
                      value="Electronics"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="electronics"
                    >
                      Electronics
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="fashion"
                      name="productCategory"
                      value="Fashion"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="fashion">
                      Fashion
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="computer"
                      name="productCategory"
                      value="computer"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="computer">
                      computer
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="mobilePhone"
                      name="productCategory"
                      value="mobilePhone"
                      className="custom-control-input"
                      onChange={handleChange}
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="mobilePhone"
                    >
                      mobile phone
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="cars"
                      name="productCategory"
                      value="cars"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="cars">
                      cars
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="bags"
                      name="productCategory"
                      value="bags"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="bags">
                      bags
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="cook"
                      name="productCategory"
                      value="cook"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="cook">
                      cook
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="homeAppliances"
                      name="productCategory"
                      value="Home Appliances"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="homeAppliances"
                    >
                      Home Appliances
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="books"
                      name="productCategory"
                      value="Books"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="books">
                      Books
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="sports"
                      name="productCategory"
                      value="Sports"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="sports">
                      Sports
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-2">
                    <input
                      type="radio"
                      id="other"
                      name="productCategory"
                      value="other"
                      className="custom-control-input"
                      onChange={handleChange}
                    />
                    <label className="custom-control-label" htmlFor="other">
                      other
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="productNumber" className="form-label">
                    exist number of this product
                  </label>
                  <input
                    required
                    type="number"
                    className="form-control"
                    name="productNumber"
                    onChange={(e) => {
                      handleChange(e);
                      setProduct((pre) => {
                        return { ...pre, intialNumber: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="alert alert-danger" role="alert">
                  Description about your company must be at least 100
                  characters.
                </div>
                <div className="mb-3">
                  <label htmlFor="productSomeInfo" className="form-label">
                    Some description
                  </label>
                  <textarea
                    type="text"
                    name="productSomeInfo"
                    onChange={handleChange}
                    required={true}
                    rows={5}
                    cols={5}
                    className={
                      product.productSomeInfo.length > 100
                        ? "form-control border-success"
                        : "form-control border-danger"
                    }
                  />
                </div>
                <div className="pt-3 d-flex justify-content-between w-100 flex-wrap gap-5 align-items-center">
                  <button
                    type="submit"
                    className={
                      product.productSomeInfo.length > 100
                        ? "btn btn-primary btn-lg"
                        : "btn btn-primary btn-lg disabled"
                    }
                  >
                    add product
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-lg"
                    onClick={() => navigate("/adminProduct")}
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
