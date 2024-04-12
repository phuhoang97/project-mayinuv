import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Banner.css";
import imgBanner from "../../../assets/images/1000_F_343877993_9Od0iow5UMBwbzcR3uiNUJVpUxPUe2Id.jpg";
import imgBanner2 from "../../../assets/images/20150914060325570-9198.webp";
function Banner() {
  return (
    <div className='banner'>
      {/* Các thành phầm */}

      <div className='banner-left'>
        <div className='ingredient'>
          <div className='text-ingredient'>Máy in UV</div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className='icon-arrow-right'
            // onClick={() => setShowSubMenu(!showSubMenu)}
          />
          <ul className='submenu'>
            <li>Máy In UV Cuộn</li>
            <li>Máy In UV Phẳng</li>
          </ul>
        </div>
        <div className='ingredient'>
          <div className='text-ingredient'>Máy in theo công dụng</div>
          <FontAwesomeIcon icon={faChevronRight} className='icon-arrow-right' />
          <ul className='submenu'>
            <li>Máy In UV 3D</li>
            <li>Máy In Khổ Lớn</li>
            <li>Máy In khổ A3 - A4</li>
            <li>Máy In Decal</li>
            <li>Máy In lụa - In Vải</li>
            <li>Máy In Băng Rôn</li>
            <li>Máy In 3D - 5D - 8D</li>
          </ul>
        </div>
        <div className='ingredient'>
          <div className='text-ingredient'>Máy in theo chất liệu</div>
          <FontAwesomeIcon icon={faChevronRight} className='icon-arrow-right' />
          <ul className='submenu'>
            <li>Máy In Bạt UV</li>
            <li>Máy In UV Mini</li>
            <li>Máy In PP</li>
            <li>Máy In Trên Kính</li>
            <li>Máy In Trên Gỗ</li>
            <li>Máy In Trên Mica</li>
            <li>Máy In Ốp Lưng Điện Thoại</li>
          </ul>
        </div>
        <div className='ingredient'>
          <div className='text-ingredient'>Một số dòng khác</div>
          <FontAwesomeIcon icon={faChevronRight} className='icon-arrow-right' />
        </div>
        <div className='ingredient'>
          <div className='text-ingredient'>Máy in UV cũ</div>
          <FontAwesomeIcon icon={faChevronRight} className='icon-arrow-right' />
        </div>
        <div className='ingredient'>
          <div className='text-ingredient'>Phụ kiện</div>
          <FontAwesomeIcon icon={faChevronRight} className='icon-arrow-right' />
        </div>
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
