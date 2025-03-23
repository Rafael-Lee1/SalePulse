
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#252634] to-[#30313A] p-6 max-md:p-4 max-sm:p-3">
      <SidebarProvider>
        <div className="flex w-full gap-6">
          <AppSidebar />
          <SidebarInset className="flex-1 rounded-xl overflow-hidden bg-[#30313A]/50 backdrop-blur-sm border border-white/5">
            <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
