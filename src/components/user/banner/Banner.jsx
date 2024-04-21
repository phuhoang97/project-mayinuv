import React, { useState } from "react";
import "./Banner.css";
import imgBanner from "../../../assets/images/1000_F_343877993_9Od0iow5UMBwbzcR3uiNUJVpUxPUe2Id.jpg";
import imgBanner2 from "../../../assets/images/20150914060325570-9198.webp";
import {
  AppstoreOutlined,
  BarsOutlined,
  ContainerOutlined,
  CreditCardOutlined,
  BlockOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Máy In UV", "sub1", <BarsOutlined />, [
    getItem("Máy In UV Cuộn", "Máy In UV Cuộn"),
    getItem("Máy In UV Phẳng", "Máy In UV Phẳng"),
    getItem("Máy In UV Hỗn Hợp", "Máy In UV Hỗn Hợp"),
  ]),
  getItem(
    <Link to='/post-detail'>Máy In UV 3D</Link>,
    "sub2",
    <AppstoreOutlined />,
    [
      getItem("Máy In UV 3D", "Máy In UV 3D"),
      getItem("Máy In Khổ Lớn", "Máy In Khổ Lớn"),
      getItem("Máy In khổ A3 - A4", "Máy In khổ A3 - A4"),
      getItem("Máy In Decal", "Máy In Decal"),
      getItem("Máy In lụa - In Vải", "Máy In lụa - In Vải"),
      getItem("Máy In Băng Rôn", "Máy In Băng Rôn"),
      getItem("Máy In 3D - 5D - 8D", "Máy In 3D - 5D - 8D"),
    ]
  ),
  getItem("Máy In Theo Chất Liệu", "sub3", <ContainerOutlined />, [
    getItem("Máy In Bạt UV", "Máy In Bạt UV"),
    getItem("Máy In UV Mini", "Máy In UV Mini"),
    getItem("Máy In PP", "Máy In PP"),
    getItem("Máy In Trên Kính", "Máy In Trên Kính"),
    getItem("Máy In Trên Gỗ", "Máy In Trên Gỗ"),
    getItem("Máy In Trên Mica", "Máy In Trên Mica"),
    getItem("Máy In Ốp Lưng Điện Thoại", "Máy In Ốp Lưng Điện Thoại"),
  ]),
  getItem("Một Số Dòng Khác", "sub4", <CreditCardOutlined />, []),
  getItem("Máy In UV Cũ", "sub5", <ExportOutlined />, []),
  getItem("Phụ Kiện", "sub5", <BlockOutlined />, []),
];

const onClick = (e) => {
  console.log("click", e);
};

function Banner() {
  return (
    <div className='banner'>
      <div className='banner-left'>
        <Menu onClick={onClick} mode='vertical' items={items} />
      </div>

      <div className='banner-right'>
        <div id='carouselExampleCaptions' className='carousel slide'>
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={0}
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={1}
              aria-label='Slide 2'
            />
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={2}
              aria-label='Slide 3'
            />
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img
                src={imgBanner}
                className='img-carousel'
                alt='photo-banner'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src={imgBanner2}
                className='img-carousel'
                alt='photo-banner'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img
                src={imgBanner}
                className='img-carousel'
                alt='photo-banner'
              />
              <div className='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span className='carousel-control-next-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
