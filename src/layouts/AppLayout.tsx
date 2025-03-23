
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

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
      <div className={`flex gap-6 ${isMobile ? 'flex-col' : ''}`}>
        <Sidebar />
        <div className={`flex-1 ${isMobile ? 'mt-12' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
