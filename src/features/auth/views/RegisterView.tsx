import { authApi } from '@/features/auth/api/authApi';
import type { Industry } from '@/features/auth/types';
import { useAuthStore } from '@/stores/authStore';
import { ChevronDown, ChevronLeft, Coffee, Eye, EyeOff, Scissors, ShoppingCart, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterView() {
  const navigate = useNavigate();
  const subdomain = useAuthStore((state) => state.subdomain);

  const [industries, setIndustries] = useState<Industry[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [showIndustryModal, setShowIndustryModal] = useState(false);

  const [storeName, setStoreName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Tự động đá về trang chủ nếu chưa có subdomain (do user gõ URL trực tiếp)
  useEffect(() => {
    if (!subdomain) {
      navigate('/');
    }
  }, [subdomain, navigate]);

  // Gọi API lấy danh sách ngành hàng khi load trang
  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const data = await authApi.getIndustries();
        setIndustries(data);
      } catch (err) {
        setErrorMsg("Không thể lấy dữ liệu ngành hàng từ Server.");
      }
    };
    fetchIndustries();
  }, []);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedIndustry) return setErrorMsg("Vui lòng chọn Ngành hàng kinh doanh.");
    if (password.length < 8) return setErrorMsg("Mật khẩu phải tối thiểu 8 ký tự.");

    setIsLoading(true);
    setErrorMsg('');

    try {
      await authApi.registerTenant({
        store_name: storeName,
        subdomain: subdomain,
        industry_id: selectedIndustry.Id,
        phone: phone,
        password: password
      });

      setIsLoading(false);
      // Chuyển sang màn hình thành công, mang theo thông tin để hiển thị
      navigate('/success', {
        state: { storeName, subdomain, phone, pass: password }
      });
    } catch (err: any) {
      setIsLoading(false);
      // Bắt lỗi từ backend (ví dụ: trùng số điện thoại)
      setErrorMsg(err.response?.data?.detail || "Đăng ký thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="animate-fadeIn relative">
      {/* Nút quay lại & Label Subdomain */}
      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-semibold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Quay lại
        </button>
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
          {subdomain}.dinhtrung.id.vn
        </span>
      </div>

      <h2 className="text-2xl font-extrabold text-slate-800 mb-6 text-center">Hoàn tất đăng ký gian hàng</h2>

      {errorMsg && (
        <div className="mb-6 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-md text-sm text-rose-700">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleRegister} className="space-y-5">
        {/* Chọn Ngành Hàng */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ngành hàng kinh doanh</label>
          <button
            type="button"
            onClick={() => setShowIndustryModal(true)}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-left flex justify-between items-center hover:bg-white transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <span className={selectedIndustry ? 'text-slate-800 font-bold' : 'text-slate-400 font-medium'}>
              {selectedIndustry ? selectedIndustry.Name : 'Chọn ngành hàng kinh doanh'}
            </span>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Tên cửa hàng */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Đặt tên cho cửa hàng</label>
          <input
            type="text" required placeholder="Ví dụ: Cửa hàng DVN"
            value={storeName} onChange={(e) => setStoreName(e.target.value)}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
          />
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Số điện thoại đăng nhập</label>
          <input
            type="tel" required placeholder="Ví dụ: 0889541507"
            value={phone} onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ''))}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
          />
        </div>

        {/* Mật khẩu */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Thiết lập mật khẩu</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'} required placeholder="Mật khẩu tối thiểu 8 ký tự"
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-4 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          type="submit" disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all flex justify-center mt-2"
        >
          {isLoading ? 'Hệ thống đang khởi tạo...' : 'Tạo cửa hàng'}
        </button>
      </form>

      {/* POPUP (MODAL) CHỌN NGÀNH HÀNG */}
      {showIndustryModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fadeInUp">

            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-xl font-extrabold text-slate-800">Hãy chọn ngành hàng kinh doanh của bạn</h3>
                <p className="text-xs text-slate-500 mt-1">Hệ thống sẽ tự động cấu hình giao diện phù hợp với đặc trưng ngành này</p>
              </div>
              <button onClick={() => setShowIndustryModal(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Cột 1: Bán lẻ */}
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><ShoppingCart className="w-4 h-4" /></span>
                    Bán buôn, bán lẻ
                  </div>
                  <div className="space-y-1">
                    {industries.map(ind => (
                      <button
                        key={ind.Id} type="button"
                        onClick={() => { setSelectedIndustry(ind); setShowIndustryModal(false); }}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all font-medium ${selectedIndustry?.Id === ind.Id ? 'bg-blue-50 text-blue-700 font-bold border border-blue-100' : 'text-slate-600 hover:bg-slate-50 border border-transparent'}`}
                      >
                        {ind.Name}
                      </button>
                    ))}
                    {/* Placeholder cho đẹp */}
                    <div className="px-4 py-3 text-xs text-slate-400 italic">Thời trang, Siêu thị, Mẹ & Bé...</div>
                  </div>
                </div>

                {/* Cột 2: F&B */}
                <div className="opacity-60 cursor-not-allowed">
                  <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    <span className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center"><Coffee className="w-4 h-4" /></span>
                    Ăn uống, giải trí
                  </div>
                  <div className="px-4 py-3 text-xs text-slate-400 italic">Sắp ra mắt: Nhà hàng, Quán ăn, Cafe, Trà sữa, Karaoke...</div>
                </div>

                {/* Cột 3: Dịch vụ */}
                <div className="opacity-60 cursor-not-allowed">
                  <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    <span className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center"><Scissors className="w-4 h-4" /></span>
                    Lưu trú, làm đẹp
                  </div>
                  <div className="px-4 py-3 text-xs text-slate-400 italic">Sắp ra mắt: Beauty Spa, Hair Salon, Khách sạn...</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
