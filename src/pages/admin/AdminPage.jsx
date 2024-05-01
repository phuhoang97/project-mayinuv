import { ConfigProvider, Layout } from "antd";
import React, { useEffect } from "react";
import MainContent from "./layouts/contents";
import MainSidebar from "./layouts/sidebar";
import MainHeader from "./layouts/header";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router";

const AdminPage = () => {
  const navigate = useNavigate();
  //   const storedData = localStorage.getItem("datakey");
  //   let decryptedData = null
  //   if(storedData){
  // 	const bytes = CryptoJS.AES.decrypt(
  // 		storedData,
  // 		process.env.REACT_APP_SECRET_KEY
  // 	  );
  // 	decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //   }

  //   useEffect(() => {
  //     if (
  //       !storedData ||
  //       decryptedData?.username !== process.env.REACT_APP_USERNAME ||
  //       decryptedData?.password !== process.env.REACT_APP_PASSWORD
  //     ) {
  //       localStorage.clear();
  //       navigate("/login");
  //     }
  //   }, [storedData]);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 16,
        },
        components: {
          Spin: {},
        },
      }}
    >
      <Layout
        style={{
          maxHeight: "100vh",
          height: "100vh",
          maxWidth: "100vw",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <MainHeader />
        <Layout>
          <MainSidebar />
          <MainContent />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AdminPage;
