import "./CompanyCommit.css";
import React from "react";
import iconPhoneNumber from "../../../assets/logo/telephone-call_3059590.png";
import iconEmail from "../../../assets/logo/google_mail_gmail_logo_icon_159346.png";
import iconFB from "../../../assets/logo/facebook.svg";
import iconZalo from "../../../assets/logo/Logo Zalo Arc.png";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";

function CompanyCommit() {
  const preventDefault = (e) => {
    e.preventDefault();
    console.log("Clicked! But prevent default.");
  };
  return (
    <div>
      <h4 className='text-commit'>
        <strong>Cam kết về sản phẩm máy in uv từ chúng tôi</strong>
      </h4>
      <ul>
        <li className='li-commit'>
          Chúng tôi là đại đại lí độc quyền của nhiều thương hiệu máy in uv của
          Trung Quốc tại Việt Nam cho nên chúng tôi đảm bảo được nguồn hàng
          chính hãng và chất lượng nhất.
        </li>
        <li className='li-commit'>
          Giá bán máy luôn là cạnh tranh với nhiều thương hiệu trên thị trường
          đảm bảo mang đến được mức giá tốt nhất rẻ hơn đến 30% cho người dùng.
        </li>
        <li className='li-commit'>
          Đội ngũ kỹ sư 5 người, luôn thực hiện lắp đặt tận nơi cũng như hỗ trợ
          các vấn đề kỹ thuật, sữa chữa máy nhanh nhất khi khách hàng có yêu cầu
        </li>
        <li className='li-commit'>
          Chúng tôi có cung cấp các linh kiện thay thế cùng với mực in uv chính
          hãng giá tốt nhằm cung cấp một dịch vụ trọn gói đến tay khách hàng.
        </li>
      </ul>

      <h4 className='text-commit'>
        <strong>Liên hệ báo giá máy in uv các loại 24/7</strong>
      </h4>
      <p className='icon-commit'>
        <a href='#'>
          <img src={iconPhoneNumber} alt='icon' />
          0935.389.988
        </a>
      </p>
      <p className='icon-commit'>
        <img src={iconEmail} alt='icon' />
        <a href='#'>bigcolorsaigon@gmail.com</a>
      </p>

      <p className='icon-commit'>
        <img src={iconFB} alt='icon' />
        <img src={iconZalo} alt='icon' />
      </p>

      {/* <div className='tag-docs'>
        <span>Tags:</span>
        <Tag>đại lý máy in UV</Tag>
        <Tag>máy in 3D Tại HCM</Tag>
        <Tag>Máy in 3D Tại HCM</Tag>
      </div> */}
    </div>
  );
}

export default CompanyCommit;
