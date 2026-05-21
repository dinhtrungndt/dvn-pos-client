import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans relative overflow-hidden">

      {/* BACKGROUND DECORATIONS (Confetti Bay Múa) */}
      <div className="absolute top-12 left-12 w-4 h-8 bg-green-400 rounded-full rotate-45 opacity-60"></div>
      <div className="absolute top-24 right-24 w-6 h-6 bg-yellow-400 rounded-lg -rotate-12 opacity-60"></div>
      <div className="absolute bottom-32 left-24 w-8 h-4 bg-blue-400 rounded-full rotate-12 opacity-60"></div>
      <div className="absolute bottom-24 right-32 w-5 h-5 bg-red-400 rounded-md rotate-45 opacity-60"></div>

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 p-4 shadow-sm z-10 flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
        <div>
          <h1 className="text-lg font-bold text-slate-800">DVN POS Cloud</h1>
          <p className="text-xs text-slate-500">Hệ thống quản trị đa gian hàng SaaS</p>
        </div>
      </header>

      {/* BODY CHÍNH - NƠI HIỂN THỊ CÁC MÀN HÌNH CON */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 transition-all">
          {/* <Outlet /> chính là cái lỗ hổng để React Router bơm giao diện con vào (Check Domain, Form Đăng ký...) */}
          <Outlet />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center p-6 text-xs text-slate-400 border-t border-slate-100 bg-white z-10">
        &copy; 2026 DVN POS Technology. Phát triển bởi Minh Tuấn. Đã đăng ký bản quyền.
      </footer>

    </div>
  );
}
