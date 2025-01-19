import React from "react";
import "./ItemPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Rate } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { getProductData, updateUserCart } from "../../../firebase/firebaseData";
import Loader from "../../../components/loader/Loader";
const productImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s";
export default function ItemPage() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  const setProductData = async () => {
    const productData = await getProductData(id, setLoader);
    setData(productData);
  };
  const { id } = useParams(); // استخراج Id من معلمات المسار
  useEffect(() => {
    setProductData();
  }, []);
  return (
    <div className="container">
      <>
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <img src={productImage} className="img-fluid" alt="Product" />
              </div>

              <div className="col-md-6">
                <h1 className="product-title">Product Name</h1>
                <p className="product-description">Item number: {id}</p>{" "}
                <p className="product-description">
                  the company founded on : {data.compnayCreateTime}
                </p>
                <p className="product-description">
                  company email : {data.comapnyEmail}
                </p>
                {data.productlastOfferDate ? (
                  <p className="m-3 product-description ">
                    last offer date : {data.productlastOfferDate}
                  </p>
                ) : (
                  <></>
                )}
                <p className="product-description">
                  this product has been sold{" "}
                  {data.purshaseNumber ? data.purshaseNumber : 0} times
                </p>
                {data.productOffer ? (
                  <>
                    <del className="product-price text-danger fs-4">
                      ${data.productPrice}
                    </del>
                    <span className="product-price fs-1">
                      {" "}
                      new ${data.productOffer}
                    </span>
                  </>
                ) : (
                  <h2 className="product-price">${data.productPrice}</h2>
                )}
              </div>
              <p className="product-description my_DIV">
                {data.productSomeInfo}
              </p>
              <div className="col-md-6 pt-3 d-flex justify-content-between w-100">
                <Rate
                  disabled={true}
                  defaultValue={data.rate}
                  allowHalf={true}
                />
              </div>
              <div className="col-md-6 pt-3 d-flex justify-content-between w-100">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    data.productOffer
                      ? updateUserCart(
                          data.productId,
                          1,
                          data.Id,
                          data.productName,
                          data.productOffer
                        )
                      : updateUserCart(
                          data.productId,
                          1,
                          data.Id,
                          data.productName,
                          data.productPrice
                        );
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate("/home")}
                >
                  Back to Home
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p className="product-description">
                  comments number :
                  {data.comments.length ? data.comments.length : 0}
                </p>
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}
