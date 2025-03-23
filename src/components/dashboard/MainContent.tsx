
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Bell, 
  BarChart, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Package, 
  Clock,
  Search,
  ArrowUpRight,
  Moon,
  Sun
} from "lucide-react";
import { SalesStats } from "./SalesStats";
import { LevelChart } from "./LevelChart";
import { TopProducts } from "./TopProducts";
import { CustomerFulfillment } from "./CustomerFulfillment";
import { EarningsWidget } from "./EarningsWidget";
import { VisitorInsights } from "./VisitorInsights";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigation } from "@/contexts/NavigationContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MainContent() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { setActiveTab } = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
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
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex-1">
      <div className="w-full bg-[#171821]/90 backdrop-blur-lg p-6 max-sm:p-4 rounded-3xl max-md:h-auto overflow-y-auto border border-white/5 shadow-xl">
        <motion.div 
          className="flex items-center justify-between mb-10 max-sm:mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-1">
            <div className="text-white text-sm font-medium">{formattedDate}</div>
            <div className="text-[#A9DFD8] text-lg font-bold flex items-center gap-2">
              <Clock size={18} />
              {formattedTime}
            </div>
          </div>
          
          <div className="w-[504px] relative max-lg:w-[300px] max-md:w-full">
            <div className="w-full h-11 bg-[#21222D]/80 backdrop-blur-sm flex items-center px-4 rounded-lg border border-white/5">
              <Search size={16} className="text-[#87888C] mr-2" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-transparent text-white outline-none placeholder:text-[#87888C]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-[15px]">
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
            <div className="w-9 h-9 rounded-full bg-[#21222D]/80 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all hover:scale-105 cursor-pointer border border-white/5" onClick={() => navigateTo("/profile")}>
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overview Section with title */}
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

          <motion.div 
            className="flex justify-between items-center mt-6 mb-2"
            variants={itemVariants}
          >
            <h2 className="text-white text-xl font-bold">Products & Customers</h2>
            <div className="text-[#A9DFD8] text-sm font-medium cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => navigateTo("/product")}>
              View Products
              <ArrowUpRight size={16} />
            </div>
          </motion.div>
          
          <motion.div 
            className="flex gap-5 max-lg:flex-col"
            variants={itemVariants}
          >
            <motion.div 
              className="flex-1 cursor-pointer" 
              onClick={() => navigateTo("/product")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <TopProducts />
            </motion.div>
            <motion.div 
              className="cursor-pointer" 
              onClick={() => navigateTo("/leaderboard")}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <CustomerFulfillment />
            </motion.div>
          </motion.div>

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
          
          {/* AI Insights Section */}
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
        </motion.div>
      </div>
    </div>
  );
}
