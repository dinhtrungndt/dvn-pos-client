import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';

export default function PosPage() {
  const navigate = useNavigate();
  const logout = useAuthStore(state => state.logout);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('dvn_token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Trang Bán Hàng (POS)</h1>
        <p className="text-slate-600 mb-8">Giao diện bán hàng đang được phát triển...</p>
        
        <button 
          onClick={handleLogout}
          className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 font-semibold transition-colors"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  );
}
