
export type NotificationPreference = {
  enabled: boolean;
  frequency: 'immediate' | 'daily' | 'weekly' | 'never';
};

export type NotificationSettings = {
  email: NotificationPreference;
  push: NotificationPreference;
  sms: NotificationPreference;
  newsletter: boolean;
};

export type PrivacySettings = {
  profileVisibility: 'public' | 'private' | 'contacts';
  dataSharing: boolean;
  activityTracking: boolean;
  searchableByEmail: boolean;
};

export type AppearanceSettings = {
  theme: 'light' | 'dark' | 'system';
  fontSize: 'small' | 'medium' | 'large';
  reducedMotion: boolean;
  highContrast: boolean;
};

export type SecuritySettings = {
  twoFactorEnabled: boolean;
  passwordLastChanged: string | null;
  activeSessions: {
    id: string;
    device: string;
    location: string;
    lastActive: string;
  }[];
};

export type UserProfile = {
  name: string;
  email: string;
  phone: string;
  location: string;
};

export type SettingsState = {
  activeCategory: string;
  profile: UserProfile;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  appearance: AppearanceSettings;
  security: SecuritySettings;
};
