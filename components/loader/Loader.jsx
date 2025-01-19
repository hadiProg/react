import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { getUserInfoById } from "../../firebase/firebaseData";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/UserInfo";

export default function Loader() {
  const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div
      className="LoaderMainContainer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      {/* <Spin indicator={loadingIcon} size="small" /> */}
      {/* <Spin indicator={loadingIcon} />
      <Spin indicator={loadingIcon} size="large" /> */}
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 48,
            }}
            spin
          />
        }
      />
    </div>
  );
}
