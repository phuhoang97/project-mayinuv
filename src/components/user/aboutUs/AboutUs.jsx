import "./AboutUs.css";
import AboutUsImg from "../../../assets/images/gioi-thieu-cong-ty-bigcolor.jpg";
import img1 from "../../../assets/images/may-in-uv-cua-cong-ty-1.jpg";
import img2 from "../../../assets/images/may-in-uv-cua-cong-ty-2.jpg";
import img3 from "../../../assets/images/may-in-uv-cua-cong-ty-3.jpg";
import img4 from "../../../assets/images/may-in-uv-cua-cong-ty-4.jpg";
import imgBigColor from "../../../assets/images/Big-color.jpg";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../../assets/images/img-footer.jpg";
import { Row, Col } from "antd";
import Footer from "../footer/Footer";
import Headers from "../headers/Headers";
import React, { useState, useEffect, useRef } from "react";
import ScrollToTopButton from "../scrolltotopbutton/ScrollToTopButton";

function AboutUs() {
  const [values, setValues] = useState([
    { title: "NĂM KINH NGHIỆM", value: 0 },
    { title: "MÁY MÓC ĐÃ BÁN", value: 0 },
    { title: "NHÂN VIÊN CÔNG TY", value: 0 },
    { title: "KHÁCH HÀNG", value: 0 },
  ]);

  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const top = carouselRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const isVisible = top < windowHeight && top > -windowHeight;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView) {
        setValues((prevValues) =>
          prevValues.map((item) => {
            let newValue = item.value;
            if (item.title === "NĂM KINH NGHIỆM") {
              newValue = newValue < 10 ? newValue + 1 : 10;
            } else if (item.title === "MÁY MÓC ĐÃ BÁN") {
              newValue = newValue < 600 ? newValue + 1 : 600;
            } else if (item.title === "NHÂN VIÊN CÔNG TY") {
              newValue = newValue < 30 ? newValue + 1 : 30;
            } else if (item.title === "KHÁCH HÀNG") {
              newValue = newValue < 500 ? newValue + 1 : 500;
            }
            return { ...item, value: newValue };
          })
        );
      }
    }, 10);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <>
      <Headers />
      <div className='t-container'>
        <section className='AbouUs-first'>
          <div className='AboutUsFirst-container'>
            <div className='history-company'>
              <h4 className='Color-Red-t'>
                CÔNG TY TNHH MỘT THÀNH VIÊN BIG COLOR VIỆT NAM
              </h4>
              <p>
                Công ty TNHH một thành viên Big Color Việt Nam thành lập vào năm
                2011 tại Số 24 ngõ 286 đường Giáp bát, phường Giáp bát quận
                Hoàng Mai, Hà Nội, Việt Nam.
              </p>
              <p>
                Hiện nay công ty đã có sự phân phối của chi nhánh chính tại 78/7
                Nguyễn Thị Tú.P Bình Hưng Hòa B,Quận Bình Tân
              </p>
              <p>
                Với Hơn 10 năm kinh nghiệm trong lĩnh vực cung cấp các loại máy
                in thế hệ đời đầu cho đến các dòng MÁY IN UV khổ lớn nhỏ. Chúng
                tôi hiện là đơn vị đại lý chính thức của thương hiệu máy in
                FORTUNE tại việt nam với các dòng sản phẩm hiện đại bật nhất
                nhưng lại có giá thành cực kì hợp lí cùng với chính sách BẢO
                DƯỠNG MIỄN PHÍ – BẢO HÀNH TẬN NƠI sẽ là tiêu chí mang đến sự an
                tâm tuyệt đối cho mỗi khách hàng của chúng tôi.
              </p>
            </div>
            <div className='img-people'>
              <img src={AboutUsImg} alt='AboutUS' />
            </div>
          </div>
          <div className='AboutUsFirst-children'>
            <div className='img-BigColor'>
              <img src={imgBigColor} alt='Big-Color' />
            </div>
            <div className='Accordion-right'>
              <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>Mục tiêu</Accordion.Header>
                  <Accordion.Body>
                    Mang đến sự sáng tạo nghệ thuật đỉnh cao cùng thời đại 4.0
                    với các dòng sản phẩm có giá bán tốt nhất – giá thành hợp lí
                    nhất – cùng chính sách bảo hành tuyệt đối để khách hàng luôn
                    tin tưởng sử dụng các sản phẩm máy móc để tạo ra hiệu suất
                    công việc cao nhất.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>Sứ Mệnh</Accordion.Header>
                  <Accordion.Body>
                    Mang đến thị trường những sản phẩm thời thượng, chất lượng,
                    bền bỉ, mang đậm dấu ấn thương hiệu BIG COLOR
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>Cam kết của chúng tôi</Accordion.Header>
                  <Accordion.Body>
                    1. Uy tín và chất lượng là yếu tố sống còn của doanh nghiệp
                    <br />
                    2. Giá cả luôn tốt nhất thị trường <br />
                    3. Sản phẩm nhập khẩu từ các đối tác chất lượng hàng đầu thế
                    giới, có chứng nhập xuất xứ và chứng nhận chất lượng đầy đủ.{" "}
                    <br />
                    4. Hàng luôn sẵn trong kho, công nghệ mới nhất, Thời gian
                    giao hàng nhanh nhất và đúng hẹn <br />
                    5. Bảo hành, bảo trì công trình theo đúng cam kết
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </section>
        <section className='AboutUs-second'>
          <div className='imgs-BigColor'>
            <div className='text-center'>
              <h4 className='Color-Red-t'>MỘT SỐ HÌNH ẢNH VỀ MÁY IN UV</h4>
            </div>
            <div className='Img-BigColor'>
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <img src={img1} alt='img1' />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <img src={img2} alt='img1' />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <img src={img3} alt='img1' />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                  <img src={img4} alt='img1' />
                </Col>
              </Row>
            </div>
          </div>
          <div
            ref={carouselRef}
            className='count-mechine'
            style={{ marginTop: "50px" }}
          >
            <Carousel>
              {values.map((item, index) => (
                <Carousel.Item key={index}>
                  <img src={ExampleCarouselImage} alt='First slide' />
                  <Carousel.Caption>
                    <h1>{item.value} +</h1>
                    <p>{item.title}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default AboutUs;
