import MotionNumber from "motion-number";
import { ComponentProps, useEffect, useState } from "react";

const format: ComponentProps<typeof MotionNumber>["format"] = {
  minimumIntegerDigits: 2,
};

export function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

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
    <div className="font-mono text-[1.40rem] flex">
      <MotionNumber
        transition={{
          layout: { type: "spring", duration: 0.7, bounce: 0 },
          y: { type: "spring", duration: 0.7, bounce: 0.25 },
          opacity: { duration: 0.7, ease: "easeOut", times: [0, 0.3] },
        }}
        value={hours}
        format={format}
      />
      <div>:</div>
      <MotionNumber
        transition={{
          layout: { type: "spring", duration: 0.7, bounce: 0 },
          y: { type: "spring", duration: 0.7, bounce: 0.25 },
          opacity: { duration: 0.7, ease: "easeOut", times: [0, 0.3] },
        }}
        value={minutes}
        format={format}
      />
      <div>:</div>
      <MotionNumber
        transition={{
          layout: { type: "spring", duration: 0.7, bounce: 0 },
          y: { type: "spring", duration: 0.7, bounce: 0.25 },
          opacity: { duration: 0.7, ease: "easeOut", times: [0, 0.3] },
        }}
        value={seconds}
        format={format}
      />
    </div>
  );
}
