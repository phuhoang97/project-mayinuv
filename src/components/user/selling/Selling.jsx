import React from "react";
import "./Selling.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productPrint from "../../../assets/images/UV-phang-3020-Crystal-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Selling({ dataPrint }) {
  console.log(dataPrint);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Hiển thị 4 mục trên mỗi slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Hiển thị 3 mục trên mỗi slide khi màn hình nhỏ hơn 1024px
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Hiển thị 2 mục trên mỗi slide khi màn hình nhỏ hơn 600px
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='best-selling'>
        <div className='title-brick'>
          <div className='brick-red'></div>
          <div className='content-brick'>
            <strong>Best Selling</strong>
          </div>
        </div>

        <div className='title-component'>
          <h3 className='company-goals'>
            <strong>{dataPrint.category}</strong>
          </h3>

          <button className='view-all'>View All</button>
        </div>

        <div>
          <Slider {...settings}>
            {dataPrint.product.map((product, index) => (
              <div className='multi-carousel'>
                <div className='card-product'>
                  <div className='product-img'>
                    <img src={productPrint} alt='photo' />
                  </div>

                  <div className='icon-view'>
                    <FontAwesomeIcon icon={faEye} />
                  </div>

                  <div className='name-product'>
                    <strong>{product.name}</strong>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      ;
    </>
  );
}

export default Selling;
