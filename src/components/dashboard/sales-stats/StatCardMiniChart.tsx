
interface StatCardMiniChartProps {
  isPositive: boolean;
}

export function StatCardMiniChart({ isPositive }: StatCardMiniChartProps) {
  return (
    <>
      <div className="text-[#A0A0A0] text-[8px] flex justify-between">
        <span>Last Week</span>
        <span>This Week</span>
      </div>
      <div className="h-10 flex items-end gap-1 mt-1">
        {[65, 40, 85, 30, 90, 75, 60].map((height, i) => (
          <div key={i} className="flex-1 bg-[#2B2B36] rounded-sm relative" style={{ height: `${height}%` }}>
            <div 
              className={`absolute bottom-0 left-0 right-0 ${isPositive ? "bg-[#A9DFD8]" : "bg-[#F99999]"} rounded-sm`}
              style={{ height: `${Math.random() * 60 + 40}%` }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}
