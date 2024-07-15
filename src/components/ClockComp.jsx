import { useEffect, useState } from "react";

function ClockComp() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {currentTime.toLocaleDateString()} -{" "}
      {currentTime.toLocaleTimeString()}
    </p>
  );
}

export default ClockComp;
