import React from "react";
import mayInPhang from "../../../assets/images/UV-phang-3020-Crystal-w.png";
import "./Service.css";
import logoCongNghe from "../../../assets/logo/logo-congnghe.jpg";
import logoTietKiem from "../../../assets/logo/logo-tietkiem.jpg";
import logoDaily from "../../../assets/logo/logo-daily.jpg";
import logoBaoHanh from "../../../assets/logo/logo-suachua.jpg";

function Service() {
  return (
    <div className='service-component'>
      <div className='title-brick'>
        <div className='brick-red'></div>
        <div className='content-brick'>
          <strong>Service</strong>
        </div>
      </div>

      <h3 className='company-goals'>
        <strong>Tại sao nên lựa chọn chúng tôi</strong>
      </h3>

      <div className='service-content'>
        <div className='service-left'>
          <img src={mayInPhang} alt='photo' />
        </div>

        <div className='service-right'>
          <div className='target-service'>
            <div className='content-service-left'>
              <div className='icon-service'>
                <img src={logoCongNghe} alt='photo' width={90} height={90} />
              </div>
            </div>
            <div className='content-service-right'>
              <h5>
                <strong>CÔNG NGHỆ HIỆN ĐẠI</strong>
              </h5>
              <p>
                Máy móc được cung cấp là dòng mới nhất với các công nghệ hiện
                đại tân tiến mới ra đáp ứng nhu cầu cao hơn.
              </p>
            </div>
          </div>

          <div className='target-service'>
            <div className='content-service-left'>
              <div className='icon-service'>
                <img src={logoTietKiem} alt='photo' width={90} height={90} />
              </div>
            </div>
            <div className='content-service-right'>
              <h5>
                <strong>TIẾT KIỆM TỐI ĐA</strong>
              </h5>
              <p>
                Được tối ưu hơn giúp các dòng máy hoạt động với công suất cao
                nhưng khải năng tiêu hao năng lượng, tài nguyên ít hơn.
              </p>
            </div>
          </div>

          <div className='target-service'>
            <div className='content-service-left'>
              <div className='icon-service'>
                <img src={logoDaily} alt='photo' width={90} height={90} />
              </div>
            </div>
            <div className='content-service-right'>
              <h5>
                <strong>ĐẠI LÝ CHÍNH HÃNG</strong>
              </h5>
              <p>
                Chúng tôi là đại lý phân phối độc quyền tại việt nam cho nên ưu
                thế về chất lượng và giá bán là yếu tố mạnh sẵn sàng đáp ứng mọi
                nhu cầu.
              </p>
            </div>
          </div>

          <div className='target-service'>
            <div className='content-service-left'>
              <div className='icon-service'>
                <img src={logoBaoHanh} alt='photo' width={90} height={90} />
              </div>
            </div>
            <div className='content-service-right'>
              <h5>
                <strong>BẢO HÀNH & MUA BÁN</strong>
              </h5>
              <p>
                Chính sách bảo hành trọn gói từ lúc bán máy, hỗ trợ mọi sự cố kỹ
                thuật cực nhanh 24/7. Đồng thời cung cấp thêm các sản phẩm đi
                kèm trong in ấn với chi phí rẻ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
