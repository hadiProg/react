import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Id: "",
  name: "",
  phoneNumber: "",
  city: "",
  birthday: "",
  email: "",
  sumOfBuyingOperation: 0,
  nummberOfBuyingOperation: 0,
  userRate: 0.0,
  isAdmin: false,
  country: "",
  region: "",
  phoneNumber2: "",
  companyName: "",
  comapnyEmail: "",
  comapnyCity: "",
  companyCountry: "",
  comppanyLogo: "",
  compnayCreateTime: "",
  companyPhone: "",
  companyPhone1: "",
  companyPhone2: "",
  companyPhone3: "",
  companyPhone4: "",
  companySomeInfo: "",
  companyPurshaseNumber: 0,
  companyItemsNumber: 0,
  companyTotalMony: 0.0,
  companyNumberRate: 0,
  companyTotalRate: 0,
  companyRate: 0.0,
};

export const adminInfo = createSlice({
  name: "adminInfo",
  initialState,
  reducers: {
    setAdminInfo: (state, action) => {
      state.Id = action.payload.Id;
      state.name = action.payload.name;
      state.birthday = action.payload.birthday;
      state.city = action.payload.city;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.sumOfBuyingOperation = action.payload.sumOfBuyingOperation;
      state.nummberOfBuyingOperation = action.payload.nummberOfBuyingOperation;
      state.userRate = action.payload.userRate;
      state.isAdmin = action.payload.isAdmin;
      state.country = action.payload.country;
      state.region = action.payload.region;
      state.phoneNumber2 = action.payload.phoneNumber2;
      state.companyName = action.payload.companyName;
      state.comapnyEmail = action.payload.comapnyEmail;
      state.comapnyCity = action.payload.comapnyCity;
      state.companyCountry = action.payload.companyCountry;
      state.comppanyLogo = action.payload.comppanyLogo;
      state.compnayCreateTime = action.payload.compnayCreateTime;
      state.companyPhone = action.payload.companyPhone;
      state.companyPhone2 = action.payload.companyPhone2;
      state.companyPhone3 = action.payload.companyPhone3;
      state.companyPhone4 = action.payload.companyPhone4;
      state.companySomeInfo = action.payload.companySomeInfo;
      state.companyPurshaseNumber = action.payload.companyPurshaseNumber;
      state.companyItemsNumber = action.payload.companyItemsNumber;
      state.companyTotalMony = action.payload.companyTotalMony;
      state.companyNumberRate = action.payload.companyNumberRate;
      state.companyTotalRate = action.payload.companyTotalRate;
      state.companyRate = action.payload.companyRate;
    },
    deleteAdminInfo: (state) => {
      state.Id = initialState.Id;
      state.name = initialState.name;
      state.birthday = initialState.birthday;
      state.city = initialState.city;
      state.email = initialState.email;
      state.phoneNumber = initialState.phoneNumber;
      state.sumOfBuyingOperation = initialState.sumOfBuyingOperation;
      state.nummberOfBuyingOperation = initialState.nummberOfBuyingOperation;
      state.userRate = initialState.userRate;
      state.isAdmin = initialState.isAdmin;
      state.country = initialState.country;
      state.region = initialState.region;
      state.phoneNumber2 = initialState.phoneNumber2;
      state.companyName = initialState.companyName;
      state.comapnyEmail = initialState.comapnyEmail;
      state.comapnyCity = initialState.comapnyCity;
      state.companyCountry = initialState.companyCountry;
      state.comppanyLogo = initialState.comppanyLogo;
      state.compnayCreateTime = initialState.compnayCreateTime;
      state.companyPhone = initialState.companyPhone;
      state.companyPhone2 = initialState.companyPhone2;
      state.companyPhone3 = initialState.companyPhone3;
      state.companyPhone4 = initialState.companyPhone4;
      state.companySomeInfo = initialState.companySomeInfo;
      state.companyPurshaseNumber = initialState.companyPurshaseNumber;
      state.companyItemsNumber = initialState.companyItemsNumber;
      state.companyTotalMony = initialState.companyTotalMony;
      state.companyNumberRate = initialState.companyNumberRate;
      state.companyTotalRate = initialState.companyTotalRate;
      state.companyRate = initialState.companyRate;
    },
  },
});

export const { setAdminInfo, deleteAdminInfo } = adminInfo.actions;
export default adminInfo.reducer;
