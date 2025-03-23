import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Area, AreaChart
} from "recharts";
import { TrendingUp, Clock, Activity } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AnimatedChart, dataPointAnimation } from "@/components/ui/chart/animated-chart";

// Type for the traffic data points
interface TrafficDataPoint {
  time: string;
  sales: number;
  returns: number;
  traffic: number;
}

export function DailyTrafficChart() {
  const [data, setData] = useState<TrafficDataPoint[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<TrafficDataPoint | null>(null);
  const [currentHour, setCurrentHour] = useState(9); // Start at 9 AM
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

  // Generate initial data
  useEffect(() => {
    generateInitialData();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Start real-time simulation
  useEffect(() => {
    // Update data every 2 seconds
    intervalRef.current = setInterval(() => {
      updateData();
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [data]);

  // Generate initial data set
  const generateInitialData = () => {
    const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
    const initialData: TrafficDataPoint[] = hours.map((hour, index) => {
      // Create a sales curve that peaks around lunch time
      const baseSales = 20 + Math.floor(Math.random() * 10);
      const lunchTimeFactor = index >= 2 && index <= 5 ? 1.5 : 1;
      const sales = Math.floor(baseSales * lunchTimeFactor * (1 + Math.random() * 0.3));
      
      return {
        time: hour,
        sales,
        returns: Math.floor(sales * 0.1 * Math.random()),
        traffic: sales + Math.floor(sales * 0.5 * Math.random())
      };
    });
    
    setData(initialData);
  };

  // Update data with random fluctuations to simulate real-time changes
  const updateData = () => {
    // Move to next hour if we've reached the end of the day
    if (currentHour >= 17) { // 5 PM
      setCurrentHour(9); // Reset to 9 AM
      generateInitialData();
      return;
    }

    setData(prevData => {
      return prevData.map((point, index) => {
        // Only update current hour and future hours
        if (index >= currentHour - 9) {
          const salesChange = Math.random() > 0.7 
            ? Math.floor(Math.random() * 15) * (Math.random() > 0.5 ? 1 : -1)
            : 0;
          
          const newSales = Math.max(10, point.sales + salesChange);
          const newReturns = Math.max(0, Math.floor(newSales * 0.1 * Math.random()));
          const newTraffic = newSales + Math.floor(newSales * 0.5 * Math.random());
          
          return {
            ...point,
            sales: newSales,
            returns: newReturns,
            traffic: newTraffic
          };
        }
        return point;
      });
    });

    // Move to next hour occasionally
    if (Math.random() > 0.7) {
      setCurrentHour(prev => Math.min(prev + 1, 17));
    }
  };

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#171821] border border-[#2B2B36] p-3 rounded-lg shadow-xl">
          <p className="text-[#A9DFD8] font-medium text-xs mb-1">{label}</p>
          <div className="space-y-1">
            <p className="text-[#0EA5E9] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]"></span>
              Traffic: {payload[2].value}
            </p>
            <p className="text-[#A9DFD8] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#A9DFD8]"></span>
              Sales: {payload[0].value}
            </p>
            <p className="text-[#F97316] text-xs flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
              Returns: {payload[1].value}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  // Simulated data breakdown for click interaction
  const handleChartClick = (data: any) => {
    if (data && data.activePayload) {
      setSelectedPoint(data.activePayload[0].payload);
    }
  };

  return (
    <motion.div 
      className="w-full bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-[15px] font-semibold flex items-center gap-2">
          <TrendingUp size={18} className="text-[#0EA5E9]" />
          Daily Traffic
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-[#87888C]" />
            <span className="text-[#87888C] text-xs">Live Data</span>
          </div>
          <div className="flex h-2 items-center gap-0.5">
            <motion.div 
              className="w-1 h-1 rounded-full bg-[#0EA5E9]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div 
              className="w-1 h-1 rounded-full bg-[#0EA5E9]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="w-1 h-1 rounded-full bg-[#0EA5E9]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </div>
      
      <div 
        className="relative h-[180px] w-full"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleChartClick}
      >
        <AnimatedChart>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2B2B36" vertical={false} />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#87888C', fontSize: isMobile ? 8 : 10 }}
                padding={{ left: 10, right: 10 }}
                tickFormatter={(value, index) => isMobile ? (index % 2 === 0 ? value : '') : value}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#87888C', fontSize: isMobile ? 8 : 10 }}
                width={30}
                // Format numbers on mobile
                tickFormatter={(value) => isMobile && value > 100 ? `${Math.floor(value/10)}0` : value}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area 
                type="monotone" 
                dataKey="sales" 
                stroke="#A9DFD8" 
                strokeWidth={2}
                fillOpacity={0.3} 
                fill="url(#colorSales)" 
                activeDot={{ 
                  r: isMobile ? 4 : 6, 
                  stroke: '#171821', 
                  strokeWidth: 2, 
                  fill: '#A9DFD8',
                  // Add a pulse animation to the active dot
                  style: { 
                    filter: isHovering ? 'drop-shadow(0 0 3px #A9DFD8)' : 'none'
                  }
                }} 
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
              />
              <Area 
                type="monotone" 
                dataKey="returns" 
                stroke="#F97316" 
                strokeWidth={2}
                fillOpacity={0.1} 
                fill="url(#colorReturns)" 
                activeDot={{ 
                  r: isMobile ? 3 : 5, 
                  stroke: '#171821', 
                  strokeWidth: 2, 
                  fill: '#F97316' 
                }} 
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
              />
              <Area 
                type="monotone" 
                dataKey="traffic" 
                stroke="#0EA5E9" 
                strokeWidth={2}
                fillOpacity={0.2} 
                fill="url(#colorTraffic)" 
                activeDot={{ 
                  r: isMobile ? 3 : 5, 
                  stroke: '#171821', 
                  strokeWidth: 2, 
                  fill: '#0EA5E9' 
                }} 
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </AnimatedChart>
      </div>
      
      {/* Data breakdown section - visible when a point is clicked */}
      <AnimatePresence>
        {selectedPoint && (
          <motion.div 
            className="mt-4 p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white text-xs font-medium flex items-center gap-1">
                <Activity size={12} className="text-[#0EA5E9]" />
                Data Breakdown: {selectedPoint.time}
              </h3>
              <button 
                className="text-[#87888C] text-xs hover:text-white transition-colors"
                onClick={() => setSelectedPoint(null)}
              >
                Close
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex flex-col">
                <span className="text-[#87888C]">Total Traffic</span>
                <span className="text-[#0EA5E9] font-medium">{selectedPoint.traffic}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#87888C]">Sales</span>
                <span className="text-[#A9DFD8] font-medium">{selectedPoint.sales}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#87888C]">Returns</span>
                <span className="text-[#F97316] font-medium">{selectedPoint.returns}</span>
              </div>
            </div>
            
            {/* Simulated product breakdown */}
            <div className="mt-2 pt-2 border-t border-[#2B2B36]">
              <div className="text-[#87888C] text-xs mb-1">Top Products</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {['Product A', 'Product B', 'Product C', 'Product D'].map((product, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white text-xs">{product}</span>
                    <span className="text-[#A9DFD8] text-xs">{Math.floor(selectedPoint.sales / (index + 1))}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#0EA5E9]"></span>
          <span className="text-[#87888C]">Traffic</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#A9DFD8]"></span>
          <span className="text-[#87888C]">Sales</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
          <span className="text-[#87888C]">Returns</span>
        </div>
      </div>
    </motion.div>
  );
}
