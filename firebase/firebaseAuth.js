import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { toast } from "react-toastify";
import { setUserInfo } from "../redux/UserInfo";
import { getUserInfoById, saveUserInfo } from "./firebaseData";

export const createAccountWithEmail = async (
  email,
  password,
  data,
  dispatch,
  navigate
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    toast.success("hello there :) ");
    console.log({
      Id: res.user.uid,
      ...data,
      isAdmin: false,
    });
    localStorage.setItem("userId",res.user.uid);
    dispatch(
      setUserInfo({
        Id: res.user.uid,
        ...data,
        isAdmin: false,
      })
    );
    navigate("/home");

    try {
      const saveRes = await saveUserInfo(data, res.user.uid);
      console.log("hello from save userData", saveRes);
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
    toast.error(error.message);
  }
};

export const LoginWithEmail =
 async(email, password, dispatch, navigate) => {
   try
    {
       const res = await signInWithEmailAndPassword(auth, email, password);
        const userId = res.user.uid;
         const data = await getUserInfoById(userId);
          console.log(data);
           dispatch(setUserInfo({ ...data, Id: userId }));
            localStorage.setItem("userId", userId); 
            toast.success("Logged in successfully!"); 
            navigate("/home");
           }
            catch (error) {
               console.error("Error logging in: ", error.message);
                toast.error(error.message); 
}}