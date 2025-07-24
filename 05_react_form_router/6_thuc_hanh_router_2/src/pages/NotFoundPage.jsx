import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="not-found-container">
            <h1>404 - Trang không tìm thấy!</h1>
            <p>Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
            <p>
                Vui lòng quay lại <Link to="/">Trang chủ</Link>.
            </p>
        </div>
    );
}
export default NotFoundPage;