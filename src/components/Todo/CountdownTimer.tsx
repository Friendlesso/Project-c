import { useEffect, useState } from "react";

type CountdownTimerProps = {
  cooldown: boolean;
  setCooldown: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CountdownTimer({cooldown, setCooldown}:CountdownTimerProps) {

  const [timeLeft, setTimeLeft] = useState(30_000);

  useEffect(() => {
    if(!cooldown) return;
    if (timeLeft <= 0) {
      setCooldown(false);
      setTimeLeft(30_000);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => (prev - 10 > 0 ? prev - 10 : 0));
    }, 10);

    return () => clearInterval(interval);

  }, [cooldown, setCooldown ,timeLeft]);

  const seconds = Math.floor(timeLeft/ 1000);
  const milliseconds = Math.floor((timeLeft % 1000) / 10);

  return (
    <div className="flex flex-row items-center m-2">
      <p>Pets:</p>
      <p className=" border border-white rounded-md w-full mx-0.5">
        00:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}
      </p>
    </div>
  )
}