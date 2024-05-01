import { Layout } from "antd";
import React from "react";
import MenuSidebar from "./menu";

const { Sider } = Layout;

const MainSidebar = () => {
  return (
    <Sider trigger={null} collapsible width={270} collapsedWidth={50}>
      <MenuSidebar />
    </Sider>
  );
};

export default MainSidebar;
