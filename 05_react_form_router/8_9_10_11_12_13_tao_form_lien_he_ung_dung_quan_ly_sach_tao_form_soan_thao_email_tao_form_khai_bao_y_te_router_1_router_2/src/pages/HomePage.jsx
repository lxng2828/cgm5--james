import React from 'react';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title, Text } = Typography;
export default function HomePage() {
    return (
        <Layout style={{
            backgroundColor: '#f0f2f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            { }
            { }
            <Content
                style={{
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                <Title level={1} style={{ color: '#1890ff', marginBottom: '10px' }}>
                    Bài tập: React Form & Router
                </Title>
            </Content>
        </Layout>
    );
}