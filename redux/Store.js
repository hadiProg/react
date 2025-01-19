import { configureStore } from "@reduxjs/toolkit";
import { userInfo } from "./UserInfo";
import { adminInfo } from "./adminInfo";

export const store = configureStore({
  reducer: {
    userInfo: userInfo.reducer,
    adminInfo: adminInfo.reducer,
  },
});
