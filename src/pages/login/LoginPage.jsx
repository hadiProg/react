import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginWithEmail } from "../../../firebase/firebaseAuth";
import Loader from "../../../components/loader/Loader";
import { useDispatch } from "react-redux";
import { deleteUserInfo } from "../../../redux/UserInfo";
import { auth } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export default function LoginPage() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const changeValue = (e) => {
    const { id, value } = e.target;
    setInputValues((pre) => {
      return {
        ...inputValues,
        [id]: value,
      };
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(deleteUserInfo());
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
      }
    });
  }, []);
  return (
    <div>
      <section className="vh-100 gradient-custom">
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
                        Login Here Please
                      </h3>
                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                onChange={(e) => {
                                  changeValue(e);
                                }}
                                value={inputValues.email}
                                type="email"
                                id="email"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="email">
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div data-mdb-input-init className="form-outline">
                              <input
                                onChange={(e) => {
                                  changeValue(e);
                                }}
                                value={inputValues.password}
                                type="password"
                                max={20}
                                id="password"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="password">
                                password
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="myDiv mp=20">
                          <p>New To My App !</p>
                          <input
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                            type="submit"
                            value="Register"
                            onClick={() => {
                              navigate("/register");
                            }}
                          />
                        </div>
                        <div className="d-flex justify-content-center aligen-items-center mt-3">
                          <input
                            data-mdb-ripple-init
                            className={
                              inputValues.email.length > 8 &&
                              inputValues.password.length > 7
                                ? "btn btn-primary btn-lg"
                                : "btn btn-primary btn-lg disabled"
                            }
                            value="Login"
                            type="button"
                            onClick={async () => {
                              setLoader(true);
                              await LoginWithEmail(
                                inputValues.email,
                                inputValues.password,
                                dispatch,
                                navigate
                              );
                              setLoader(false);
                            }}
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
