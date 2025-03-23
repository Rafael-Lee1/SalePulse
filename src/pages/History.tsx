
export default function History() {
  const activities = [
    { type: "order", title: "Ordered Modern Chair", date: "May 12, 2023", time: "10:30 AM", amount: "$299" },
    { type: "login", title: "Logged in from new device", date: "May 10, 2023", time: "08:15 AM", amount: "" },
    { type: "order", title: "Ordered Desk Lamp", date: "May 5, 2023", time: "03:45 PM", amount: "$129" },
    { type: "payment", title: "Made payment", date: "May 1, 2023", time: "11:20 AM", amount: "$499" },
    { type: "profile", title: "Updated profile information", date: "April 28, 2023", time: "02:10 PM", amount: "" },
    { type: "order", title: "Ordered Wall Art", date: "April 22, 2023", time: "09:55 AM", amount: "$149" },
    { type: "review", title: "Left review for Coffee Table", date: "April 18, 2023", time: "04:30 PM", amount: "" },
    { type: "login", title: "Logged in from new location", date: "April 15, 2023", time: "07:40 AM", amount: "" },
  ];

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">History</h1>
        
        <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[15px] font-semibold">Recent Activity</h2>
            <div>
              <select className="bg-[#171821] text-white text-sm py-1.5 px-3 rounded-md border border-[#2B2B36] outline-none">
                <option>All Activity</option>
                <option>Orders</option>
                <option>Payments</option>
                <option>Logins</option>
                <option>Profile Updates</option>
              </select>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#2B2B36]" />
            
            <div className="space-y-6 pl-12">
              {activities.map((activity, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-12 top-0 w-4 h-4 rounded-full bg-[#A9DFD8]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-white text-sm font-medium">{activity.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#87888C] text-xs">{activity.date}</span>
                        <span className="text-[#87888C] text-xs">•</span>
                        <span className="text-[#87888C] text-xs">{activity.time}</span>
                      </div>
                    </div>
                    {activity.amount && (
                      <span className="text-[#A9DFD8] font-medium mt-2 sm:mt-0">{activity.amount}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-[#21222D] p-5 rounded-[10px]">
          <h2 className="text-white text-[15px] font-semibold mb-4">Login History</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
                <tr>
                  <th className="pb-3 font-medium">Device</th>
                  <th className="pb-3 font-medium">Location</th>
                  <th className="pb-3 font-medium">IP Address</th>
                  <th className="pb-3 font-medium">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i} className="border-b border-[#2B2B36] last:border-0">
                    <td className="py-4 text-white text-sm">
                      {i % 2 === 0 ? "Mobile - iPhone 13" : "Desktop - Chrome"}
                    </td>
                    <td className="py-4 text-white text-sm">
                      {i % 3 === 0 ? "San Francisco, CA" : i % 3 === 1 ? "New York, NY" : "Austin, TX"}
                    </td>
                    <td className="py-4 text-white text-sm">192.168.1.{i * 10}</td>
                    <td className="py-4 text-white text-sm">May {10 - i}, 2023, 08:{15 + i * 10} AM</td>
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
