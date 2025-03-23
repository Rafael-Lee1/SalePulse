
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppLayout() {
  const isMobile = useIsMobile();
  
  // Effect to handle body scroll when sidebar is open on mobile
  useEffect(() => {
    return () => {
      // Reset body scroll when component unmounts
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#30313A] p-6 max-md:p-4 max-sm:p-3">
      <SidebarProvider>
        <div className={`flex gap-6 w-full ${isMobile ? 'flex-col' : ''}`}>
          <AppSidebar />
          <div className={`flex-1 ${isMobile ? 'mt-12' : ''}`}>
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
