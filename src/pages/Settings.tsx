
import React from "react";
import { useSettings } from "@/contexts/SettingsContext";
import { AccountSettings } from "@/components/settings/AccountSettings";
import { NotificationSettings } from "@/components/settings/NotificationSettings";
import { PrivacySettings } from "@/components/settings/PrivacySettings";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { SecuritySettings } from "@/components/settings/SecuritySettings";
import { HelpSupport } from "@/components/settings/HelpSupport";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  const { settings, setActiveCategory } = useSettings();
  const isMobile = useIsMobile();
  
  const handleTabChange = (tab: string) => {
    setActiveCategory(tab);
  };

  const renderContent = () => {
    switch (settings.activeCategory) {
      case "account":
        return <AccountSettings />;
      case "notifications":
        return <NotificationSettings />;
      case "privacy":
        return <PrivacySettings />;
      case "appearance":
        return <AppearanceSettings />;
      case "security":
        return <SecuritySettings />;
      case "help":
        return <HelpSupport />;
      default:
        return <AccountSettings />;
    }
  };

  return (
    <div className="flex-1">
      <div className="w-full h-auto min-h-[500px] bg-[#171821] p-6 rounded-3xl overflow-y-auto">
        <h1 className="text-xl font-bold text-white mb-6">Settings</h1>
        
        {isMobile ? (
          // Mobile layout - tabs at the top
          <div className="space-y-6">
            <Tabs 
              defaultValue={settings.activeCategory}
              onValueChange={handleTabChange}
              className="w-full"
            >
              <TabsList className="w-full overflow-x-auto flex whitespace-nowrap bg-[#21222D] p-1">
                <TabsTrigger value="account" className="text-white data-[state=active]:bg-[#A9DFD8] data-[state=active]:text-[#171821]">
                  Account
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-white data-[state=active]:bg-[#A9DFD8] data-[state=active]:text-[#171821]">
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="text-white data-[state=active]:bg-[#A9DFD8] data-[state=active]:text-[#171821]">
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="appearance" className="text-white data-[state=active]:bg-[#A9DFD8] data-[state=active]:text-[#171821]">
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="security" className="text-white data-[state=active]:bg-[#A9DFD8] data-[state=active]:text-[#171821]">
                  Security
                </TabsTrigger>
                <TabsTrigger value="help" className="text-white data-[state=active]:bg-[#A9DFD8] data-[state=active]:text-[#171821]">
                  Help & Support
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                {renderContent()}
              </div>
            </Tabs>
          </div>
        ) : (
          // Desktop layout - sidebar menu
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <div className="bg-[#21222D] p-5 rounded-[10px]">
                <h2 className="text-white text-[15px] font-semibold mb-4">Settings Menu</h2>
                <div className="space-y-2">
                  {[
                    { id: "account", label: "Account" },
                    { id: "notifications", label: "Notifications" },
                    { id: "privacy", label: "Privacy" },
                    { id: "appearance", label: "Appearance" },
                    { id: "security", label: "Security" },
                    { id: "help", label: "Help & Support" },
                  ].map((item) => (
                    <button 
                      key={item.id} 
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        settings.activeCategory === item.id 
                          ? "bg-[#A9DFD8] text-[#171821]" 
                          : "text-white hover:bg-[#2B2B36]"
                      }`}
                      onClick={() => setActiveCategory(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-span-2">
              {renderContent()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
