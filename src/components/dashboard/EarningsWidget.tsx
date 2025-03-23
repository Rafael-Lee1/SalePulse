export function EarningsWidget() {
  return (
    <div className="w-[238px] bg-[#21222D] p-5 rounded-[10px] max-md:w-full">
      <div className="flex flex-col gap-[9px]">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-white text-[15px] font-semibold">Earnings</h2>
          <p className="text-[#87888C] text-[10px]">Total Expense</p>
        </div>
        <div className="text-[#A9DFD8] text-xl font-bold">$6078.76</div>
        <p className="text-[#87888C] text-[11px]">
          Profit is 48% More than last Month
        </p>
      </div>
      <div className="relative w-[174px] h-[174px] mt-[20px] mx-auto">
        <svg
          viewBox="0 0 100 100"
          className="transform -rotate-90 w-full h-full"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#2B2B36"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#A9DFD8"
            strokeWidth="10"
            strokeDasharray="282.7"
            strokeDashoffset="56.54"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">80%</span>
        </div>
      </div>
    </div>
  );
}
