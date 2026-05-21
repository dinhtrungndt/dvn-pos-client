import { CheckCircle2, Copy } from 'lucide-react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SuccessView() {
  const location = useLocation();
  const navigate = useNavigate();
  const successInfo = location.state;

  useEffect(() => {
    if (!successInfo) {
      navigate('/');
    }
  }, [successInfo, navigate]);

  if (!successInfo) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Đã copy: ${text}`);
  };

  const handleGoToLogin = () => {
    const rootDomain = import.meta.env.VITE_ROOT_DOMAIN || 'dinhtrung.id.vn';
    window.location.href = `https://${successInfo.subdomain}.${rootDomain}/login`;
  };

  return (
    <div className="text-center animate-fadeIn">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="w-16 h-16 text-green-500 drop-shadow-md" />
      </div>

      <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Cửa hàng của bạn đã sẵn sàng</h2>
      <p className="text-sm text-slate-500 mb-8">Vui lòng lưu lại thông tin tài khoản dưới đây để đăng nhập</p>

      <div className="space-y-4 mb-8">

        {/* Gian Hàng */}
        <div className="flex flex-col text-left bg-blue-50/70 p-4 rounded-xl border border-blue-100">
          <span className="text-xs font-bold text-blue-600 uppercase mb-1 tracking-wider">Tên gian hàng / Subdomain</span>
          <div className="flex justify-between items-center">
            <span className="font-extrabold text-lg text-slate-800">{successInfo.subdomain}</span>
            <button onClick={() => copyToClipboard(successInfo.subdomain)} className="p-1 hover:bg-blue-100 rounded text-blue-600 transition-colors">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tên Đăng Nhập */}
        <div className="flex flex-col text-left bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
          <span className="text-xs font-bold text-emerald-600 uppercase mb-1 tracking-wider">Tên đăng nhập (Số điện thoại)</span>
          <div className="flex justify-between items-center">
            <span className="font-extrabold text-lg text-slate-800">{successInfo.phone}</span>
            <button onClick={() => copyToClipboard(successInfo.phone)} className="p-1 hover:bg-emerald-100 rounded text-emerald-600 transition-colors">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mật khẩu */}
        <div className="flex flex-col text-left bg-amber-50/70 p-4 rounded-xl border border-amber-100">
          <span className="text-xs font-bold text-amber-600 uppercase mb-1 tracking-wider">Mật khẩu</span>
          <div className="flex justify-between items-center">
            <span className="font-extrabold text-lg text-slate-800">{successInfo.pass}</span>
            <button onClick={() => copyToClipboard(successInfo.pass)} className="p-1 hover:bg-amber-100 rounded text-amber-600 transition-colors">
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      <button
        onClick={handleGoToLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all text-lg mb-2"
      >
        Bắt đầu quản lý cửa hàng
      </button>
    </div>
  );
}
