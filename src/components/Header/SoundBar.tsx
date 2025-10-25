import { useEffect, useState } from "react";

interface FakeVisualizerProps{
  barCount?: number;
  maxHeight?: number;
  speed?: number;
}

export const FakeVisualizer : React.FC<FakeVisualizerProps> = ({
  barCount = 14,
  maxHeight = 40,
  speed = 75
  }) => {

  const [bars, setBars] = useState<number[]>(() =>
    Array.from({length: barCount}, () => Math.random() * maxHeight)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setBars(
        Array.from({length: barCount}, () => Math.random() * maxHeight)
      )
    }, speed);

    return () => clearInterval(interval);
  }, [barCount,maxHeight,speed])
  
  return (
    // If MaxHeight is to be Changed Change H
    <div className="flex items-end gap-1.5 h-10">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-2 bg-white rounded-lg transition-all duration-150 ease-linear "
          style={{
            height: `${height}px`
          }}
        />
      ))}
    </div>
  );
};