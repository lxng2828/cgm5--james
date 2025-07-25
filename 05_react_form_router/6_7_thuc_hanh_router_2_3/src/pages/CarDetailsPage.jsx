import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CarDetailsPage.css';

function CarDetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const car = location.state?.car;

    if (!car) {
        return (
            <div className="car-details-container no-data">
                <h2>Không tìm thấy thông tin xe.</h2>
                <button onClick={() => navigate('/')} className="back-button">
                    ← Quay lại trang chọn xe
                </button>
            </div>
        );
    }

    return (
        <div className="car-details-container">
            <h1>Chi tiết xe: {car.name}</h1>
            <div className="details-card">
                <p><strong>Năm sản xuất:</strong> {car.year}</p>
                <p><strong>Màu sắc:</strong> {car.color}</p>
                <p><strong>Giá:</strong> {car.price}</p>
                <p><strong>ID:</strong> {car.id}</p>
            </div>
            <button onClick={() => navigate('/')} className="back-button">
                ← Quay lại trang chọn xe
            </button>
        </div>
    );
}

export default CarDetailsPage;