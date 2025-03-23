
import { useState } from "react";
import { Bell, Moon, Sun, Search, Clock, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useNavigation } from "@/contexts/NavigationContext";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSidebar } from "@/components/ui/sidebar";

export function DashboardHeader() {
  const navigate = useNavigate();
  const { setActiveTab } = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTime] = useState(new Date());
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();
  
  // Navigate to corresponding page when clicking on a widget
  const navigateTo = (path: string) => {
    // Set the active tab for sidebar highlighting
    const tab = path === "/" ? "dashboard" : path.substring(1);
    setActiveTab(tab);
    navigate(path);
  };

  // Format date for display
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentTime);
  
  // Format time for display
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(currentTime);

  // Toggle mobile sidebar
  const handleToggleSidebar = () => {
    setOpenMobile(true);
  };

  return (
    <motion.div 
      className="flex items-center justify-between mb-10 max-sm:mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 w-full max-sm:justify-between">
        {isMobile && (
          <button 
            onClick={handleToggleSidebar}
            className="p-2 rounded-md bg-[#21222D]/80 hover:bg-[#21222D] transition-colors text-white md:hidden"
          >
            <Menu size={18} />
            <span className="sr-only">Toggle menu</span>
          </button>
        )}
        <div className="flex flex-col gap-1">
          <div className="text-white text-sm font-medium max-sm:text-xs">{formattedDate}</div>
          <div className="text-[#A9DFD8] text-lg font-bold flex items-center gap-2 max-sm:text-base">
            <Clock size={isMobile ? 14 : 18} />
            {formattedTime}
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-[504px] relative max-lg:w-[300px]">
        <div className="w-full h-11 max-sm:h-10 bg-[#21222D]/80 backdrop-blur-sm flex items-center px-4 rounded-lg border border-white/5">
          <Search size={16} className="text-[#87888C] mr-2" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-transparent text-white outline-none placeholder:text-[#87888C] text-sm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      
      <div className="flex items-center gap-[15px] max-sm:self-end max-sm:-mt-14">
        <button 
          className="p-2 rounded-full bg-[#21222D]/80 backdrop-blur-sm transition-all hover:bg-[#21222D] border border-white/5"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? 
            <Sun size={16} className="text-[#A9DFD8]" /> : 
            <Moon size={16} className="text-[#A9DFD8]" />
          }
          <span className="sr-only">Toggle theme</span>
        </button>
        <div className="relative">
          <button 
            className="p-2 rounded-full bg-[#21222D]/80 backdrop-blur-sm transition-all hover:bg-[#21222D] border border-white/5"
            onClick={() => setHasNotifications(!hasNotifications)}
          >
            <Bell size={16} className="text-white" />
            <span className="sr-only">Notifications</span>
            {hasNotifications && (
              <motion.div 
                className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </button>
        </div>
        <div 
          className="w-9 h-9 rounded-full bg-[#21222D]/80 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all hover:scale-105 cursor-pointer border border-white/5" 
          onClick={() => navigateTo("/profile")}
        >
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}
