export function SalesStats() {
  const stats = [
    {
      title: "Total Sales",
      amount: "$5k",
      change: "+10% from yesterday",
      color: "text-[#FEB95A]",
      bgColor: "bg-[#FEB95A]",
    },
    {
      title: "Total Order",
      amount: "500",
      change: "+8% from yesterday",
      color: "text-[#A9DFD8]",
      bgColor: "bg-[#A9DFD8]",
    },
    {
      title: "Product Sold",
      amount: "9",
      change: "+2% from yesterday",
      color: "text-[#F2C8ED]",
      bgColor: "bg-[#F2C8ED]",
    },
    {
      title: "New Customer",
      amount: "12",
      change: "+3% from yesterday",
      color: "text-[#20AEF3]",
      bgColor: "bg-[#20AEF3]",
    },
  ];

  return (
    <div className="flex-1 bg-[#21222D] p-5 rounded-[10px]">
      <div className="mb-5">
        <h2 className="text-white text-[15px] font-semibold">Today's Sales</h2>
        <p className="text-[#A0A0A0] text-[10px]">Sales Summary</p>
      </div>
      <div className="grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#171821] p-3 rounded-[10px]">
            <div className="flex flex-col gap-2">
              <span className="text-white text-[15px] font-semibold">
                {stat.amount}
              </span>
              <span className="text-[#E8E8E8] text-[10px]">{stat.title}</span>
              <span className={`${stat.color} text-[8px]`}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
