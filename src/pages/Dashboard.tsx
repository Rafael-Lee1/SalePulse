
import { useState, useEffect } from "react";
import { MainContent } from "@/components/dashboard/MainContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigation } from "@/contexts/NavigationContext";
import { motion } from "framer-motion";

export default function Dashboard() {
  const isMobile = useIsMobile();
  const { setActiveTab } = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div 
      className={`w-full ${isMobile ? 'mt-2' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isLoading ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <motion.div 
            className="relative w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full border-4 border-[#A9DFD8] border-t-transparent rounded-full"></div>
          </motion.div>
        </div>
      ) : (
        <MainContent />
      )}
    </motion.div>
  );
}
