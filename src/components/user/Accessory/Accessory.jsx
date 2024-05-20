import Footer from "../footer/Footer";
import Headers from "../headers/Headers";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import linhkien from "../../../assets/images/linh-kien-may-in-uv.jpg";
import linhkien2 from "../../../assets/images/phukien1.jpg";
import linhkien3 from "../../../assets/images/phukien2.jpg";
import linhkien4 from "../../../assets/images/phukien3.jpg";
import linhkien5 from "../../../assets/images/linhkien1.jpg";
import linhkien6 from "../../../assets/images/linhkien2.jpg";
import linhkien7 from "../../../assets/images/linhkien3.jpg";
import linhkien8 from "../../../assets/images/linhkien4.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import React, { useState } from "react";
import { Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./Accessory.css";

function Accessory() {
  const [selectedItem, setSelectedItem] = useState("Mới nhất");

  const handleSelect = (eventKey, event) => {
    setSelectedItem(eventKey);
    event.currentTarget.classList.add("selected");
  };

  return (
    <>
      <Headers />
      <div className="t-container" style={{ marginBottom: "0" }}>
        <section className="first-sectionAccessory">
          <Image src={linhkien} fluid />
        </section>
        <section className="second-sectionAccessory">
          <div className="first-container-section">
            <div className="breadcrumbs">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Linh Kiện Máy In UV
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="second-container-section">
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} md={{ span: 16 }}>
                <div className="text-leftcontainer">
                  <div className="header-text-t">
                    <h2>Linh Kiện Máy In UV</h2>
                    <p style={{ textAlign: "justify", fontWeight: "500" }}>
                      Mỗi một dòng máy in uv được cấu thành từ nhiều bộ phận và
                      các loại linh kiện khác nhau. Một trong số chúng sẽ có các
                      linh kiện khi sử dụng đến một thời gian nhất định thì
                      chúng ta phải thay mới hoặc một do hư hại hỏng hóc trong
                      quá trình sử dụng. Việc lựa chọn linh kiện máy in uv đạt
                      chất lượng và giá thành rẻ, chính sách hảo hành tốt là
                      điều nhiều khách hàng quan tâm.
                    </p>

                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ textAlign: "justify" }}
                    >
                      Với việc cung cấp các dòng máy in uv mới và hiện đại,
                      Chúng tôi còn cung cấp các loại linh kiện máy in uv như :
                      Các loại đầu phun Ricoh, Đầu Phụn Konica, Đầu phun Seiko,
                      Các loại dây cáp đầu phun, Các loại Main cho máy in uv,…
                    </button>
                    <div className="accessory-product">
                      <div class="running-color-text">
                        <p class="running-color-char">Có tất cả 11 kết quả</p>
                      </div>
                      <Dropdown onSelect={handleSelect}>
                        <Dropdown.Toggle
                          variant="success"
                          style={{ backgroundColor: "#DC3545", border: "none" }}
                        >
                          {selectedItem}
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                          style={{
                            backgroundColor: "#DC3545",
                          }}
                        >
                          <Dropdown.Item
                            eventKey="Mới nhất"
                            className={
                              selectedItem === "Mới nhất" ? "selected" : ""
                            }
                          >
                            Mới nhất
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="Thứ tự mặc định"
                            className={
                              selectedItem === "Thứ tự mặc định"
                                ? "selected"
                                : ""
                            }
                          >
                            Thứ tự mặc định
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="Thứ tự theo mức phổ biến"
                            className={
                              selectedItem === "Thứ tự theo mức phổ biến"
                                ? "selected"
                                : ""
                            }
                          >
                            Thứ tự theo mức phổ biến
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="Thứ tự theo điểm đánh giá"
                            className={
                              selectedItem === "Thứ tự theo điểm đánh giá"
                                ? "selected"
                                : ""
                            }
                          >
                            Thứ tự theo điểm đánh giá
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="Thứ tự theo giá thấp đến cao"
                            className={
                              selectedItem === "Thứ tự theo giá thấp đến cao"
                                ? "selected"
                                : ""
                            }
                          >
                            Thứ tự theo giá thấp đến cao
                          </Dropdown.Item>
                          <Dropdown.Item
                            eventKey="Thứ tự theo giá cao xuống thấp"
                            className={
                              selectedItem === "Thứ tự theo giá cao xuống thấp"
                                ? "selected"
                                : ""
                            }
                          >
                            Thứ tự theo giá cao xuống thấp
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="accessorys-t">
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                          <div className="otherImgProducts c-pointer">
                            <img src={linhkien5} alt="abc" />
                            <div className="overlay">
                              <ShoppingCartOutlined className="icon icon-shopping" />
                            </div>
                            <div
                              className="group-icon"
                              style={{ marginTop: "-285px" }}
                            ></div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                              Đầu Phun Epson 4720
                            </h3>
                          </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                          <div className="otherImgProducts c-pointer">
                            <img src={linhkien6} alt="abc" />
                            <div className="overlay">
                              <ShoppingCartOutlined className="icon icon-shopping" />
                            </div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                              Đầu Phun Epson DX5
                            </h3>
                          </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                          <div className="otherImgProducts c-pointer">
                            <img src={linhkien7} alt="abc" />
                            <div className="overlay">
                              <ShoppingCartOutlined className="icon icon-shopping" />
                            </div>
                            <div
                              className="group-icon"
                              style={{ marginTop: "-285px" }}
                            ></div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                              Đầu phun epson i3200 -A1
                            </h3>
                          </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                          <div className="otherImgProducts c-pointer">
                            <img src={linhkien8} alt="abc" />
                            <div className="overlay">
                              <ShoppingCartOutlined className="icon icon-shopping" />
                            </div>
                            <div
                              className="group-icon"
                              style={{ marginTop: "-285px" }}
                            ></div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                              Đầu Phun Konica 1024i
                            </h3>
                          </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                          <div className="otherImgProducts c-pointer">
                            <img src={linhkien8} alt="abc" />
                            <div className="overlay">
                              <ShoppingCartOutlined className="icon icon-shopping" />
                            </div>
                            <div
                              className="group-icon"
                              style={{ marginTop: "-285px" }}
                            ></div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                              Đầu Phun Konica 1024i
                            </h3>
                          </div>
                        </Col>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                          <div className="otherImgProducts c-pointer">
                            <img src={linhkien8} alt="abc" />
                            <div className="overlay">
                              <ShoppingCartOutlined className="icon icon-shopping" />
                            </div>
                            <div
                              className="group-icon"
                              style={{ marginTop: "-285px" }}
                            ></div>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                              Đầu Phun Konica 1024i
                            </h3>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 8 }}>
                <div className="right-col-t">
                  <h3 style={{ color: "red" }}>
                    Cam kết đối với linh kiện máy in uv từ BigColor
                  </h3>
                  <div className="list-important-t">
                    <ul style={{ paddingLeft: "0", fontSize: "15px" }}>
                      <li>
                        &#10148; Các thiết bị được nhập khẩu là chính hãng với
                        nguồn gốc rõ ràng
                      </li>
                      <li>
                        &#10148; Có chứng từ nhập khẩu cũng như các chứng nhận
                        xuất xứ, kiểm tra chất lượng, test report từ hãng khi
                        chúng tôi nhập linh kiện.
                      </li>
                      <li>
                        &#10148; Các linh kiện đa dạng đám lượng rộng các loại
                        máy
                      </li>
                      <li>
                        &#10148; Giá linh kiện rẻ, cạnh tranh tốt trên thị
                        trường với các nhà cung cấp khác
                      </li>
                      <li>
                        &#10148; Có đội ngũ kỹ thuật 5 ngày sẵn sáng xuống tận
                        nơi để tiến hành bảo hành, lắp đặt và hướng dẫn sử dụng.
                      </li>
                    </ul>
                  </div>
                </div>
                <div style={{ minHeight: "200px" }}>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        src={linhkien2}
                        alt="Ảnh 3"
                        style={{ width: "100%" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        src={linhkien3}
                        alt="Ảnh 3"
                        style={{ width: "100%" }}
                      />
                    </Carousel.Item>{" "}
                    <Carousel.Item>
                      <img
                        src={linhkien4}
                        alt="Ảnh 3"
                        style={{ width: "100%" }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Accessory;
