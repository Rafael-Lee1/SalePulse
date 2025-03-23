
import { MainContent } from "@/components/dashboard/MainContent";

export default function Profile() {
  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Profile</h1>
        
        <div className="bg-[#21222D] p-5 rounded-[10px] mb-5">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 bg-[#171821] rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-white text-lg font-semibold mb-2">John Doe</h2>
              <p className="text-[#87888C] text-sm mb-4">Senior Product Designer</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[#87888C] text-xs">Email</p>
                  <p className="text-white text-sm">john.doe@example.com</p>
                </div>
                <div>
                  <p className="text-[#87888C] text-xs">Phone</p>
                  <p className="text-white text-sm">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-[#87888C] text-xs">Location</p>
                  <p className="text-white text-sm">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-[#87888C] text-xs">Joined</p>
                  <p className="text-white text-sm">March 15, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#21222D] p-5 rounded-[10px]">
          <h2 className="text-white text-[15px] font-semibold mb-5">Recent Activity</h2>
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3 border-b border-[#2B2B36] pb-4 last:border-0">
                <div className="w-8 h-8 bg-[#171821] rounded-full flex items-center justify-center text-[#A9DFD8]">
                  {i}
                </div>
                <div>
                  <h3 className="text-white text-sm font-medium">Updated profile information</h3>
                  <p className="text-[#87888C] text-xs">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
