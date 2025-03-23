
import React from "react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/contexts/SettingsContext";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";

export const NotificationSettings = () => {
  const { settings, updateNotifications } = useSettings();
  const { toast } = useToast();
  const [formData, setFormData] = React.useState(settings.notifications);

  const handleToggleChange = (name: keyof typeof formData) => {
    if (name === "newsletter") {
      setFormData((prev) => ({
        ...prev,
        [name]: !prev[name]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: {
          ...prev[name as "email" | "push" | "sms"],
          enabled: !prev[name as "email" | "push" | "sms"].enabled
        }
      }));
    }
  };

  const handleFrequencyChange = (name: "email" | "push" | "sms", value: "immediate" | "daily" | "weekly" | "never") => {
    setFormData((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        frequency: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateNotifications(formData);
    toast({
      title: "Notification Settings Updated",
      description: "Your notification preferences have been saved.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
      <h2 className="text-white text-[15px] font-semibold mb-4">Notification Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm">Email notifications</h3>
              <p className="text-[#87888C] text-xs">Receive updates via email</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select 
                value={formData.email.frequency} 
                onValueChange={(value) => handleFrequencyChange("email", value as any)}
                disabled={!formData.email.enabled}
              >
                <SelectTrigger className="w-[120px] bg-[#171821] text-white border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#171821] text-white border-[#2B2B36]">
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
              <Switch 
                checked={formData.email.enabled} 
                onCheckedChange={() => handleToggleChange("email")}
                className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
              />
            </div>
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm">Push notifications</h3>
              <p className="text-[#87888C] text-xs">Receive in-app alerts</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select 
                value={formData.push.frequency} 
                onValueChange={(value) => handleFrequencyChange("push", value as any)}
                disabled={!formData.push.enabled}
              >
                <SelectTrigger className="w-[120px] bg-[#171821] text-white border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#171821] text-white border-[#2B2B36]">
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
              <Switch 
                checked={formData.push.enabled} 
                onCheckedChange={() => handleToggleChange("push")}
                className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
              />
            </div>
          </div>

          {/* SMS Notifications */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm">SMS notifications</h3>
              <p className="text-[#87888C] text-xs">Receive text messages</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select 
                value={formData.sms.frequency} 
                onValueChange={(value) => handleFrequencyChange("sms", value as any)}
                disabled={!formData.sms.enabled}
              >
                <SelectTrigger className="w-[120px] bg-[#171821] text-white border-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#171821] text-white border-[#2B2B36]">
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
              <Switch 
                checked={formData.sms.enabled} 
                onCheckedChange={() => handleToggleChange("sms")}
                className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm">Newsletter</h3>
              <p className="text-[#87888C] text-xs">Receive product updates</p>
            </div>
            <Switch 
              checked={formData.newsletter} 
              onCheckedChange={() => handleToggleChange("newsletter")}
              className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
            />
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
