import React from 'react';
import { Button, Form, Input, Typography, message } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Form submitted successfully:', values);
        message.success('Contact form submitted successfully!');
        form.resetFields();
    };

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '50px auto',
                padding: '30px',
                border: '1px solid #d9d9d9',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
            }}
        >
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
                Contact Form
            </Title>

            <Form
                form={form}
                name="contact_form"
                layout="vertical"
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Name is required.' }]}
                >
                    <Input placeholder="Your Name" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: 'Email is required.' },
                        { type: 'email', message: 'Invalid email format.' },
                    ]}
                >
                    <Input placeholder="Your Email" />
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        { required: true, message: 'Phone number is required.' },
                        {
                            pattern: /^[0-9]+$/,
                            message: 'Phone number must contain only digits.',
                        },
                        {
                            min: 10,
                            message: 'Phone number must be at least 10 digits.',
                        },
                        {
                            max: 15,
                            message: 'Phone number cannot exceed 15 digits.',
                        },
                    ]}
                >
                    <Input placeholder="Your Phone Number" />
                </Form.Item>

                <Form.Item
                    label="Message"
                    name="message"
                    rules={[
                        { required: true, message: 'Message is required.' },
                        {
                            min: 10,
                            message: 'Message must be at least 10 characters.',
                        },
                        {
                            max: 500,
                            message: 'Message cannot exceed 500 characters.',
                        },
                    ]}
                >
                    <TextArea rows={4} placeholder="Your Message" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: '100%', marginTop: '15px' }}
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactPage;
