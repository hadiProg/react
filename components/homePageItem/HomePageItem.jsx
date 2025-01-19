import React, { useState, useEffect } from "react";
import "./HomePageItem.css";
import PopupItemInfo from "../popupItemInfo/PopupItemInfo";
import { useNavigate } from "react-router-dom";
const image = "https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp";
export default function HomePageItem({ Id, productName, productSomeInfo }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body myCardFlex">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{productSomeInfo}</p>
          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={() => navigate(`/product/${Id}/`)}
              className={
                width > 500 ? "btn btn-primary" : "btn btn-primary btn-sm"
              }
              data-mdb-ripple-init
            >
              Show More
            </button>
          </div>
        </div>
      </div>
      {showMoreInfo && <PopupItemInfo setShowModalVar={setShowMoreInfo} />}
    </>
  );
}
