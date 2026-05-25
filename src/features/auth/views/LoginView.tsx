import logo from '@/assets/logo/logo.png';
import { BarChart2, Eye, EyeOff, Phone, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInputPkg from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useAuthStore } from '../../../stores/authStore';
import { authApi } from '../api/authApi';

const PhoneInput: any = (PhoneInputPkg as any).default || PhoneInputPkg;

const LoginView = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Determine the subdomain from URL (if production) or localStorage (if localhost)
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const tenant = isLocalhost ? localStorage.getItem('dvn_tenant') || '' : window.location.hostname.split('.')[0];

  const handleLogin = async (e: React.FormEvent, redirectPath: string) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setErrorMsg('Vui lòng nhập số điện thoại và mật khẩu');
      return;
    }

    if (!tenant) {
      setErrorMsg('Không tìm thấy thông tin gian hàng');
      return;
    }

    setIsLoading(true);
    setErrorMsg('');

    try {
      const data = await authApi.login({
        tenant_subdomain: tenant,
        phone: username,
        password: password
      });

      setIsLoading(false);

      if (data.success) {
        setToken(data.token);
        if (rememberMe) {
          localStorage.setItem('dvn_token', data.token);
        }
        navigate(redirectPath);
      }
    } catch (err: any) {
      setIsLoading(false);
      setErrorMsg(err.response?.data?.detail || 'Lỗi kết nối đến máy chủ');
    }
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80")',
          filter: 'blur(8px)',
          transform: 'scale(1.05)' // prevent blur edges
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/40" />

      {/* Login Card */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-2xl relative z-10 overflow-hidden">
        <div className="pt-10 pb-8 px-8 flex justify-center">
          <img src={logo} alt="DVN POS" className="h-12" />
        </div>

        <form className="px-8 pb-10 space-y-6">
          {errorMsg && (
            <div className="p-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm">
              {errorMsg}
            </div>
          )}
          {/* Username Input */}
          <div className="relative phone-login">
            <style>{`
              .phone-login .react-tel-input .form-control { width: 100%; height: 52px; border: 1px solid #cbd5e1; border-radius: 0.75rem; font-size: 15px; color: #0f172a; outline: none; transition: all 0.2s; padding-left: 60px; }
              .phone-login .react-tel-input .form-control:focus { border-color: #3b82f6; box-shadow: 0 0 0 4px #eff6ff; }
              .phone-login .react-tel-input .flag-dropdown { border: 1px solid #cbd5e1; border-radius: 0.75rem 0 0 0.75rem; background: #f8fafc; border-right: none; }
              .phone-login .react-tel-input .flag-dropdown:hover { background: #f1f5f9; }
              .phone-login .react-tel-input .selected-flag:hover, .phone-login .react-tel-input .selected-flag:focus { background-color: transparent; }
            `}</style>
            <PhoneInput
              country={'vn'}
              value={username}
              onChange={phone => setUsername(phone)}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: true,
                placeholder: 'Số điện thoại'
              }}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full h-[52px] border border-slate-300 rounded-xl px-5 pr-12 text-[15px] text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-slate-400"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={e => setRememberMe(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-[18px] h-[18px] border-[1.5px] border-slate-300 rounded-[4px] peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-colors flex items-center justify-center group-hover:border-blue-500">
                  <svg className={`w-3 h-3 text-white ${rememberMe ? 'block' : 'hidden'}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <span className="ml-2.5 text-[14px] text-slate-700 group-hover:text-slate-900 font-medium">Duy trì đăng nhập</span>
            </label>
            <a href="#" className="text-[14px] text-blue-600 hover:text-blue-800 font-medium transition-colors">
              Quên mật khẩu?
            </a>
          </div>
        </form>

        {/* Action Buttons */}
        <div className="flex w-full">
          <button
            type="button"
            onClick={(e) => handleLogin(e, '/admin')}
            disabled={isLoading}
            className="flex-1 h-14 bg-[#0062FF] hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <BarChart2 className="w-[22px] h-[22px]" />
            <span className="text-[16px]">{isLoading ? 'Đang vào...' : 'Quản lý'}</span>
          </button>
          <button
            type="button"
            onClick={(e) => handleLogin(e, '/pos')}
            disabled={isLoading}
            className="flex-1 h-14 bg-[#10B981] hover:bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2.5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-[20px] h-[20px]" />
            <span className="text-[16px]">{isLoading ? 'Đang vào...' : 'Bán hàng'}</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-10 flex items-center gap-6 text-white/90 text-[14px] font-medium">
        <div className="flex items-center gap-2.5">
          <Phone className="w-[18px] h-[18px]" />
          Hỗ trợ: 0399 690 987
        </div>
        <div className="w-[3px] h-[3px] rounded-full bg-white/50" />
        <div className="flex items-center gap-2.5 cursor-pointer hover:text-white transition-colors">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" alt="VN" className="w-[22px] h-[16px] object-cover rounded-[2px]" />
          <span>Tiếng Việt</span>
          <svg className="w-4 h-4 ml-[-4px] opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
