
import { Bell } from "lucide-react";
import { SalesStats } from "./SalesStats";
import { LevelChart } from "./LevelChart";
import { TopProducts } from "./TopProducts";
import { CustomerFulfillment } from "./CustomerFulfillment";
import { EarningsWidget } from "./EarningsWidget";
import { VisitorInsights } from "./VisitorInsights";
import { useIsMobile } from "@/hooks/use-mobile";

export function MainContent() {
  const isMobile = useIsMobile();

  return (
    <div className="flex-1">
      <div className="w-full bg-[#171821] p-6 max-sm:p-4 rounded-3xl max-md:h-auto overflow-y-auto">
        <div className="flex items-center justify-between mb-10 max-sm:mb-6 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <div className="w-[504px] relative max-lg:w-[300px] max-md:w-full">
            <div className="w-full h-11 bg-[#21222D] flex items-center px-4 rounded-lg">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full bg-transparent text-white outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="relative">
              <button className="p-2 rounded-full bg-[#21222D]">
                <Bell size={16} className="text-white" />
                <span className="sr-only">Notifications</span>
                <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1" />
              </button>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#21222D] flex items-center justify-center overflow-hidden">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3.5 max-lg:flex-col">
            <SalesStats />
            <LevelChart />
          </div>

          <div className="flex gap-3.5 max-lg:flex-col">
            <TopProducts />
            <CustomerFulfillment />
          </div>

          <div className="flex gap-3.5 max-lg:flex-col">
            <EarningsWidget />
            <VisitorInsights />
          </div>
        </div>
      </div>
    </div>
  );
}
