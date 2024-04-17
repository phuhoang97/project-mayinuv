import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-slogan.png";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Headers.css";
import { useState } from "react";
import Banner from "../banner/Banner";

function Headers() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    // Toggle icon
    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  return (
    <header>
      <nav className='navbar navbar-expand-lg '>
        <div className='container-fluid'>
          <Link to={"/"}>
            <img src={logo} alt='Logo' className='img-logo' />
          </Link>

          <nav className='nav'>
            <ul className={active}>
              <li className='nav-item'>
                <Link className='nav-link'>Trang chủ</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Sản phẩm</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Máy in UV cũ</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Phụ kiện</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Dịch vụ sửa chữa</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link'>Giới thiệu công ty</Link>
              </li>
            </ul>
          </nav>

          <div className='div-search'>
            <input
              type='text'
              placeholder='Search ...'
              className='input-search'
            />
            <SearchOutlined className='icon-search' />
            <ShoppingCartOutlined className='icon-shopping' />
          </div>

          <div className={toggleIcon} onClick={navToggle}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
