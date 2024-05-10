import { Layout } from "antd";
import React from "react";
import logo from "../../../../assets/logo/logo-slogan.png";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        gap: "90px",
        height: "10%",
      }}
    >
      <div>
        <img
          src={logo}
          alt='Logo'
          width={150}
          style={{ margin: "20px", padding: "10px" }}
        />
      </div>
      <div
        style={{
          fontWeight: "600",
          fontSize: "25px",
          textTransform: "uppercase",
          color: "#333",
        }}
      >
        Trang quản lý
      </div>
    </Header>
  );
};

export default MainHeader;
