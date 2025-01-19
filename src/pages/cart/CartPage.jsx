import React, { useEffect, useState } from "react";
import "./CartPage.css";
import Header from "../../../components/header/Header";
import CartPageItem from "../../../components/cartPageItem/CartPageItem";
import { useSelector } from "react-redux";
import { getUserCart } from "../../../firebase/firebaseData";
import Loader from "../../../components/loader/Loader";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loader, setLoader] = useState(true);
  const [totalInvoice, setTotalInVoice] = useState(0);
  const userInfo = useSelector((state) => state.userInfo);
  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  const getUserInfo = async () => {
    const data = await getUserCart(userInfo.Id, setLoader);
    setCart(data);
  };

  console.log(totalInvoice);
  useEffect(() => {
    getUserInfo();
  }, [userInfo]);
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Your Cart</h2>
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="mainContain">
              {cart.length > 0 ? (
                cart.map((product) => {
                  return (
                    <CartPageItem
                      key={product.id}
                      product={product}
                      setTotalInvoice={setTotalInVoice}
                    />
                  );
                })
              ) : (
                <p className="text-center">Your cart is empty.</p>
              )}
            </div>
            {cart.length > 0 && (
              <div className="invoice-footer mt-5 p-3 border-top">
                <h4 className="text-center">Invoice Summary</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Product ID</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan="2" className="text-end">
                        Total Invoice:
                      </th>
                      <th>${totalInvoice}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
