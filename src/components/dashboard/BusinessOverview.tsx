
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SalesStats } from "./SalesStats";
import { LevelChart } from "./LevelChart";
import { useNavigation } from "@/contexts/NavigationContext";
import { useNavigate } from "react-router-dom";

export function BusinessOverview() {
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
        className="flex justify-between items-center mb-2"
        variants={itemVariants}
      >
        <h2 className="text-white text-xl font-bold">Business Overview</h2>
        <div className="text-[#A9DFD8] text-sm font-medium cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => navigateTo("/sales-report")}>
          View Reports
          <ArrowUpRight size={16} />
        </div>
      </motion.div>
      
      <motion.div 
        className="flex gap-5 max-lg:flex-col"
        variants={itemVariants}
      >
        <motion.div 
          className="flex-1 cursor-pointer transform transition-all hover:scale-[1.01]" 
          onClick={() => navigateTo("/sales-report")}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <SalesStats />
        </motion.div>
        <motion.div 
          className="flex-1 cursor-pointer transform transition-all hover:scale-[1.01]" 
          onClick={() => navigateTo("/sales-report")}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <LevelChart />
        </motion.div>
      </motion.div>
    </>
  );
}
