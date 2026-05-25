import { create } from 'zustand';
import { authApi } from '../features/auth/api/authApi';
import type { RegisterPayload, TenantResponse } from '../features/auth/types';

interface AuthState {
  subdomain: string;
  token: string | null;
  user: { phone: string } | null;
  isRegistering: boolean;
  registerError: string | null;

  // Các hàm (actions) để thay đổi dữ liệu
  setSubdomain: (subdomain: string) => void;
  setToken: (token: string) => void;
  setUser: (user: { phone: string } | null) => void;
  logout: () => void;
  register: (payload: RegisterPayload) => Promise<TenantResponse | null>;
}

export const useAuthStore = create<AuthState>((set) => ({
  subdomain: '',
  token: null,
  user: null,
  isRegistering: false,
  registerError: null,

  setSubdomain: (subdomain) => set({ subdomain }),
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  logout: () => set({ subdomain: '', token: null, user: null }),
  register: async (payload: RegisterPayload) => {
    set({ isRegistering: true, registerError: null });
    try {
      const tenant = await authApi.registerTenant(payload);
      set({ isRegistering: false });
      return tenant;
    } catch (error: any) {
      set({ 
        isRegistering: false, 
        registerError: error.response?.data?.detail || error.message || 'Đã xảy ra lỗi khi đăng ký' 
      });
      return null;
    }
  },
}));
