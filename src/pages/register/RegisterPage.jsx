import React, { useEffect, useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { createAccountWithEmail } from "../../../firebase/firebaseAuth";
import { toast } from "react-toastify";
import Loader from "../../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserInfo } from "../../../redux/UserInfo";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(deleteUserInfo());
  const [inputValues, setInputValues] = useState({
    name: "",
    birthday: "",
    email: "",
    password: "",
    Repassword: "",
    city: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
      }
    });
  }, []);
  const handleSubmit = async () => {
    setLoader(true);
    await createAccountWithEmail(
      inputValues.email,
      inputValues.password,
      {
        name: inputValues.name,
        birthday: inputValues.birthday,
        city: inputValues.city,
        email: inputValues.email,
        isAdmin: false,
        nummberOfBuyingOperation: 0.0,
        sumOfBuyingOperation: 0,
        phoneNumber: "",
        phoneNumber2: "",
        region: "",
        userRate: 0,
        country: "",
        imageLink: "",
      },
      dispatch,
      navigate
    );
    setLoader(false);
  };

  return (
    <div>
      <section className="gradient-custom myRegister">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  {loader ? (
                    <Loader />
                  ) : (
                    <>
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                        Registration Form
                      </h3>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                onChange={handleChange}
                                type="text"
                                id="name"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="name">
                                Name
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                onChange={handleChange}
                                type="text"
                                id="city"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="city">
                                City
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 d-flex align-items-center">
                            <div
                              data-mdb-input-init
                              className="form-outline datepicker w-100"
                            >
                              <input
                                onChange={handleChange}
                                type="date"
                                className="form-control form-control-lg"
                                id="birthday"
                              />
                              <label htmlFor="birthday" className="form-label">
                                Birthday
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                onChange={handleChange}
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="email">
                                Email
                              </label>
                            </div>
                          </div>
                          <div data-mdb-input-init className="form-outline">
                            <input
                              onChange={handleChange}
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                onChange={handleChange}
                                type="password"
                                id="Repassword"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="Repassword"
                              >
                                Re-write the password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="myDiv">
                          <p>Already Have an Account !</p>
                          <input
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                            type="submit"
                            value="Login"
                            onClick={() => {
                              navigate("/");
                            }}
                          />
                        </div>
                        <div className="mt-4 pt-2">
                          <input
                            data-mdb-ripple-init
                            className={
                              inputValues.email.length > 8 &&
                              inputValues.password === inputValues.Repassword &&
                              inputValues.password.length > 6 &&
                              inputValues.name.length > 2 &&
                              inputValues.city.length > 0 &&
                              new Date(inputValues.birthday) >
                                new Date("2000-01-01")
                                ? "btn btn-primary btn-lg "
                                : "btn btn-primary btn-lg disabled"
                            }
                            type="button"
                            value="Submit"
                            onClick={handleSubmit}
                          />
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
