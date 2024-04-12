import React from "react";
import imgBackground from "../../../assets/images/UV-phang-3020-Crystal-w.png";
import "./Guarantee.css";

function Guarantee() {
  return (
    <div className='comp-guarantee'>
      <div className='element-guarantee'>
        <div className='content-guarantee'>
          <h2>
            <strong>
              bảo hành tận nơi
              <br /> Bảo dưỡng miễn phí
            </strong>
          </h2>
        </div>

        <div className='img-guarantee'>
          <img src={imgBackground} alt='photo' />
        </div>

        <div className='absolute'>
          <div className='absolute inset-0 justify-center'>
            <div className='bg-shape1 bg-teal opacity-50 bg-blur'></div>
            <div className='bg-shape2 bg-primary1 opacity-50 bg-blur'></div>
            <div className='bg-shape1 bg-purple opacity-50 bg-blur'></div>
          </div>
        </div>

        <div className='contact-guarantee'>
          {/* <div className='phone-guarantee'>
            <strong>0935.389.988</strong>
          </div> */}
          <div className='button-guarantee'>
            <button className='now-guarantee'>
              <strong>Gọi ngay</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
