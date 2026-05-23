import React, { useState, useEffect, useRef } from "react";
import PhoneInputPkg from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

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
              className={`px-5 py-3 hover:bg-emerald-50 cursor-pointer text-[15px] transition-colors ${value === opt ? 'text-emerald-600 font-semibold bg-emerald-50/70' : 'text-slate-700'}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(opt);
                setIsOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const KiotVietRegisterForm = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [businessCountry, setBusinessCountry] = useState('Việt Nam');
  const [region, setRegion] = useState('');
  
  const [captchaId, setCaptchaId] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

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

  return (
    <form className="new-register-form mt-8 space-y-4" noValidate>
      <style>{`
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
          của KiotViet
        </span>
      </label>

      <div className="pt-4 flex justify-end">
        <button type="submit" className="h-14 px-10 rounded-full bg-blue-600 text-white font-semibold text-[16px] hover:bg-blue-700 transition shadow-soft w-full sm:w-auto">
          Tiếp tục
        </button>
      </div>
    </form>
  );
};
