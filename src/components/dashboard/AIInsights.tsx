
import { TrendingUp, BarChart, ShoppingCart, Users, Package } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AIInsights() {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="mt-7 p-6 bg-[#21222D]/80 backdrop-blur-sm rounded-[16px] border border-white/5 shadow-lg"
      variants={itemVariants}
    >
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white text-[17px] font-semibold flex items-center gap-2">
          <TrendingUp size={18} className="text-[#A9DFD8]" />
          AI Insights
        </h3>
        <span className="text-[#87888C] text-xs bg-[#171821]/80 px-3 py-1 rounded-full">Updated just now</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div 
          className={cn(
            "p-4 bg-[#171821]/60 rounded-xl border border-[#2B2B36] transition-all duration-300",
            "hover:border-[#A9DFD8] hover:shadow-[0_0_20px_rgba(169,223,216,0.1)]"
          )}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#A9DFD8]/10">
              <BarChart size={18} className="text-[#A9DFD8]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Revenue Forecast</h4>
              <p className="text-[#87888C] text-xs mt-2 leading-relaxed">Projected to increase by 12% next month based on current trends. Consider expanding marketing efforts.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={cn(
            "p-4 bg-[#171821]/60 rounded-xl border border-[#2B2B36] transition-all duration-300",
            "hover:border-[#FEB95A] hover:shadow-[0_0_20px_rgba(254,185,90,0.1)]"
          )}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#FEB95A]/10">
              <ShoppingCart size={18} className="text-[#FEB95A]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Order Optimization</h4>
              <p className="text-[#87888C] text-xs mt-2 leading-relaxed">Consider restocking "Home Decor Range" - inventory low, demand increasing by 23% weekly.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={cn(
            "p-4 bg-[#171821]/60 rounded-xl border border-[#2B2B36] transition-all duration-300",
            "hover:border-[#F2C8ED] hover:shadow-[0_0_20px_rgba(242,200,237,0.1)]"
          )}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#F2C8ED]/10">
              <Users size={18} className="text-[#F2C8ED]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Customer Insights</h4>
              <p className="text-[#87888C] text-xs mt-2 leading-relaxed">New customer acquisition is up 3% this week. Retention at 78%. Focus on email campaigns for best results.</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={cn(
            "p-4 bg-[#171821]/60 rounded-xl border border-[#2B2B36] transition-all duration-300",
            "hover:border-[#20AEF3] hover:shadow-[0_0_20px_rgba(32,174,243,0.1)]"
          )}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-[#20AEF3]/10">
              <Package size={18} className="text-[#20AEF3]" />
            </div>
            <div>
              <h4 className="text-white text-sm font-medium">Product Growth</h4>
              <p className="text-[#87888C] text-xs mt-2 leading-relaxed">Bathroom Essentials category growing 19% faster than others. Consider expanding this product line.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
