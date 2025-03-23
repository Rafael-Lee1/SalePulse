
import { useState, useEffect } from "react";
import { BarChart2 } from "lucide-react";

export function LevelChart() {
  const [heights, setHeights] = useState([0, 0, 0, 0, 0, 0]);
  const [fills, setFills] = useState([0, 0, 0, 0, 0, 0]);
  const targetHeights = [87, 107, 87, 79, 61, 66];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  
  // Animate chart on component mount
  useEffect(() => {
    const heightInterval = setInterval(() => {
      setHeights(prev => {
        const newHeights = [...prev];
        let completed = true;
        
        for (let i = 0; i < prev.length; i++) {
          if (prev[i] < targetHeights[i]) {
            newHeights[i] = prev[i] + 2;
            completed = false;
          }
        }
        
        if (completed) {
          clearInterval(heightInterval);
        }
        
        return newHeights;
      });
    }, 20);
    
    const fillInterval = setInterval(() => {
      setFills(prev => {
        const newFills = [...prev];
        let completed = true;
        
        for (let i = 0; i < prev.length; i++) {
          const targetFill = Math.random() * 40 + 20;
          if (prev[i] < targetFill) {
            newFills[i] = prev[i] + 1;
            completed = false;
          }
        }
        
        if (completed) {
          clearInterval(fillInterval);
        }
        
        return newFills;
      });
    }, 30);
    
    return () => {
      clearInterval(heightInterval);
      clearInterval(fillInterval);
    };
  }, []);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-[238px] bg-[#21222D] p-5 rounded-[10px] max-md:w-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white text-[15px] font-semibold">Level Analytics</h2>
        <div className="p-1.5 rounded-full bg-[#A9DFD8]/10">
          <BarChart2 size={14} className="text-[#A9DFD8]" />
        </div>
      </div>
      
      <div className="flex flex-col gap-5">
        <div className="flex items-end gap-3 h-[107px] justify-center relative">
          {heights.map((height, index) => (
            <div
              key={index}
              className="group flex-1 relative"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                className="w-full bg-[#2B2B36] rounded transition-all duration-500 ease-out"
                style={{ height: `${height}px` }}
              >
                <div
                  className={`w-full bg-[#A9DFD8] rounded absolute bottom-0 transition-all duration-500 ease-out ${activeIndex === index ? 'opacity-80' : 'opacity-100'}`}
                  style={{ height: `${fills[index]}px` }}
                />
              </div>
              
              {/* Month label */}
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[#A0A0A0] text-[8px]">
                {months[index]}
              </div>
              
              {/* Hover tooltip */}
              {activeIndex === index && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#171821] p-1.5 rounded text-white text-[10px] shadow-lg whitespace-nowrap z-10 animate-fade-in">
                  <div className="font-medium">Volume: {Math.round(fills[index] * 100 / height)}%</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-5 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#A9DFD8] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Volume</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#2B2B36] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
