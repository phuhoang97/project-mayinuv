import React from "react";
import "./OtherDocuments.css";
import agencyPrint from "../../../assets/images/dai-ly-may-in-uv-vietnam-600x300.jpg";
import downloadPhotoprint12 from "../../../assets/images/Tai-phan-mem-photoprint-12.jpg";
import imgProduct from "../../../assets/images/geri-sakti-CYrYxz-uvE4-unsplash.jpg";
import mayinPhang4k from "../../../assets/images/may-in-uv-phang-eyecolor-1325g.jpg";
import conBuom3D from "../../../assets/images/conbuom3d.jpg";
import { Link } from "react-router-dom";

function OtherDocuments() {
  return (
    <div className='other-documents'>
      <div className='title-brick'>
        <div className='brick-red'></div>
        <div className='content-brick'>
          <strong>Other Documents</strong>
        </div>
      </div>

      {/* document */}
      <div className='documents'>
        <div className='doc doc-1'>
          <div className='doc-compo doc-left'>
            <img className='doc-img' src={agencyPrint} alt='Image' />
            <div className='doc-title'>
              <h4>Đại lý máy in UV tại Việt Nam</h4>
              <p>
                Chúng tôi là công ty Độc Quyền cung cấp dòng máy in uv Fortune
                với giá thành tốt nhất thị trường việt nam, chính sách hỗ trợ và
                bảo hành sản phẩm 24/7.
              </p>
              <Link>
                <button>Xem thêm</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='doc doc-2'>
          <div className='doc-compo doc-right'>
            <img className='doc-img' src={imgProduct} alt='Image' />
            <div className='doc-title'>
              <h4>Ưu Điểm In UV & Yếu Tố Ảnh Hưởng Chất Lượng Máy In UV</h4>
              <Link>
                <button>Xem thêm</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='doc doc-3'>
          <div className='doc-compo doc-right'>
            <img className='doc-img' src={downloadPhotoprint12} alt='Image' />
            <div className='doc-title'>
              <h4>Tải Phần Mềm Photoprint 12</h4>
              <Link>
                <button>Xem thêm</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='doc doc-4'>
          <div className='doc-compo doc-right'>
            <img className='doc-img' src={mayinPhang4k} alt='Image' />
            <div className='doc-title'>
              <h4>Cách Đánh Giá Hiệu Suất Máy In UV</h4>
              <Link>
                <button>Xem thêm</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='doc doc-5'>
          <div className='doc-compo doc-right'>
            <img className='doc-img' src={conBuom3D} alt='Image' />
            <div className='doc-title'>
              <h4>File Đồ Họa Con Bướm 3D</h4>
              <Link>
                <button>Xem thêm</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherDocuments;
