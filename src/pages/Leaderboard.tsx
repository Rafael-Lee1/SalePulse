
export default function Leaderboard() {
  const topUsers = [
    { rank: 1, name: "John Doe", score: 1205, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { rank: 2, name: "Jane Smith", score: 980, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { rank: 3, name: "Robert Johnson", score: 875, avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
    { rank: 4, name: "Emily Davis", score: 790, avatar: "https://randomuser.me/api/portraits/women/28.jpg" },
    { rank: 5, name: "Michael Wilson", score: 760, avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
  ];

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Leaderboard</h1>
        
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-[#21222D] p-5 rounded-[10px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#FEB95A] flex items-center justify-center">
                <span className="text-[#171821] font-bold">1</span>
              </div>
              <h2 className="text-white font-semibold">{topUsers[0].name}</h2>
            </div>
            <div className="text-[#FEB95A] text-2xl font-bold">{topUsers[0].score}</div>
          </div>
          <div className="flex-1 bg-[#21222D] p-5 rounded-[10px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#A9DFD8] flex items-center justify-center">
                <span className="text-[#171821] font-bold">2</span>
              </div>
              <h2 className="text-white font-semibold">{topUsers[1].name}</h2>
            </div>
            <div className="text-[#A9DFD8] text-2xl font-bold">{topUsers[1].score}</div>
          </div>
          <div className="flex-1 bg-[#21222D] p-5 rounded-[10px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#F2C8ED] flex items-center justify-center">
                <span className="text-[#171821] font-bold">3</span>
              </div>
              <h2 className="text-white font-semibold">{topUsers[2].name}</h2>
            </div>
            <div className="text-[#F2C8ED] text-2xl font-bold">{topUsers[2].score}</div>
          </div>
        </div>
        
        <div className="bg-[#21222D] p-5 rounded-[10px]">
          <h2 className="text-white text-[15px] font-semibold mb-5">All Competitors</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="text-[#87888C] text-left text-sm border-b border-[#2B2B36]">
                <tr>
                  <th className="pb-3 font-medium">Rank</th>
                  <th className="pb-3 font-medium">User</th>
                  <th className="pb-3 font-medium">Score</th>
                  <th className="pb-3 font-medium">Changes</th>
                </tr>
              </thead>
              <tbody>
                {topUsers.map((user) => (
                  <tr key={user.rank} className="border-b border-[#2B2B36] last:border-0">
                    <td className="py-4">
                      <div className="w-8 h-8 rounded-full bg-[#171821] flex items-center justify-center text-white">
                        {user.rank}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-white text-sm">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-white text-sm">{user.score}</td>
                    <td className="py-4">
                      <span className="text-[#A9DFD8] text-xs">+{Math.floor(Math.random() * 20)} pts</span>
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
