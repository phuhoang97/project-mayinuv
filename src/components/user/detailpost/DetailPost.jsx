import React from "react";
import "./DetailPost.css";
import { Link } from "react-router-dom";
import imgBannerPost from "../../../assets/images/gia-may-in-uv-1.jpg";
import imgSanpham from "../../../assets/images/may-in-uv-3d-cuon-kho-lon-lap-dat-cho-khach-hang-1024x533.jpg";
import imgSanpham2 from "../../../assets/images/may-in-uv-3d-thuc-hien-in-tren-mat-chat-lieu-nhua-1024x533.jpg";
import CompanyCommit from "../companyCommit/CompanyCommit";

function DetailPost() {
  return (
    <div className="detail-post">
      <div className="img-banner-post">
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb-list">
            <ol className="breadcrumb">
              <li className="breadcrumb-item ">
                <Link style={{textDecoration:"none"}} className="breadcrumb-item active">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link style={{textDecoration:"none"}} className="breadcrumb-item active">Máy In Theo Công Dụng</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Máy In UV 3D
              </li>
            </ol>
          </nav>
          {/* <img src={imgBannerPost} alt='photo' /> */}
          <h2>Máy In UV 3D – Máy Sẵn Tại Kho – Giá Máy Rẻ – Chính Hãng</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className='col-2 menu-post'>
            <nav
              id='navbar-example3'
              className='h-100 flex-column align-items-stretch pe-4 border-end'
            >
              <nav className='nav nav-pills flex-column text-center'>
                <h5>Mục Lục</h5>
                <a className='nav-link' href='#item-1'>
                  Máy In UV 3D là gì?
                </a>

                <a className='nav-link' href='#item-2'>
                  Các thông tin về máy in uv 3D
                </a>
                <nav className='nav nav-pills flex-column'>
                  <a className='nav-link ms-3 my-1' href='#item-2-1'>
                    Các loại máy in uv chính hiện nay
                  </a>
                  <a className='nav-link ms-3 my-1' href='#item-2-2'>
                    Các thông số thao khảo cho dòng máy in uv 3d
                  </a>
                </nav>
                <a className='nav-link' href='#item-3'>
                  Một số ứng dụng của máy in uv 3d
                </a>
              </nav>
            </nav>
          </div> */}
          <div className="col-10">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2 "
              tabIndex={0}
            >
              <h3>
                Nhu cầu in ấn hiện đại ngày nay đòi kỹ thuật in ngày càng phải
                hiện đại như in ấn 3D, in 5D và để làm được điều đó cần hệ thống
                máy móc hiện đại, bắt kịp với nhu cầu thị trường hiện nay.
                <br />
                <br /> Vậy máy in uv 3d cần có yêu cầu gì khi chọn mua và giá
                thành trên thị trường hiện nay thế nào?
              </h3>
              <p className="">
                Công Ty Bigcolor với kinh nghiệm 10 năm trong lĩnh vực cung cấp
                các dòng máy in uv các loại như máy uv phẳng, máy uv cuộn các
                khổ lớn nhỏ khác nhau. Đội ngũ nhân viên kỹ thuật trên 5 người
                luôn đáp ứng nhu cầu bảo trì, sửa chữa liên tục. Chúng tôi cung
                có mức giá bán sản phẩm máy in uv cạnh tranh nhất trên thị
                trường đi kèm với chính sách bảo hành trọn gói để đáp ứng đầy đủ
                nhu cầu của khách hàng.
              </p>
              <div id="item-1">
                <h4>Máy In UV 3D là gì?</h4>
                <p>
                  Máy In UV 3D gọi chung là các máy in kỹ thuật số với các kích
                  thước từ nhỏ đến lớn, máy sử dụng công in ấn uv với các đầu
                  phun công nghiệp và mực in uv để in ấn theo mẫu đã thiết kế
                  trước đó và sản phẩm được làm khô ngay lập tức dưới đèn uv.
                </p>
              </div>
              <div id="item-2">
                <h4>Các thông tin về máy in UV 3D</h4>
              </div>
              <div id="item-2-1">
                <h5>Các loại máy in uv chính hiện nay</h5>
                <p>
                  Nếu phân về đặc tính của các dòng máy in thì sẽ gồm: máy in uv
                  phẳng, máy in uv cuộn, máy in uv hỗn hợp với nhiều thương hiệu
                  khác nhau được nhập khẩu về Việt Nam.
                </p>
                <p>
                  Nếu phân loại theo khổ kích thước sẽ gồm máy in uv khổ nhỏ
                  (thường được gọi là máy in uv mini) và máy in khổ lớn (khổ từ
                  2m đến 3m)
                </p>
              </div>
              <div id="item-2-2">
                <h5>Các thông số thao khảo cho dòng máy in UV 3D</h5>
                <ul>
                  <li>Mã đầu phun Ricoh gen 5</li>
                  <li>Bề mặt in 2500mm x 1300mm</li>
                  <li>Số lượng đầu phun 2-8 (theo yêu cầu)</li>
                  <li>Độ nét màu in 2880 dpi</li>
                  <li>Số lượng màu in C, M, Y, K, LC, LM, W, V</li>
                  <li>Độ dày chất liệu 0-100mm (theo yêu cầu)</li>
                  <li>Tốc độ in 6-48m2/h</li>
                  <li>Hệ thống mực in Hệ thống bơm mực áp suất phụ</li>
                  <li>Hệ thống làm khô Hệ thống đèn LED UV</li>
                  <li>Nguồn điện AC 220, 50-60Hz</li>
                  <li>Phần mềm Photoprint DX</li>
                  <li>Định dạng hình ảnh TIF, JPEG, PSD, CDR, v.v</li>
                  <li>Kích thước 4330 x 2290 x 1675mm</li>
                </ul>
                <div className="imgProductDetail">
                  <img src={imgSanpham} alt="photo" />
                </div>
                <figcaption>
                  <i>Máy In UV 3D dạng cuộn khổ lớn bàn giao cho khách hàng</i>
                </figcaption>
              </div>
              <div id="item-3">
                <h4>Một số ứng dụng của máy in UV 3D</h4>
                <p>
                  Đối với các máy in uv hiện nay được ứng dụng rất nhiều trong
                  cuộc sống hiện nay tiêu biểu như một số các ứng dụng sau:
                </p>
                <ul>
                  <li>
                    In uv 3D – 4D – 5D lên vật liệu kính dùng trong trang trí
                    nội thất hiện đại
                  </li>
                  <li>In uv 3D – 4D – 5D lên vật liệu như gỗ, vật liệu nhựa</li>
                  <li>In tranh 3D – 5D treo tường hoặc dán tường</li>
                  <li>In ấn trên các vật liệu Alu, Mica, gạch men, inox,…</li>
                </ul>
                <div className="imgProductDetail">
                  <img src={imgSanpham2} alt="photo" />
                </div>
                <figcaption>
                  <i>Ứng dụng máy in UV 3D</i>
                </figcaption>
              </div>
            </div>

            <CompanyCommit />
          </div>

          <div className="col-2 category-doc">
            <div>
              <div className="list-displayflex">
                <div className="article-category">
                  <h6>Danh Mục Bài Viết</h6>
                  <div className="list-group">
                    <Link className="list-group-item list-group-item-action">
                      Máy In Theo Công Dụng
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Theo Chất Liệu
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Một Số Dòng Khác
                    </Link>
                  </div>
                </div>
                <div className="article-category">
                  <h6>Bài Viết Khác</h6>
                  <div className="list-group">
                    <Link className="list-group-item list-group-item-action">
                      Máy In UV 3D
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Khổ Lớn
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Khổ A3 - A4
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Decal
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Lụa - In Vải
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Băng Rôn
                    </Link>
                    <Link className="list-group-item list-group-item-action">
                      Máy In Trang 3D - 5D - 8D
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPost;
