export interface Member {
  name: string;
  title: string;
  handle: string;
  status: 'Online' | 'Offline' | 'Busy' | 'Away';
  contactText: string;
  avatarUrl: string;
  iconUrl: string;
  
}

