
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { StatCard, StatData } from "./StatCard";

export function SalesStatsContainer() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const stats: StatData[] = [
    {
      title: "Total Sales",
      amount: "$5,000",
      change: "+10% from yesterday",
      color: "text-[#FEB95A]",
      bgColor: "bg-[#FEB95A]",
      icon: TrendingUp,
      value: 10,
      isPositive: true
    },
    {
      title: "Total Order",
      amount: "500",
      change: "+8% from yesterday",
      color: "text-[#A9DFD8]",
      bgColor: "bg-[#A9DFD8]",
      icon: TrendingUp,
      value: 8,
      isPositive: true
    },
    {
      title: "Product Sold",
      amount: "9",
      change: "+2% from yesterday",
      color: "text-[#F2C8ED]",
      bgColor: "bg-[#F2C8ED]",
      icon: TrendingUp,
      value: 2,
      isPositive: true
    },
    {
      title: "New Customer",
      amount: "12",
      change: "+3% from yesterday",
      color: "text-[#20AEF3]",
      bgColor: "bg-[#20AEF3]",
      icon: TrendingUp,
      value: 3,
      isPositive: true
    },
  ];

  const toggleExpand = (index: number) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  return (
    <div className="flex-1 bg-[#21222D] p-5 rounded-[10px]">
      <div className="mb-5">
        <h2 className="text-white text-[15px] font-semibold">Today's Sales</h2>
        <p className="text-[#A0A0A0] text-[10px]">Sales Summary</p>
      </div>
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            stat={stat}
            isExpanded={expandedCard === index}
            toggleExpand={() => toggleExpand(index)}
          />
        ))}
      </div>
    </div>
  );
}
