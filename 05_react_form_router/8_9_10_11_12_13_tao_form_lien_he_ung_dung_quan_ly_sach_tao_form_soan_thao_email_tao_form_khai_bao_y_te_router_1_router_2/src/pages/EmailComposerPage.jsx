import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const EmailComposerPage = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        console.log('Uploaded files:', fileList);
        message.success('Biểu mẫu đã được gửi thành công!');
        form.resetFields();
        setFileList([]);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Vui lòng kiểm tra lại các trường đã nhập!');
    };
    const uploadProps = {
        name: 'file',
        multiple: true,
        action: '#',
        fileList: fileList,
        beforeUpload: (file) => {
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
                message.error('Kích thước tệp phải nhỏ hơn 2MB!');
            }
            return isLt2M || Upload.LIST_IGNORE;
        },
        onChange(info) {
            let newFileList = [...info.fileList];
            newFileList = newFileList.map(file => {
                if (file.response) {
                    file.url = file.response.url;
                }
                return file;
            });
            setFileList(newFileList);
            if (info.file.status === 'done') {
                message.success(`${info.file.name} tệp đã được tải lên thành công.`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} tệp tải lên thất bại.`);
            }
        },
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
    };
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #eee', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Mail Form</h2>
            <Form
                form={form}
                name="mail_form"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                { }
                <Form.Item
                    label="To"
                    name="to"
                    rules={[
                        { required: true, message: 'Vui lòng nhập người nhận!' },
                        { type: 'email', message: 'Vui lòng nhập địa chỉ email hợp lệ!' }
                    ]}
                >
                    <Input placeholder="Enter recipient email" />
                </Form.Item>
                { }
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
                >
                    <Input placeholder="Enter email title" />
                </Form.Item>
                { }
                <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'Vui lòng nhập nội dung tin nhắn!' }]}
                >
                    <TextArea rows={6} placeholder="Enter your message" />
                </Form.Item>
                { }
                <Form.Item
                    label="Attachments"
                    name="attachments"
                    valuePropName="fileList"
                    getValueFromEvent={(e) => {
                        if (Array.isArray(e)) {
                            return e;
                        }
                        return e && e.fileList;
                    }}
                >
                    <Upload {...uploadProps}>
                        <Button icon={<UploadOutlined />}>Choose File</Button>
                    </Upload>
                </Form.Item>
                { }
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default EmailComposerPage;