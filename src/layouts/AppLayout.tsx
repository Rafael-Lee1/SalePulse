
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function AppLayout() {
  return (
    <div className="w-full min-h-screen bg-[#30313A] p-6 max-md:p-4 max-sm:p-3">
      <div className="flex gap-6 max-md:flex-col">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
