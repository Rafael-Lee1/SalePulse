
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedNumber } from '@/components/ui/animated-number';

interface SalesStatsProps {
  salesData: Array<{ name: string; sales: number }>;
}

export function SalesStats({ salesData }: SalesStatsProps) {
  // Calculate summary values
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const revenue = Math.round(totalSales * 0.8);
  const expenses = Math.round(totalSales * 0.2);
  const profit = revenue - expenses;
  
  return (
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
  );
}
