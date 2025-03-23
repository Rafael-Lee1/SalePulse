
import { useState, useEffect } from "react";
import { MainContent } from "@/components/dashboard/MainContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigation } from "@/contexts/NavigationContext";

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
    <div className={`w-full ${isMobile ? 'mt-2' : ''}`}>
      {isLoading ? (
        <div className="w-full h-[60vh] flex items-center justify-center">
          <div className="relative w-16 h-16">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-[#A9DFD8] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      ) : (
        <MainContent />
      )}
    </div>
  );
}
