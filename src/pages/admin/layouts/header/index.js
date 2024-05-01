import { Layout } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo/logo-slogan.png";

const { Header } = Layout;

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <Header
      style={{
        padding: 0,
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        gap: "90px",
        height: "15%",
      }}
    >
      <div onClick={() => navigate("/")}>
        <img
          src={logo}
          alt='Logo'
          width={150}
          style={{ margin: "20px", padding: "10px" }}
        />
      </div>
      <div
        style={{ paddingTop: "10px" }}
        className='font-semibold text-4xl uppercase text-p-color'
      >
        Trang quản lý
      </div>
    </Header>
  );
};

export default MainHeader;
