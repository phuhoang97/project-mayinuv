import React, { useState } from "react";
import "./LoginAdmin.css";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Checkbox, message } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ecommerce-printer-be.vercel.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        // Đăng nhập thành công
        toast.success("Đăng nhập thành công !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const data = await response.json();
        const token = data.data;
        localStorage.setItem("admin", token);
        // Chuyển router hoặc thực hiện hành động cần thiết
        navigate("/admin");
      } else {
        // Đăng nhập thất bại
        toast.error("Đăng nhập thất bại !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='body-login'>
      <div className='form-box'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Đăng Nhập</h1>
          <div className='input-box'>
            <div>
              <input
                type='text'
                required=''
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username: </label>
            </div>
          </div>
          <div className='input-box'>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                required=''
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password: </label>
            </div>
            {showPassword ? (
              <EyeOutlined
                className='icon-eye'
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeInvisibleOutlined
                className='icon-eye'
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          {/* <Checkbox className=''>Remember me</Checkbox> */}
          <button type='submit' className='submit-btn'>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
