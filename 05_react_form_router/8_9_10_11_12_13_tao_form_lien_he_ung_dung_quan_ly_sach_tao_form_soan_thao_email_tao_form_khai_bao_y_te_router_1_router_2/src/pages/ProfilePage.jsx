import React, { useEffect, useState } from 'react';
import { Card, Typography, Alert, message, List, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
function ProfilePage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const fakeEmployees = [
        { id: 'emp001', name: 'Nguyễn Văn A', age: 30 },
        { id: 'emp002', name: 'Trần Thị B', age: 25 },
        { id: 'emp003', name: 'Lê Văn C', age: 35 },
        { id: 'emp004', name: 'Phạm Thị D', age: 28 },
    ];
    useEffect(() => {
        if (location.state && location.state.user) {
            setUser(location.state.user);
        } else {
            message.warning('Bạn chưa đăng nhập. Vui lòng đăng nhập để xem thông tin.');
            navigate('/');
        }
    }, [location.state, navigate]);
    const handleViewEmployeeDetail = (employee) => {
        navigate('/employees', {
            state: {
                employee: employee,
            },
        });
    };
    if (!user) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                backgroundColor: '#f0f2f5'
            }}>
                <Alert message="Đang tải thông tin hoặc không có dữ liệu..." type="info" showIcon />
            </div>
        );
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            padding: '20px'
        }}>
            { }
            <Card
                title={<Title level={3} style={{ textAlign: 'center' }}>Thông tin người dùng</Title>}
                style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}
            >
                <p>
                    <Text strong>Email:</Text> <Text>{user.email}</Text>
                </p>
                <p>
                    <Text strong>Mật khẩu:</Text> <Text>{user.password}</Text>
                </p>
                <Alert
                    message="Lưu ý quan trọng"
                    description="Trong một ứng dụng thực tế, bạn KHÔNG BAO GIỜ được hiển thị mật khẩu người dùng ở đây vì lý do bảo mật."
                    type="warning"
                    showIcon
                    style={{ marginTop: 20 }}
                />
            </Card>
            { }
            <Card
                title={<Title level={3} style={{ textAlign: 'center' }}>Danh sách Nhân viên</Title>}
                style={{ width: 600, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
                { }
                <List
                    bordered
                    dataSource={fakeEmployees}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Button type="primary" onClick={() => handleViewEmployeeDetail(item)}>
                                    Xem chi tiết
                                </Button>
                            ]}
                        >
                            <List.Item.Meta
                                title={<Text strong>{item.name}</Text>}
                                description={`ID: ${item.id} | Tuổi: ${item.age}`}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
}
export default ProfilePage;