import React from "react";
import { Field, ErrorMessage } from "formik";
import "./BillDetail.css";

function FormInput(props) {
  const { label, name } = props;
  return (
    <div className='form-input'>
      <label className='label-billding'>{label}:</label>
      <Field name={name} className='input-billding' {...props} />
      <ErrorMessage name={name} component='span' className='error-billding' />
    </div>
  );
}

export default FormInput;
