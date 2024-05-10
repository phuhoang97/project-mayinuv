import React from "react";
import "./Dashboard.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Dashboard() {
  // Dữ liệu cho biểu đồ dòng
  const lineChartData = [
    { name: "January", sales: 65 },
    { name: "February", sales: 59 },
    { name: "March", sales: 80 },
    { name: "April", sales: 81 },
    { name: "May", sales: 56 },
    { name: "June", sales: 55 },
    { name: "July", sales: 40 },
  ];

  // Dữ liệu cho biểu đồ cột
  const barChartData = [
    { name: "Red", quantity: 12 },
    { name: "Blue", quantity: 19 },
    { name: "Yellow", quantity: 3 },
    { name: "Green", quantity: 5 },
    { name: "Purple", quantity: 2 },
    { name: "Orange", quantity: 3 },
  ];

  return (
    <div className='main-dashboard'>
      <h3 className='title-dashboard'>Dashboard</h3>
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

      <div className='container-chart'>
        {/* Thêm biểu đồ dòng */}
        <div className='chart'>
          <h4>Số Lượng Sản Phẩm</h4>
          <LineChart width={400} height={300} data={lineChartData}>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='sales' stroke='#8884d8' />
          </LineChart>
        </div>

        {/* Thêm biểu đồ cột */}
        <div className='chart'>
          <h4>Số Lượng Order</h4>
          <BarChart width={400} height={300} data={barChartData}>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid stroke='#ccc' />
            <Tooltip />
            <Legend />
            <Bar dataKey='quantity' fill='#8884d8' />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
