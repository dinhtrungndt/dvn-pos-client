export interface Industry {
  Id: number;
  Code: string;
  Name: string;
  Features?: string;
}

export interface RegisterPayload {
  store_name: string;
  subdomain: string;
  industry_id: number;
  phone: string;
  password: string;
}

export interface TenantResponse {
  Id: number;
  StoreName: string;
  Subdomain: string;
  IndustryId: number;
  IsActive: boolean;
  CreatedAt: string;
}
