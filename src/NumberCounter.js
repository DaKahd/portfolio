import React, { useState, useEffect } from 'react';
import './NumberCounter.css'; // Make sure to create this CSS file for styling

const NumberCounter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const end = parseInt(targetNumber);
    const totalDuration = parseInt(duration) * 1000;
    const startTime = Date.now();

    const updateCount = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / totalDuration, 1); // Ensure progress does not exceed 1
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);

  }, [targetNumber, duration]);

  return (
    <span className="counter">
      {count}
    </span>
  );
};

export default NumberCounter;
