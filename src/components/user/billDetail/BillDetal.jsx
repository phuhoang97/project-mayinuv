import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import { CloseOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./BillDetail.css";

function BillDetail() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Fetch cart products from localStorage
    const storedProducts =
      JSON.parse(localStorage.getItem("cartProduct")) || [];
    setCartProducts(storedProducts);
  }, []);

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

  const handleRemoveProduct = (index) => {
    const updatedCart = [...cartProducts];
    updatedCart.splice(index, 1);
    setCartProducts(updatedCart);
    localStorage.setItem("cartProduct", JSON.stringify(updatedCart));
    toast.success("Sản phẩm đã được xóa khỏi giỏ hàng!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const columns = [
    // {
    //   title: "STT",
    //   dataIndex: "index",
    //   key: "index",
    //   render: (text, record, index) => index + 1,
    // },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (text, record) => (
        <img src={text} alt={record.name} width={100} height={100} />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (text, record, index) => (
        <CloseOutlined onClick={() => handleRemoveProduct(index)} />
      ),
    },
  ];

  const data = cartProducts.map((product, index) => ({
    key: index,
    // index,
    name: product.name,
    image: product.image,
  }));

  return (
    <div>
      <div className='container compo-billing'>
        <h2 className='title-billding'>Chi tiết thanh toán</h2>
        <div className='row'>
          <div className='col-6'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
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
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ y: 240 }}
                size='large'
              />
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
