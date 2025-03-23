
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/contexts/SettingsContext";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const AppearanceSettings = () => {
  const { settings, updateAppearance } = useSettings();
  const { toast } = useToast();
  const [formData, setFormData] = React.useState(settings.appearance);

  // Apply theme when formData changes or on initial load
  useEffect(() => {
    const rootEl = document.documentElement;
    const theme = formData.theme === 'system' 
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      : formData.theme;
      
    if (theme === 'dark') {
      rootEl.classList.add('dark');
    } else {
      rootEl.classList.remove('dark');
    }

    // Apply font size
    switch (formData.fontSize) {
      case 'small':
        rootEl.style.fontSize = '0.875rem';
        break;
      case 'medium':
        rootEl.style.fontSize = '1rem';
        break;
      case 'large':
        rootEl.style.fontSize = '1.125rem';
        break;
    }

    // Apply reduced motion
    if (formData.reducedMotion) {
      rootEl.classList.add('motion-reduce');
    } else {
      rootEl.classList.remove('motion-reduce');
    }

    // Apply high contrast
    if (formData.highContrast) {
      rootEl.classList.add('high-contrast');
    } else {
      rootEl.classList.remove('high-contrast');
    }
  }, [formData]);

  const handleThemeChange = (value: "light" | "dark" | "system") => {
    setFormData((prev) => ({ ...prev, theme: value }));
  };

  const handleFontSizeChange = (value: "small" | "medium" | "large") => {
    setFormData((prev) => ({ ...prev, fontSize: value }));
  };

  const handleToggleChange = (name: keyof typeof formData) => {
    if (typeof formData[name] === 'boolean') {
      setFormData((prev) => ({
        ...prev,
        [name]: !prev[name as "reducedMotion" | "highContrast"]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateAppearance(formData);
    toast({
      title: "Appearance Settings Updated",
      description: "Your appearance preferences have been saved.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-[#21222D] p-5 rounded-[10px] mb-6">
      <h2 className="text-white text-[15px] font-semibold mb-4">Appearance Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Theme Selection */}
        <div>
          <h3 className="text-white text-sm mb-2">Theme</h3>
          <RadioGroup 
            value={formData.theme} 
            onValueChange={(value) => handleThemeChange(value as any)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="light" 
                id="light-theme" 
                className="border-[#87888C] text-[#A9DFD8]" 
              />
              <label htmlFor="light-theme" className="text-white text-sm cursor-pointer">
                Light Theme
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="dark" 
                id="dark-theme" 
                className="border-[#87888C] text-[#A9DFD8]" 
              />
              <label htmlFor="dark-theme" className="text-white text-sm cursor-pointer">
                Dark Theme
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="system" 
                id="system-theme" 
                className="border-[#87888C] text-[#A9DFD8]" 
              />
              <label htmlFor="system-theme" className="text-white text-sm cursor-pointer">
                Use System Theme
              </label>
            </div>
          </RadioGroup>
        </div>

        {/* Font Size */}
        <div>
          <h3 className="text-white text-sm mb-2">Font Size</h3>
          <RadioGroup 
            value={formData.fontSize} 
            onValueChange={(value) => handleFontSizeChange(value as any)}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="small" 
                id="small-font" 
                className="border-[#87888C] text-[#A9DFD8]" 
              />
              <label htmlFor="small-font" className="text-white text-sm cursor-pointer">
                Small
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="medium" 
                id="medium-font" 
                className="border-[#87888C] text-[#A9DFD8]" 
              />
              <label htmlFor="medium-font" className="text-white text-sm cursor-pointer">
                Medium
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="large" 
                id="large-font" 
                className="border-[#87888C] text-[#A9DFD8]" 
              />
              <label htmlFor="large-font" className="text-white text-sm cursor-pointer">
                Large
              </label>
            </div>
          </RadioGroup>
        </div>

        {/* Accessibility Options */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm">Reduced Motion</h3>
              <p className="text-[#87888C] text-xs">Minimize animations throughout the interface</p>
            </div>
            <Switch 
              checked={formData.reducedMotion} 
              onCheckedChange={() => handleToggleChange("reducedMotion")}
              className="bg-[#171821] data-[state=checked]:bg-[#A9DFD8]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-sm">High Contrast</h3>
              <p className="text-[#87888C] text-xs">Increase contrast for better readability</p>
            </div>
            <Switch 
              checked={formData.highContrast} 
              onCheckedChange={() => handleToggleChange("highContrast")}
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
