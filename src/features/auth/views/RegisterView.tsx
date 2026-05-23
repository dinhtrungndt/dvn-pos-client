import { X } from 'lucide-react';

const BG =
  'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31095247/background-register1-1.jpg';

import { useNavigate } from 'react-router-dom';
import { DVNRegisterForm } from './DVNRegisterForm';

const RegisterView = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="relative min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Close button */}
        <button
          type="button"
          aria-label="Close"
          className="absolute right-6 top-6 z-20 h-12 w-12 rounded-full bg-white/70 hover:bg-white shadow-soft border border-slate-200
                     flex items-center justify-center transition-colors"
          onClick={() => navigate('/')}
        >
          <X className="h-6 w-6 text-slate-600" />
        </button>

        {/* LEFT: background */}
        <div
          className="relative hidden lg:block"
          style={{
            backgroundImage: `url("${BG}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* blue overlay */}
          <div className="absolute inset-0" />
          {/* extra gradient depth */}
          <div className="absolute inset-0 bg-gradient-to-b via-[#0B4F9A]/78 to-[#083B79]/88" />

          <div className="relative z-10 h-full w-full flex items-center justify-center px-12">
            <div className="max-w-[520px] w-full">
              <div
                className="text-white font-semibold leading-[1.08] tracking-[-0.02em]
                           text-[clamp(2.2rem,3.5vw,3.2rem)]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <p>Quản lý dễ dàng</p>
                <p>Bán hàng đơn giản</p>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <div className="relative inline-flex items-center justify-center px-8 py-3 text-white text-[15px] font-semibold">
                  {/* bracket left */}
                  <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-7 w-7 border-l border-t border-white/70" />
                  <span className="absolute -left-1 bottom-1/2 translate-y-1/2 h-7 w-7 border-l border-b border-white/70" />
                  {/* bracket right */}
                  <span className="absolute -right-1 top-1/2 -translate-y-1/2 h-7 w-7 border-r border-t border-white/70" />
                  <span className="absolute -right-1 bottom-1/2 translate-y-1/2 h-7 w-7 border-r border-b border-white/70" />

                  <span className="opacity-95">Hỗ trợ đăng ký 0399 690 987</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="relative flex items-center justify-center px-5 sm:px-8 py-12 lg:py-0">
          <div className="w-full max-w-[720px]">
            <DVNRegisterForm />

            {/* Mobile: show the left message (optional) */}
            <div className="mt-10 lg:hidden rounded-3xl overflow-hidden border border-slate-200">
              <div
                className="relative p-8"
                style={{
                  backgroundImage: `url("${BG}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-[#0B4F9A]/75" />
                <div className="relative z-10">
                  <div className="text-white font-semibold text-[26px] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                    <p>Quản lý dễ dàng</p>
                    <p>Bán hàng đơn giản</p>
                  </div>

                  <div className="mt-5 inline-flex items-center justify-center px-6 py-2 text-white text-[14px] font-semibold border border-white/40 rounded-full">
                    Hỗ trợ đăng ký 0399 690 987
                  </div>
                </div>
              </div>
            </div>
            {/* end mobile */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;
