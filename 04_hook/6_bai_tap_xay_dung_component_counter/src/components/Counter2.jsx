import React, { useState } from 'react';

function Counter2() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount + 2));
    };

    return (
        <div>
            <h3>Giá trị hiện tại của Counter:</h3>
            <h1>
                {count}
            </h1>
            <button
                onClick={handleIncrement}
            >
                Tăng Counter
            </button>
            <p>
                Nhấn nút để tăng giá trị thêm 2.
            </p>
        </div>
    );
}

export default Counter2;