import React, { useState } from 'react';
function FormDemoComponent() {
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('banana');
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreviewUrl, setFilePreviewUrl] = useState(null);
    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log("Selected file:", file.name, file.type, file.size, "bytes");
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFilePreviewUrl(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setFilePreviewUrl(null);
            }
        } else {
            setSelectedFile(null);
            setFilePreviewUrl(null);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('--- Form Submitted ---');
        console.log('Nội dung Textarea:', textAreaValue);
        console.log('Lựa chọn Select:', selectedOption);
        if (selectedFile) {
            console.log('Tệp đã chọn:', selectedFile.name);
        } else {
            console.log('Chưa có tệp nào được chọn.');
        }
        alert('Kiểm tra console để xem dữ liệu form!');
    };
    return (
        <div style={{ padding: '25px', border: '1px solid #ddd', borderRadius: '10px', maxWidth: '600px', margin: '30px auto', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Form Demo với React</h2>
            <form onSubmit={handleSubmit}>
                { }
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="description" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Mô tả sản phẩm:
                    </label>
                    <textarea
                        id="description"
                        value={textAreaValue}
                        onChange={handleTextAreaChange}
                        rows="5"
                        placeholder="Nhập mô tả chi tiết sản phẩm của bạn..."
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }}
                    />
                    <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                        Nội dung hiện tại: *{textAreaValue}*
                    </p>
                </div>
                { }
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="fruit-select" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Chọn một loại trái cây yêu thích:
                    </label>
                    <select
                        id="fruit-select"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px', backgroundColor: 'white' }}
                    >
                        <option value="apple">Táo</option>
                        <option value="banana">Chuối</option>
                        <option value="orange">Cam</option>
                        <option value="grape">Nho</option>
                    </select>
                    <p style={{ fontSize: '14px', color: '#666', marginTop: '5px' }}>
                        Bạn đã chọn: *{selectedOption}*
                    </p>
                </div>
                { }
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="product-image" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Chọn ảnh sản phẩm:
                    </label>
                    <input
                        type="file"
                        id="product-image"
                        onChange={handleFileChange}
                        accept="image/*"
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}
                    />
                    {selectedFile && (
                        <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                            Tên tệp đã chọn: <strong>{selectedFile.name}</strong> (Kích thước: {(selectedFile.size / 1024).toFixed(2)} KB)
                        </p>
                    )}
                    {filePreviewUrl && (
                        <div style={{ marginTop: '15px', border: '1px dashed #ccc', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
                            <p style={{ marginBottom: '8px', color: '#555' }}>Xem trước ảnh:</p>
                            <img src={filePreviewUrl} alt="File Preview" style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain', borderRadius: '5px' }} />
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    style={{ width: '100%', padding: '12px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px', cursor: 'pointer', marginTop: '20px' }}
                >
                    Gửi Form
                </button>
            </form>
        </div>
    );
}
export default FormDemoComponent;