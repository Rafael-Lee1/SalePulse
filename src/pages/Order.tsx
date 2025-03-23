
export default function Order() {
  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Orders</h1>
        
        <div className="bg-[#21222D] p-5 rounded-[10px] mb-5">
          <h2 className="text-white text-[15px] font-semibold mb-5">Recent Orders</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
                <tr>
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-[#2B2B36] last:border-0">
                    <td className="py-4 text-white text-sm">#ORD-{Math.floor(Math.random() * 10000)}</td>
                    <td className="py-4 text-white text-sm">Product {i + 1}</td>
                    <td className="py-4 text-white text-sm">May {i + 10}, 2023</td>
                    <td className="py-4 text-white text-sm">${Math.floor(Math.random() * 1000)}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        i % 3 === 0 ? "bg-[#A9DFD8] text-[#171821]" : 
                        i % 3 === 1 ? "bg-[#FEB95A] text-[#171821]" : 
                        "bg-[#F2C8ED] text-[#171821]"
                      }`}>
                        {i % 3 === 0 ? "Completed" : i % 3 === 1 ? "Pending" : "Processing"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
