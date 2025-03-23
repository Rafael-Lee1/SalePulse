
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

export function VisitorInsights() {
  const data = [
    { name: "Jan", visitors: 500 },
    { name: "Feb", visitors: 800 },
    { name: "Mar", visitors: 1200 },
    { name: "Apr", visitors: 900 },
    { name: "May", visitors: 1500 },
    { name: "Jun", visitors: 2000 },
    { name: "Jul", visitors: 1800 },
    { name: "Aug", visitors: 2200 },
    { name: "Sep", visitors: 2600 },
    { name: "Oct", visitors: 2300 },
    { name: "Nov", visitors: 1900 },
    { name: "Dec", visitors: 2100 },
  ];

  return (
    <div className="flex-1">
      <div className="w-full bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-5">
          Visitor Insights
        </h2>
        <div className="relative h-[200px] mb-5">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'white', fontSize: 10 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#171821', 
                  border: 'none', 
                  borderRadius: '5px', 
                  color: 'white' 
                }}
                labelStyle={{ color: '#A9DFD8' }}
              />
              <Area 
                type="monotone" 
                dataKey="visitors" 
                stroke="#A9DFD8" 
                fillOpacity={1} 
                fill="url(#colorVisitors)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
