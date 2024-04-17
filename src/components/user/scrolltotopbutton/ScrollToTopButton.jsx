import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { ArrowUpOutlined } from "@ant-design/icons";
import iconZalo from "../../../assets/logo/Logo Zalo Arc.png";
import iconFB from "../../../assets/logo/facebook.svg";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Hiển thị hoặc ẩn nút khi người dùng cuộn trang
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt
    });
  };

  return (
    <div>
      <div className={`scroll-to-top-button ${isVisible ? "show" : "hide"}`}>
        <div className='icon-social'>
          <a href='https://www.google.com/'>
            <img src={iconFB} alt='Facebook' />
          </a>
        </div>
        <div className='icon-social icon-zalo'>
          <a href='https://www.google.com/'>
            <img src={iconZalo} alt='Zalo' />
          </a>
        </div>

        <button onClick={scrollToTop} className='btn-icon-top'>
          <ArrowUpOutlined className='icon-top' />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
