import { Bell, ChevronDown, Globe, MapPin, Settings, User, Truck, Palette, HelpCircle, LogOut, Store, AlertCircle } from 'lucide-react';
import logo from '@/assets/logo/logo.png';
import { useAuthStore } from '../../../stores/authStore';
import { useNavigate } from 'react-router-dom';

export function AdminHeader() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('dvn_token');
    navigate('/login');
  };

  return (
    <header className="h-[50px] bg-white border-b border-gray-200 flex items-center justify-between px-4 w-full relative z-50">
      {/* Left section: Logo */}
      <div className="flex items-center gap-4 h-full">
        <a href="/dashboard" className="flex items-center h-full">
          <img src={logo} alt="DVN POS" className="h-8 object-contain" />
        </a>
      </div>

      {/* Right section: Navigation items */}
      <div className="flex items-center h-full gap-1 text-[13px] text-gray-700">

        {/* Shipping */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors group">
          <Truck className="w-[18px] h-[18px] text-blue-600" />
          <span className="font-medium hidden lg:block">Giao hàng</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        {/* Themes */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors group relative">
          <Palette className="w-[18px] h-[18px] text-gray-600" />
          <span className="hidden lg:block">Chủ đề</span>

          {/* Theme Dropdown */}
          <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white shadow-lg border border-gray-100 rounded p-3 min-w-[200px]">
            <div className="grid grid-cols-5 gap-2">
              <div className="w-6 h-6 rounded bg-[#237FCD] cursor-pointer ring-2 ring-offset-1 ring-blue-500"></div>
              <div className="w-6 h-6 rounded bg-[#4B6580] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#27AE61] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#9B58B5] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#D64457] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#6E9992] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#16A086] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#E67E22] cursor-pointer"></div>
              <div className="w-6 h-6 rounded bg-[#D73C8A] cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors group relative">
          <HelpCircle className="w-[18px] h-[18px] text-gray-600" />
          <span className="hidden lg:block">Hỗ trợ</span>

          {/* Support Dropdown */}
          <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white shadow-lg border border-gray-100 rounded py-2 min-w-[220px]">
            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
              <AlertCircle className="w-4 h-4 text-blue-500" />
              <span>Hướng dẫn sử dụng</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
              <div className="w-4 h-4 bg-blue-600 text-white rounded-[3px] flex items-center justify-center text-[10px] font-bold">TV</div>
              <span>Tải TeamViewer</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors">
              <div className="w-4 h-4 bg-yellow-500 text-white rounded-[3px] flex items-center justify-center text-[10px] font-bold">UV</div>
              <span>Tải UltraViewer</span>
            </a>
          </div>
        </div>

        <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>

        {/* Language Selector */}
        <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors group relative">
          <Globe className="w-[18px] h-[18px] text-red-600" />
          <span className="hidden md:block">Tiếng Việt</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        {/* Branch Selector */}
        <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded cursor-pointer transition-colors">
          <span className="font-medium whitespace-nowrap hidden md:block">Chi nhánh trung tâm</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        {/* Notifications */}
        <div className="group relative">
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors ml-1">
            <Bell className="w-[20px] h-[20px] text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* Notifications Dropdown */}
          <div className="absolute top-full right-0 mt-1 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-lg w-[320px] overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-[15px] text-gray-800">Hộp thư đến</h3>
            </div>
            <div className="flex border-b border-gray-100 px-2">
              <button className="flex-1 py-2 text-[13px] font-medium text-blue-600 border-b-2 border-blue-600 relative">
                Tất cả
                <span className="absolute top-2.5 right-4 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex-1 py-2 text-[13px] font-medium text-gray-500 hover:text-gray-700">Ưu đãi</button>
              <button className="flex-1 py-2 text-[13px] font-medium text-gray-500 hover:text-gray-700 relative">
                Cập nhật
                <span className="absolute top-2.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {/* Notification Item */}
              <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex gap-3 relative border-b border-gray-50">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[13px] text-gray-800 font-medium leading-snug pr-4">Thông báo gói dịch vụ hết hạn sau 1 ngày</p>
                  <p className="text-[11px] text-gray-400 mt-1">10:06 25/05/2026</p>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
          <Settings className="w-[20px] h-[20px] text-gray-600" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 pl-3 ml-1 border-l border-gray-300 cursor-pointer group relative">
          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
            <User className="w-[18px] h-[18px]" />
          </div>

          {/* User Dropdown */}
          <div className="absolute top-full right-0 mt-3 hidden group-hover:block bg-white shadow-xl border border-gray-100 rounded-lg min-w-[240px] overflow-hidden">
            <div className="px-4 py-3 flex items-start gap-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-[14px] text-gray-800 truncate" title={user?.phone || '0889541507'}>
                  {user?.phone || '0889541507'}
                </p>
                <p className="text-[11px] text-red-500 mt-0.5 font-medium">Chưa bật xác thực 2 lớp</p>
              </div>
            </div>

            <div className="py-1">
              <a href="#" className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3 text-gray-700">
                  <Store className="w-[18px] h-[18px]" />
                  <span>Hồ sơ cửa hàng</span>
                </div>
              </a>
              <div className="h-[1px] bg-gray-100 my-1"></div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-red-600 text-left"
              >
                <LogOut className="w-[18px] h-[18px]" />
                <span className="font-medium">Đăng xuất</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
