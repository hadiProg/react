import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: "",
  name: "",
  phoneNumber: "",
  city : "",
  birthday : "",
  email : "",
  sumOfBuyingOperation : 0, 
  nummberOfBuyingOperation : 0,
  userRate : 0.0,
  isAdmin : false,
  country:"",
  region:"",
  phoneNumber2:"",
};

export const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.Id = action.payload.Id;
      state.name = action.payload.name;
      state.birthday = action.payload.birthday,
      state.city = action.payload.city,
      state.email= action.payload.email,
      state.phoneNumber = action.payload.phoneNumber;
      state.sumOfBuyingOperation = action.payload.sumOfBuyingOperation;
      state.nummberOfBuyingOperation = action.payload.nummberOfBuyingOperation;
      state.userRate = action.payload.userRate,
      state.isAdmin = action.payload.isAdmin,
      state.country = action.payload.country;
      state.region = action.payload.region;
      state.phoneNumber2 = action.payload.phoneNumber2;
    },
    deleteUserInfo: (state) => {
      state.Id = initialState.Id;
      state.name = initialState.name;
      state.birthday = initialState.birthday,
      state.city = initialState.city,
      state.email= initialState.email,
      state.phoneNumber = initialState.phoneNumber;
      state.sumOfBuyingOperation = initialState.sumOfBuyingOperation;
      state.nummberOfBuyingOperation  = initialState.nummberOfBuyingOperation;
      state.userRate = initialState.userRate;
      state.isAdmin = initialState.isAdmin;
      state.country = initialState.country
      state.region = initialState.region
      state.phoneNumber2 = initialState.phoneNumber2
    },
  },
});

export const { setUserInfo, deleteUserInfo } = userInfo.actions;
export default userInfo.reducer;
