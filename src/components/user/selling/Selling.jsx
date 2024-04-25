import React, { useEffect, useState } from "react";
import "./Selling.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../productCard/ProductCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { Flex, Spin } from "antd";

function Selling({ idCategory }) {
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

  console.log(idCategory);

  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (idCategory && idCategory.id) {
      axios
        .get(
          `https://ecommerce-printer-be.vercel.app/api/products?category_id=${idCategory.id}`
        )
        .then((res) => {
          setDataProducts(res.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [idCategory.id]);

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
            <strong>{idCategory.name}</strong>
          </h3>

          <button className='view-all'>View All</button>
        </div>

        <div>
          {loading ? (
            // Hiển thị loading hoặc placeholder
            <Flex align='center' justify='center' gap='middle'>
              <Spin size='large' />
            </Flex>
          ) : (
            <Slider {...settings}>
              {dataProducts.map((product) => (
                <div className='multi-carousel' key={product.id}>
                  <Link to={`/products/${product.id}`}>
                    <ProductCard dataProduct={product} />
                  </Link>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      ;
    </>
  );
}

export default Selling;
