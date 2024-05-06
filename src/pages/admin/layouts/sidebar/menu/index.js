import { Menu, Modal } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MenuSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = [
    getItem("Dashboard", ""),
    getItem("Quản lý sản phẩm", "/admin/manager-product"),
    getItem("Quản lý order", "/admin/manager-order"),
    getItem("Thoát", "logout"),
  ];

  const onClick = ({ key }) => {
    if (key !== "logout") {
      navigate(`${key}`);
    } else {
      Modal.confirm({
        title: "Xác nhận thoát",
        content: "Bạn có chắc là muốn thoát không?",
        okButtonProps: { className: "bg-admin-btn-primary" },
        okText: <div>Thoát</div>,
        onOk: () => {
          localStorage.clear();
          navigate("/login");
        },
      });
    }
  };

  return (
    <>
      <Menu
        theme='light'
        mode='inline'
        style={{
          border: "none",
          height: "100%",
          overflow: "hidden auto",
          paddingTop: "20px",
        }}
        defaultSelectedKeys={[pathname]}
        items={items}
        onClick={onClick}
      />
    </>
  );
};

export default MenuSidebar;
