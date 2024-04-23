import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import imgProduct from "../../../assets/images/may-in-uv-phang-bossron-1325.jpg";
import { CloseOutlined } from "@ant-design/icons";

function BillDetail() {
  const initialValues = {
    username: "",
    nameCompany: "",
    email: "",
    phoneNumber: "",
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
  });

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
              {({ isSubmitting }) => (
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
                  <FormInput
                    name='address'
                    type='text'
                    placeholder='Địa chỉ ...'
                    label='Địa chỉ'
                  />
                  <button
                    className='btn-billding'
                    type='submit'
                    disabled={isSubmitting}
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
