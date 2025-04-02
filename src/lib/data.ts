import profileData from '@/data/data.json';

export interface Profile {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
}

export interface Link {
  title: string;
  url: string;
  icon: string;
}

export function getProfile(): Profile {
  return profileData.profile;
}

export function getLinks(): Link[] {
  return profileData.links;
}