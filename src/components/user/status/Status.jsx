import React, { useState, useEffect } from "react";
import { Row } from "antd";
import "./Status.css";
import Headers from "../headers/Headers";
import Footer from "../footer/Footer";
import ChildrenStatus from "./ChildrenStatus";
import { useParams } from "react-router-dom";

function Status() {

  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = 'https://ecommerce-printer-be.vercel.app/api/products';
        
        // Nếu có id, sử dụng API với category_id được chỉ định
        if (id) {
          apiUrl += `?category_id=${id}`;
        }

        // Gọi API
        const response = await fetch(apiUrl);
        const result = await response.json();

        // Cập nhật state với dữ liệu từ API
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log(data);

  return (
    <>
      <Headers />
      <div className='t-container'>
        <div className='t-children-status'>
          <h2 className='Color-Red-t text-center'>
            Một số bài viết về máy in
          </h2>
          <div className='card-status'>
            <Row gutter={[16, 16]}>
            {data && data.data && data.data.map((data, index) => (
                <ChildrenStatus key={index} data={data}/>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Status;
