import React from "react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/contexts/SettingsContext";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

export const PrivacySettings = () => {
  const { settings, updatePrivacy } = useSettings();
  const { toast } = useToast();
  const [formData, setFormData] = React.useState(settings.privacy);

  const handleToggleChange = (name: keyof typeof formData) => {
    if (name !== "profileVisibility") {
      setFormData((prev) => ({
        ...prev,
        [name]: !prev[name]
      }));
    }
  };

  const handleVisibilityChange = (value: "public" | "private" | "contacts") => {
    setFormData((prev) => ({
      ...prev,
      profileVisibility: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePrivacy(formData);
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy preferences have been saved.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
      <h2 className="text-white text-[15px] font-semibold mb-4">Privacy Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-6">
          {/* Profile Visibility */}
          <div>
            <h3 className="text-white text-sm mb-2">Profile Visibility</h3>
            <RadioGroup 
              value={formData.profileVisibility} 
              onValueChange={(value) => handleVisibilityChange(value as any)}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="public" 
                  id="public" 
                  className="border-[#87888C] text-[#A9DFD8]" 
                />
                <label htmlFor="public" className="text-white text-sm cursor-pointer">
                  Public - Anyone can view your profile
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="contacts" 
                  id="contacts" 
                  className="border-[#87888C] text-[#A9DFD8]" 
                />
                <label htmlFor="contacts" className="text-white text-sm cursor-pointer">
                  Contacts Only - Only people in your contacts can view your profile
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem 
                  value="private" 
                  id="private" 
                  className="border-[#87888C] text-[#A9DFD8]" 
                />
                <label htmlFor="private" className="text-white text-sm cursor-pointer">
                  Private - Your profile is visible only to you
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* Other Privacy Controls */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-sm">Data Sharing</h3>
                <p className="text-[#87888C] text-xs">Allow us to share anonymized usage data</p>
              </div>
              <Switch 
                checked={formData.dataSharing} 
                onCheckedChange={() => handleToggleChange("dataSharing")}
                className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-sm">Activity Tracking</h3>
                <p className="text-[#87888C] text-xs">Allow us to track your activity within the app</p>
              </div>
              <Switch 
                checked={formData.activityTracking} 
                onCheckedChange={() => handleToggleChange("activityTracking")}
                className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white text-sm">Searchable by Email</h3>
                <p className="text-[#87888C] text-xs">Allow others to find you using your email address</p>
              </div>
              <Switch 
                checked={formData.searchableByEmail} 
                onCheckedChange={() => handleToggleChange("searchableByEmail")}
                className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#A9DFD8] text-[#171821] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#8BCEC7]"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
