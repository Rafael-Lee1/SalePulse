
export default function Message() {
  const conversations = [
    { id: 1, name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/32.jpg", lastMessage: "Hello there!", time: "10:30 AM", unread: 2 },
    { id: 2, name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/44.jpg", lastMessage: "When will the order arrive?", time: "Yesterday", unread: 0 },
    { id: 3, name: "Robert Johnson", avatar: "https://randomuser.me/api/portraits/men/22.jpg", lastMessage: "Thanks for your help!", time: "Yesterday", unread: 0 },
    { id: 4, name: "Emily Davis", avatar: "https://randomuser.me/api/portraits/women/28.jpg", lastMessage: "I need assistance with my order.", time: "Monday", unread: 0 },
  ];

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Messages</h1>
        
        <div className="flex gap-5 h-[700px] max-md:flex-col max-md:h-auto">
          <div className="w-1/3 bg-[#21222D] rounded-[10px] p-4 overflow-y-auto max-md:w-full">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full h-10 bg-[#171821] text-white rounded-md pl-4 pr-8 outline-none"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  🔍
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {conversations.map((convo) => (
                <div 
                  key={convo.id}
                  className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${
                    convo.id === 1 ? "bg-[#2B2B36]" : "hover:bg-[#2B2B36]"
                  }`}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={convo.avatar} alt={convo.name} className="w-full h-full object-cover" />
                    </div>
                    {convo.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#A9DFD8] text-[#171821] rounded-full flex items-center justify-center text-xs font-medium">
                        {convo.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white text-sm font-medium truncate">{convo.name}</h3>
                      <span className="text-[#87888C] text-xs">{convo.time}</span>
                    </div>
                    <p className="text-[#87888C] text-xs truncate">{convo.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 bg-[#21222D] rounded-[10px] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-[#2B2B36] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={conversations[0].avatar} alt={conversations[0].name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white text-sm font-medium">{conversations[0].name}</h3>
                <p className="text-[#87888C] text-xs">Online</p>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={conversations[0].avatar} alt={conversations[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="max-w-[70%] bg-[#2B2B36] p-3 rounded-t-lg rounded-r-lg">
                  <p className="text-white text-sm">Hi there! How can I help you today?</p>
                  <span className="text-[#87888C] text-xs mt-1 block">10:25 AM</span>
                </div>
              </div>
              
              <div className="flex items-end gap-2 flex-row-reverse">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="You" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-[70%] bg-[#A9DFD8] p-3 rounded-t-lg rounded-l-lg">
                  <p className="text-[#171821] text-sm">Hello! I have a question about my recent order.</p>
                  <span className="text-[#171821] text-opacity-70 text-xs mt-1 block">10:28 AM</span>
                </div>
              </div>
              
              <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={conversations[0].avatar} alt={conversations[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="max-w-[70%] bg-[#2B2B36] p-3 rounded-t-lg rounded-r-lg">
                  <p className="text-white text-sm">Of course! What would you like to know?</p>
                  <span className="text-[#87888C] text-xs mt-1 block">10:30 AM</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t border-[#2B2B36]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="w-full h-12 bg-[#171821] text-white rounded-md pl-4 pr-12 outline-none"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#A9DFD8] text-[#171821] w-8 h-8 rounded-full flex items-center justify-center">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
