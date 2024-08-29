import MotionNumber from "motion-number";
import { ComponentProps, useEffect, useState } from "react";

const numberProps: Partial<ComponentProps<typeof MotionNumber>> = {
  format: { minimumIntegerDigits: 2 },
  style: { fontSize: 20 },
  transition: {
    layout: { type: "spring", duration: 0.7, bounce: 0 },
    y: { type: "spring", duration: 0.7, bounce: 0.25 },
    opacity: { duration: 0.7, ease: "easeOut", times: [0, 0.3] },
  },
};

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);

      if (seconds === 59) {
        setSeconds(0);
        setMinutes((prev) => prev + 1);
      }
      if (seconds === 59 && minutes === 59) {
        setSeconds(0);
        setMinutes(0);
        setHours((prev) => prev + 1);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="font-mono  flex">
      <MotionNumber value={hours} {...numberProps} />
      <div>:</div>
      <MotionNumber value={minutes} {...numberProps} />
      <div>:</div>
      <MotionNumber value={seconds} {...numberProps} />
    </div>
  );
}
