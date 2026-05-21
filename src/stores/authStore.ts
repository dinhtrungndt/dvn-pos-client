import { create } from 'zustand';

interface AuthState {
  subdomain: string;
  token: string | null;

  // Các hàm (actions) để thay đổi dữ liệu
  setSubdomain: (subdomain: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  subdomain: '',
  token: null,

  setSubdomain: (subdomain) => set({ subdomain }),
  setToken: (token) => set({ token }),
  logout: () => set({ subdomain: '', token: null }),
}));
