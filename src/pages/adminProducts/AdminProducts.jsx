import React, { useState, useEffect } from "react";
import "./AdminProducts.css";
import Header from "../../../components/header/Header";
import AdminProductItem from "../../../components/adminProductItem/AdminProductItem";
import { useNavigate } from "react-router-dom";
import { getUserProducts } from "../../../firebase/firebaseData";
import Loader from "../../../components/loader/Loader";

export default function AdminProducts() {
  const [products, setProducts] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUserProducts = async () => {
    try {
      const data = await getUserProducts(localStorage.getItem("userId"));
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user products:", error.message);
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUserProducts();
  }, []);
  return (
    <div className="purchaseMain">
      <Header />
      <div className="container bg-dark w-100 purchaseContainer">
        {loading ? (
          <div className="myContainer">
            <Loader />
          </div>
        ) : error ? (
          <p className="text-danger">Error: {error}</p>
        ) : (
          <>
            <div className="container p-2">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/createProduct")}
              >
                Add New Product
              </button>
            </div>
            {products.length > 0 ? (
              products.map((product) => (
                <AdminProductItem
                  key={product.productId}
                  productName={product.productName}
                  addedDate={product.addedDate}
                  productNumber={product.productNumber}
                  productPrice={product.productPrice}
                  sumOfBuyingOperation={product.sumOfBuyingOperation}
                  rate={product.rate}
                  sumOfStars={product.sumOfStars}
                  finallyRate={product.rate}
                  commentNumber={product.comments.length}
                  productlastOfferDate={product.productlastOfferDate}
                  intialNumber={product.intialNumber}
                  productOffer={product.productOffer}
                  productId={product.productId}
                  productSomeInfo={product.productSomeInfo}
                  rateNumber={product.rateNumber}
                />
              ))
            ) : (
              <p className="text-white">No products found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
