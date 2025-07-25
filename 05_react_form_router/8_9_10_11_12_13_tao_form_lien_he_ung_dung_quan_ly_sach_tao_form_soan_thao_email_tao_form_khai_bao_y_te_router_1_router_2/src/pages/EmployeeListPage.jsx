import React, { useEffect, useState } from 'react';
import { Card, Typography, Alert, Button, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;
function EmployeeListPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    useEffect(() => {
        if (location.state && location.state.employee) {
            setEmployee(location.state.employee);
        } else {
            message.warning('Không tìm thấy thông tin nhân viên. Vui lòng chọn lại nhân viên.');
            navigate('/profile');
        }
    }, [location.state, navigate]);
    if (!employee) {
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
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <Card
                title={<Title level={3} style={{ textAlign: 'center' }}>Chi tiết Nhân viên</Title>}
                style={{ width: 400, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
                { }
                <p>
                    <Text strong>ID:</Text> <Text>{employee.id}</Text>
                </p>
                { }
                <p>
                    <Text strong>Tên:</Text> <Text>{employee.name}</Text>
                </p>
                { }
                <p>
                    <Text strong>Tuổi:</Text> <Text>{employee.age}</Text>
                </p>
                { }
                <Button
                    type="default"
                    onClick={() => navigate('/profile')}
                    style={{ marginTop: 20 }}
                    block
                >
                    Quay lại danh sách
                </Button>
            </Card>
        </div>
    );
}
export default EmployeeListPage;