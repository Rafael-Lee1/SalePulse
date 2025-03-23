export function CustomerFulfillment() {
  return (
    <div className="w-[241px] bg-[#21222D] p-5 rounded-[10px] max-md:w-full">
      <h2 className="text-white text-[15px] font-semibold mb-5">
        Customer Fulfilment
      </h2>
      <div className="relative h-[106px] mb-[20px]">
        {/* Simplified version of the graph for demonstration */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#A9DFD8] to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#F2C8ED] to-transparent opacity-20" />
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-[rgba(255,255,255,0.06)]">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#A9DFD8] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Last Month</span>
          </div>
          <span className="text-white text-[10px]">$4,087</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#F2C8ED] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">This Month</span>
          </div>
          <span className="text-white text-[10px]">$5,506</span>
        </div>
      </div>
    </div>
  );
}
