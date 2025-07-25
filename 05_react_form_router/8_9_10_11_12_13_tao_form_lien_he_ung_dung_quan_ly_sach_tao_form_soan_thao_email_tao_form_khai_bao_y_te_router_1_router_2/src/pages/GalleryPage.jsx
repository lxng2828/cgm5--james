import React, { useState } from 'react';
import {
    Form,
    Input,
    InputNumber,
    Button,
    Table,
    Popconfirm,
    Typography,
} from 'antd';

const { Title } = Typography;

export default function GalleryPage() {
    const [form] = Form.useForm();
    const [books, setBooks] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const onFinish = (values) => {
        if (editingIndex !== null) {
            const updated = [...books];
            updated[editingIndex] = values;
            setBooks(updated);
            setEditingIndex(null);
        } else {
            setBooks([...books, values]);
        }
        form.resetFields();
    };

    const handleEdit = (record, index) => {
        form.setFieldsValue(record);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const filtered = books.filter((_, i) => i !== index);
        setBooks(filtered);
        if (editingIndex === index) {
            form.resetFields();
            setEditingIndex(null);
        }
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Number',
            dataIndex: 'number',
        },
        {
            title: 'Actions',
            render: (_, record, index) => (
                <>
                    <Button
                        size="small"
                        onClick={() => handleEdit(record, index)}
                        style={{ marginRight: 8 }}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Delete this book?"
                        onConfirm={() => handleDelete(index)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button size="small" danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    return (
        <div style={{ maxWidth: 600, margin: '40px auto' }}>
            <Title level={1}>Gallery</Title>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                style={{ marginBottom: 24 }}
            >
                <Form.Item
                    label="Tiêu đề"
                    name="title"
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Số lượng"
                    name="number"
                    rules={[{ required: true, message: 'Vui lòng nhập số lượng' }]}
                >
                    <InputNumber min={1} style={{ width: '100%' }} />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    {editingIndex !== null ? 'Cập nhật' : 'Thêm sách'}
                </Button>
            </Form>

            <Table
                dataSource={books.map((book, i) => ({ key: i, ...book }))}
                columns={columns}
                pagination={false}
                bordered
            />
        </div>
    );
}
