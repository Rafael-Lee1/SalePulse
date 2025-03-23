
export default function SalesReport() {
  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Sales Report</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Total Sales</h3>
            <p className="text-white text-2xl font-bold">$48,284</p>
          </div>
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Revenue</h3>
            <p className="text-[#A9DFD8] text-2xl font-bold">$38,658</p>
          </div>
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Expenses</h3>
            <p className="text-[#FEB95A] text-2xl font-bold">$9,626</p>
          </div>
          <div className="bg-[#21222D] p-4 rounded-[10px]">
            <h3 className="text-[#87888C] text-sm">Profit</h3>
            <p className="text-[#F2C8ED] text-2xl font-bold">$29,032</p>
          </div>
        </div>
        
        <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
          <h2 className="text-white text-[15px] font-semibold mb-5">Sales Overview</h2>
          <div className="h-64 w-full bg-[#171821] rounded-md flex items-center justify-center">
            <p className="text-white">Sales Chart Placeholder</p>
          </div>
        </div>
        
        <div className="bg-[#21222D] p-5 rounded-[10px]">
          <h2 className="text-white text-[15px] font-semibold mb-5">Top Selling Products</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
                <tr>
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Sold</th>
                  <th className="pb-3 font-medium">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-[#2B2B36] last:border-0">
                    <td className="py-4 text-white text-sm">Product {i}</td>
                    <td className="py-4 text-white text-sm">Category {i}</td>
                    <td className="py-4 text-white text-sm">{Math.floor(Math.random() * 500)} units</td>
                    <td className="py-4 text-white text-sm">${Math.floor(Math.random() * 10000)}</td>
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
