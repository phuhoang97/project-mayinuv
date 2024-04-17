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
                <a href='tel:0935389988'>
                  <FontAwesomeIcon icon={faPhone} className='icon-footer' />
                  0935.389.988
                </a>
              </li>
              <li>
                <a href='tel:02862866686'>
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
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2830035475986!2d105.84317806050089!3d20.98128989085568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac43bc8b6575%3A0x4778704d826fe953!2zQ8O0bmcgVHkgVG5oaCBN4buZdCBUaMOgbmggVmnDqm4gQmlnY29sb3IgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1713367972101!5m2!1svi!2s'
              width='275'
              height='150'
              style={{ border: 0, margin: "20px 0" }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
