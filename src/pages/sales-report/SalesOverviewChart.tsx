
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { AnimatedChart } from '@/components/ui/chart/animated-chart';

interface SalesOverviewChartProps {
  salesData: Array<{ name: string; sales: number }>;
}

export function SalesOverviewChart({ salesData }: SalesOverviewChartProps) {
  return (
    <motion.div 
      className="bg-[#21222D] p-5 rounded-[10px] mb-6 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <h2 className="text-white text-[15px] font-semibold mb-5">Sales Overview</h2>
      <div className="h-64 w-full">
        <AnimatedChart>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
              <defs>
                <linearGradient id="colorSalesReport" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A9DFD8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#A9DFD8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2B2B36" />
              <XAxis 
                dataKey="name" 
                stroke="#87888C" 
                tick={{ fill: '#87888C', fontSize: 12 }}
                axisLine={{ stroke: '#2B2B36' }}
                tickLine={false}
              />
              <YAxis 
                stroke="#87888C" 
                tick={{ fill: '#87888C', fontSize: 12 }}
                axisLine={{ stroke: '#2B2B36' }}
                tickLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{ 
                  backgroundColor: '#171821', 
                  border: 'none', 
                  borderRadius: '8px', 
                  color: 'white',
                  padding: '8px 12px'
                }}
                labelStyle={{ color: '#A9DFD8', fontWeight: 600, marginBottom: 5 }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
                cursor={{ stroke: '#A9DFD8', strokeWidth: 1, strokeDasharray: '5 5' }}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#A9DFD8"
                fillOpacity={1}
                fill="url(#colorSalesReport)"
                strokeWidth={2}
                activeDot={{ 
                  r: 6, 
                  stroke: '#171821', 
                  strokeWidth: 2, 
                  fill: '#A9DFD8'
                }}
                isAnimationActive={true}
                animationDuration={1000}
                animationEasing="ease-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </AnimatedChart>
      </div>
      
      {/* Animated pulse to indicate real-time data */}
      <motion.div
        className="absolute top-5 right-5 w-2 h-2 rounded-full bg-[#A9DFD8]"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
