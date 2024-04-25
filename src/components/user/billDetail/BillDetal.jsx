import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import imgProduct from "../../../assets/images/may-in-uv-phang-bossron-1325.jpg";
import { CloseOutlined } from "@ant-design/icons";
import axios from "axios";

function BillDetail() {
  // const [provinces, setProvinces] = useState([]);
  // const [districts, setDistricts] = useState([]);
  // const [wards, setWards] = useState([]);

  const initialValues = {
    username: "",
    nameCompany: "",
    email: "",
    phoneNumber: "",
    // province: "",
    // district: "",
    // ward: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Họ và tên phải có ít nhất 3 ký tự")
      .max(25, "Họ và tên không được vượt quá 25 ký tự")
      .required("Họ và tên không được để trống"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email không hợp lệ"
      ),
    phoneNumber: Yup.string()
      .matches(/^\d+$/, "Số điện thoại phải là số")
      .required("Số điện thoại không được để trống"),
    address: Yup.string().required("Địa chỉ không được để trống"),
    // province: Yup.string().required("Tỉnh/Thành phố không được để trống"),
    // district: Yup.string().required("Quận/Huyện/Thị xã không được để trống"),
    // ward: Yup.string().required("Phường/Xã không được để trống"),
  });

  // useEffect(() => {
  //   // Lấy danh sách tỉnh/thành phố
  //   axios
  //     .get("https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1")
  //     .then((res) => setProvinces(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const handleProvinceChange = (provinceCode, props) => {
  //   // Lấy danh sách quận/huyện/thị xã theo tỉnh/thành phố
  //   axios
  //     .get(
  //       `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${provinceCode}&limit=-1`
  //     )
  //     .then((res) => {
  //       setDistricts(res.data);
  //       props.setFieldValue("district", ""); // Reset giá trị quận/huyện/...
  //       props.setFieldValue("ward", ""); // Reset giá trị phường/xã
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const handleDistrictChange = (districtCode, props) => {
  //   // Lấy danh sách phường/xã theo quận/huyện/thị xã
  //   axios
  //     .get(
  //       `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${districtCode}&limit=-1`
  //     )
  //     .then((res) => {
  //       setWards(res.data);
  //       props.setFieldValue("ward", ""); // Reset giá trị phường/xã
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleSubmit = (values, { setSubmitting }) => {
    // Xử lý logic khi submit form
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <div className='container compo-billing'>
        <h2 className='title-billding'>Chi tiết thanh toán</h2>
        <div className='row'>
          <div className='col-6'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(props) => (
                <Form className='form-input'>
                  <FormInput
                    name='username'
                    type='text'
                    placeholder='Họ và tên ...'
                    label='Họ và tên'
                  />
                  <FormInput
                    name='nameCompany'
                    type='text'
                    placeholder='Tên công ty ...'
                    label='Tên công ty'
                  />
                  <FormInput
                    name='email'
                    type='text'
                    placeholder='Email ...'
                    label='Email'
                  />
                  <FormInput
                    name='phoneNumber'
                    type='text'
                    placeholder='Số điện thoại ...'
                    label='Số điện thoại'
                  />
                  {/* <>
                    <div className='form-group'>
                      <label htmlFor='province'>Tỉnh/Thành phố</label>
                      <Field
                        as='select'
                        name='province'
                        onChange={(e) => {
                          props.setFieldValue("province", e.target.value);
                          handleProvinceChange(e.target.value, props);
                        }}
                      >
                        <option value=''>Chọn Tỉnh/Thành phố</option>
                        {provinces.map((province) => (
                          <option key={province.code} value={province.code}>
                            {province.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name='province'
                        component='div'
                        className='error-message'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='district'>Quận/Huyện/Thị xã</label>
                      <Field
                        as='select'
                        name='district'
                        onChange={(e) => {
                          props.setFieldValue("district", e.target.value);
                          handleDistrictChange(e.target.value, props);
                        }}
                      >
                        <option value=''>Chọn Quận/Huyện/Thị xã</option>
                        {districts.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name='district'
                        component='div'
                        className='error-message'
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='ward'>Phường/Xã</label>
                      <Field as='select' name='ward'>
                        <option value=''>Chọn Phường/Xã</option>
                        {wards.map((ward) => (
                          <option key={ward.code} value={ward.code}>
                            {ward.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name='ward'
                        component='div'
                        className='error-message'
                      />
                    </div>
                  </> */}
                  <FormInput
                    name='address'
                    type='text'
                    placeholder='Địa chỉ ...'
                    label='Địa chỉ'
                  />
                  <button
                    className='btn-billding'
                    type='submit'
                    disabled={props.isSubmitting}
                  >
                    Đặt Hàng
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className='col-6'>
            <div className='billding-right'>
              <div className='product-billding'>
                <img src={imgProduct} alt='photo' />
                <span>Máy In UV Phẳng Fortune YF-2032G</span>
                <CloseOutlined />
              </div>

              <div className='product-billding'>
                <img src={imgProduct} alt='photo' />
                <span>Máy In UV Phẳng Fortune YF-2032G</span>
                <CloseOutlined />
              </div>

              <div className='note-billding'>
                <strong>Sau khi khách hàng đặt chúng tôi sẽ liên hệ lại</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillDetail;
