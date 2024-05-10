import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Tag } from "antd";

const { Option } = Select;

function ModalManager({ handleAddProduct, isModalVisible, setIsModalVisible }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClose = (removedTag) => {
    const updatedTags = selectedTags.filter((tag) => tag !== removedTag);
    setSelectedTags(updatedTags);
  };

  const handleTagInputChange = (inputValue) => {
    if (inputValue && !selectedTags.includes(inputValue)) {
      setSelectedTags([...selectedTags, inputValue]);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
  };

  return (
    <div>
      <Modal
        title='Add Product'
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key='cancel' onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key='submit' type='primary' onClick={onFinish}>
            Add
          </Button>,
        ]}
        width={1000}
      >
        <Form
          name='basic'
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: 8 }}>
              <Form.Item
                label='Code'
                name='code'
                rules={[
                  { required: true, message: "Please input product code!" },
                ]}
              >
                <Input placeholder='Input Code...' />
              </Form.Item>
            </div>
            <div style={{ flex: 1, marginLeft: 8 }}>
              <Form.Item
                label='Category'
                name='category_id'
                rules={[{ required: true, message: "Please select category!" }]}
              >
                <Select placeholder='Input category...'>
                  <Option value='1'>Máy In Phẳng</Option>
                  <Option value='2'>Máy In Cuộn</Option>
                  <Option value='3'>Máy In Hỗn Hợp</Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: "Please input product name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Tags'
            name='tags'
            rules={[{ required: true, message: "Please input product tags!" }]}
          >
            <Input
              placeholder='Tags Mode'
              onPressEnter={(e) => {
                handleTagInputChange(e.target.value);
                e.target.value = "";
              }}
            />
            <div style={{ marginTop: 5 }}>
              {selectedTags.map((tag, index) => (
                <Tag
                  key={index}
                  closable
                  onClose={() => handleTagClose(tag)}
                  style={{ marginRight: 5 }}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </Form.Item>

          <Form.Item
            label='Type'
            name='type'
            rules={[{ required: true, message: "Please input product type!" }]}
          >
            {/* Your CKEditor5 component here */}
          </Form.Item>

          <Form.Item
            label='Content'
            name='content'
            rules={[
              { required: true, message: "Please input product content!" },
            ]}
          >
            {/* Your CKEditor5 component here */}
          </Form.Item>

          <Form.Item
            label='Images'
            name='images'
            rules={[
              { required: true, message: "Please upload product images!" },
            ]}
          >
            {/* Your image uploader component here */}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalManager;
