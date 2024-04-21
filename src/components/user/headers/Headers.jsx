import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo-slogan.png";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Headers.css";
import { useEffect, useState } from "react";

function Headers() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <nav className={`navbar ${scrolled ? "scrolled" : ""} navbar-expand-lg`}>
        <div className='container-fluid'>
          <Link to={"/"}>
            <img src={logo} alt='Logo' className='img-logo' />
          </Link>

          <nav className='nav-header'>
            <ul className={active}>
              <li className='nav-item'>
                <Link to={"/"} className='nav-link'>
                  Trang chủ
                </Link>
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
