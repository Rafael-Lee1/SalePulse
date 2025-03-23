
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigation } from "@/contexts/NavigationContext";
import { 
  BarChart, 
  Clock, 
  Heart, 
  LogOut, 
  MessageCircle, 
  Package, 
  Settings, 
  ShoppingCart, 
  Trophy, 
  User,
  ChevronRight
} from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function AppSidebar() {
  const { activeTab, setActiveTab } = useNavigation();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Set active tab based on current route when component mounts
  React.useEffect(() => {
    const path = location.pathname.split('/')[1] || 'dashboard';
    setActiveTab(path);
  }, [location.pathname, setActiveTab]);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <BarChart size={isMobile ? 18 : 16} /> },
    { name: "Profile", path: "/profile", icon: <User size={isMobile ? 18 : 16} /> },
    { name: "Leaderboard", path: "/leaderboard", icon: <Trophy size={isMobile ? 18 : 16} /> },
    { name: "Order", path: "/order", icon: <ShoppingCart size={isMobile ? 18 : 16} /> },
    { name: "Product", path: "/product", icon: <Package size={isMobile ? 18 : 16} /> },
    { name: "Sales Report", path: "/sales-report", icon: <BarChart size={isMobile ? 18 : 16} /> },
    { name: "Message", path: "/message", icon: <MessageCircle size={isMobile ? 18 : 16} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={isMobile ? 18 : 16} /> },
    { name: "Favourite", path: "/favourite", icon: <Heart size={isMobile ? 18 : 16} /> },
    { name: "History", path: "/history", icon: <Clock size={isMobile ? 18 : 16} /> },
    { name: "Signout", path: "/signout", icon: <LogOut size={isMobile ? 18 : 16} /> },
  ];

  const handleNavigation = (path: string) => {
    const tab = path === "/" ? "dashboard" : path.substring(1);
    setActiveTab(tab);
  };

  // Animation variants for staggered menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <Sidebar className="w-[240px] max-w-[250px] bg-[#171821]/90 backdrop-blur-lg border-r border-white/5 rounded-xl overflow-hidden shadow-lg shadow-black/30">
      <SidebarHeader className="p-[25px] justify-between">
        <div>
          <svg
            width="38"
            height="10"
            viewBox="0 0 38 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="5" cy="5" r="5" fill="#EA1701" />
            <circle cx="19" cy="5" r="5" fill="#FEB002" />
            <circle cx="33" cy="5" r="5" fill="#029F04" />
          </svg>
        </div>
        <div className="flex items-center gap-[15px]">
          <svg
            width="86"
            height="29"
            viewBox="0 0 86 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.778 17.9699L13.141 14.9478V11.8011C13.141 8.6594 10.585 6.10342 7.44333 6.10342C4.30162 6.10342 1.74565 8.6594 1.74565 11.8011V14.9478L0.108618 17.9699C0.0343797 18.1069 -0.00298452 18.2609 0.000186238 18.4167C0.00335699 18.5725 0.0469539 18.7249 0.126705 18.8588C0.206456 18.9927 0.319626 19.1036 0.455125 19.1806C0.590625 19.2576 0.743805 19.2981 0.899658 19.2981H4.1584C4.14931 19.3978 4.14471 19.4978 4.14464 19.5979C4.14464 20.4728 4.49217 21.3118 5.11079 21.9304C5.72941 22.5491 6.56844 22.8966 7.4433 22.8966C8.31816 22.8966 9.15718 22.5491 9.7758 21.9304C10.3944 21.3118 10.742 20.4728 10.742 19.5979C10.742 19.4967 10.7371 19.3969 10.7282 19.2981H13.9869C14.1428 19.298 14.2959 19.2575 14.4314 19.1805C14.5669 19.1035 14.68 18.9926 14.7598 18.8587C14.8395 18.7248 14.8831 18.5725 14.8863 18.4167C14.8894 18.2609 14.8522 18.107 14.778 17.9699Z"
              fill="white"
            />
            <circle cx="12" cy="9.10342" r="3" fill="#FC003C" />
          </svg>
        </div>
        {isMobile && (
          <SidebarTrigger className="flex md:hidden p-1.5 rounded-md text-[#87888C] hover:text-white hover:bg-white/10">
            <ChevronRight size={18} />
          </SidebarTrigger>
        )}
      </SidebarHeader>

      <SidebarContent className="p-3 gap-3">
        <SidebarMenu>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-2"
          >
            {navItems.map((item) => {
              const isActive = 
                (item.path === "/" && activeTab === "dashboard") || 
                (item.path !== "/" && activeTab === item.path.substring(1));
              
              return (
                <motion.div key={item.name} variants={itemVariants}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={isActive}
                      asChild
                      className={cn(
                        "flex items-center gap-2.5 px-4 py-2.5 rounded-lg transition-all duration-200 w-full",
                        isActive
                          ? "bg-gradient-to-r from-[#A9DFD8]/90 to-[#A9DFD8]/80 text-[#171821] font-medium shadow-lg shadow-[#A9DFD8]/20"
                          : "text-[#87888C] hover:text-white hover:bg-white/5"
                      )}
                    >
                      <Link
                        to={item.path}
                        onClick={() => handleNavigation(item.path)}
                        className="flex items-center gap-2.5 w-full"
                      >
                        {item.icon}
                        <span className="text-sm whitespace-nowrap">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              );
            })}
          </motion.div>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/5 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-[#252634] to-[#171821]">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                loading="lazy" // Add lazy loading for better performance
              />
            </div>
            <div className="text-xs">
              <div className="text-white font-medium">John Doe</div>
              <div className="text-[#87888C]">Admin</div>
            </div>
          </div>
          <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-[#87888C] hover:text-white">
            <Settings size={14} />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
