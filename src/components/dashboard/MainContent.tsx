
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
  ArrowUpRight
} from "lucide-react";
import { SalesStats } from "./SalesStats";
import { LevelChart } from "./LevelChart";
import { TopProducts } from "./TopProducts";
import { CustomerFulfillment } from "./CustomerFulfillment";
import { EarningsWidget } from "./EarningsWidget";
import { VisitorInsights } from "./VisitorInsights";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigation } from "@/contexts/NavigationContext";

export function MainContent() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { setActiveTab } = useNavigation();
  const [searchValue, setSearchValue] = useState("");
  const [hasNotifications, setHasNotifications] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  
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

  return (
    <div className="flex-1">
      <div className="w-full bg-[#171821] p-6 max-sm:p-4 rounded-3xl max-md:h-auto overflow-y-auto">
        <div className="flex items-center justify-between mb-10 max-sm:mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <div className="flex flex-col gap-1">
            <div className="text-white text-sm font-medium">{formattedDate}</div>
            <div className="text-[#A9DFD8] text-lg font-bold flex items-center gap-2">
              <Clock size={18} />
              {formattedTime}
            </div>
          </div>
          
          <div className="w-[504px] relative max-lg:w-[300px] max-md:w-full">
            <div className="w-full h-11 bg-[#21222D] flex items-center px-4 rounded-lg">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-transparent text-white outline-none"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-[15px]">
            <div className="relative">
              <button 
                className="p-2 rounded-full bg-[#21222D] transition-transform hover:scale-105 active:scale-95"
                onClick={() => setHasNotifications(!hasNotifications)}
              >
                <Bell size={16} className="text-white" />
                <span className="sr-only">Notifications</span>
                {hasNotifications && (
                  <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1 animate-pulse" />
                )}
              </button>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#21222D] flex items-center justify-center overflow-hidden transition-transform hover:scale-105 cursor-pointer" onClick={() => navigateTo("/profile")}>
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {/* Overview Section with title */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-white text-xl font-bold">Business Overview</h2>
            <div className="text-[#A9DFD8] text-sm font-medium cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => navigateTo("/sales-report")}>
              View Reports
              <ArrowUpRight size={16} />
            </div>
          </div>
          
          <div 
            className="flex gap-3.5 max-lg:flex-col cursor-pointer transform transition-transform hover:scale-[1.01]" 
            onClick={() => navigateTo("/sales-report")}
          >
            <SalesStats />
            <LevelChart />
          </div>

          <div className="flex justify-between items-center mt-4 mb-2">
            <h2 className="text-white text-xl font-bold">Products & Customers</h2>
            <div className="text-[#A9DFD8] text-sm font-medium cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => navigateTo("/product")}>
              View Products
              <ArrowUpRight size={16} />
            </div>
          </div>
          
          <div className="flex gap-3.5 max-lg:flex-col">
            <div 
              className="flex-1 cursor-pointer transform transition-transform hover:scale-[1.01]" 
              onClick={() => navigateTo("/product")}
            >
              <TopProducts />
            </div>
            <div 
              className="cursor-pointer transform transition-transform hover:scale-[1.01]" 
              onClick={() => navigateTo("/leaderboard")}
            >
              <CustomerFulfillment />
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 mb-2">
            <h2 className="text-white text-xl font-bold">Performance</h2>
            <div className="text-[#A9DFD8] text-sm font-medium cursor-pointer flex items-center gap-1 hover:text-white transition-colors" onClick={() => navigateTo("/order")}>
              View Orders
              <ArrowUpRight size={16} />
            </div>
          </div>
          
          <div className="flex gap-3.5 max-lg:flex-col">
            <div 
              className="cursor-pointer transform transition-transform hover:scale-[1.01]" 
              onClick={() => navigateTo("/sales-report")}
            >
              <EarningsWidget />
            </div>
            <div 
              className="cursor-pointer transform transition-transform hover:scale-[1.01]" 
              onClick={() => navigateTo("/history")}
            >
              <VisitorInsights />
            </div>
          </div>
          
          {/* AI Insights Section */}
          <div className="mt-5 p-5 bg-[#21222D] rounded-[10px] border border-[#2B2B36]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white text-[15px] font-semibold flex items-center gap-2">
                <TrendingUp size={16} className="text-[#A9DFD8]" />
                AI Insights
              </h3>
              <span className="text-[#87888C] text-[10px]">Updated just now</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-[#171821] rounded-lg border border-[#2B2B36] hover:border-[#A9DFD8] transition-colors">
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-[#A9DFD8]/10">
                    <BarChart size={16} className="text-[#A9DFD8]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Revenue Forecast</h4>
                    <p className="text-[#87888C] text-xs mt-1">Projected to increase by 12% next month based on current trends.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-[#171821] rounded-lg border border-[#2B2B36] hover:border-[#FEB95A] transition-colors">
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-[#FEB95A]/10">
                    <ShoppingCart size={16} className="text-[#FEB95A]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Order Optimization</h4>
                    <p className="text-[#87888C] text-xs mt-1">Consider restocking "Home Decor Range" - inventory low, demand increasing.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-[#171821] rounded-lg border border-[#2B2B36] hover:border-[#F2C8ED] transition-colors">
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-[#F2C8ED]/10">
                    <Users size={16} className="text-[#F2C8ED]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Customer Insights</h4>
                    <p className="text-[#87888C] text-xs mt-1">New customer acquisition is up 3% this week. Retention at 78%.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-[#171821] rounded-lg border border-[#2B2B36] hover:border-[#20AEF3] transition-colors">
                <div className="flex items-start gap-2">
                  <div className="p-2 rounded-full bg-[#20AEF3]/10">
                    <Package size={16} className="text-[#20AEF3]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-medium">Product Growth</h4>
                    <p className="text-[#87888C] text-xs mt-1">Bathroom Essentials category growing 19% faster than others.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
