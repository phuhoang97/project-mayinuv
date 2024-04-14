import React from "react";
import "./OtherDocuments.css";

function OtherDocuments() {
  return (
    <div className='other-documents'>
      <div className='title-brick'>
        <div className='brick-red'></div>
        <div className='content-brick'>
          <strong>Other Documents</strong>
        </div>
      </div>

      <div className='documents'>
        <div className='document-left'>
          <div className='content-1'>
            <img src='' alt='' />
          </div>
          <div>
            <h4>Đại lý máy in uv tại việt nam</h4>
            <p>
              Chúng tôi là công ty Độc Quyền cung cấp dòng máy in uv Fortune với
              giá thành tốt nhất thị trường việt nam, chính sách hỗ trợ và bảo
              hành sản phẩm 24/7.
            </p>
            <a href=''>Đọc thêm</a>
          </div>
        </div>
        <div className='document-right'>
          <div className='document-right-top'>
            <div className='content-2'>
              <div>
                <img src='' alt='' />
              </div>
              <div>
                <h4>Đại lý máy in uv tại việt nam</h4>
                <p>
                  Chúng tôi là công ty Độc Quyền cung cấp dòng máy in uv Fortune
                  với giá thành tốt nhất thị trường việt nam, chính sách hỗ trợ
                  và bảo hành sản phẩm 24/7.
                </p>
                <a href=''>Đọc thêm</a>
              </div>
            </div>
          </div>

          <div className='document-right-bottom'>
            <div className='document-rbl'>
              <div className='content-3'></div>
              <div>
                <h4>Ưu điểm in UV</h4>
                <p>Chúng tôi là công ty Độc Quyền cung cấp dòng máy in</p>
                <a href=''>Đọc thêm</a>
              </div>
            </div>

            <div className='document-rbr'>
              <div className='content-4'>
                <img src='' alt='' />
              </div>
              <div>
                <h4>Tải phần mềm photoprint 12</h4>
                <p>
                  Chúng tôi là công ty Độc Quyền cung cấp dòng máy in uv Fortune
                  với giá thành tốt nhất thị trường việt nam
                </p>
                <a href=''>Đọc thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherDocuments;
