
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { EarningsWidget } from "./EarningsWidget";
import { VisitorInsights } from "./VisitorInsights";
import { useNavigation } from "@/contexts/NavigationContext";
import { useNavigate } from "react-router-dom";

export function PerformanceSection() {
  const navigate = useNavigate();
  const { setActiveTab } = useNavigation();
  
  // Navigate to corresponding page when clicking on a widget
  const navigateTo = (path: string) => {
    // Set the active tab for sidebar highlighting
    const tab = path === "/" ? "dashboard" : path.substring(1);
    setActiveTab(tab);
    navigate(path);
  };
  
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
    <>
      <motion.div 
        className="flex justify-between items-center mt-6 mb-2"
        variants={itemVariants}
      >
        <h2 className="text-white text-xl font-bold">Performance</h2>
        <div className="text-[#A9DFD8] text-sm font-medium cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => navigateTo("/order")}>
          View Orders
          <ArrowUpRight size={16} />
        </div>
      </motion.div>
      
      <motion.div 
        className="flex gap-5 max-lg:flex-col"
        variants={itemVariants}
      >
        <motion.div 
          className="cursor-pointer" 
          onClick={() => navigateTo("/sales-report")}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <EarningsWidget />
        </motion.div>
        <motion.div 
          className="cursor-pointer" 
          onClick={() => navigateTo("/history")}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <VisitorInsights />
        </motion.div>
      </motion.div>
    </>
  );
}
