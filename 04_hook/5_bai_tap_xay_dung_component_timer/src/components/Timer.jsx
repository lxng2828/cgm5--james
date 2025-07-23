import React, { useState, useEffect } from 'react';
function Timer() {
    const initialSeconds = 10;
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(true);
    useEffect(() => {
        let intervalId = null;
        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        else if (seconds === 0 && isActive) {
            setIsActive(false);
            clearInterval(intervalId);
            alert("Time up!");
        }
        return () => clearInterval(intervalId);
    }, [seconds, isActive]);
    const formatTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const remainingSeconds = totalSeconds % 60;
        const pad = (num) => String(num).padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    };
    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            padding: '20px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            maxWidth: '300px',
            margin: '50px auto'
        }}>
            <h3>Đồng hồ đếm ngược</h3>
            <h1 style={{ fontSize: '3em', margin: '10px 0', color: seconds <= 5 && seconds > 0 ? 'red' : 'blue' }}>
                {formatTime(seconds)}
            </h1>
            {seconds === 0 && <p style={{ color: 'green', fontWeight: 'bold' }}>Thời gian đã kết thúc!</p>}
        </div>
    );
}
export default Timer;