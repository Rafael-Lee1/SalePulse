
import { useIsMobile } from "@/hooks/use-mobile";

export function TopProducts() {
  const isMobile = useIsMobile();
  const products = [
    {
      rank: "01",
      name: "Home Decore Range",
      popularity: 46,
      color: "#FCB859",
    },
    {
      rank: "02",
      name: "Disney Princess Dress",
      popularity: 17,
      color: "#A9DFD8",
    },
    {
      rank: "03",
      name: "Bathroom Essentials",
      popularity: 19,
      color: "#28AEF3",
    },
    {
      rank: "04",
      name: "Apple Smartwatch",
      popularity: 29,
      color: "#F2C8ED",
    },
  ];

  return (
    <div className="flex-1 bg-[#21222D] p-5 max-sm:p-3 rounded-[10px]">
      <h2 className="text-white text-[15px] font-semibold mb-5">
        Top Products
      </h2>
      <div className="flex flex-col">
        <div className="grid grid-cols-4 text-[#87888C] text-[13px] pb-2.5 border-b border-[rgba(255,255,255,0.06)] max-sm:text-[11px]">
          <div className="text-center">#</div>
          <div>Name</div>
          <div>Popularity</div>
          <div>Sales</div>
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          {products.map((product) => (
            <div key={product.rank} className="grid grid-cols-4 items-center">
              <div className="text-white text-[13px] text-center max-sm:text-[11px]">
                {product.rank}
              </div>
              <div className="text-white text-[10px] max-sm:text-[9px] truncate pr-2">{product.name}</div>
              <div className="w-full max-w-[164px] h-px bg-[#2B2B36] relative">
                <div
                  className="h-px absolute top-0"
                  style={{
                    width: `${product.popularity * 2}px`,
                    backgroundColor: product.color,
                  }}
                />
              </div>
              <div
                className="text-[10px] max-sm:text-[9px] w-[38px] h-[22px] max-sm:w-[34px] max-sm:h-[20px] rounded border flex items-center justify-center"
                style={{
                  color: product.color,
                  borderColor: product.color,
                  backgroundColor: `${product.color}1A`,
                }}
              >
                {product.popularity}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
