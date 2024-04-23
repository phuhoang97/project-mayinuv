import React, { useState, useEffect } from "react";
import productimg1 from "../../../assets/images/may-in-uv-phang-bossron-1325.jpg";
import productimg2 from "../../../assets/images/20150914060325570-9198.webp";
import productimg3 from "../../../assets/images/c3ior0906pl0u.jpg";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Tabs, Col, Row, Spin, Tag } from "antd";
import Footer from "../footer/Footer";
import Headers from "../headers/Headers";

import "./DetailProduct.css";
import ScrollToTopButton from "../scrolltotopbutton/ScrollToTopButton";

const onChange = (key) => {
  console.log(key);
};

const { TabPane } = Tabs;

function DetailProduct() {
  const [mainImage, setMainImage] = useState(productimg1);

  const [data, setData] = useState(null);
  const [alldata, setAllData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-printer-be.vercel.app/api/products/1"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    const fetchDataProducts = async () => {
      try {
        const response = await fetch(
          "https://ecommerce-printer-be.vercel.app/api/products"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setAllData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchDataProducts();
  }, []);

  const updateFavoriteStatus = async () => {
    try {
      const response = await fetch(
        "https://ecommerce-printer-be.vercel.app/api/products/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ active: 2 }), // Cập nhật trạng thái yêu thích thành 2
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Nếu cập nhật thành công, cập nhật lại trạng thái của productData
      setData((prevData) => ({
        ...prevData,
        active: 2,
      }));
    } catch (error) {
      console.error("Error updating favorite status:", error);
      setError(error);
    }
  };

  // console.log(data);

  const handleThumbnailClick = (newSrc) => {
    setMainImage(newSrc);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const arrTags = data.data.tags.split(", ");

  // Kiểm tra nếu data chưa được gán giá trị, tránh lỗi khi truy cập thuộc tính

  return (
    <>
      {alldata && data ? (
        <>
          <Headers />

          <div className='t-container'>
            <section className='first-section'>
              <div className='container-information-mechine'>
                <div className='breadcrumbs'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <a href='#'>Trang chủ</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='#'>{data.data.category_description}</a>
                      </li>
                      <li className='breadcrumb-item'>
                        <a href='#'>{data.data.category_name}</a>
                      </li>
                      <li
                        className='breadcrumb-item active'
                        aria-current='page'
                      >
                        {data.data.name}
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className='infomation-mechine'>
                  <div className='imgsProduct-container c-pointer'>
                    <div className='imgs-mechine '>
                      <div
                        className='imgs-product '
                        onClick={() => handleThumbnailClick(productimg2)}
                      >
                        <img src={productimg2} alt={data.data.name} />
                      </div>
                      <div
                        className='imgs-product'
                        onClick={() => handleThumbnailClick(productimg3)}
                      >
                        <img src={productimg3} alt={data.data.name} />
                      </div>
                      <div
                        className='imgs-product '
                        onClick={() => handleThumbnailClick(productimg2)}
                      >
                        <img src={productimg2} alt={data.data.name} />
                      </div>
                      <div
                        className='imgs-product '
                        onClick={() => handleThumbnailClick(productimg2)}
                      >
                        <img src={productimg2} alt={data.data.name} />
                      </div>
                    </div>
                    <div className='img-mechine'>
                      <img src={mainImage} alt={data.data.name} />
                    </div>
                  </div>
                  <div className='infomation-mechine-children'>
                    <div className='name-information-mechine'>
                      <div>
                        <h1>{data.data.name}</h1>
                      </div>
                      <div className='content-product'>
                        {data.data.content.map((content, index) => (
                          <p key={index}>{content}</p>
                        ))}
                      </div>
                    </div>
                    <div className='buyAndlike mt-20'>
                      <div className='category-tags '>
                        {/* <div className='fortune'>
                      <span>Fortune</span>
                    </div> */}
                        <div className='SKU'>
                          <span>
                            SKU: <span>{data.data.code}</span>
                          </span>
                        </div>
                        <div className='category'>
                          <span>
                            Category: <span>{data.data.category_name}</span>
                          </span>
                        </div>
                        <div className='tags'>
                          <span>
                            Tags:
                            {arrTags.map((e, i) => (
                              <Tag>{e}</Tag>
                            ))}
                          </span>
                        </div>
                      </div>
                      <div className=' mt-20 d-flex justify-content-between'>
                        <button
                          style={{ backgroundColor: "#DB4444" }}
                          type='button'
                          class='btn-buy btn btn-danger'
                        >
                          Mua hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='second-section mt-20'>
              <div className='detailsProduct'>
                <Tabs
                  defaultActiveKey='1'
                  onChange={onChange}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <TabPane tab='Mô tả' key='1' style={{ width: "100%" }}>
                    <div>
                      <p>
                        Máy in UV phẳng YF-2512K được lắp đặt đầu in Kyocera
                        KJ4A. Đầu có hai kênh có thể sử dụng 1/2 màu. Chế độ in
                        có thể là 4C / 6C / 4C + W / 6C + W / 4C + W + V / 6C +
                        W + V. Máy in UV FORTUNE của chúng tôi là một loại máy
                        in phẳng UV có độ chính xác cao được thiết kế đặc biệt
                        cho các doanh nghiệp xử lý cá nhân để đáp ứng các yêu
                        cầu cá nhân và độ chính xác cao. Được trang bị 2-9 đầu
                        in Kyocera, máy in có thể in ở tốc độ cao cũng như độ
                        chính xác cao với 4-7 màu 720 * 1800 DPI. Ngoài ra, chế
                        độ mực trắng tùy chọn và chế độ véc ni cũng làm sáng đa
                        chức năng, tạo ra nhiều hình ảnh thực hơn và nhiều ứng
                        dụng hơn.
                      </p>
                      <h3>1. Hệ thống đo chiều cao tự động</h3>
                      <p className='mt-20'>
                        Có thể trực tiếp kiểm tra độ dày vật liệu thông qua phần
                        mềm. Dễ dàng hoạt động.
                      </p>
                      <div className='imgProductDetail'>
                        <img src={productimg1} alt='chieucao' />
                        <p>Hệ thống đo chiều cao tự động của máy in YF-2512K</p>
                      </div>
                      <h3>
                        2. Hệ thống định vị quy mô kích thước và hệ thống hút &
                        thổi cắt
                      </h3>
                      <p className='mt-20'>
                        Để định vị chính xác các vật liệu.
                      </p>
                      <h3>3. Vùng in có lỗ nhỏ tích hợp độ phân giải cao</h3>
                      <p className='mt-20'>
                        Để đảm bảo độ phân giải và chịu các vật liệu nặng hơn
                      </p>
                      <div className='imgProductDetail'>
                        <img src={productimg2} alt='chieucao' />
                        <p>Vùng in tích hợp nhiều lỗ nhỏ</p>
                      </div>
                      <h3>4. Đèn LED làm khô UV</h3>
                      <p className='mt-20'>
                        Giúp tiết kiệm năng lượng và tuổi thọ cao.
                      </p>
                      <h3>5. Thiết bị chống va chạm trong đầu in</h3>
                      <p className='mt-20'>
                        Hệ thống sẽ tự động dừng lại khi chạm vào vật liệu cao
                        hơn cỗ xe để bảo vệ đầu in.
                      </p>
                    </div>
                  </TabPane>
                  <TabPane tab='Thông tin bổ sung' key='2'>
                    <div className='speci-model'>
                      <h2>
                        Specification:{" "}
                        <span className='nameProductDetail'>
                          {data.data.name}
                        </span>
                      </h2>
                      <h2 className='mt-20'>
                        Model:{" "}
                        <span className='nameProductDetail'>
                          {data.data.code}
                        </span>
                      </h2>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </section>
            <section className='third-section mt-20'>
              <div className='d-flex align-items-center'>
                <div className='brick-red'></div>
                <h3 style={{ color: "rgb(219, 68, 68)", fontSize: "28px" }}>
                  Related Items
                </h3>
              </div>
              <Row gutter={[16, 16]}>
                {alldata.data.map((data, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={6} xl={6}>
                    <div className='otherImgProducts'>
                      <img src={productimg1} alt={productimg1} />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                        {data.name}
                      </h3>
                    </div>
                  </Col>
                ))}
              </Row>
            </section>
          </div>
          <ScrollToTopButton />
          <Footer />
        </>
      ) : (
        <div className='t-container'>
          <Spin size='large'>
            <div className='content' />
          </Spin>
        </div>
      )}
    </>
  );
}

export default DetailProduct;
