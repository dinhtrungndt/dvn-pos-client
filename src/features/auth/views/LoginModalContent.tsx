import { useAuthStore } from '@/stores/authStore';
import { redirectToTenantLogin } from '@/utils/tenantHelper';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../api/authApi';

export default function LoginModalContent() {
  const navigate = useNavigate();
  const setGlobalSubdomain = useAuthStore((state) => state.setSubdomain);

  const [subdomain, setSubdomain] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subdomain.trim()) {
      setErrorMsg("Vui lòng nhập tên cửa hàng.");
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const data = await authApi.checkSubdomain(subdomain.toLowerCase());
      setIsLoading(false);

      if (data.exists) {
        setErrorMsg(`Đang chuyển đến trang đăng nhập...`);
        setTimeout(() => {
          redirectToTenantLogin(subdomain.toLowerCase());
        }, 500);
      } else {
        setGlobalSubdomain(subdomain.toLowerCase());
        navigate('/register');
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMsg("Không thể kết nối đến máy chủ.");
    }
  };

  return (
    <form className="space-y-4">
      {errorMsg && (
        <div className="mb-6 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-md text-sm text-rose-700 text-left">
          {errorMsg}
        </div>
      )}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1">Địa chỉ cửa hàng</label>
        <div className="flex bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
          <input className="w-full px-3 py-2 bg-transparent outline-none" placeholder="tencuahang" value={subdomain} onChange={(e) => setSubdomain(e.target.value.replace(/[^a-zA-Z0-9-]/g, ''))} />
          <span className="px-3 py-2 text-slate-400 text-sm bg-slate-100">.dinhtrung.id.vn</span>
        </div>
      </div>
      <p className="text-sm text-slate-500">
        Bạn chưa có gian hàng trên DVN?
        <Link className="text-emerald-600 hover:text-emerald-700 font-bold ml-1" to="/register">
          Dùng thử miễn phí
        </Link>
      </p>
      <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg" onClick={handleCheckDomain} disabled={isLoading}>
        {isLoading ? 'Đang kiểm tra dữ liệu...' : 'Vào cửa hàng'}
      </button>
    </form>
  );
}
