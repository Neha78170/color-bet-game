import React, { useEffect, useState, useRef } from "react";

const CountdownTimer = ({onTimeEnd}) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          onTimeEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart("2, 0");
  const second = Math.floor(timeLeft % 60)
    .toString()
    .padStart("2, 0");

  return (
    <span>
      {minutes}:{second}
    </span>
  );
};

export default CountdownTimer;
