import React from "react";
import "./Selling.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import productPrint from "../../../assets/images/UV-phang-3020-Crystal-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";

function Selling({ dataPrint }) {
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
                <Link to={"/detail-product"}>
                  <ProductCard
                    key={index}
                    dataProduct={product}
                    index={index}
                  />
                </Link>
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
