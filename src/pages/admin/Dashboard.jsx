import React from "react";
import "./Dashboard.css";
import {
  AreaChartOutlined,
  FallOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

function Dashboard() {
  return (
    <div className='main-dashboard'>
      <h3 className='title-dashboad'>Dashboard</h3>
      <div className='info-data'>
        <div className='card'>
          <div className='head'>
            <div className='head-content'>
              <p>Số lượng sản phẩm</p>
            </div>
            <span className='progress' value={50}></span>
            <span className='label'>50</span>
          </div>
        </div>

        <div className='card'>
          <div className='head'>
            <div className='head-content'>
              <p>Số lượng order</p>
            </div>
            <span className='progress' value={50}></span>
            <span className='label'>50</span>
          </div>
        </div>

        <div className='card'>
          <div className='head'>
            <div className='head-content'>
              <p>Lượng người truy cập</p>
            </div>
            <span className='progress' value={50}></span>
            <span className='label'>50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
