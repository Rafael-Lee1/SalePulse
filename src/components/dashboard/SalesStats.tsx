
import { useState } from "react";
import { TrendingUp, TrendingDown, ChevronUp, ChevronDown } from "lucide-react";

export function SalesStats() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const stats = [
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
          <div 
            key={index} 
            className={`
              bg-[#171821] p-3 rounded-[10px] cursor-pointer 
              transition-all duration-300 transform hover:translate-y-[-2px] 
              hover:shadow-lg hover:shadow-${stat.bgColor}/10
              ${expandedCard === index ? 'scale-105 border border-' + stat.bgColor + '/30' : ''}
            `}
            onClick={() => toggleExpand(index)}
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-white text-[15px] font-semibold">
                  {stat.amount}
                </span>
                <div className={`p-1 rounded-full ${stat.bgColor}/10`}>
                  <stat.icon size={14} className={stat.color} />
                </div>
              </div>
              <span className="text-[#E8E8E8] text-[10px]">{stat.title}</span>
              <div className="flex justify-between items-center">
                <span className={`${stat.color} text-[8px] flex items-center`}>
                  {stat.isPositive ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
                  {stat.change}
                </span>
                
                {/* Progress bar */}
                <div className="w-16 h-1 bg-[#2B2B36] rounded-full">
                  <div 
                    className={`h-1 ${stat.bgColor} rounded-full transition-all duration-500`} 
                    style={{ width: `${stat.value * 10}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Expanded content */}
              {expandedCard === index && (
                <div className="mt-2 pt-2 border-t border-[#2B2B36] animate-fade-in">
                  <div className="text-[#A0A0A0] text-[8px] flex justify-between">
                    <span>Last Week</span>
                    <span>This Week</span>
                  </div>
                  <div className="h-10 flex items-end gap-1 mt-1">
                    {[65, 40, 85, 30, 90, 75, 60].map((height, i) => (
                      <div key={i} className="flex-1 bg-[#2B2B36] rounded-sm relative" style={{ height: `${height}%` }}>
                        <div 
                          className={`absolute bottom-0 left-0 right-0 ${stat.bgColor} rounded-sm`}
                          style={{ height: `${Math.random() * 60 + 40}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
