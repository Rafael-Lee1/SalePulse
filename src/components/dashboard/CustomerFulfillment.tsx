
import { useState, useEffect } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts";
import { TrendingUp } from "lucide-react";

export function CustomerFulfillment() {
  const [chartData, setChartData] = useState([
    { name: "Week 1", lastMonth: 0, thisMonth: 0 },
    { name: "Week 2", lastMonth: 0, thisMonth: 0 },
    { name: "Week 3", lastMonth: 0, thisMonth: 0 },
    { name: "Week 4", lastMonth: 0, thisMonth: 0 },
    { name: "Week 5", lastMonth: 0, thisMonth: 0 },
  ]);
  
  const targetData = [
    { name: "Week 1", lastMonth: 3200, thisMonth: 3800 },
    { name: "Week 2", lastMonth: 3600, thisMonth: 4100 },
    { name: "Week 3", lastMonth: 3400, thisMonth: 4700 },
    { name: "Week 4", lastMonth: 4000, thisMonth: 5200 },
    { name: "Week 5", lastMonth: 4087, thisMonth: 5506 },
  ];
  
  // Animate chart data
  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev];
        let completed = true;
        
        for (let i = 0; i < prev.length; i++) {
          const lastMonthDiff = targetData[i].lastMonth - prev[i].lastMonth;
          const thisMonthDiff = targetData[i].thisMonth - prev[i].thisMonth;
          
          if (lastMonthDiff > 0 || thisMonthDiff > 0) {
            completed = false;
            newData[i] = {
              name: prev[i].name,
              lastMonth: lastMonthDiff > 0 ? prev[i].lastMonth + Math.min(200, lastMonthDiff) : prev[i].lastMonth,
              thisMonth: thisMonthDiff > 0 ? prev[i].thisMonth + Math.min(200, thisMonthDiff) : prev[i].thisMonth,
            };
          }
        }
        
        if (completed) {
          clearInterval(interval);
        }
        
        return newData;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  const [activeMonth, setActiveMonth] = useState<'last' | 'this'>('this');

  return (
    <div className="w-full bg-[#21222D] p-5 rounded-[16px] max-md:w-full hover:shadow-lg transition-shadow duration-300 border border-white/5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white text-[15px] font-semibold">Customer Fulfilment</h2>
        <div className="p-1.5 rounded-full bg-[#F2C8ED]/10">
          <TrendingUp size={14} className="text-[#F2C8ED]" />
        </div>
      </div>
      
      <div className="relative h-[106px] mb-[20px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F2C8ED" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#F2C8ED" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#171821', 
                border: 'none', 
                borderRadius: '5px', 
                color: 'white',
                fontSize: '10px',
                padding: '8px'
              }}
              labelStyle={{ color: '#A9DFD8', fontSize: '10px', fontWeight: 'bold' }}
            />
            <Area 
              type="monotone" 
              dataKey="lastMonth" 
              stroke="#A9DFD8" 
              strokeWidth={2} 
              fillOpacity={1}
              fill="url(#colorLastMonth)"
              dot={{ r: 2, fill: "#A9DFD8" }}
              activeDot={{ r: 4, fill: "#A9DFD8" }}
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="ease-out"
            />
            <Area 
              type="monotone" 
              dataKey="thisMonth" 
              stroke="#F2C8ED" 
              strokeWidth={2} 
              fillOpacity={1}
              fill="url(#colorThisMonth)"
              dot={{ r: 2, fill: "#F2C8ED" }}
              activeDot={{ r: 4, fill: "#F2C8ED" }}
              isAnimationActive={true}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between items-center pt-3 border-t border-[rgba(255,255,255,0.06)]">
        <div 
          className={`flex flex-col items-center cursor-pointer ${activeMonth === 'last' ? 'opacity-100' : 'opacity-60'} transition-opacity duration-200`}
          onClick={() => setActiveMonth('last')}
        >
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#A9DFD8] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Last Month</span>
          </div>
          <span className="text-white text-[10px] font-medium">$4,087</span>
        </div>
        
        <div 
          className={`flex flex-col items-center cursor-pointer ${activeMonth === 'this' ? 'opacity-100' : 'opacity-60'} transition-opacity duration-200`}
          onClick={() => setActiveMonth('this')}
        >
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#F2C8ED] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">This Month</span>
          </div>
          <span className="text-white text-[10px] font-medium">$5,506</span>
        </div>
      </div>
    </div>
  );
}
