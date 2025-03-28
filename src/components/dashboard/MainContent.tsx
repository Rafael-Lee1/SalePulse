
import { motion } from "framer-motion";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardLayout } from "./DashboardLayout";

export function MainContent() {
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

  return (
    <div className="flex-1 w-full">
      <motion.div 
        className="w-full bg-[#171821]/90 backdrop-blur-lg p-6 max-sm:p-3 rounded-3xl max-md:h-auto overflow-y-auto border border-white/5 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <DashboardHeader />
        <DashboardLayout />
      </motion.div>
    </div>
  );
}
