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
    getItem(
      "Trang quản lý",
      "dashboard",
      null,
      [
        getItem(null, null, null, null, "divider"),
        getItem("Danh sách đăng ký tư vấn", "/admin/register-advise", null),
        getItem("Liên hệ/Thắc mắc", "/admin/contact-comments"),
        getItem("Dịch vụ", "/admin/service"),
        // getItem("Thông tin dịch vụ", "/admin/content-web"),
        getItem("Bảng giá", "/admin/price-service"),
        getItem("Sản phẩm nha khoa", "/admin/product-dentistry"),
        getItem("Khách hàng", "/admin/customer-documents"),
        getItem("Tin tức", "/admin/news"),
        getItem("Thoát", "logout"),
      ],
      "group"
    ),
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
        }}
        defaultSelectedKeys={[pathname]}
        items={items}
        onClick={onClick}
      />
    </>
  );
};

export default MenuSidebar;
