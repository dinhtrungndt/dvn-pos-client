import { Check, ChevronDown, Copy, Eye, EyeOff, Store } from 'lucide-react';
import { useEffect, useRef, useState } from "react";
import PhoneInputPkg from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FOOD_INDUSTRIES, RETAIL_INDUSTRIES, SERVICE_INDUSTRIES } from '../../../data/industries';

const PhoneInput: any = (PhoneInputPkg as any).default || PhoneInputPkg;

const CustomSelect = ({ label, value, onChange, options, defaultLabel }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`w-full h-14 rounded-2xl border bg-white px-5 flex items-center justify-between cursor-pointer transition relative mt-4 ${isOpen ? 'border-emerald-500 ring-4 ring-emerald-100' : 'border-slate-300 hover:border-emerald-500'}`}
      ref={dropdownRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="pointer-events-none w-full select-none">
        {value ? (
          <div>
            <div className="text-[12px] font-semibold text-slate-500">{label}</div>
            <div className="text-[15px] text-slate-900 mt-0.5">{value}</div>
          </div>
        ) : (
          <div className="text-[15px] text-slate-400 mt-1.5">{defaultLabel || `Chọn ${label.toLowerCase()}`}</div>
        )}
      </div>
      <div className={`h-0 w-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-500 pointer-events-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />

      {isOpen && (
        <ul className="absolute top-[110%] left-0 w-full bg-white border border-slate-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-[100] max-h-64 overflow-auto py-2 custom-scrollbar">
          {options.map((opt: string) => (
            <li
              key={opt}
              className={`px-5 py-3 hover:bg-emerald-50 cursor-pointer text-[15px] transition-colors flex items-center justify-between ${value === opt ? 'text-emerald-600 font-semibold bg-emerald-50/70' : 'text-slate-700'}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt);
                setIsOpen(false);
              }}
            >
              <span>{opt}</span>
              {value === opt && <Check className="w-4 h-4 text-emerald-600" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const IndustrySelect = ({ value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allIndustries = [...RETAIL_INDUSTRIES, ...FOOD_INDUSTRIES, ...SERVICE_INDUSTRIES];
  const selectedItem = allIndustries.find(item => item.label === value);
  const SelectedIcon = selectedItem ? selectedItem.icon : null;

  return (
    <div
      className={`w-full rounded-2xl border bg-white flex flex-col cursor-pointer transition relative mt-4 ${isOpen ? 'border-emerald-500 ring-4 ring-emerald-100 z-50' : 'border-slate-300 hover:border-emerald-500 z-10'}`}
      ref={dropdownRef}
    >
      <div
        className="px-5 h-14 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3 pointer-events-none select-none">
          {selectedItem && SelectedIcon ? (
            <>
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <SelectedIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[12px] font-semibold text-slate-500 leading-none mb-0.5">Ngành hàng kinh doanh</div>
                <div className="text-[15px] font-medium text-slate-900 leading-tight">{selectedItem.label}</div>
              </div>
            </>
          ) : (
            <div className="text-[15px] text-slate-400">Chọn ngành hàng kinh doanh</div>
          )}
        </div>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="max-h-[320px] overflow-y-auto custom-scrollbar p-3 space-y-4">

            {/* RETAIL */}
            <div>
              <div className="px-3 py-2 text-[12px] font-bold text-slate-400 uppercase tracking-wider">Bán lẻ</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {RETAIL_INDUSTRIES.map((item) => {
                  const Icon = item.icon;
                  const isSelected = value === item.label;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isSelected ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-700'}`}
                      onClick={() => { onChange(item.label); setIsOpen(false); }}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[14px] flex-1 ${isSelected ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FOOD */}
            <div>
              <div className="px-3 py-2 text-[12px] font-bold text-slate-400 uppercase tracking-wider">F&B - Ăn uống</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {FOOD_INDUSTRIES.map((item) => {
                  const Icon = item.icon;
                  const isSelected = value === item.label;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isSelected ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-700'}`}
                      onClick={() => { onChange(item.label); setIsOpen(false); }}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[14px] flex-1 ${isSelected ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SERVICE */}
            <div>
              <div className="px-3 py-2 text-[12px] font-bold text-slate-400 uppercase tracking-wider">Dịch vụ</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                {SERVICE_INDUSTRIES.map((item) => {
                  const Icon = item.icon;
                  const isSelected = value === item.label;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isSelected ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-slate-50 text-slate-700'}`}
                      onClick={() => { onChange(item.label); setIsOpen(false); }}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isSelected ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[14px] flex-1 ${isSelected ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export const DVNRegisterForm = () => {
  const [step, setStep] = useState(1);
  const [phoneValue, setPhoneValue] = useState("");
  const [businessCountry, setBusinessCountry] = useState('Việt Nam');
  const [region, setRegion] = useState('');

  const [captchaId, setCaptchaId] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  void captchaId;

  // Step 2 states
  const [industry, setIndustry] = useState('');
  const [storeName, setStoreName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const fetchCaptcha = async () => {
    try {
      const res = await fetch('http://localhost:1311/api/v1/public/captcha/generate');
      const data = await res.json();
      setCaptchaId(data.captcha_id);
      setCaptchaImage(data.image);
    } catch (err) {
      console.error('Failed to load captcha', err);
    }
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const countries = [
    'Việt Nam', 'Hoa Kỳ', 'Trung Quốc', 'Nhật Bản', 'Hàn Quốc',
    'Anh', 'Pháp', 'Đức', 'Úc', 'Canada', 'Singapore', 'Thái Lan', 'Khác'
  ];

  const getRegions = (country: string) => {
    switch (country) {
      case 'Việt Nam': return ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Khác'];
      case 'Hoa Kỳ': return ['California', 'Texas', 'New York', 'Florida', 'Khác'];
      case 'Nhật Bản': return ['Tokyo', 'Osaka', 'Kyoto', 'Khác'];
      case 'Hàn Quốc': return ['Seoul', 'Busan', 'Khác'];
      case 'Anh': return ['London', 'Manchester', 'Khác'];
      case 'Pháp': return ['Paris', 'Marseille', 'Khác'];
      case 'Đức': return ['Berlin', 'Munich', 'Khác'];
      case 'Úc': return ['Sydney', 'Melbourne', 'Khác'];
      case 'Canada': return ['Toronto', 'Vancouver', 'Khác'];
      case 'Singapore': return ['Singapore'];
      case 'Thái Lan': return ['Bangkok', 'Khác'];
      case 'Trung Quốc': return ['Bắc Kinh', 'Thượng Hải', 'Quảng Châu', 'Khác'];
      default: return ['Khác'];
    }
  };

  const regions = getRegions(businessCountry);

  useEffect(() => {
    setRegion('');
  }, [businessCountry]);

  if (step === 2) {
    return (
      <div className="w-full flex flex-col items-center justify-center animate-fade-in">
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
          .new-register-form input.message-error { width: 100%; height: 56px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0 16px; font-size: 15px; color: #0f172a; outline: none; transition: all 0.2s; background: white; }
          .new-register-form input.message-error:focus { border-color: #10b981; box-shadow: 0 0 0 4px #d1fae5; }
        `}</style>

        <div className="relative mb-6 flex items-center justify-center mt-4">
          <div className="w-[120px] h-[120px] bg-gradient-to-tr from-blue-50 to-blue-100 rounded-[2.5rem] flex items-center justify-center relative z-10 shadow-soft">
            <Store className="w-14 h-14 text-blue-600" />
            <div className="absolute -top-3 -right-2 w-8 h-8 bg-orange-400 rounded-xl flex items-center justify-center shadow-lg rotate-12">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          {/* Confetti */}
          <div className="absolute w-3 h-3 bg-red-400 rounded-sm -top-4 -left-8 -rotate-12"></div>
          <div className="absolute w-3 h-4 bg-emerald-400 rounded-sm bottom-2 -left-12 rotate-45"></div>
          <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-8 -right-12"></div>
          <div className="absolute w-2 h-2 bg-blue-500 rounded-sm -bottom-2 -right-8 -rotate-45"></div>
        </div>

        <h2 className="text-center text-slate-900 font-semibold tracking-[-0.015em] text-[24px] sm:text-[28px] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          Hãy tạo cửa hàng của bạn
        </h2>

        <form className="w-full space-y-4 new-register-form max-w-[480px]" noValidate>
          {/* Chọn ngành hàng kinh doanh */}
          <IndustrySelect
            value={industry}
            onChange={setIndustry}
          />

          {/* Đặt tên cho cửa hàng của bạn */}
          <div className="w-100 input-section wrap-input relative mt-4">
            <input
              type="text"
              className="message-error"
              placeholder="Đặt tên cho cửa hàng của bạn"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>

          {/* Nhập mật khẩu */}
          <div className="w-100 input-section wrap-input relative mt-4">
            <input
              type={showPassword ? "text" : "password"}
              className="message-error pr-12"
              placeholder="Nhập mật khẩu (tối thiểu 8 ký tự)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="pt-6 flex justify-center w-full">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="h-[52px] px-12 rounded-full bg-[#0052CC] text-white font-semibold text-[15px] hover:bg-blue-700 transition shadow-soft">
              Tạo cửa hàng
            </button>
          </div>
        </form>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="w-full flex flex-col items-center justify-center animate-fade-in pb-10">
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        `}</style>

        <div className="relative mb-6 flex items-center justify-center mt-4">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center relative z-10 shadow-sm border border-emerald-100">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-md">
              <Check className="w-6 h-6" strokeWidth={3} />
            </div>
          </div>
          {/* Confetti */}
          <div className="absolute w-2 h-2 bg-red-400 rounded-sm -top-6 -left-12 -rotate-12"></div>
          <div className="absolute w-3 h-4 bg-emerald-400 rounded-sm top-4 -left-16 rotate-45"></div>
          <div className="absolute w-3 h-3 bg-yellow-400 rounded-full -top-2 -right-12"></div>
          <div className="absolute w-2 h-2 bg-blue-500 rounded-sm bottom-4 -right-16 -rotate-45"></div>
        </div>

        <h2 className="text-center text-slate-900 font-bold tracking-[-0.015em] text-[22px] sm:text-[26px] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          Cửa hàng của bạn đã sẵn sàng
        </h2>

        <div className="w-full max-w-[460px] space-y-3">
          {/* Tên gian hàng */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#F0F6FF] border border-blue-100/50 group">
            <div>
              <div className="text-[12px] text-slate-500 font-medium mb-0.5">Tên gian hàng</div>
              <div className="text-[16px] font-semibold text-[#0052CC]">{storeName || 'dvntechnology'}</div>
            </div>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(storeName || 'dvntechnology')}
              className="text-slate-400 hover:text-[#0052CC] transition-colors p-2 rounded-lg hover:bg-blue-100/50"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>

          {/* Tên đăng nhập */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#F0FDF4] border border-emerald-100/50 group">
            <div>
              <div className="text-[12px] text-slate-500 font-medium mb-0.5">Tên đăng nhập</div>
              <div className="text-[16px] font-semibold text-[#16A34A]">{phoneValue || '0889541507'}</div>
            </div>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(phoneValue || '0889541507')}
              className="text-slate-400 hover:text-[#16A34A] transition-colors p-2 rounded-lg hover:bg-emerald-100/50"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>

          {/* Mật khẩu */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-[#FFF7ED] border border-orange-100/50 group">
            <div>
              <div className="text-[12px] text-slate-500 font-medium mb-0.5">Mật khẩu</div>
              <div className="text-[16px] font-semibold text-[#EA580C]">{password || '0914118660'}</div>
            </div>
            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(password || '0914118660')}
              className="text-slate-400 hover:text-[#EA580C] transition-colors p-2 rounded-lg hover:bg-orange-100/50"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-6 flex justify-center w-full">
            <button type="button" className="h-[48px] px-8 rounded-full bg-[#0062FF] text-white font-semibold text-[15px] hover:bg-blue-700 transition shadow-soft">
              Bắt đầu quản lý
            </button>
          </div>

          {/* Footer Apps */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 pt-10">
            <div className="text-[13px] text-slate-600">Bạn muốn quản lý mọi lúc mọi nơi? Tải ứng dụng trên điện thoại</div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-[36px]" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-[36px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1
        className="text-center text-slate-900 font-semibold tracking-[-0.015em] text-[clamp(1.4rem,2.4vw,2rem)]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Tạo tài khoản dùng thử miễn phí
      </h1>
      <form className="new-register-form mt-8 space-y-4" noValidate onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        .new-register-form input.message-error { width: 100%; height: 56px; border: 1px solid #e2e8f0; border-radius: 12px; padding: 0 16px; font-size: 15px; color: #0f172a; outline: none; transition: all 0.2s; background: white; }
        .new-register-form input.message-error:focus { border-color: #10b981; box-shadow: 0 0 0 4px #d1fae5; }

        .new-register-form .react-tel-input .form-control { width: 100%; height: 56px; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #0f172a; outline: none; transition: all 0.2s; background: white; padding-left: 60px; }
        .new-register-form .react-tel-input .form-control:focus { border-color: #10b981; box-shadow: 0 0 0 4px #d1fae5; }
        .new-register-form .react-tel-input .flag-dropdown { border: 1px solid #e2e8f0; border-radius: 12px 0 0 12px; background: #f8fafc; border-right: none; }
        .new-register-form .react-tel-input .flag-dropdown:hover { background: #f1f5f9; }
        .new-register-form .react-tel-input .selected-flag:hover, .new-register-form .react-tel-input .selected-flag:focus { background-color: transparent; }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>

        <div className="w-100 input-section wrap-input relative">
          <label className="filled w-100" htmlFor="fullname">
            <input id="fullname" autoComplete="one-time-code" name="fullname" type="text" className="message-error" aria-invalid="true" placeholder="Nhập họ tên" />
            <span data-label="Nhập họ tên" className="label-input fullName hidden"></span>
          </label>
        </div>

        <div className="w-100 input-section wrap-input relative mt-4">
          <label className="filled w-100 block">
            <PhoneInput
              country={'vn'}
              value={phoneValue}
              onChange={(phone: string) => setPhoneValue(phone)}
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
                placeholder: 'Số điện thoại'
              }}
            />
          </label>
        </div>

        <CustomSelect
          label="Quốc gia đang kinh doanh"
          value={businessCountry}
          onChange={setBusinessCountry}
          options={countries}
        />

        <CustomSelect
          label="Khu vực"
          defaultLabel="Chọn khu vực"
          value={region}
          onChange={setRegion}
          options={regions}
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1.2fr] gap-3 items-center mt-4">
          <div className="text-[16px] font-semibold text-slate-700">Mã xác thực</div>

          <div className="flex items-center gap-3">
            <div
              className="h-11 w-24 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden [&>svg]:w-full [&>svg]:h-full"
              dangerouslySetInnerHTML={{ __html: captchaImage || '...' }}
            />
            <button
              type="button"
              className="h-11 w-11 rounded-full bg-blue-50 border border-blue-100 text-blue-600 hover:bg-blue-100 transition flex items-center justify-center"
              title="Reload"
              onClick={fetchCaptcha}
            >
              ↻
            </button>
          </div>

          <input
            className="message-error"
            placeholder="Nhập mã xác thực"
            value={captchaCode}
            onChange={(e) => setCaptchaCode(e.target.value)}
            maxLength={4}
          />
        </div>

        <label className="flex items-start gap-3 pt-3 cursor-pointer">
          <input type="checkbox" className="mt-1 h-5 w-5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" defaultChecked />
          <span className="text-[15px] text-slate-700 leading-relaxed">
            Tôi đã đọc và đồng ý{' '}
            <a className="text-blue-600 hover:text-blue-700 font-semibold" href="#" target="_blank" rel="noreferrer">
              Điều khoản và chính sách sử dụng
            </a>{' '}
            của DVN
          </span>
        </label>

        <div className="pt-4 flex justify-end">
          <button type="submit" className="h-14 px-10 rounded-full bg-blue-600 text-white font-semibold text-[16px] hover:bg-blue-700 transition shadow-soft w-full sm:w-auto">
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
};
