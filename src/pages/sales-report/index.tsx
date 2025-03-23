
import { useState, useEffect } from 'react';
import { SalesStats } from './SalesStats';
import { SalesOverviewChart } from './SalesOverviewChart';
import { TopSellingProducts } from './TopSellingProducts';

export default function SalesReport() {
  const [salesData, setSalesData] = useState([
    { name: 'Jan', sales: 24200 },
    { name: 'Feb', sales: 28300 },
    { name: 'Mar', sales: 27100 },
    { name: 'Apr', sales: 32600 },
    { name: 'May', sales: 30800 },
    { name: 'Jun', sales: 34100 },
    { name: 'Jul', sales: 31900 },
    { name: 'Aug', sales: 35700 },
    { name: 'Sep', sales: 33400 },
    { name: 'Oct', sales: 37800 },
    { name: 'Nov', sales: 36500 },
    { name: 'Dec', sales: 48284 },
  ]);
  
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSalesData(prevData => 
        prevData.map(item => ({
          ...item,
          sales: item.sales + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 500)
        }))
      );
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Sales Report</h1>
        
        <SalesStats salesData={salesData} />
        <SalesOverviewChart salesData={salesData} />
        <TopSellingProducts />
      </div>
    </div>
  );
}
