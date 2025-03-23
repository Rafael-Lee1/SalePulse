
export default function Settings() {
  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="bg-[#21222D] p-5 rounded-[10px]">
              <h2 className="text-white text-[15px] font-semibold mb-4">Settings Menu</h2>
              <div className="space-y-2">
                {["Account", "Notifications", "Privacy", "Appearance", "Security", "Help & Support"].map((item, index) => (
                  <button 
                    key={item} 
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      index === 0 ? "bg-[#A9DFD8] text-[#171821]" : "text-white hover:bg-[#2B2B36]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-span-2">
            <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
              <h2 className="text-white text-[15px] font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#87888C] text-sm mb-1">Name</label>
                  <input 
                    type="text" 
                    defaultValue="John Doe" 
                    className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#87888C] text-sm mb-1">Email</label>
                  <input 
                    type="email" 
                    defaultValue="john.doe@example.com" 
                    className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#87888C] text-sm mb-1">Phone</label>
                  <input 
                    type="tel" 
                    defaultValue="+1 (555) 123-4567" 
                    className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#87888C] text-sm mb-1">Location</label>
                  <input 
                    type="text" 
                    defaultValue="San Francisco, CA" 
                    className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#A9DFD8] text-[#171821] px-4 py-2 rounded-md text-sm font-medium">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-[#21222D] p-5 rounded-[10px]">
              <h2 className="text-white text-[15px] font-semibold mb-4">Notification Settings</h2>
              
              <div className="space-y-4">
                {["Email notifications", "Push notifications", "SMS notifications", "Newsletter"].map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <span className="text-white text-sm">{item}</span>
                    <div className="w-12 h-6 bg-[#171821] rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-[#A9DFD8] rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
