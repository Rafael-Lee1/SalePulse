
import { useEffect, useState } from "react";
import { ChartAnimation } from "@/components/ui/chart/chart-animations";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { StatCard } from "./StatCard";
import { motion } from "framer-motion";

// Types
interface SalesData {
  name: string;
  sales: number;
  target: number;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0 
  }
};

export function SalesStatsContainer() {
  const [selectedFilter, setSelectedFilter] = useState<string>("weekly");
  const [animatedData, setAnimatedData] = useState<SalesData[]>([]);
  
  // Full data for different time periods
  const data = {
    daily: [
      { name: "Mon", sales: 2400, target: 2600 },
      { name: "Tue", sales: 1398, target: 1500 },
      { name: "Wed", sales: 9800, target: 9000 },
      { name: "Thu", sales: 3908, target: 4000 },
      { name: "Fri", sales: 4800, target: 4600 },
      { name: "Sat", sales: 3800, target: 3500 },
      { name: "Sun", sales: 4300, target: 4000 },
    ],
    weekly: [
      { name: "Week 1", sales: 4000, target: 4200 },
      { name: "Week 2", sales: 3000, target: 3200 },
      { name: "Week 3", sales: 2000, target: 2400 },
      { name: "Week 4", sales: 2780, target: 2600 },
    ],
    monthly: [
      { name: "Jan", sales: 4000, target: 4200 },
      { name: "Feb", sales: 3000, target: 3200 },
      { name: "Mar", sales: 2000, target: 2400 },
      { name: "Apr", sales: 2780, target: 2600 },
      { name: "May", sales: 1890, target: 2000 },
      { name: "Jun", sales: 2390, target: 2500 },
      { name: "Jul", sales: 3490, target: 3200 },
      { name: "Aug", sales: 2490, target: 2600 },
      { name: "Sep", sales: 2290, target: 2400 },
      { name: "Oct", sales: 3290, target: 3000 },
      { name: "Nov", sales: 2490, target: 2800 },
      { name: "Dec", sales: 3290, target: 3000 },
    ],
    yearly: [
      { name: "2020", sales: 24000, target: 25000 },
      { name: "2021", sales: 34000, target: 32000 },
      { name: "2022", sales: 42000, target: 40000 },
      { name: "2023", sales: 48000, target: 45000 },
    ],
  };
  
  // Calculate stats
  const getFilteredData = () => data[selectedFilter as keyof typeof data] || [];
  const currentData = getFilteredData();
  
  const totalSales = currentData.reduce((sum, item) => sum + item.sales, 0);
  const totalTarget = currentData.reduce((sum, item) => sum + item.target, 0);
  const averageSales = Math.round(totalSales / currentData.length);
  const percentageGrowth = Math.round((totalSales / totalTarget) * 100 - 100);
  
  // Animate data when changing filter
  useEffect(() => {
    setAnimatedData([]);
    
    // Gradually add data points for animation
    const filteredData = getFilteredData();
    const timer = setTimeout(() => {
      setAnimatedData(filteredData);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedFilter]);
  
  // Filters
  const filters = [
    { id: "daily", label: "Daily" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
    { id: "yearly", label: "Yearly" },
  ];

  return (
    <motion.div 
      className="w-full bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-[15px] font-semibold">Sales Statistics</h2>
        
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                selectedFilter === filter.id
                  ? "bg-[#A9DFD8] text-[#171821] font-medium"
                  : "bg-[#2B2B36] text-[#87888C] hover:bg-[#2B2B36]/80"
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard 
          title="Total Sales" 
          value={`$${totalSales.toLocaleString()}`} 
          change={percentageGrowth} 
          icon="DollarSign"
        />
        <StatCard 
          title="Target" 
          value={`$${totalTarget.toLocaleString()}`} 
          change={Math.round((totalTarget / totalSales - 1) * 100)} 
          icon="Target" 
        />
        <StatCard 
          title="Average" 
          value={`$${averageSales.toLocaleString()}`} 
          change={Math.round((averageSales / (totalTarget / currentData.length) - 1) * 100)} 
          icon="TrendingUp" 
        />
      </div>
      
      <div className="w-full h-[230px]">
        <ChartAnimation>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={animatedData}
              margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2B2B36" />
              <XAxis 
                dataKey="name" 
                stroke="#87888C" 
                fontSize={10}
                tickLine={false}
                axisLine={{ stroke: '#2B2B36' }}
              />
              <YAxis 
                stroke="#87888C" 
                fontSize={10}
                tickLine={false}
                axisLine={{ stroke: '#2B2B36' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#171821', 
                  border: 'none', 
                  borderRadius: '8px', 
                  color: 'white',
                  padding: '8px 12px'
                }}
                itemStyle={{ color: '#fff' }}
                formatter={(value) => [`$${value}`, '']}
                cursor={{ fill: 'rgba(169, 223, 216, 0.1)' }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                formatter={(value) => <span style={{ color: '#87888C', fontSize: '10px' }}>{value}</span>}
              />
              <Bar 
                dataKey="sales" 
                name="Sales" 
                fill="#A9DFD8" 
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
                animationEasing="ease-out"
              />
              <Bar 
                dataKey="target" 
                name="Target" 
                fill="#F2C8ED" 
                radius={[4, 4, 0, 0]}
                animationDuration={1000}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartAnimation>
      </div>
    </motion.div>
  );
}
