
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { AnimatedChart } from '@/components/ui/chart/animated-chart';
import { AnimatedNumber } from '@/components/ui/animated-number';

export default function SalesReport() {
  const [salesData, setSalesData] = useState([
    { name: 'Jan', sales: 24200 },
    { name: 'Feb', sales: 28300 },
    { name: 'Mar', sales: 27100 },
    { name: 'Apr', sales: 32600 },
    { name: 'May', sales: 30800 },
    { name: 'Jun', sales: 34100 },
    { name: 'Jul', sales: 31900 },
    { name: 'Aug', sales: 35700 },
    { name: 'Sep', sales: 33400 },
    { name: 'Oct', sales: 37800 },
    { name: 'Nov', sales: 36500 },
    { name: 'Dec', sales: 48284 },
  ]);
  
  // Calculate summary values
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const revenue = Math.round(totalSales * 0.8);
  const expenses = Math.round(totalSales * 0.2);
  const profit = revenue - expenses;
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSalesData(prevData => 
        prevData.map(item => ({
          ...item,
          sales: item.sales + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 500)
        }))
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Sales Report</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <motion.div 
            className="bg-[#21222D] p-4 rounded-[10px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-[#87888C] text-sm">Total Sales</h3>
            <p className="text-white text-2xl font-bold">$
              <AnimatedNumber 
                value={totalSales} 
                showPulse={true}
                pulseColor="#A9DFD8"
              />
            </p>
          </motion.div>
          <motion.div 
            className="bg-[#21222D] p-4 rounded-[10px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-[#87888C] text-sm">Revenue</h3>
            <p className="text-[#A9DFD8] text-2xl font-bold">$
              <AnimatedNumber 
                value={revenue} 
                showPulse={true}
                pulseColor="#A9DFD8"
              />
            </p>
          </motion.div>
          <motion.div 
            className="bg-[#21222D] p-4 rounded-[10px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-[#87888C] text-sm">Expenses</h3>
            <p className="text-[#FEB95A] text-2xl font-bold">$
              <AnimatedNumber 
                value={expenses} 
                showPulse={true}
                pulseColor="#FEB95A"
              />
            </p>
          </motion.div>
          <motion.div 
            className="bg-[#21222D] p-4 rounded-[10px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-[#87888C] text-sm">Profit</h3>
            <p className="text-[#F2C8ED] text-2xl font-bold">$
              <AnimatedNumber 
                value={profit} 
                showPulse={true}
                pulseColor="#F2C8ED"
              />
            </p>
          </motion.div>
        </div>
        
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
        
        <motion.div 
          className="bg-[#21222D] p-5 rounded-[10px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2 className="text-white text-[15px] font-semibold mb-5">Top Selling Products</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
                <tr>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Sold</th>
                  <th className="pb-3 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => {
                  const productSold = Math.floor(Math.random() * 500);
                  const productRevenue = Math.floor(Math.random() * 10000);
                  
                  return (
                    <tr key={i} className="border-b border-[#2B2B36] last:border-0">
                      <td className="py-4 text-white text-sm">Product {i}</td>
                      <td className="py-4 text-white text-sm">Category {i}</td>
                      <td className="py-4 text-white text-sm">
                        <AnimatedNumber 
                          value={productSold} 
                          suffix=" units" 
                          useSpring={false}
                        />
                      </td>
                      <td className="py-4 text-white text-sm">$
                        <AnimatedNumber value={productRevenue} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
