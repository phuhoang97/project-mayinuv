import React from "react";

import { Breadcrumb, Tabs, Col, Row, Tooltip } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import MayIn from "../../assets/may-in-uv-fortune-YF-2512K.jpg";
import chieuCao from "../../assets/he-thong-do-chieu-cao-yf-2512K.jpg";
import vungIn from "../../assets/vung-in-tich-hop-cac-lo-nho.jpg";
import MayIn1810 from "../../assets/may-in-uv-YF-1810G-300x300.jpg";
import "./DetailProduct.css";

const onChange = (key) => {
  console.log(key);
};

const text = (
  <a href='#' style={{ color: "#FF2439" }}>
    Đọc thêm +
  </a>
);

const { TabPane } = Tabs;

function DetailProduct() {
  return (
    <>
      <div className='container'>
        <Breadcrumb
          separator='>'
          items={[
            {
              title: <HomeOutlined />,
            },
            {
              title: "Máy In UV",
              href: "",
            },
            {
              title: "Máy In UV Phẳng",
              href: "",
            },
            {
              title: "Máy In UV Phẳng YF-2512K",
            },
          ]}
        />
        <div className='aboutproduct'>
          <div className='flex'>
            <div className='containerImgsProduct'>
              <div className='imgsproduct'>
                <img src={MayIn} alt={MayIn} />
              </div>
              <div className='imgsproduct'>
                <img src={MayIn} alt={MayIn} />
              </div>
              <div className='imgsproduct'>
                <img src={MayIn} alt={MayIn} />
              </div>
              <div className='imgsproduct'>
                <img src={MayIn} alt={MayIn} />
              </div>
            </div>
            <div className='imgProduct'>
              <img src={MayIn} alt={MayIn} />
            </div>
          </div>
          <div className='infomationProduct'>
            <div className='fisrtChildrenProduct'>
              <strong>
                <h1>Máy In UV Phẳng YF-2512K</h1>
              </strong>
              <p>
                Vùng in 2500 mm x 1200mm <br />
                Độ dày phương tiện tối đa.100 mm
                <br />
                Đầu in cấp độ KJ4Aindustrial
                <br />
                Chiều rộng in lớn 108mm
                <br />
                Hỗ trợ in 7 màu (C, M, Y, K, LC, LM, W)
                <br />
                Đo chiều cao phương tiện tích hợp
                <br />
                Độ phân giải in lên tới 600dpi
                <br />
                Rung LED làm mát bằng nước miễn phí.
                <br />4 phần chân không được khoanh vùng
              </p>
            </div>
            <div className='secondChildrenProduct'>
              <span style={{ marginBottom: "20px" }}>
                <a className='fortune' href='#'>
                  Fortune
                </a>
              </span>
              <span>SKU: YF - 2512K</span>
              <span>
                Category: <a href='#'> Máy In UV Phẳng</a>
              </span>
              <span className='tags'>
                Tags:{" "}
                <a href='#'>
                  Máy in uv fortune YF-2512G, máy in uv giá rẻ, máy in uv nhập
                  khẩu, máy in uv phẳng
                </a>
              </span>
            </div>
          </div>
        </div>
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
                  Máy in UV phẳng YF-2512K được lắp đặt đầu in Kyocera KJ4A. Đầu
                  có hai kênh có thể sử dụng 1/2 màu. Chế độ in có thể là 4C /
                  6C / 4C + W / 6C + W / 4C + W + V / 6C + W + V. Máy in UV
                  FORTUNE của chúng tôi là một loại máy in phẳng UV có độ chính
                  xác cao được thiết kế đặc biệt cho các doanh nghiệp xử lý cá
                  nhân để đáp ứng các yêu cầu cá nhân và độ chính xác cao. Được
                  trang bị 2-9 đầu in Kyocera, máy in có thể in ở tốc độ cao
                  cũng như độ chính xác cao với 4-7 màu 720 * 1800 DPI. Ngoài
                  ra, chế độ mực trắng tùy chọn và chế độ véc ni cũng làm sáng
                  đa chức năng, tạo ra nhiều hình ảnh thực hơn và nhiều ứng dụng
                  hơn.
                </p>
                <h3>
                  <strong>1. Hệ thống đo chiều cao tự động</strong>
                </h3>
                <p style={{ margin: "0 0 31px" }}>
                  Có thể trực tiếp kiểm tra độ dày vật liệu thông qua phần mềm.
                  Dễ dàng hoạt động.
                </p>
                <div className='imgProductDetail'>
                  <img src={chieuCao} alt='chieucao' />
                  <p>Hệ thống đo chiều cao tự động của máy in YF-2512K</p>
                </div>
                <h3>
                  <strong>
                    2. Hệ thống định vị quy mô kích thước và hệ thống hút & thổi
                    cắt
                  </strong>
                </h3>
                <p style={{ margin: "0 0 31px" }}>
                  Để định vị chính xác các vật liệu.
                </p>
                <h3>
                  <strong>
                    3. Vùng in có lỗ nhỏ tích hợp độ phân giải cao
                  </strong>
                </h3>
                <p style={{ margin: "0 0 31px" }}>
                  Để đảm bảo độ phân giải và chịu các vật liệu nặng hơn
                </p>
                <div className='imgProductDetail'>
                  <img src={vungIn} alt='chieucao' />
                  <p>Vùng in tích hợp nhiều lỗ nhỏ</p>
                </div>
                <h3>
                  <strong>4. Đèn LED làm khô UV</strong>
                </h3>
                <p style={{ margin: "0 0 31px" }}>
                  Giúp tiết kiệm năng lượng và tuổi thọ cao.
                </p>
                <h3>
                  <strong>5. Thiết bị chống va chạm trong đầu in</strong>
                </h3>
                <p style={{ margin: "0 0 31px" }}>
                  Hệ thống sẽ tự động dừng lại khi chạm vào vật liệu cao hơn cỗ
                  xe để bảo vệ đầu in.
                </p>
              </div>
            </TabPane>
            <TabPane tab='Thông tin bổ sung' key='2'>
              <div>
                <h2>
                  Specification:{" "}
                  <span className='nameProductDetail'>
                    Máy In UV Phẳng YF-2512K
                  </span>
                </h2>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className='ortherProducts'>
          <h3>Related Products</h3>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <div className='otherImgProducts'>
                <img src={MayIn1810} alt={MayIn} />
              </div>
              <Tooltip placement='bottom' title={text}>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                    Máy In UV Phẳng Fortune YF-2032G
                  </h3>
                </div>
              </Tooltip>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <div className='otherImgProducts'>
                <img src={MayIn1810} alt={MayIn} />
              </div>
              <Tooltip placement='bottom' title={text}>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                    Máy In UV Phẳng Fortune YF-2032G
                  </h3>
                </div>
              </Tooltip>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <div className='otherImgProducts'>
                <img src={MayIn1810} alt={MayIn} />
              </div>
              <Tooltip placement='bottom' title={text}>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                    Máy In UV Phẳng Fortune YF-2032G
                  </h3>
                </div>
              </Tooltip>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <div className='otherImgProducts'>
                <img src={MayIn1810} alt={MayIn} />
              </div>
              <Tooltip placement='bottom' title={text}>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                    Máy In UV Phẳng Fortune YF-2032G
                  </h3>
                </div>
              </Tooltip>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}>
              <div className='otherImgProducts'>
                <img src={MayIn1810} alt={MayIn} />
              </div>
              <Tooltip placement='bottom' title={text}>
                <div style={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 400 }}>
                    Máy In UV Phẳng Fortune YF-2032G
                  </h3>
                </div>
              </Tooltip>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default DetailProduct;
