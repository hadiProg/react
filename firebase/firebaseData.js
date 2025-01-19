import {
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";
import { setAdminInfo } from "../redux/adminInfo";
import { async } from "@firebase/util";

const userDoc = collection(db, "users");

export const saveUserInfo = async (data, userId) => {
  try {
    await setDoc(doc(db, "users", userId), { ...data, Id: userId });
    console.log("Document written with ID: ", userId);
  } catch (error) {
    console.error("Error adding document: ", error.message);
  }
};
export const getUserInfoById = async (userId) => {
  try {
    const myDoc = doc(db, "users", userId);
    const res = await getDoc(myDoc);
    const data = res.data();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const updateUserData = async (data, docId, setLoading) => {
  setLoading(true);
  const myDoc = doc(db, "users", docId);
  try {
    await updateDoc(myDoc, data);
    toast.success("your data updated sucessfully");
  } catch (error) {
    console.log(error.message);
  }
  setLoading(false);
};

export const saveCompanyInfo = async (userId, data, dispatch) => {
  try {
    await setDoc(doc(db, "companies", userId), data);
    toast.success("congratulation :) ");
    localStorage.setItem("isAdmin", true);
    dispatch(setAdminInfo(data));
  } catch (error) {
    console.error("Error adding document: ", error.message);
  }
};

export const getAdminInfo = async (dispatch) => {
  try {
    const myDoc = doc(db, "companies", localStorage.getItem("userId"));
    const res = await getDoc(myDoc);
    const data = res.data();
    dispatch(setAdminInfo(data));
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const updateAdminInfo = async (Id, data, dispatch) => {
  const myDoc = doc(db, "companies", Id);
  try {
    await updateDoc(myDoc, data);
    toast.success("admin info updated successfully :)");
    dispatch(setAdminInfo(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const addProduct = async (Id, data) => {
  try {
    await setDoc(doc(db, "product", Id), data);
    console.log("Document written with ID: ", Id);
    toast.success("Your product has been published successfully :)");
  } catch (error) {
    console.error("Error adding document: ", error.message);
    toast.error(error.message);
  }
};
export const addProductToUserProductArray = async (id, data) => {
  try {
    const docRef = doc(db, "userProduct", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const preData = docSnap.data();
      const newData = { products: [...preData.products, data] };
      console.log(newData);
      await setDoc(docRef, newData);
    } else {
      const newData = { products: [data] }; // Ensure it's an array

      console.log(newData);
      await setDoc(docRef, newData);
      toast.success("Your product added successfully :)");
    }
  } catch (error) {
    toast.error(error.message);
  }
};

export const getUserProducts = async (uid) => {
  const myRef = doc(db, "userProduct", uid);
  try {
    const snapDoc = await getDoc(myRef);
    return snapDoc.data();
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProductData = async (productId, productData, userId) => {
  const productRef = doc(db, "product", productId);
  try {
    // Update product data in the product collection
    await updateDoc(productRef, productData);
    console.log(productData);
    // Retrieve user product data
    const userProductRef = doc(db, "userProduct", userId);
    const userProductSnap = await getDoc(userProductRef);

    if (userProductSnap.exists()) {
      const userProducts = userProductSnap.data().products;
      console.log(userProducts);

      // Update the specific product in the user's products array
      const updatedProducts = userProducts.map((product) => {
        if (product.productId == productId) {
          console.log({ ...product, ...productData });
          return { ...product, ...productData };
        } else {
          return product;
        }
      });
      console.log(updatedProducts);
      // Update Firestore with the new data
      await updateDoc(userProductRef, { products: updatedProducts });

      console.log("Product updated successfully!");
      toast.success("your product  has been updated sucessfulyy :)");
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("Error updating product:", error.message);
  }
};

export const deleteProduct = async (productId, userId) => {
  const productRef = doc(db, "product", productId);
  const userProductRef = doc(db, "userProduct", userId);
  try {
    await deleteDoc(productRef);
    const userProductSnap = await getDoc(userProductRef);
    if (userProductSnap.exists()) {
      const data = userProductSnap.data().products;
      const newdata = data.filter((product) => product.productId !== productId);
      await updateDoc(userProductRef, { products: newdata });
      toast.success("you have deleted the product sucessfully :)");
    }
  } catch (error) {
    console.log(error.messagge);
  }
};

export const updateProductUserData = async (adminId, { newProductData }) => {
  try {
    const q = query(collection(db, "product"), where("Id", "==", adminId));
    const querySnapshot = await getDocs(q);

    // Update each product with the new data
    for (const productDoc of querySnapshot.docs) {
      const productRef = doc(db, "product", productDoc.id);
      const data = (await getDoc(productRef)).data();
      await updateDoc(productRef, { ...data, ...newProductData });
    }

    const userProductRef = doc(db, "userProduct", adminId); // Correctly define the document reference
    const userProductDoc = await getDoc(userProductRef);
    if (userProductDoc.exists()) {
      const userProductData = userProductDoc.data().products;
      const newData = userProductData.map((product) => {
        return {
          ...product,
          ...newProductData,
        };
      });

      await updateDoc(userProductRef, { products: newData });
      toast.success("Your data has been updated successfully :)");
    } else {
      console.log("User product document does not exist!");
    }
  } catch (error) {
    console.error("Error updating products:", error);
    toast.error("An error occurred while updating the data.");
  }
};

export const getAllProducts = async (setProducts) => {
  const productRef = collection(db, "product");
  setProducts([]); // Initialize with an empty array
  try {
    const productSnapShot = await getDocs(productRef);
    const products = productSnapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(products);
    // Update the state with all products at once
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductData = async (productID, setLoader) => {
  const productRef = doc(db, "product", productID);
  try {
    const productData = await getDoc(productRef);
    if (productData.exists()) {
      setLoader(false);
      return productData.data();
    }
    setLoader(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUserCart = async (
  productID,
  quantity,
  userId,
  productName,
  price
) => {
  console.log(productID);
  console.log(quantity, userId, productName);
  const docRef = doc(db, "userCart", userId);
  try {
    const PreData = await getDoc(docRef);

    if (PreData.exists()) {
      const cartData = PreData.data().cart || []; // جلب بيانات السلة الموجودة
      const check = cartData.some((product) => product.id === productID);

      if (check) {
        const newData = cartData.map((product) => {
          if (product.id === productID) {
            product.quantity += quantity;
          }
          return product; // تأكد من إعادة المنتج
        });
        await updateDoc(docRef, { cart: newData }); // تحديث البيانات
      } else {
        const newData = [
          ...cartData,
          { id: productID, quantity, name: productName, price: price },
        ];
        await setDoc(docRef, { cart: newData }, { merge: true });
      }
    } else {
      const newCart = [
        { id: productID, quantity, name: productName, price: price },
      ];
      await setDoc(docRef, { cart: newCart }); // إنشاء الوثيقة إذا لم تكن موجودة
    }
    toast.success("the product has been added to your cart successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserCart = async (userID, setLoader) => {
  const userCartRef = doc(db, "userCart", userID);
  try {
    const userCartsnap = await getDoc(userCartRef);
    if (userCartsnap.exists()) {
      console.log(userCartsnap.data().cart);
      setLoader(false);
      return userCartsnap.data().cart;
    } else {
      setLoader(false);
      return [];
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const editeCartQuantity = async (
  productID,
  userId,
  quantity,
  setLoader
) => {
  const cartRef = doc(db, "userCart", userId);
  try {
    const cartSnap = await getDoc(cartRef);
    const oldData = cartSnap.data();
    const newData = oldData.map((e) => {
      if (e.id == productID) {
        return { ...e, quantity: e.quantity + quantity };
      }

    });
    await updateDoc(cartRef,newData);
    setLoader(false);
    toast.success("you quantity updatred sucessfully");
  } catch (error) {
    console.log(error.messagge)
  }
};
