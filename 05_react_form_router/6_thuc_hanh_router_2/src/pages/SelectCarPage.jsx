import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectCarPage.css';
const cars = [
    { id: 'honda-civic', name: 'Honda Civic', year: 2023, color: 'Bạc', price: '25,000 USD' },
    { id: 'toyota-camry', name: 'Toyota Camry', year: 2024, color: 'Trắng Ngọc Trai', price: '30,000 USD' },
    { id: 'bmw-3-series', name: 'BMW 3 Series', year: 2022, color: 'Đen Sapphire', price: '45,000 USD' },
    { id: 'ford-mustang', name: 'Ford Mustang', year: 2023, color: 'Đỏ Đua', price: '35,000 USD' },
];

function SelectCarPage() {
    const [selectedCarId, setSelectedCarId] = useState('');
    const navigate = useNavigate();

    const handleCarChange = (event) => {
        setSelectedCarId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedCarId) {
            const carData = cars.find(car => car.id === selectedCarId);
            if (carData) {
                navigate('/car-details', { state: { car: carData } });
            } else {
                alert('Không tìm thấy thông tin xe đã chọn.');
            }
        } else {
            alert('Vui lòng chọn một chiếc xe.');
        }
    };

    return (
        <div className="select-car-container">
            <h1>Chọn chiếc xe của bạn</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="car-select">Chọn xe:</label>
                    <select
                        id="car-select"
                        value={selectedCarId}
                        onChange={handleCarChange}
                    >
                        <option value="">-- Vui lòng chọn --</option>
                        {cars.map(car => (
                            <option key={car.id} value={car.id}>
                                {car.name} ({car.year})
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="select-button">Xem chi tiết xe</button>
            </form>
        </div>
    );
}

export default SelectCarPage;