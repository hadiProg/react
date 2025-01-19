import React, { useEffect, useState } from "react";
import "./CartPageItem.css";
import { getProductData } from "../../firebase/firebaseData";
import Loader from "../loader/Loader";
const productImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlndpwDalSNF8TzBG6T7kGv73l0IOReNJpKw&s";
export default function CartPageItem({ product, setTotalInvoice }) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState({});

  const setProductData = async () => {
    const productData = await getProductData(product.id, setLoader);
    setData(productData);
  };
  useEffect(() => {
    if (data.productPrice !== undefined) {
      setTotalInvoice((pre) => {
        if (data.productOffer) {
          return pre + data.productOffer * product.quantity;
        } else {
          return pre + data.productPrice * product.quantity;
        }
      });
    }
  }, [data]);
  useEffect(() => {
    setProductData();
  }, []);
  return (
    <div className="card cart-page-item mb-3">
      <div className="card-body">
        {loader ? (
          <Loader />
        ) : (
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={productImage}
                className="img-fluid rounded"
                alt={product.name}
              />
            </div>
            <div className="col-md-8">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Product ID: {product.id}</p>
              <p className="card-text">Product name: {product.name}</p>
              <p className="card-text">quantity : {product.quantity}</p>
              <p className="card-text">Price for each item: ${product.price}</p>
              <p className="card-text">
                Price for total quantity: $
                {data.productOffer
                  ? data.productOffer * product.quantity
                  : data.productPrice * product.quantity}
              </p>
              <p className="card-text"></p>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {}}
                >
                  &minus;
                </button>
                <span className="mx-2">{}</span>
                <button
                  disabled={product.quantity + 2 > data.productNumber}
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {}}
                >
                  &#43;
                </button>
              </div>
              <button className="btn btn-danger btn-sm mt-2" onClick={() => {}}>
                Delete
              </button>
              {product.quantity + 1 > data.productNumber ? (
                <>
                  <p className="alert alert-danger">
                    no more items is avaiable
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
