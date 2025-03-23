
import { StatCard } from "./StatCard";

interface StatsCardGridProps {
  totalSales: number;
  totalTarget: number;
  averageSales: number;
  percentageGrowth: number;
  targetGrowth: number;
  averageGrowth: number;
}

export function StatsCardGrid({ 
  totalSales, 
  totalTarget, 
  averageSales,
  percentageGrowth,
  targetGrowth,
  averageGrowth
}: StatsCardGridProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <StatCard 
        title="Total Sales" 
        value={`$${totalSales.toLocaleString()}`} 
        change={percentageGrowth} 
        icon="DollarSign"
      />
      <StatCard 
        title="Target" 
        value={`$${totalTarget.toLocaleString()}`} 
        change={targetGrowth} 
        icon="Target" 
      />
      <StatCard 
        title="Average" 
        value={`$${averageSales.toLocaleString()}`} 
        change={averageGrowth} 
        icon="TrendingUp" 
      />
    </div>
  );
}
