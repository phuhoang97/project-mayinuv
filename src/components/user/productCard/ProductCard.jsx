import React from "react";
import imgProduct from "../../../assets/images/may-in-uv-phang-bossron-1325.jpg";
import "./ProductCard.css";
import logoCard from "../../../assets/logo/logo-slogan.png";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

function ProductCard({ dataProduct }) {
  console.log(dataProduct);
  return (
    <div className='product-card'>
      <div className='logo-card'>
        <img src={logoCard} alt='photo' />

        <div className='group-icon'>
          <Tooltip title='Thêm giỏ hàng' placement='right'>
            <ShoppingCartOutlined className='icon icon-shopping' />
          </Tooltip>

          <Tooltip title='Xem chi tiết' placement='right'>
            <EyeOutlined className='icon icon-eye' />
          </Tooltip>
        </div>
      </div>
      <div className='mains-images'>
        <img src={imgProduct} alt='photo' />
      </div>

      <div className='product-details'>
        <span className='prints-name'>{dataProduct.name}</span>
      </div>
    </div>
  );
}

export default ProductCard;
