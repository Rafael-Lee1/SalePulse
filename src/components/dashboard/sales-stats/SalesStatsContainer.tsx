
import { useState } from "react";
import { motion } from "framer-motion";
import { SalesFilterBar } from "./SalesFilterBar";
import { StatsCardGrid } from "./StatsCardGrid";
import { SalesChartContainer } from "./SalesChartContainer";
import { salesData, timeFilters, calculateSalesStats, TimeFilter } from "./salesDataHelpers";

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

export function SalesStatsContainer() {
  const [selectedFilter, setSelectedFilter] = useState<TimeFilter>("weekly");
  
  // Get filtered data and calculate stats
  const currentData = salesData[selectedFilter];
  const { 
    totalSales, 
    totalTarget, 
    averageSales, 
    percentageGrowth, 
    targetGrowth, 
    averageGrowth 
  } = calculateSalesStats(currentData);

  return (
    <motion.div 
      className="w-full bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <SalesFilterBar 
        filters={timeFilters} 
        selectedFilter={selectedFilter} 
        onFilterChange={(filterId) => setSelectedFilter(filterId as TimeFilter)} 
      />
      
      <StatsCardGrid 
        totalSales={totalSales}
        totalTarget={totalTarget}
        averageSales={averageSales}
        percentageGrowth={percentageGrowth}
        targetGrowth={targetGrowth}
        averageGrowth={averageGrowth}
      />
      
      <SalesChartContainer 
        selectedFilter={selectedFilter} 
        data={salesData} 
      />
    </motion.div>
  );
}
