import { useEffect, useState } from "react";

interface WaveformVisualizerProps {
  isPlaying?: boolean;
  className?: string;
  barCount?: number;
}

const WaveformVisualizer = ({ 
  isPlaying = false, 
  className = "",
  barCount = 40 
}: WaveformVisualizerProps) => {
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    // Initialize with random heights
    setHeights(Array.from({ length: barCount }, () => Math.random() * 100));

    if (isPlaying) {
      const interval = setInterval(() => {
        setHeights(prev => 
          prev.map(() => 20 + Math.random() * 80)
        );
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying, barCount]);

  return (
    <div className={`flex items-end justify-center gap-[2px] h-16 ${className}`}>
      {heights.map((height, index) => (
        <div
          key={index}
          className="w-1 bg-gradient-to-t from-primary/60 to-primary rounded-full transition-all duration-100"
          style={{
            height: `${isPlaying ? height : 20 + Math.sin(index * 0.5) * 30}%`,
            opacity: isPlaying ? 1 : 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default WaveformVisualizer;
