import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../../components/header/Header";
import HomePageItem from "../../../components/homePageItem/HomePageItem";
import { Pagination, Spin } from "antd";
import Footer from "../../../components/footer/Footer";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../../firebase/firebaseData";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userInfo = useSelector((state) => state.userInfo);

  const getProducts = async () => {
    setLoading(true);
    setProducts([]);
    await getAllProducts(setProducts);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  return (
    <div className="myHomePageClass">
      <Header />
      <div className="itemShowContainer p-3 h-100 bg-dark">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Spin size="large" />
          </div>
        ) : products.length > 0 ? (
          products.map((e) => (
            <HomePageItem
              key={e.productId}
              Id={e.productId}
              productName={e.productName}
              productSomeInfo={e.productSomeInfo}
            />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center text-white">
            <p>No products available.</p>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center w-100 mt-3 mb-4">
        <Pagination total={40} />
      </div>
      <Footer />
    </div>
  );
}
