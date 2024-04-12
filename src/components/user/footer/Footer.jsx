import React from "react";
import "./Footer.css";
import logoFB from "../../../assets/logo/facebook.svg";
import logoZalo from "../../../assets/logo/Logo Zalo Arc.png";
import logoPhone from "../../../assets/logo/telephone-call_3059590.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBuilding,
  faEnvelope,
  faHandHoldingDollar,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='name-company'>
          <h3>CÔNG TY TNHH MỘT THÀNH VIÊN BIGCOLOR VIỆT NAM</h3>
        </div>
        <div className='footer-row'>
          <div className='footer-col'>
            <h5>THÔNG TIN</h5>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className='icon-footer'
                  />
                  65A Đường Lô Tư, Bình Hưng Hoà A, Quận Bình Tân, Hồ Chí Minh,
                  Việt Nam
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faPhone} className='icon-footer' />
                  0935.389.988
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faPhone} className='icon-footer' />
                  0286.286.6686
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faEnvelope} className='icon-footer' />
                  bigcolorsaigon@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h5>VỀ CHÚNG TÔI</h5>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faBuilding} className='icon-footer' />
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className='icon-footer'
                  />
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon
                    icon={faHandHoldingDollar}
                    className='icon-footer'
                  />
                  Quy trình báo giá
                </a>
              </li>
            </ul>
          </div>

          <div className='footer-col'>
            <h5>LIÊN LẠC</h5>
            <div className='social-links'>
              <a href='#'>
                <img src={logoFB} alt='photo' width={40} height={40} />
              </a>
              <a href='#'>
                <img src={logoZalo} alt='photo' width={40} height={40} />
              </a>
              <a href='#'>
                <img src={logoPhone} alt='photo' width={40} height={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
