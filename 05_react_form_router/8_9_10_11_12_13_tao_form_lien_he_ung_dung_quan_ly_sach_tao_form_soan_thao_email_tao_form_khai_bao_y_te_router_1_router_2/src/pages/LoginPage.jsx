import React from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;
const LoginPage = () => {
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Thông tin đăng nhập:', values);
        message.success('Đăng nhập thành công! Đang chuyển hướng...');
        navigate('/profile', {
            state: {
                user: {
                    email: values.email,
                    password: values.password,
                },
            },
        });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Lỗi:', errorInfo);
        message.error('Vui lòng kiểm tra lại thông tin đăng nhập.');
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <Card
                title={<Title level={3} style={{ textAlign: 'center' }}>Đăng nhập</Title>}
                style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Vui lòng nhập email của bạn!' },
                            { type: 'email', message: 'Email không đúng định dạng!' },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[
                            { required: true, message: 'Vui lòng nhập mật khẩu của bạn!' },
                            { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
export default LoginPage;