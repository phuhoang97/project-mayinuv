import { ConfigProvider, Layout } from "antd";
import React from "react";
import MainContent from "./contents";
import MainSidebar from "./sidebar";
import MainHeader from "./header";

const MainLayout = () => {
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

export default MainLayout;
