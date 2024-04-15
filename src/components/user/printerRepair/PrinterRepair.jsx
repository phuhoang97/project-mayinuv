import {
  EyeOutlined,
  CommentOutlined,
  MenuOutlined,
  PhoneOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import "./PrinterRepair.css";
import dichvusuamayin from "../../../assets/images/dich-vu-sua-may-in-uv-uy-tin-chat-luong.jpg";
import dichvusuamayintt from "../../../assets/images/dich-vu-sua-may-in-uv-truc-tiep-tai-xuong-khach-hang-vung-tau.jpg";
import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import Headers from "../headers/Headers";
import Footer from "../footer/Footer";

function PrinterRepair() {
  return (
    <>
      <Headers />
      <div className='t-container'>
        <section className='img-back'>
          <div className='background-image'>
            <div className='top-bottom-back'>
              <div className='breadcrumbs-repair'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a href='#'>Trang chủ</a>
                    </li>
                    <li className='breadcrumb-item'>
                      <a href='#'>Bán máy in UV</a>
                    </li>
                    <li className='breadcrumb-item'>
                      <a href='#'>
                        Dịch vụ sửa máy in UV - Sửa máy in UV tại HCM
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
              <div className='footer-backimg'>
                <div className='text-footer-back mb-25'>
                  <div className='link-repair'>
                    <a href='#'>Bán máy in UV</a>
                  </div>
                  <h1>Dịch Vụ Sửa Máy In UV – Sửa Máy In UV Tại HCM</h1>
                  <div className='icon-view-back'>
                    <span>Staff</span>
                    <span>
                      <EyeOutlined /> 538
                    </span>
                    <span>
                      <CommentOutlined /> 0
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className='mask-backimg'></span>
          </div>
        </section>
        <section className='about-status'>
          <div className='menu-service'>
            <div className='menu-left'>
              {/* <button
                class='button-respon btn btn-primary d-lg-none'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasResponsive'
                aria-controls='offcanvasResponsive'
              >
                <MenuOutlined />
              </button> */}

              <div class='all-menu alert alert-info d-none d-lg-block'>
                <h3>Mục lục bài viết</h3>
                <div class='list-menu-t list-group'>
                  <div className='pb-10'>
                    <a href='#quy-trinh' class='color-change list-group-item '>
                      Quy trình tiếp nhận sửa máy in UV gồm :
                    </a>
                    <div class='list-menu-th list-group'>
                      <a
                        href='#tiep-nhan'
                        class='color-change list-group-item '
                      >
                        B1: Tiếp nhận yêu cầu sửa chữa
                      </a>
                      <a
                        href='#phan-tich'
                        class='color-change list-group-item '
                      >
                        B2: Phân tích lỗi và báo chi phí
                      </a>
                      <a href='#chuan-bi' class='color-change list-group-item '>
                        B3: Chuẩn bị các linh kiện thiết bị, phương tiện sửa
                        chữa
                      </a>
                      <a
                        href='#thanh-toan'
                        class='color-change list-group-item '
                      >
                        B4: Thanh toán chi phí sau khi hoàn thành
                      </a>
                    </div>
                  </div>
                  <a
                    href='#mot-so-loi'
                    class='pb-10 color-change list-group-item '
                  >
                    Một số lỗi thường gặp nhất cần dịch vụ sửa máy in UV
                  </a>
                  <div className='pb-10'>
                    <a
                      href='#mot-so-nguyen'
                      class='color-change list-group-item '
                    >
                      Một số nguyên nhân thường dẫn đến hỏng hóc máy in UV khổ
                      lớn
                    </a>
                    <div class='list-menu-th list-group'>
                      <a href='#su-dung' class='color-change list-group-item '>
                        1. Sử dụng mực in kém chất lượng
                      </a>
                      <a
                        href='#khong-kiem-vs'
                        class='color-change list-group-item '
                      >
                        2. Không kiểm tra và vệ sinh đầu phun đúng cách
                      </a>
                      <a
                        href='#khong-kiem-bemat'
                        class='color-change list-group-item '
                      >
                        3. Không kiểm tra kĩ bề mặt vật liệu trước khi in
                      </a>
                      <a href='#rua-ve' class='color-change list-group-item '>
                        4. Rửa vệ sinh đầu in không đúng cách
                      </a>
                      <a href='#cacyeu' class='color-change list-group-item '>
                        5. Các yếu tố môi trường in ấn
                      </a>
                    </div>
                  </div>
                  <a
                    href='#diem-manh'
                    class='pb-10 color-change list-group-item '
                  >
                    Điểm mạnh dịch vụ sửa chữa máy in UV của chúng tôi
                  </a>
                  <a href='#lien-he' class='color-change list-group-item '>
                    Liên hệ báo giá dịch vụ sửa chữa máy in UV trọn gói
                  </a>
                </div>
              </div>

              {/* <div
                class='offcanvas-lg offcanvas-end'
                tabindex='-1'
                id='offcanvasResponsive'
                aria-labelledby='offcanvasResponsiveLabel'
              >
                <div class='all-menu offcanvas-header'>
                  <div className='respon-t'>
                    <h3 class='offcanvas-title' id='offcanvasResponsiveLabel'>
                      Mục lục bài viết
                    </h3>
                    <button
                      type='button'
                      class='btn-close'
                      data-bs-dismiss='offcanvas'
                      data-bs-target='#offcanvasResponsive'
                      aria-label='Close'
                    ></button>
                  </div>

                  <div class='list-menu-t list-group'>
                    <a href='#' class='pb-10 list-group-item '>
                      Quy trình tiếp nhận sửa máy in UV gồm :
                      <div class='list-menu-th list-group'>
                        <a href='#' class='list-group-item '>
                          B1: Tiếp nhận yêu cầu sửa chữa
                        </a>
                        <a href='#' class='list-group-item '>
                          B2: Phân tích lỗi và báo chi phí
                        </a>
                        <a href='#' class='list-group-item '>
                          B3: Chuẩn bị các linh kiện thiết bị, phương tiện sửa
                          chữa
                        </a>
                        <a href='#' class='list-group-item '>
                          B4: Thanh toán chi phí sau khi hoàn thành
                        </a>
                      </div>
                    </a>
                    <a href='#' class='pb-10 list-group-item '>
                      Một số lỗi thường gặp nhất cần dịch vụ sửa máy in UV
                    </a>
                    <a href='#' class='pb-10 list-group-item '>
                      Một số nguyên nhân thường dẫn đến hỏng hóc máy in UV khổ
                      lớn
                      <div class='list-menu-th list-group'>
                        <a href='#' class='list-group-item '>
                          1. Sử dụng mực in kém chất lượng
                        </a>
                        <a href='#' class='list-group-item '>
                          2. Không kiểm tra và vệ sinh đầu phun đúng cách
                        </a>
                        <a href='#' class='list-group-item '>
                          3. Không kiểm tra kĩ bề mặt vật liệu trước khi in
                        </a>
                        <a href='#' class='list-group-item '>
                          4. Rửa vệ sinh đầu in không đúng cách
                        </a>
                        <a href='#' class='list-group-item '>
                          5. Các yếu tố môi trường in ấn
                        </a>
                      </div>
                    </a>
                    <a href='#' class='pb-10 list-group-item '>
                      Điểm mạnh dịch vụ sửa chữa máy in UV của chúng tôi
                    </a>
                    <a href='#' class='list-group-item '>
                      Liên hệ báo giá dịch vụ sửa chữa máy in UV trọn gói
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            <div className='menu-right'>
              <div className='all-step-t'>
                <h4>
                  Máy in uv trong quá trình sử dụng sẽ có nhiều lí do khiến cho
                  máy máy bị sự cố làm tổn thật lợi nhuận của bạn. Lúc đó cần có
                  một dịch vụ sửa máy in uv đáp ứng được nhu cầu sữa chữa tận
                  nơi, thay thế linh kiện hiện đại sẽ giúp bạn tiết kiệm nhiều
                  chi phí tối đa nhất.
                </h4>
                <h5
                  id='quy-trinh'
                  style={{ color: "rgba(219, 68, 68, 1)", margin: "20px 0px" }}
                >
                  Quy trình tiếp nhận sửa máy in UV gồm
                </h5>
                <h6 id='tiep-nhan'>B1: Tiếp nhận yêu cầu sửa chữa</h6>
                <p>
                  Khách hàng gửi yêu cầu sửa chữa với tình trạng hiện tại của
                  máy qua Hotline sau đó gửi kèm video quay trực tiếp quá trình
                  lỗi của máy khi chạy thực tế.
                </p>
                <h6 id='phan-tich'>B2: Phân tích lỗi và báo chi phí</h6>
                <p>
                  Chúng tôi sẽ dựa vào yêu cầu báo lỗi cùng phân tích đoạn video
                  chi tiết để đưa ra một số phương án lỗi có thể bị với tình
                  trạng hiện tại và báo lại chi phí cho khách hàng trực tiếp
                </p>
                <div className='text-center' style={{ marginBottom: "10px" }}>
                  <button type='button' class='btn btn-danger'>
                    <a href='tel:0935389988' style={{ color: "white" }}>
                      <PhoneOutlined /> Gọi ngay tư vấn: 0935.389.988
                    </a>
                  </button>
                </div>
                <h6 id='chuan-bi'>
                  B3: Chuẩn bị các linh kiện thiết bị, phương tiện sửa chữa
                </h6>
                <p>
                  Tiến hành chuẩn bị linh kiện thiết bị và cử nhân viên kỹ thuật
                  để tiến hành sửa chữa. Đối với khu vực nội thành Hồ Chí Minh
                  chúng tôi sẽ có mặt sau khoản 30 phút đến 60 để sửa chữa tận
                  nơi. Đối với khu vực ngoại thành chúng tôi sẽ báo thời gian
                  chính xác để đến nơi sửa chữa.
                </p>
                <h6 id='thanh-toan'>
                  B4: Thanh toán chi phí sau khi hoàn thành
                </h6>
                <p>
                  Chúng tôi sẽ gửi biên nhận sau khi hoàn thành sửa chữa và
                  chính sách công nợ sẽ hỗ trợ thanh toán sau 7 ngày xuất hoá
                  đơn.
                </p>
                <div className='img-mechine-t text-center'>
                  <img src={dichvusuamayin} alt='' />
                  <figcaption style={{ marginTop: "5px" }}>
                    Dịch vụ sửa máy in uv uy tín – chất lượng
                  </figcaption>
                </div>
                <h5
                  id='mot-so-loi'
                  style={{ color: "rgba(219, 68, 68, 1)", margin: "20px 0px" }}
                >
                  Một số lỗi thường gặp nhất cần dịch vụ sửa máy in uv
                </h5>
                <p>1. Đầu in không in ra mực hoặc in màu sản phẩm bị sai</p>
                <p>2. Màu in vẫn bị hỗn hợp mặc dù đã vệ sinh đầu phun</p>
                <p>3. In sản phẩm ra bị lỗi, không đúng với yêu cầu</p>
                <p>4. Sản phẩm bị ra đường đường kẻ hoặc đường vân dài</p>
                <p>5. Khi đang in máy đột ngột dừng</p>
                <p>6. Lỗi mực không in được</p>
                <p>7. Phần mềm không tương thích khi cài lại</p>
                <p>8. Máy bị lỗi theo từng mã cố định trên phần mềm báo</p>
                <div className='Refer-prices text-center align-center'>
                  <a href='#' style={{ color: "white" }}>
                    <LinkOutlined /> Xem thêm máy in UV cuộn
                  </a>
                </div>
                <div className='img-mechine-t text-center'>
                  <img src={dichvusuamayintt} alt='' />
                  <figcaption style={{ marginTop: "5px" }}>
                    Dịch vụ sửa máy in uv – Sửa trực tiếp tại xưởng khách hàng ở
                    vũng tàu{" "}
                  </figcaption>
                </div>
                <h5
                  id='mot-so-nguyen'
                  style={{ color: "rgba(219, 68, 68, 1)", margin: "20px 0px" }}
                >
                  Một số nguyên nhân thường dẫn hên hỏng hóc máy in uv khổ lớn
                </h5>
                <h6 id='su-dung'>1. Sử dụng mực in kém chất lượng</h6>
                <p>
                  Bởi việc giá thành rẻ dẫn đến một số doanh nghiệp in ấn lại
                  chọn mực kém chất lượng hoặc không rõ nguồn gốc để sử dụng sẽ
                  dẫn đến cực kì gây hại cho đầu phun máy in. Bởi mực giảm kém
                  chất lượng giá rẻ thì 100% là tạp chất trong đó rất cao, rất
                  dễ đóng cặn sẽ làm tắc đầu phun và nặng hơn là hư đầu phun có
                  giá trị rất cao.
                </p>
                <div className='Refer-prices text-center align-center'>
                  <a href='#' style={{ color: "white" }}>
                    <LinkOutlined /> Tham khảo giá mực in
                  </a>
                </div>
                <h6 id='khong-kiem-vs'>
                  2. Không kiểm tra và vệ sinh đầu phun đúng cách
                </h6>
                <p>
                  Mặt đầu phun không được vệ sinh sạch sẽ rất dễ đóng cặn hoặc
                  làm tắc đầu phun bởi các yếu tố gió, ánh sáng, nhiệt độ…nên vệ
                  sinh mặt đầu phun hằng ngày.
                </p>
                <p>
                  Trước khi in mỗi ngày nên thử đầu phun hàng ngày để biết hiện
                  trạng đầu phun có bị tắc không, nếu đầu phun thử tia không đều
                  thì cần xả mực và vệ sinh đầu phun ngay lập tức. Không vệ sinh
                  đầu phun cũng như kiểm tra trạng thái đầu phun hàng ngày có
                  thể gây tắc đầu phun và thiệt hại khó khắc phục.
                </p>
                <h6 id='khong-kiem-bemat'>
                  3. Không kiểm tra kỹ bề mặt vật liệu trước khi in
                </h6>
                <p>
                  Khi vận hành máy in nếu không kiểm tra độ bằng phẳng của vật
                  liệu và kiểm tra độ cao mặt vật liệu sẽ làm đầu phun va chạm
                  với mặt vật liệu dẫn đến hỏng đầu phun ngay lập tức. Lỗi này
                  khá nghiêm trọng và thường làm hỏng đầu phun.
                </p>
                <h6 id='rua-ve'>4. Rửa vệ sinh đầu phun không đúng cách</h6>
                <p>
                  Nếu tự ý rửa đầu phun bằng máy rửa với lực quá mạnh có thể làm
                  thông vách đầu phun và hỏng đầu phun.
                </p>
                <h6 id='cacyeu'>5. Các yếu tố môi trường in ấn</h6>
                <p>
                  Nhiệt độ quá cao vượt quá 30 độ C mực sẽ có xu hướng kết tủa
                  rất dễ gây tắc nghẽn đầu phun. Nhiệt độ quá lạnh làm tăng độ
                  nhớt của mực dễ làm đầu phun in bị ngắt quãng khi in dễ gặp
                  tình trạng không đều màu. Nhiệt độ lý tưởng để máy in hoạt
                  động tốt là từ 20-28 độ.+ Độ ẩm trong phòng quá thấp dưới 40%,
                  đầu phun rất dễ bị khô, nên điều chỉnh độ ẩm phù hợp.
                </p>
                <p>
                  Ánh sáng cường độ cao hay ánh sáng mặt trời có tia UV chiếu
                  thẳng vào đầu in sẽ làm khô mực và làm tắc đầu phun máy in,
                  tránh đặt máy ở nơi có ảnh sáng mặt trời trực tiếp, chọn mới
                  mát mẻ, khô ráo
                </p>
                <p>
                  Quạt gió thổi mạnh trực tiếp vào máy in và đầu phun máy in
                  khiến vòi phun khô quá nhanh vì gió và thổi xiên hướng phun
                  của đầu phun khi đang in, tránh để quạt gió thổi thẳng vào đầu
                  máy in
                </p>
                <p>
                  Môi trường nhiều bụi khiến bụi xâm nhập vào mực, bám vào mặt
                  đầu phun và làm tắc đầu phun, nên vệ sinh sạch sẽ môi trường
                  xung quanh để máy được vận hành trơn tru
                </p>
                <h5
                  id='diem-manh'
                  style={{ color: "rgba(219, 68, 68, 1)", margin: "20px 0px" }}
                >
                  Điểm mạnh dịch vụ sửa máy in uv của chúng tôi
                </h5>
                <p>
                  1. Với kinh nghiệm 10 năm trong lĩnh vực máy in uv, chúng tôi
                  tự tin 100% về việc sửa chữa các lỗi trên nhiều loại máy in uv
                  khổ lớn khác nhau trong thời gian ngắn
                </p>
                <p>
                  2. Đội ngũ kỹ thuật 5 người có kinh nghiệm trong việc sửa chửa
                  máy in uv từ việc phần mềm, phân cứng, các lỗi main hay cáp
                  đều được xử lí nhanh.
                </p>
                <p>
                  3. Hàng linh kiện có sẵn tại kho, được nhập khẩu chính hãng
                  cho nên việc thay thế để máy hoạt động nhanh giúp khách hàng
                  giảm thiểu thời gian đứng máy ảnh hưởng đến hiệu suất đơn
                  hàng.
                </p>
                <p>
                  4. Chi phí dịch vụ rẻ, phụ hợp sẵn sàng đi sửa chữa các khu
                  vực ngoại thành hoặc khu vực tỉnh.
                </p>
                <p>
                  5. Hỗ trợ tư vấn kỹ thuật trước – trong và sau khi sửa chữa
                  máy in để đảm bảo khách hàng vẫn sử dụng máy được hiệu quả
                  nhất.
                </p>
                <h5
                  id='lien-he'
                  style={{ color: "rgba(219, 68, 68, 1)", margin: "20px 0px" }}
                >
                  Liên hệ báo giá dịch vụ sửa máy in trọn gói
                </h5>
                <div className='text-center' style={{ marginBottom: "10px" }}>
                  <button type='button' class='btn btn-danger'>
                    <a href='tel:0935389988' style={{ color: "white" }}>
                      <PhoneOutlined /> Gọi ngay tư vấn: 0935.389.988
                    </a>
                  </button>
                </div>
                <div className='more-shop'>
                  <h3 style={{ color: "rgb(219, 68, 68)", margin: "10px 0" }}>
                    Related Articles
                  </h3>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <a href='#' style={{ color: "black" }}>
                        <div className='more-shop-img'>
                          <img src={dichvusuamayin} alt='productimg1' />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <h6 style={{ fontSize: "16px", fontWeight: 400 }}>
                            Máy In UV Tại Quận 10 – Giao Hàng Lắp Đặt Tận Nơi –
                            Giá Máy In Rẻ
                          </h6>
                        </div>
                      </a>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <a href='#' style={{ color: "black" }}>
                        <div className='more-shop-img'>
                          <img src={dichvusuamayin} alt='productimg1' />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <h6 style={{ fontSize: "16px", fontWeight: 400 }}>
                            Máy In UV Tại Quận 10 – Giao Hàng Lắp Đặt Tận Nơi –
                            Giá Máy In Rẻ
                          </h6>
                        </div>
                      </a>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <a href='#' style={{ color: "black" }}>
                        <div className='more-shop-img'>
                          <img src={dichvusuamayin} alt='productimg1' />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <h6 style={{ fontSize: "16px", fontWeight: 400 }}>
                            Máy In UV Tại Quận 10 – Giao Hàng Lắp Đặt Tận Nơi –
                            Giá Máy In Rẻ
                          </h6>
                        </div>
                      </a>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                      <a href='#' style={{ color: "black" }}>
                        <div className='more-shop-img'>
                          <img src={dichvusuamayin} alt='productimg1' />
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <h6 style={{ fontSize: "16px", fontWeight: 400 }}>
                            Máy In UV Tại Quận 10 – Giao Hàng Lắp Đặt Tận Nơi –
                            Giá Máy In Rẻ
                          </h6>
                        </div>
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PrinterRepair;
