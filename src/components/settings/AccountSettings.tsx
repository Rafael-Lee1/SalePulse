
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSettings } from "@/contexts/SettingsContext";
import { useToast } from "@/hooks/use-toast";

export const AccountSettings = () => {
  const { settings, updateProfile } = useSettings();
  const { toast } = useToast();
  const [formData, setFormData] = React.useState(settings.profile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    toast({
      title: "Account Updated",
      description: "Your account information has been updated successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
      <h2 className="text-white text-[15px] font-semibold mb-4">Account Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#87888C] text-sm mb-1">Name</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
          />
        </div>
        <div>
          <label className="block text-[#87888C] text-sm mb-1">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
          />
        </div>
        <div>
          <label className="block text-[#87888C] text-sm mb-1">Phone</label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
          />
        </div>
        <div>
          <label className="block text-[#87888C] text-sm mb-1">Location</label>
          <Input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
          />
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
