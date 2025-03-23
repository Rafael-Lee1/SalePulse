import { SalesStats } from "./SalesStats";
import { LevelChart } from "./LevelChart";
import { TopProducts } from "./TopProducts";
import { CustomerFulfillment } from "./CustomerFulfillment";
import { EarningsWidget } from "./EarningsWidget";
import { VisitorInsights } from "./VisitorInsights";

export function MainContent() {
  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="w-[504px] relative max-md:w-full">
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
                <span className="sr-only">Notifications</span>
                <div className="w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1" />
              </button>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#21222D]" />
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex gap-3.5 max-md:flex-col">
            <SalesStats />
            <LevelChart />
          </div>

          <div className="flex gap-3.5 max-md:flex-col">
            <TopProducts />
            <CustomerFulfillment />
          </div>

          <div className="flex gap-3.5 max-md:flex-col">
            <EarningsWidget />
            <VisitorInsights />
          </div>
        </div>
      </div>
    </div>
  );
}
