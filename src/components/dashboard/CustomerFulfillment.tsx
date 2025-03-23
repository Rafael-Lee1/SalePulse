
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

export function CustomerFulfillment() {
  const data = [
    { name: "Week 1", lastMonth: 3200, thisMonth: 3800 },
    { name: "Week 2", lastMonth: 3600, thisMonth: 4100 },
    { name: "Week 3", lastMonth: 3400, thisMonth: 4700 },
    { name: "Week 4", lastMonth: 4000, thisMonth: 5200 },
    { name: "Week 5", lastMonth: 4087, thisMonth: 5506 },
  ];

  return (
    <div className="w-[241px] bg-[#21222D] p-5 rounded-[10px] max-md:w-full">
      <h2 className="text-white text-[15px] font-semibold mb-5">
        Customer Fulfilment
      </h2>
      <div className="relative h-[106px] mb-[20px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#171821', 
                border: 'none', 
                borderRadius: '5px', 
                color: 'white' 
              }}
              labelStyle={{ color: '#A9DFD8' }}
            />
            <Line 
              type="monotone" 
              dataKey="lastMonth" 
              stroke="#A9DFD8" 
              strokeWidth={2} 
              dot={false} 
            />
            <Line 
              type="monotone" 
              dataKey="thisMonth" 
              stroke="#F2C8ED" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-[rgba(255,255,255,0.06)]">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#A9DFD8] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Last Month</span>
          </div>
          <span className="text-white text-[10px]">$4,087</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#F2C8ED] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">This Month</span>
          </div>
          <span className="text-white text-[10px]">$5,506</span>
        </div>
      </div>
    </div>
  );
}
