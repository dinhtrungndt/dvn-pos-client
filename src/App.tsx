import React, { useEffect, useState } from 'react';

// ==========================================
// THƯ VIỆN ICON SVG TỰ DỰNG (ĐỂ ĐẢM BẢO KHÔNG LỖI IMPORT)
// ==========================================
const Icons = {
  CheckCircle: () => (
    <svg className="w-16 h-16 text-green-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Copy: () => (
    <svg className="w-5 h-5 text-gray-400 hover:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
    </svg>
  ),
  Eye: () => (
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  Close: () => (
    <svg className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

// ==========================================
// PHẦN 1: ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPESCRIPT INTERFACES)
// ==========================================
/**
 * TẠI SAO PHẢI DÙNG INTERFACE?
 * Interface giống như một bản hợp đồng cam kết cấu trúc của Object.
 * Giúp TypeScript bắt lỗi ngay lập tức nếu bạn gõ sai chính tả thuộc tính (VD: gõ nhầm 'name' thành 'Namee').
 */

interface Industry {
  Id: number;
  Code: string;
  Name: string;
  Category: 'retail' | 'fnb' | 'beauty'; // Chỉ cho phép 1 trong 3 nhóm này
}

interface RegisterPayload {
  store_name: string;
  subdomain: string;
  industry_id: number;
  phone: string;
  password: string;
}

interface TenantResponse {
  Id: number;
  StoreName: string;
  Subdomain: string;
  IndustryId: number;
  IsActive: boolean;
  CreatedAt: string;
}

export default function App() {
  // ==========================================
  // PHẦN 2: QUẢN LÝ TRẠNG THÁI (REACT STATE WITH TS TYPES)
  // ==========================================
  /**
   * Cú pháp: useState<Type>(initialValue)
   * Việc truyền <string> hay <boolean> báo cho TypeScript khóa chặt kiểu dữ liệu của biến đó.
   */
  const [currentView, setCurrentView] = useState<'check-domain' | 'register' | 'success'>('check-domain');
  const [apiMode, setApiMode] = useState<'live' | 'mock'>('mock');
  const [apiUrl, setApiUrl] = useState<string>('http://localhost:1311/api/v1/public');

  // Input States
  const [subdomain, setSubdomain] = useState<string>('');
  const [storeName, setStoreName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Industry States
  const [industries, setIndustries] = useState<Industry[]>([
    { Id: 1, Code: 'BUILD', Name: 'Vật liệu xây dựng', Category: 'retail' },
    { Id: 2, Code: 'FNB', Name: 'F&B - Ăn uống', Category: 'fnb' },
    { Id: 3, Code: 'RETAIL', Name: 'Tạp hóa & Siêu thị', Category: 'retail' }
  ]);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [showIndustryModal, setShowIndustryModal] = useState<boolean>(false);

  // Status States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    storeName: string;
    subdomain: string;
    phone: string;
    pass: string;
  } | null>(null);

  // Fetch danh sách ngành hàng từ Backend thật khi load trang
  useEffect(() => {
    if (apiMode === 'live') {
      fetch(`${apiUrl}/industries`)
        .then(res => {
          if (!res.ok) throw new Error("Không thể kết nối đến Backend.");
          return res.json();
        })
        .then((data: Industry[]) => {
          setIndustries(data);
          setErrorMessage(null);
        })
        .catch(err => {
          setErrorMessage("Cảnh báo: Không gọi được API Ngành Hàng từ localhost:1311. Tự động chuyển sang danh sách dữ liệu mẫu.");
          console.error(err);
        });
    }
  }, [apiMode, apiUrl]);

  // ==========================================
  // PHẦN 3: XỬ LÝ SỰ KIỆN (EVENT HANDLERS WITH TYPES)
  // ==========================================
  /**
   * React.FormEvent: Kiểu dữ liệu dành cho sự kiện Submit của Form.
   * Giúp gọi lệnh e.preventDefault() để không bị load lại trang web.
   */
  const handleCheckDomain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subdomain.trim()) {
      setErrorMessage("Vui lòng nhập tên cửa hàng.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    if (apiMode === 'mock') {
      // Giả lập kiểm tra dữ liệu
      setTimeout(() => {
        setIsLoading(false);
        if (subdomain.toLowerCase() === 'dvntechnology') {
          // Trùng tên thì chuyển đến trang login (Ở đây ta chuyển hướng ảo)
          setErrorMessage("Tên gian hàng này đã tồn tại! Bạn sẽ được chuyển tới màn hình đăng nhập.");
        } else {
          setCurrentView('register');
        }
      }, 800);
    } else {
      // Gọi API FastAPI Thật
      try {
        const response = await fetch(`${apiUrl}/tenants/check?subdomain=${subdomain.toLowerCase()}`);
        if (!response.ok) throw new Error("Lỗi kết nối Server.");
        const data: { exists: boolean; message: string; } = await response.json();

        setIsLoading(false);
        if (data.exists) {
          setErrorMessage(`Subdomain này đã tồn tại trong DB của bạn. Đang chuyển sang Đăng nhập: https://${subdomain}.dinhtrung.id.vn`);
        } else {
          setCurrentView('register');
        }
      } catch (err) {
        setIsLoading(false);
        setErrorMessage("Không thể kết nối đến FastAPI Server tại port 1311. Hãy chắc chắn bạn đã gõ lệnh 'python main.py'!");
      }
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedIndustry) {
      setErrorMessage("Vui lòng chọn Ngành hàng kinh doanh của bạn.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Mật khẩu phải tối thiểu có 8 ký tự.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    const payload: RegisterPayload = {
      store_name: storeName,
      subdomain: subdomain.toLowerCase(),
      industry_id: selectedIndustry.Id,
      phone: phone,
      password: password
    };

    if (apiMode === 'mock') {
      setTimeout(() => {
        setIsLoading(false);
        setSuccessInfo({
          storeName: storeName,
          subdomain: subdomain,
          phone: phone,
          pass: password
        });
        setCurrentView('success');
      }, 1000);
    } else {
      // Gửi POST API thực tế xuống FastAPI
      try {
        const response = await fetch(`${apiUrl}/tenants/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        setIsLoading(false);
        if (response.status === 201) {
          setSuccessInfo({
            storeName: storeName,
            subdomain: subdomain,
            phone: phone,
            pass: password
          });
          setCurrentView('success');
        } else {
          // Bắt lỗi hệ thống (Ví dụ: Trùng số điện thoại trong 1 cửa hàng)
          setErrorMessage(data.detail || "Đăng ký thất bại.");
        }
      } catch (err) {
        setIsLoading(false);
        setErrorMessage("Lỗi kết nối mạng hoặc DB khi đăng ký.");
      }
    }
  };

  const copyToClipboard = (text: string) => {
    // Dùng execCommand để chạy ổn định trong iframe sandbox
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(`Đã copy thành công: ${text}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans relative overflow-hidden">

      {/* BACKGROUND DECORATIONS (Confetti Bay Múa Như Ảnh KiotViet) */}
      <div className="absolute top-12 left-12 w-4 h-8 bg-green-400 rounded-full rotate-45 opacity-60"></div>
      <div className="absolute top-24 right-24 w-6 h-6 bg-yellow-400 rounded-lg -rotate-12 opacity-60"></div>
      <div className="absolute bottom-32 left-24 w-8 h-4 bg-blue-400 rounded-full rotate-12 opacity-60"></div>
      <div className="absolute bottom-24 right-32 w-5 h-5 bg-red-400 rounded-md rotate-45 opacity-60"></div>

      {/* HEADER: THANH ĐIỀU CHỈNH CHẾ ĐỘ TEST API (PRO SOLO DEV) */}
      <header className="bg-white border-b border-slate-200 p-4 shadow-sm z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
          <div>
            <h1 className="text-lg font-bold text-slate-800">DVN POS Cloud</h1>
            <p className="text-xs text-slate-500">Hệ thống quản trị đa gian hàng SaaS</p>
          </div>
        </div>

        {/* Bộ gạt đổi chế độ Live / Mock để test API */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
          <button
            onClick={() => setApiMode('mock')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${apiMode === 'mock' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
          >
            Chạy thử (Demo Mode)
          </button>
          <button
            onClick={() => setApiMode('live')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${apiMode === 'live' ? 'bg-white text-green-600 shadow-sm' : 'text-slate-600 hover:text-slate-950'}`}
          >
            API Thật (Port 1311)
          </button>
        </div>
      </header>

      {/* BODY CHÍNH */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">

        {/* CARD CONTAINER CHÍNH */}
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 transition-all">

          {/* HIỂN THỊ CẢNH BÁO LỖI (NẾU CÓ) */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-md text-sm text-rose-700 animate-fadeIn">
              {errorMessage}
            </div>
          )}

          {/* ==========================================
              VIEW 1: CHECK SUBDOMAIN (NHẬP TÊN GIAN HÀNG)
              ========================================== */}
          {currentView === 'check-domain' && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Hãy tạo cửa hàng của bạn</h2>
              <p className="text-sm text-slate-500 mb-8">Sở hữu ngay một hệ thống quản lý bán hàng chuyên nghiệp trong 30 giây</p>

              <form onSubmit={handleCheckDomain} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Đặt tên miền truy cập (Ví dụ: dvntechnology)"
                    value={subdomain}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubdomain(e.target.value.replace(/[^a-zA-Z0-9-]/g, ''))} // Chỉ cho phép nhập chữ & số
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
                  />
                  <span className="absolute right-5 top-4.5 text-slate-400 font-semibold text-sm">.dinhtrung.id.vn</span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Đang kiểm tra...' : 'Tiếp tục đăng ký'}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          )}

          {/* ==========================================
              VIEW 2: MÀN HÌNH ĐĂNG KÝ (FORM THÔNG TIN CHI TIẾT)
              ========================================== */}
          {currentView === 'register' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={() => setCurrentView('check-domain')}
                  className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l-7-7m7 7h18" />
                  </svg>
                  Quay lại
                </button>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Cửa hàng: {subdomain}.dinhtrung.id.vn
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-slate-800 mb-6">Hoàn tất đăng ký gian hàng</h2>

              <form onSubmit={handleRegister} className="space-y-4">
                {/* Chọn Ngành Hàng Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ngành hàng kinh doanh</label>
                  <button
                    type="button"
                    onClick={() => setShowIndustryModal(true)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-left flex justify-between items-center hover:bg-white transition-all"
                  >
                    <span className={selectedIndustry ? 'text-slate-800 font-semibold' : 'text-slate-400'}>
                      {selectedIndustry ? selectedIndustry.Name : 'Chọn ngành hàng kinh doanh của bạn'}
                    </span>
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* Đặt tên cửa hàng */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Đặt tên cho cửa hàng</label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Cửa hàng Sắt thép Minh Tuấn"
                    value={storeName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStoreName(e.target.value)}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Số điện thoại đăng nhập</label>
                  <input
                    type="tel"
                    required
                    placeholder="Ví dụ: 0889541507"
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value.replace(/[^0-9]/g, ''))} // Chỉ nhập số
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
                  />
                </div>

                {/* Mật khẩu */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Thiết lập mật khẩu</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Mật khẩu tối thiểu 8 ký tự"
                      value={password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-4 text-slate-400 hover:text-slate-600"
                    >
                      <Icons.Eye />
                    </button>
                  </div>
                </div>

                {/* Nút Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  {isLoading ? 'Hệ thống đang khởi tạo gian hàng...' : 'Bắt đầu dùng thử miễn phí'}
                </button>
              </form>
            </div>
          )}

          {/* ==========================================
              VIEW 3: ĐĂNG KÝ THÀNH CÔNG (MATCHING SUCCESS.JPG)
              ========================================== */}
          {currentView === 'success' && successInfo && (
            <div className="text-center animate-fadeIn">
              <div className="flex justify-center mb-6">
                <Icons.CheckCircle />
              </div>

              <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Cửa hàng của bạn đã sẵn sàng</h2>
              <p className="text-sm text-slate-500 mb-8">Vui lòng lưu lại thông tin tài khoản dưới đây để đăng nhập</p>

              {/* Hộp chứa thông tin tài khoản (Giống ảnh thành công bạn gửi) */}
              <div className="space-y-4 mb-8">

                {/* Tên gian hàng */}
                <div className="flex flex-col text-left bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <span className="text-xs font-bold text-blue-600 uppercase mb-1">Tên gian hàng / Subdomain</span>
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-lg text-slate-800">{successInfo.subdomain}</span>
                    <button onClick={() => copyToClipboard(successInfo.subdomain)}>
                      <Icons.Copy />
                    </button>
                  </div>
                </div>

                {/* Tên đăng nhập */}
                <div className="flex flex-col text-left bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <span className="text-xs font-bold text-emerald-600 uppercase mb-1">Tên đăng nhập (Số điện thoại)</span>
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-lg text-slate-800">{successInfo.phone}</span>
                    <button onClick={() => copyToClipboard(successInfo.phone)}>
                      <Icons.Copy />
                    </button>
                  </div>
                </div>

                {/* Mật khẩu */}
                <div className="flex flex-col text-left bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                  <span className="text-xs font-bold text-amber-600 uppercase mb-1">Mật khẩu</span>
                  <div className="flex justify-between items-center">
                    <span className="font-extrabold text-lg text-slate-800">{successInfo.pass}</span>
                    <button onClick={() => copyToClipboard(successInfo.pass)}>
                      <Icons.Copy />
                    </button>
                  </div>
                </div>

              </div>

              {/* Nút Bắt đầu quản lý */}
              <button
                onClick={() => {
                  alert(`Đang chuyển hướng bạn tới: https://${successInfo.subdomain}.dinhtrung.id.vn/login`);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all text-lg mb-6"
              >
                Bắt đầu quản lý cửa hàng
              </button>

              {/* Footer tải app */}
              <div className="border-t border-slate-100 pt-6">
                <p className="text-xs text-slate-400 mb-4">Bạn muốn quản lý mọi lúc mọi nơi? Tải ứng dụng trên điện thoại</p>
                <div className="flex justify-center gap-4">
                  <div className="border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white shadow-sm flex items-center gap-1 cursor-not-allowed">
                    App Store
                  </div>
                  <div className="border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-700 bg-white shadow-sm flex items-center gap-1 cursor-not-allowed">
                    Google Play
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="text-center p-6 text-xs text-slate-400 border-t border-slate-100 bg-white">
        &copy; 2026 DVN POS Technology. Phát triển bởi Minh Tuấn. Đã đăng ký bản quyền.
      </footer>

      {/* ==========================================
          POPUP/MODAL CHỌN NGÀNH HÀNG (MATCHING MATHANG.PNG)
          ========================================== */}
      {showIndustryModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">

            {/* Header Popup */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-xl font-extrabold text-slate-800">Hãy chọn ngành hàng kinh doanh của bạn</h3>
                <p className="text-xs text-slate-500 mt-1">Dữ liệu mẫu và giao diện Dashboard sẽ được cấu hình tự động phù hợp với đặc trưng ngành này</p>
              </div>
              <button onClick={() => setShowIndustryModal(false)}>
                <Icons.Close />
              </button>
            </div>

            {/* Grid các Ngành Hàng */}
            <div className="p-6 md:p-8 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* CỘT 1: BÁN BUÔN, BÁN LẺ */}
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center text-xs">🛒</span>
                    Bán buôn, bán lẻ
                  </div>
                  <div className="space-y-1">
                    {industries.filter(i => i.Category === 'retail').map(ind => (
                      <button
                        key={ind.Id}
                        type="button"
                        onClick={() => {
                          setSelectedIndustry(ind);
                          setShowIndustryModal(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between font-medium ${selectedIndustry?.Id === ind.Id ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {ind.Name}
                        {selectedIndustry?.Id === ind.Id && <span className="text-blue-500 text-xs">✓ Đang chọn</span>}
                      </button>
                    ))}
                    {/* Mock thêm các ngành rỗng giống ảnh bạn gửi để giao diện hoành tráng */}
                    <div className="px-4 py-3 text-xs text-slate-400 italic">Thời trang, Điện thoại, Nhà thuốc, Mẹ & Bé...</div>
                  </div>
                </div>

                {/* CỘT 2: ĂN UỐNG, GIẢI TRÍ */}
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    <span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-md flex items-center justify-center text-xs">☕</span>
                    Ăn uống, giải trí
                  </div>
                  <div className="space-y-1">
                    {industries.filter(i => i.Category === 'fnb').map(ind => (
                      <button
                        key={ind.Id}
                        type="button"
                        onClick={() => {
                          setSelectedIndustry(ind);
                          setShowIndustryModal(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between font-medium ${selectedIndustry?.Id === ind.Id ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {ind.Name}
                        {selectedIndustry?.Id === ind.Id && <span className="text-blue-500 text-xs">✓ Đang chọn</span>}
                      </button>
                    ))}
                    <div className="px-4 py-3 text-xs text-slate-400 italic">Nhà hàng, Quán ăn, Karaoke, Bar, Pub...</div>
                  </div>
                </div>

                {/* CỘT 3: LƯU TRÚ, LÀM ĐẸP */}
                <div>
                  <div className="flex items-center gap-2 font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-md flex items-center justify-center text-xs">💅</span>
                    Lưu trú, làm đẹp
                  </div>
                  <div className="space-y-1">
                    {industries.filter(i => i.Category === 'beauty').map(ind => (
                      <button
                        key={ind.Id}
                        type="button"
                        onClick={() => {
                          setSelectedIndustry(ind);
                          setShowIndustryModal(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center justify-between font-medium ${selectedIndustry?.Id === ind.Id ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
                      >
                        {ind.Name}
                      </button>
                    ))}
                    <div className="px-4 py-3 text-xs text-slate-400 italic">Beauty Spa, Hair Salon, Khách sạn, Homestay...</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Popup */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowIndustryModal(false)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-2.5 px-5 rounded-lg text-sm transition-all"
              >
                Đóng lại
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
