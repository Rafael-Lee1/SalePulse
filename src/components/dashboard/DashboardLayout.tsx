
import { motion } from "framer-motion";
import { SalesStats } from "./sales-stats";
import { VisitorInsights } from "./visitor-insights";
import { lazy, Suspense } from "react";

// Lazy load components that are further down the page
const CustomerFulfillment = lazy(() => import("./CustomerFulfillment").then(mod => ({ default: mod.CustomerFulfillment })));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

export function DashboardLayout() {
  return (
    <motion.div 
      className="flex flex-col gap-6 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Dashboard Content */}
      <motion.div variants={itemVariants} className="w-full">
        <SalesStats />
      </motion.div>
      
      {/* Middle Section - KPI Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          {/* Visitor Insights */}
          <VisitorInsights />
          
          {/* Customer Fulfillment - Only on larger screens in this position */}
          <div className="hidden lg:block">
            <Suspense fallback={<div className="h-[200px] w-full bg-[#21222D]/70 rounded-[16px] animate-pulse"></div>}>
              <CustomerFulfillment />
            </Suspense>
          </div>
        </div>
        
        {/* Performance Section */}
        <div className="flex flex-col gap-6 h-full">
          <motion.div 
            className="w-full bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-white text-[15px] font-semibold mb-4">Performance Overview</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
                <div className="text-[#87888C] text-xs mb-1">Conversion Rate</div>
                <div className="text-white text-sm font-medium">4.7%</div>
                <div className="text-[#A9DFD8] text-[8px] flex items-center mt-1">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="#A9DFD8"/>
                  </svg>
                  +0.8%
                </div>
              </div>
              <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
                <div className="text-[#87888C] text-xs mb-1">Avg. Order Value</div>
                <div className="text-white text-sm font-medium">$85.20</div>
                <div className="text-[#A9DFD8] text-[8px] flex items-center mt-1">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="#A9DFD8"/>
                  </svg>
                  +2.4%
                </div>
              </div>
              <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
                <div className="text-[#87888C] text-xs mb-1">Growth</div>
                <div className="text-white text-sm font-medium">+23.4%</div>
                <div className="text-[#A9DFD8] text-[8px] flex items-center mt-1">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="#A9DFD8"/>
                  </svg>
                  +5.2%
                </div>
              </div>
              <div className="p-3 bg-[#171821]/60 rounded-lg backdrop-blur-sm">
                <div className="text-[#87888C] text-xs mb-1">Customer Satisfaction</div>
                <div className="text-white text-sm font-medium">92%</div>
                <div className="text-[#A9DFD8] text-[8px] flex items-center mt-1">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0L7.4641 6H0.535898L4 0Z" fill="#A9DFD8"/>
                  </svg>
                  +1.5%
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg flex-1"
            variants={itemVariants}
          >
            <h2 className="text-white text-[15px] font-semibold mb-4">Daily Traffic</h2>
            <div className="h-[150px] w-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[#87888C] text-sm">Traffic chart will appear here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Customer Fulfillment - On mobile, show it here */}
      <motion.div variants={itemVariants} className="lg:hidden w-full">
        <Suspense fallback={<div className="h-[200px] w-full bg-[#21222D]/70 rounded-[16px] animate-pulse"></div>}>
          <CustomerFulfillment />
        </Suspense>
      </motion.div>
      
      {/* Bottom Section - Detailed Breakdown */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg">
          <h2 className="text-white text-[15px] font-semibold mb-4">Top Products</h2>
          <div className="space-y-3">
            {["Product A", "Product B", "Product C"].map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[#E8E8E8] text-sm">{product}</span>
                <span className="text-[#A9DFD8] text-xs">${(Math.random() * 1000).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg">
          <h2 className="text-white text-[15px] font-semibold mb-4">Revenue Sources</h2>
          <div className="space-y-3">
            {["Online Store", "Marketplace", "Direct Sales"].map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[#E8E8E8] text-sm">{source}</span>
                <span className="text-[#F2C8ED] text-xs">${(Math.random() * 1000).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#21222D]/70 backdrop-blur-sm p-5 rounded-[16px] border border-white/5 shadow-lg">
          <h2 className="text-white text-[15px] font-semibold mb-4">Customer Demographics</h2>
          <div className="space-y-3">
            {["Age 18-24", "Age 25-34", "Age 35-44"].map((demo, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[#E8E8E8] text-sm">{demo}</span>
                <span className="text-[#FEB95A] text-xs">{Math.round(Math.random() * 100)}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
