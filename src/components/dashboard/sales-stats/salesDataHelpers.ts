
// Types
export interface SalesData {
  name: string;
  sales: number;
  target: number;
}

export type TimeFilter = "daily" | "weekly" | "monthly" | "yearly";

export interface FilterOption {
  id: TimeFilter;
  label: string;
}

export interface SalesDataset {
  daily: SalesData[];
  weekly: SalesData[];
  monthly: SalesData[];
  yearly: SalesData[];
}

// Filter options
export const timeFilters: FilterOption[] = [
  { id: "daily", label: "Daily" },
  { id: "weekly", label: "Weekly" },
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
];

// Sample data
export const salesData: SalesDataset = {
  daily: [
    { name: "Mon", sales: 2400, target: 2600 },
    { name: "Tue", sales: 1398, target: 1500 },
    { name: "Wed", sales: 9800, target: 9000 },
    { name: "Thu", sales: 3908, target: 4000 },
    { name: "Fri", sales: 4800, target: 4600 },
    { name: "Sat", sales: 3800, target: 3500 },
    { name: "Sun", sales: 4300, target: 4000 },
  ],
  weekly: [
    { name: "Week 1", sales: 4000, target: 4200 },
    { name: "Week 2", sales: 3000, target: 3200 },
    { name: "Week 3", sales: 2000, target: 2400 },
    { name: "Week 4", sales: 2780, target: 2600 },
  ],
  monthly: [
    { name: "Jan", sales: 4000, target: 4200 },
    { name: "Feb", sales: 3000, target: 3200 },
    { name: "Mar", sales: 2000, target: 2400 },
    { name: "Apr", sales: 2780, target: 2600 },
    { name: "May", sales: 1890, target: 2000 },
    { name: "Jun", sales: 2390, target: 2500 },
    { name: "Jul", sales: 3490, target: 3200 },
    { name: "Aug", sales: 2490, target: 2600 },
    { name: "Sep", sales: 2290, target: 2400 },
    { name: "Oct", sales: 3290, target: 3000 },
    { name: "Nov", sales: 2490, target: 2800 },
    { name: "Dec", sales: 3290, target: 3000 },
  ],
  yearly: [
    { name: "2020", sales: 24000, target: 25000 },
    { name: "2021", sales: 34000, target: 32000 },
    { name: "2022", sales: 42000, target: 40000 },
    { name: "2023", sales: 48000, target: 45000 },
  ],
};

// Helper functions for calculations
export function calculateSalesStats(data: SalesData[]) {
  const totalSales = data.reduce((sum, item) => sum + item.sales, 0);
  const totalTarget = data.reduce((sum, item) => sum + item.target, 0);
  const averageSales = Math.round(totalSales / data.length);
  const averageTarget = totalTarget / data.length;
  
  const percentageGrowth = Math.round((totalSales / totalTarget) * 100 - 100);
  const targetGrowth = Math.round((totalTarget / totalSales - 1) * 100);
  const averageGrowth = Math.round((averageSales / averageTarget - 1) * 100);
  
  return {
    totalSales,
    totalTarget,
    averageSales,
    percentageGrowth,
    targetGrowth,
    averageGrowth
  };
}
