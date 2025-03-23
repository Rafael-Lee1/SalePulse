
import { useState, useEffect } from "react";
import { TrendingUp, BarChart, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function TopProducts() {
  const isMobile = useIsMobile();
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [widths, setWidths] = useState([0, 0, 0, 0]);
  
  const products = [
    {
      rank: "01",
      name: "Home Decore Range",
      popularity: 46,
      sales: 1204,
      color: "#FCB859",
    },
    {
      rank: "02",
      name: "Disney Princess Dress",
      popularity: 17,
      sales: 845,
      color: "#A9DFD8",
    },
    {
      rank: "03",
      name: "Bathroom Essentials",
      popularity: 19,
      sales: 678,
      color: "#28AEF3",
    },
    {
      rank: "04",
      name: "Apple Smartwatch",
      popularity: 29,
      sales: 532,
      color: "#F2C8ED",
    },
  ];

  // Animate bars on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setWidths(prev => {
        const newWidths = [...prev];
        let completed = true;
        
        for (let i = 0; i < prev.length; i++) {
          if (prev[i] < products[i].popularity * 2) {
            newWidths[i] = prev[i] + 2;
            completed = false;
          }
        }
        
        if (completed) {
          clearInterval(interval);
        }
        
        return newWidths;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 bg-[#21222D] p-5 max-sm:p-3 rounded-[10px] hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-white text-[15px] font-semibold">Top Products</h2>
        <div className="p-1.5 rounded-full bg-[#FCB859]/10">
          <BarChart size={14} className="text-[#FCB859]" />
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="grid grid-cols-4 text-[#87888C] text-[13px] pb-2.5 border-b border-[rgba(255,255,255,0.06)] max-sm:text-[11px]">
          <div className="text-center">#</div>
          <div>Name</div>
          <div>Popularity</div>
          <div>Sales</div>
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          {products.map((product, index) => (
            <div 
              key={product.rank} 
              className={`
                grid grid-cols-4 items-center py-2 rounded-md
                ${activeRow === index ? 'bg-[#171821]' : ''}
                cursor-pointer transition-colors duration-200 hover:bg-[#171821]
              `}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
            >
              <div className="text-white text-[13px] text-center max-sm:text-[11px]">
                {product.rank}
              </div>
              <div className="text-white text-[10px] max-sm:text-[9px] truncate pr-2">{product.name}</div>
              <div className="w-full max-w-[164px] h-px bg-[#2B2B36] relative">
                <div
                  className="h-px absolute top-0 transition-all duration-500 ease-out"
                  style={{
                    width: `${widths[index]}px`,
                    backgroundColor: product.color,
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div
                  className="text-[10px] max-sm:text-[9px] w-[38px] h-[22px] max-sm:w-[34px] max-sm:h-[20px] rounded border flex items-center justify-center transition-transform duration-200 hover:scale-105"
                  style={{
                    color: product.color,
                    borderColor: product.color,
                    backgroundColor: `${product.color}1A`,
                  }}
                >
                  {product.popularity}%
                </div>
                
                {activeRow === index && (
                  <div className="flex items-center text-[#A0A0A0] text-[10px] animate-fade-in">
                    <span>${product.sales}</span>
                    <ChevronRight size={12} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
