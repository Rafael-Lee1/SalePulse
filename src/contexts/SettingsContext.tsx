
import React, { createContext, useContext, useState, useEffect } from "react";
import { SettingsState } from "@/types/settings";

// Default settings
const defaultSettings: SettingsState = {
  activeCategory: "account",
  profile: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
  },
  notifications: {
    email: { enabled: true, frequency: "daily" },
    push: { enabled: true, frequency: "immediate" },
    sms: { enabled: false, frequency: "never" },
    newsletter: true,
  },
  privacy: {
    profileVisibility: "public",
    dataSharing: true,
    activityTracking: true,
    searchableByEmail: true,
  },
  appearance: {
    theme: "light",
    fontSize: "medium",
    reducedMotion: false,
    highContrast: false,
  },
  security: {
    twoFactorEnabled: false,
    passwordLastChanged: null,
    activeSessions: [
      {
        id: "session-1",
        device: "Chrome on Windows",
        location: "San Francisco, CA",
        lastActive: new Date().toISOString(),
      },
      {
        id: "session-2",
        device: "Mobile App on iPhone",
        location: "New York, NY",
        lastActive: new Date(Date.now() - 86400000).toISOString(),
      },
    ],
  },
};

type SettingsContextType = {
  settings: SettingsState;
  setActiveCategory: (category: string) => void;
  updateProfile: (profile: Partial<SettingsState["profile"]>) => void;
  updateNotifications: (notifications: Partial<SettingsState["notifications"]>) => void;
  updatePrivacy: (privacy: Partial<SettingsState["privacy"]>) => void;
  updateAppearance: (appearance: Partial<SettingsState["appearance"]>) => void;
  updateSecurity: (security: Partial<SettingsState["security"]>) => void;
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load settings from localStorage
  const [settings, setSettings] = useState<SettingsState>(() => {
    const savedSettings = localStorage.getItem("userSettings");
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings;
  });

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
  }, [settings]);

  // Update functions
  const setActiveCategory = (category: string) => {
    setSettings((prev) => ({ ...prev, activeCategory: category }));
  };

  const updateProfile = (profile: Partial<SettingsState["profile"]>) => {
    setSettings((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...profile },
    }));
  };

  const updateNotifications = (notifications: Partial<SettingsState["notifications"]>) => {
    setSettings((prev) => ({
      ...prev,
      notifications: { ...prev.notifications, ...notifications },
    }));
  };

  const updatePrivacy = (privacy: Partial<SettingsState["privacy"]>) => {
    setSettings((prev) => ({
      ...prev,
      privacy: { ...prev.privacy, ...privacy },
    }));
  };

  const updateAppearance = (appearance: Partial<SettingsState["appearance"]>) => {
    setSettings((prev) => ({
      ...prev,
      appearance: { ...prev.appearance, ...appearance },
    }));
  };

  const updateSecurity = (security: Partial<SettingsState["security"]>) => {
    setSettings((prev) => ({
      ...prev,
      security: { ...prev.security, ...security },
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setActiveCategory,
        updateProfile,
        updateNotifications,
        updatePrivacy,
        updateAppearance,
        updateSecurity,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};
