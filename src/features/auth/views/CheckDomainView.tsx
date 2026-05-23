import { authApi } from '@/features/auth/api/authApi';
import { useAuthStore } from '@/stores/authStore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckDomainView() {
  const navigate = useNavigate();
  const setGlobalSubdomain = useAuthStore((state) => state.setSubdomain);

  // States
  const [subdomain, setSubdomain] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subdomain.trim()) {
      setErrorMsg("Vui lòng nhập tên cửa hàng.");
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      // Gọi API thực tế từ file authApi.ts
      const data = await authApi.checkSubdomain(subdomain.toLowerCase());

      setIsLoading(false);

      if (data.exists) {
        // Đã tồn tại -> Chuyển hướng người dùng qua link login thật
        setErrorMsg(`Gian hàng này đã tồn tại. Đang chuyển qua trang đăng nhập...`);
        setTimeout(() => {
          // Lấy root domain từ file .env
          const rootDomain = import.meta.env.VITE_ROOT_DOMAIN || 'dinhtrung.id.vn';
          window.location.href = `https://${subdomain}.${rootDomain}/login`;
        }, 2000);
      } else {
        // Chưa tồn tại -> Lưu vào Zustand và chuyển sang màn hình Đăng ký
        setGlobalSubdomain(subdomain.toLowerCase());
        navigate('/register');
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMsg("Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại Backend (port 1311).");
    }
  };

  return (
    <div className="text-center animate-fadeIn">
      {/* HIỂN THỊ LỖI NẾU CÓ */}
      {errorMsg && (
        <div className="mb-6 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-md text-sm text-rose-700 text-left">
          {errorMsg}
        </div>
      )}

      <div className="w-24 h-24 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Hãy tạo cửa hàng của bạn</h2>
      <p className="text-sm text-slate-500 mb-8">Sở hữu ngay một hệ thống quản lý bán hàng chuyên nghiệp trong 30 giây</p>

      <form onSubmit={handleCheckDomain} className="space-y-4 relative">
        <div className="relative text-left">
          <input
            type="text"
            required
            placeholder="Đặt tên miền truy cập (Ví dụ: dvntechnology)"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value.replace(/[^a-zA-Z0-9-]/g, ''))}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
          />
          <span className="absolute right-5 top-4 text-slate-400 font-semibold text-sm">.dinhtrung.id.vn</span>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
        >
          {isLoading ? 'Đang kiểm tra dữ liệu...' : 'Tiếp tục đăng ký'}
        </button>
      </form>
    </div>
  );
}
