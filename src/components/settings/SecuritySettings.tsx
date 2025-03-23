
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSettings } from "@/contexts/SettingsContext";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { AlertTriangle, Trash2 } from "lucide-react";
import { format } from "date-fns";

export const SecuritySettings = () => {
  const { settings, updateSecurity } = useSettings();
  const { toast } = useToast();
  const [formData, setFormData] = React.useState(settings.security);
  const [passwordData, setPasswordData] = React.useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = React.useState("");

  const handleTwoFactorChange = () => {
    setFormData((prev) => ({
      ...prev,
      twoFactorEnabled: !prev.twoFactorEnabled
    }));
  };

  const handleEndSession = (sessionId: string) => {
    setFormData((prev) => ({
      ...prev,
      activeSessions: prev.activeSessions.filter(session => session.id !== sessionId)
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (passwordError) setPasswordError("");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
    
    // Simulate successful password change
    setFormData((prev) => ({
      ...prev,
      passwordLastChanged: new Date().toISOString()
    }));
    
    // Reset form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully.",
      duration: 3000,
    });
  };

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSecurity(formData);
    toast({
      title: "Security Settings Updated",
      description: "Your security preferences have been saved.",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-6">
      {/* Password Change */}
      <div className="bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-4">Change Password</h2>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label className="block text-[#87888C] text-sm mb-1">Current Password</label>
            <Input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
            />
          </div>
          <div>
            <label className="block text-[#87888C] text-sm mb-1">New Password</label>
            <Input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
            />
          </div>
          <div>
            <label className="block text-[#87888C] text-sm mb-1">Confirm New Password</label>
            <Input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full h-10 bg-[#171821] text-white rounded-md px-3 outline-none"
            />
          </div>
          
          {passwordError && (
            <div className="flex items-center text-red-500 text-sm mt-2">
              <AlertTriangle size={16} className="mr-1" />
              {passwordError}
            </div>
          )}
          
          {formData.passwordLastChanged && (
            <div className="text-[#87888C] text-sm">
              Last changed: {format(new Date(formData.passwordLastChanged), "MMMM d, yyyy")}
            </div>
          )}
          
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#A9DFD8] text-[#171821] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#8BCEC7]"
            >
              Update Password
            </Button>
          </div>
        </form>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-[#21222D] p-5 rounded-[10px]">
        <form onSubmit={handleSecuritySubmit}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-white text-[15px] font-semibold">Two-Factor Authentication</h2>
              <p className="text-[#87888C] text-xs mt-1">Add an extra layer of security to your account</p>
            </div>
            <Switch 
              checked={formData.twoFactorEnabled} 
              onCheckedChange={handleTwoFactorChange}
              className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
            />
          </div>
          
          {formData.twoFactorEnabled && (
            <div className="bg-[#171821] p-4 rounded-md mb-4">
              <h3 className="text-white text-sm mb-2">Setup Instructions</h3>
              <p className="text-[#87888C] text-xs">
                1. Download an authenticator app like Google Authenticator or Authy<br />
                2. Scan the QR code or enter the setup key<br />
                3. Enter the verification code from the app
              </p>
              <div className="flex justify-center my-4">
                <div className="bg-white p-4 rounded-md">
                  {/* Placeholder for QR code - in a real app you'd generate this */}
                  <div className="w-[150px] h-[150px] bg-gray-800 flex items-center justify-center">
                    <span className="text-xs text-white">QR Code Placeholder</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-[#87888C] text-sm mb-1">Verification Code</label>
                <div className="flex">
                  <Input
                    type="text"
                    placeholder="Enter the 6-digit code"
                    className="w-full h-10 bg-[#30313A] text-white rounded-md px-3 outline-none"
                  />
                  <Button
                    type="button"
                    className="ml-2 bg-[#A9DFD8] text-[#171821] px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </div>
          )}
          
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

      {/* Active Sessions */}
      <div className="bg-[#21222D] p-5 rounded-[10px]">
        <h2 className="text-white text-[15px] font-semibold mb-4">Active Sessions</h2>
        <div className="space-y-3">
          {formData.activeSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between bg-[#171821] p-3 rounded-md">
              <div>
                <h3 className="text-white text-sm">{session.device}</h3>
                <p className="text-[#87888C] text-xs">
                  {session.location} • Last active: {format(new Date(session.lastActive), "MMM d, yyyy")}
                </p>
              </div>
              <Button
                type="button"
                onClick={() => handleEndSession(session.id)}
                variant="ghost"
                className="text-red-400 hover:text-red-300 hover:bg-transparent p-1"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
