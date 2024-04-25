import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ProductCard.css";
import logoCard from "../../../assets/logo/logo-slogan.png";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

function ProductCard({ dataProduct }) {
  return (
    <div className='product-card'>
      <div className='logo-card'>
        <img src={logoCard} alt='photo' />

        <div className='group-icon'>
          <Tooltip title='Thêm Giỏ Hàng' placement='right'>
            <ShoppingCartOutlined className='icon icon-shopping' />
          </Tooltip>

          <Tooltip title='Xem Chi Tiết' placement='right'>
            <EyeOutlined className='icon icon-eye' />
          </Tooltip>
        </div>
      </div>
      <div className='mains-images'>
        <LazyLoadImage
          alt='product-photo'
          src={dataProduct.images[0]}
          effect='blur'
        />
      </div>

      <div className='product-details'>
        <span className='prints-name'>{dataProduct.name}</span>
      </div>
    </div>
  );
}

export default ProductCard;
