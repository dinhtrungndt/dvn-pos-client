import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1311/api/v1';

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000, // Quá 10s không phản hồi là báo lỗi mạng
  headers: {
    'Content-Type': 'application/json',
  },
});
