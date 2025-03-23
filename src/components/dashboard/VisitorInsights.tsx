export function VisitorInsights() {
  return (
    <div className="flex-1">
      <div className="w-full bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-5">
          Visitor Insights
        </h2>
        <div className="relative h-[200px] mb-5">
          {/* Simplified version of the graph */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#A9DFD8] to-transparent opacity-20" />
          <div className="absolute bottom-0 left-0 right-0 h-[40px] flex justify-between px-4">
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month) => (
              <span
                key={month}
                className="text-white text-[10px] font-semibold"
              >
                {month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
