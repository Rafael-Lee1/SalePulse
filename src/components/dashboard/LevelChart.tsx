export function LevelChart() {
  return (
    <div className="w-[238px] bg-[#21222D] p-5 rounded-[10px] max-md:w-full">
      <h2 className="text-white text-[15px] font-semibold mb-5">Level</h2>
      <div className="flex flex-col gap-5">
        <div className="flex items-end gap-5 h-[107px] justify-center">
          {[87, 107, 87, 79, 61, 66].map((height, index) => (
            <div
              key={index}
              className="w-[13px] bg-[#2B2B36] rounded relative"
              style={{ height: `${height}px` }}
            >
              <div
                className="w-[13px] bg-[#A9DFD8] rounded absolute bottom-0"
                style={{ height: `${Math.random() * 40 + 20}px` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#A9DFD8] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Volume</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#2B2B36] rounded-full" />
            <span className="text-[#A0A0A0] text-[10px]">Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}
