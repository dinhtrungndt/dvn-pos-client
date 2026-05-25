import { apiClient } from '@/config/api';
import type { Industry, RegisterPayload, TenantResponse } from '@/features/auth/types';

export const authApi = {

  checkSubdomain: async (subdomain: string): Promise<{ exists: boolean; message: string }> => {
    const response = await apiClient.get(`/public/tenants/check?subdomain=${subdomain}`);
    return response.data;
  },

  checkPhone: async (phone: string): Promise<{ exists: boolean; message: string }> => {
    const response = await apiClient.get(`/public/tenants/check-phone?phone=${phone}`);
    return response.data;
  },

  getIndustries: async (): Promise<Industry[]> => {
    const response = await apiClient.get('/public/industries');
    return response.data;
  },

  registerTenant: async (payload: RegisterPayload): Promise<TenantResponse> => {
    const response = await apiClient.post('/public/tenants/register', payload);
    return response.data;
  },

  login: async (payload: { tenant_subdomain: string; phone: string; password: string }) => {
    const response = await apiClient.post('/public/auth/login', payload);
    return response.data;
  }
};
