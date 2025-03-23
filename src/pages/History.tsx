
import { useState, useRef, useEffect } from "react";
import { 
  Search, 
  Calendar, 
  Filter, 
  Clock, 
  ShoppingCart, 
  User, 
  Heart, 
  LogIn, 
  Settings 
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [dateRange, setDateRange] = useState("all");
  const [showTimeline, setShowTimeline] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);

  const allActivities = [
    { type: "order", title: "Ordered Modern Chair", date: "May 12, 2023", time: "10:30 AM", amount: "$299" },
    { type: "login", title: "Logged in from new device", date: "May 10, 2023", time: "08:15 AM", amount: "" },
    { type: "order", title: "Ordered Desk Lamp", date: "May 5, 2023", time: "03:45 PM", amount: "$129" },
    { type: "payment", title: "Made payment", date: "May 1, 2023", time: "11:20 AM", amount: "$499" },
    { type: "profile", title: "Updated profile information", date: "April 28, 2023", time: "02:10 PM", amount: "" },
    { type: "order", title: "Ordered Wall Art", date: "April 22, 2023", time: "09:55 AM", amount: "$149" },
    { type: "review", title: "Left review for Coffee Table", date: "April 18, 2023", time: "04:30 PM", amount: "" },
    { type: "login", title: "Logged in from new location", date: "April 15, 2023", time: "07:40 AM", amount: "" },
    { type: "order", title: "Ordered Bookshelf", date: "April 10, 2023", time: "01:15 PM", amount: "$349" },
    { type: "favorite", title: "Added Modern Lamp to favorites", date: "April 5, 2023", time: "05:20 PM", amount: "" },
    { type: "payment", title: "Made payment", date: "April 1, 2023", time: "10:45 AM", amount: "$199" },
    { type: "login", title: "Logged in from mobile", date: "March 29, 2023", time: "09:30 AM", amount: "" },
  ];

  // Filter activities based on search, type, and date
  const filterActivities = () => {
    return allActivities.filter(activity => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        activity.date.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Type filter
      const matchesType = activeTab === "all" || activity.type === activeTab;
      
      // Date filter - simplified for demo
      let matchesDate = true;
      if (dateRange === "recent") {
        matchesDate = activity.date.includes("May");
      } else if (dateRange === "last30") {
        matchesDate = activity.date.includes("May") || activity.date.includes("April");
      }
      
      return matchesSearch && matchesType && matchesDate;
    });
  };

  const activities = filterActivities();

  // Get icon for activity type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "order":
        return <ShoppingCart size={16} className="text-[#A9DFD8]" />;
      case "login":
        return <LogIn size={16} className="text-[#FEB95A]" />;
      case "payment":
        return <Calendar size={16} className="text-[#F2C8ED]" />;
      case "profile":
        return <User size={16} className="text-[#A9DFD8]" />;
      case "review":
        return <Textarea size={16} className="text-[#FEB95A]" />;
      case "favorite":
        return <Heart size={16} className="text-[#F2C8ED]" />;
      default:
        return <Clock size={16} className="text-[#A9DFD8]" />;
    }
  };

  // Get background color for activity type
  const getActivityColor = (type: string) => {
    switch (type) {
      case "order":
        return "bg-[#A9DFD8]";
      case "login":
        return "bg-[#FEB95A]";
      case "payment":
        return "bg-[#F2C8ED]";
      case "profile":
        return "bg-[#A9DFD8]";
      case "review":
        return "bg-[#FEB95A]";
      case "favorite":
        return "bg-[#F2C8ED]";
      default:
        return "bg-[#A9DFD8]";
    }
  };

  // Scroll to the latest activity when component mounts
  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
          <h1 className="text-xl font-bold text-white">History</h1>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#87888C]" />
              <input 
                type="text" 
                placeholder="Search activities..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#21222D] text-white text-sm py-2 pl-10 pr-4 rounded-md border border-[#2B2B36] outline-none w-full sm:w-[200px] focus:border-[#A9DFD8] transition-colors"
              />
            </div>
            
            <Button 
              onClick={() => setFilterOpen(!filterOpen)}
              variant="outline"
              className="bg-[#21222D] border-[#2B2B36] text-white hover:bg-[#2B2B36] flex items-center gap-2"
            >
              <Filter size={16} />
              Filters
            </Button>
          </div>
        </div>
        
        {filterOpen && (
          <Card className="mb-5 bg-[#21222D] border-[#2B2B36] text-white animate-fadeIn">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Activity Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {["all", "order", "login", "payment", "profile", "review", "favorite"].map((type) => (
                      <Button
                        key={type}
                        variant={activeTab === type ? "default" : "outline"}
                        className={`text-xs py-1 px-3 h-auto ${
                          activeTab === type 
                            ? "bg-[#A9DFD8] text-[#171821]" 
                            : "bg-[#2B2B36] border-[#3B3B46] text-white hover:bg-[#3B3B46]"
                        }`}
                        onClick={() => setActiveTab(type)}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Date Range</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: "all", label: "All Time" },
                      { id: "recent", label: "This Month" },
                      { id: "last30", label: "Last 30 Days" }
                    ].map((range) => (
                      <Button
                        key={range.id}
                        variant={dateRange === range.id ? "default" : "outline"}
                        className={`text-xs py-1 px-3 h-auto ${
                          dateRange === range.id 
                            ? "bg-[#A9DFD8] text-[#171821]" 
                            : "bg-[#2B2B36] border-[#3B3B46] text-white hover:bg-[#3B3B46]"
                        }`}
                        onClick={() => setDateRange(range.id)}
                      >
                        {range.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-2 border-t border-[#2B2B36]">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={showTimeline}
                    onCheckedChange={setShowTimeline}
                    id="timeline-toggle"
                  />
                  <label htmlFor="timeline-toggle" className="text-sm cursor-pointer">
                    Show as Timeline
                  </label>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="text-xs bg-[#2B2B36] border-[#3B3B46] text-white hover:bg-[#3B3B46]"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveTab("all");
                    setDateRange("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-[15px] font-semibold">Recent Activity</h2>
            <div className="text-[#87888C] text-xs">
              {activities.length} {activities.length === 1 ? "result" : "results"}
            </div>
          </div>
          
          {activities.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Clock className="text-[#87888C] mb-2" size={32} />
              <p className="text-[#87888C] text-sm">No activities match your filters</p>
              <Button 
                variant="link" 
                className="text-[#A9DFD8] text-xs mt-2"
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("all");
                  setDateRange("all");
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="relative">
              {showTimeline && (
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#2B2B36]" />
              )}
              
              <div 
                className={`${showTimeline ? 'space-y-6 pl-12' : 'grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
                ref={timelineRef}
              >
                {activities.map((activity, index) => (
                  showTimeline ? (
                    <div key={index} className="relative group">
                      <div className={`absolute -left-12 top-0 w-6 h-6 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#1E1F2A] p-3 rounded-lg border border-[#2B2B36] group-hover:border-[#A9DFD8] transition-colors">
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
                  ) : (
                    <Card key={index} className="bg-[#1E1F2A] border-[#2B2B36] group hover:border-[#A9DFD8] transition-colors">
                      <CardContent className="p-3">
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white text-sm font-medium">{activity.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[#87888C] text-xs">{activity.date}</span>
                              <span className="text-[#87888C] text-xs">•</span>
                              <span className="text-[#87888C] text-xs">{activity.time}</span>
                            </div>
                            {activity.amount && (
                              <span className="text-[#A9DFD8] font-medium block mt-2">{activity.amount}</span>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                ))}
              </div>
            </div>
          )}
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
                  <th className="pb-3 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2B2B36]">
                  <td className="py-4 text-white text-sm">Mobile - iPhone 13</td>
                  <td className="py-4 text-white text-sm">New York, NY</td>
                  <td className="py-4 text-white text-sm">192.168.1.10</td>
                  <td className="py-4 text-white text-sm">May 10, 2023, 08:15 AM</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 rounded-full text-xs bg-[#A9DFD8] text-[#171821]">
                      Current
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#2B2B36]">
                  <td className="py-4 text-white text-sm">Desktop - Chrome</td>
                  <td className="py-4 text-white text-sm">San Francisco, CA</td>
                  <td className="py-4 text-white text-sm">192.168.1.20</td>
                  <td className="py-4 text-white text-sm">May 9, 2023, 08:25 AM</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 rounded-full text-xs bg-[#2B2B36] text-white">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#2B2B36]">
                  <td className="py-4 text-white text-sm">Desktop - Chrome</td>
                  <td className="py-4 text-white text-sm">Austin, TX</td>
                  <td className="py-4 text-white text-sm">192.168.1.30</td>
                  <td className="py-4 text-white text-sm">May 8, 2023, 08:35 AM</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 rounded-full text-xs bg-[#2B2B36] text-white">
                      Success
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-[#2B2B36] last:border-0">
                  <td className="py-4 text-white text-sm">Mobile - Android</td>
                  <td className="py-4 text-white text-sm">Chicago, IL</td>
                  <td className="py-4 text-white text-sm">192.168.1.40</td>
                  <td className="py-4 text-white text-sm">May 7, 2023, 08:45 AM</td>
                  <td className="py-4 text-right">
                    <span className="px-2 py-1 rounded-full text-xs bg-[#FEB95A] text-[#171821]">
                      New Location
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
