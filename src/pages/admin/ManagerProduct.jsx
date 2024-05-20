import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Space, Table, Tag, Input, Form, Select } from "antd";
import axios from "axios";
import ModalManager from "./ModalManager";

const { Option } = Select;

function ManagerProduct() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const [titleName, setTitleName] = useState("");

  useEffect(() => {
    axios
      .get("https://ecommerce-printer-be.vercel.app/api/products")
      .then((response) => {
        setProducts(response.data.data);
        setOriginalProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setVisibleProducts(products.slice(start, end));
    setTotalProducts(products.length);
  }, [products, currentPage, pageSize]);

  const handleSearch = (value) => {
    setSearchValue(value);
    const filteredProducts = originalProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleClearSearch = () => {
    setSearchValue("");
    setProducts(originalProducts);
  };

  const handleAddProduct = () => {
    setIsModalVisible(true);
    setTitleName("Add Product");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <>{text}</>,
    },
    {
      title: "Images",
      dataIndex: "images",
      align: "center",
      key: "images",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (_, record) => (
        <div style={{ display: "flex" }}>
          {record.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index}`}
              style={{ width: 50, height: 50, marginRight: 5 }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Tags",
      key: "tags",
      align: "center",
      dataIndex: "tags",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (_, record) => (
        <>
          {record.tags.split(", ").map((tag, index) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={index}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <Space size='middle'>
          <button type='button' className='btn btn-outline-info'>
            View
          </button>
          <button type='button' className='btn btn-outline-warning'>
            Edit
          </button>
          <button type='button' className='btn btn-outline-danger'>
            Delete
          </button>
        </Space>
      ),
    },
  ];

  return (
    <div className='main-dashboard'>
      <div
        style={{
          margin: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={handleAddProduct}
        >
          Add Product
        </button>

        <Form layout='inline' style={{ marginLeft: 20 }}>
          <Form.Item>
            <Input.Search
              placeholder='Enter product name'
              onSearch={handleSearch}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form.Item>
          <button
            type='button'
            className='btn btn-outline-secondary'
            onClick={handleClearSearch}
          >
            Clear Search
          </button>
        </Form>
      </div>
      <Table
        columns={columns}
        dataSource={visibleProducts}
        pagination={{
          total: totalProducts,
          pageSize: pageSize,
          current: currentPage,
          onChange: handleChangePage,
        }}
        scroll={{ y: 400 }}
      />

      <ModalManager
        handleAddProduct={handleAddProduct}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
}

export default ManagerProduct;
