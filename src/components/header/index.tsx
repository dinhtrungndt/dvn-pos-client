import LOGO from '@/assets/logo/logo.png';
import {
  Apple, Baby, Bed, BookOpen, Calculator, ChevronDown, Coffee,
  DollarSign, Dumbbell, FileText, Hammer, Heart, HeartPulse,
  Layers, Layout, Menu, Mic, QrCode, Scissors, Shirt, ShoppingCart,
  Smartphone, Sparkles, Truck, Users, Utensils, Wrench, X
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<{ [key: string]: boolean; }>({});
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMobileExpanded = (key: string) =>
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  // Debounced open/close to prevent flicker when mouse moves between button → menu
  const handleMouseEnter = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(key);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 80);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">

        {/* ─── Main bar ─────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="flex items-center justify-center bg-slate-50 p-1.5 rounded-xl border border-slate-100 group-hover:border-emerald-200 transition-colors">
                <img src={LOGO} alt="DVN Logo" className="h-8 w-auto object-contain transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-base xl:text-lg text-slate-800 tracking-tight">DVN POS</span>
                <span className="text-[9px] xl:text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Technology</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-6 h-full text-xs xl:text-sm">

              {/* ── Sản phẩm ── */}
              <div
                className="nav-item relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('product')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 font-bold transition-colors py-2 ${activeMenu === 'product' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>
                  Sản phẩm
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'product' ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </button>

                {activeMenu === 'product' && (
                  <div className="dropdown-panel animate-fade-in-down absolute top-full left-1/2 -translate-x-1/2 w-[860px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-3 gap-6">

                    {/* DVN Software */}
                    <div className="space-y-4">
                      <div className="pb-3 border-b border-slate-100">
                        <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">DVN SOFTWARE</span>
                        <p className="text-[11px] text-slate-400 mt-1">Phần mềm quản lý bán hàng phổ biến</p>
                      </div>
                      <ul className="space-y-1">
                        {[
                          { icon: <ShoppingCart className="w-4 h-4" />, bg: 'bg-emerald-50 text-emerald-600', hbg: 'group-hover/item:bg-emerald-600', title: 'Ngành bán buôn, bán lẻ', desc: 'Tối ưu quy trình kinh doanh, tồn kho' },
                          { icon: <Utensils className="w-4 h-4" />, bg: 'bg-orange-50 text-orange-500', hbg: 'group-hover/item:bg-orange-500', title: 'Ngành ăn uống, giải trí', desc: 'Quản lý bàn, thực đơn, order bếp nhanh' },
                          { icon: <Sparkles className="w-4 h-4" />, bg: 'bg-pink-50 text-pink-500', hbg: 'group-hover/item:bg-pink-500', title: 'Ngành dịch vụ làm đẹp', desc: 'Lịch hẹn khách, liệu trình, hoa hồng nhân viên' },
                          { icon: <Bed className="w-4 h-4" />, bg: 'bg-blue-50 text-blue-600', hbg: 'group-hover/item:bg-blue-600', title: 'Quản lý khách sạn, nhà nghỉ', desc: 'Đặt phòng, check-in, dọn phòng tiện lợi' },
                        ].map((item) => (
                          <li key={item.title}>
                            <a href="#" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                              <div className={`p-2 ${item.bg} ${item.hbg} group-hover/item:text-white rounded-lg transition-colors shrink-0`}>{item.icon}</div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DVN Finance */}
                    <div className="space-y-4">
                      <div className="pb-3 border-b border-slate-100">
                        <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider">DVN FINANCE</span>
                        <p className="text-[11px] text-slate-400 mt-1">Giải pháp thanh toán &amp; tài chính</p>
                      </div>
                      <ul className="space-y-1">
                        {[
                          { icon: <QrCode className="w-4 h-4" />, bg: 'bg-indigo-50 text-indigo-500', hbg: 'group-hover/item:bg-indigo-600', title: 'Thanh toán QR Pro', desc: 'Tự động nhận thông báo biến động số dư' },
                          { icon: <DollarSign className="w-4 h-4" />, bg: 'bg-amber-50 text-amber-500', hbg: 'group-hover/item:bg-amber-500', title: 'Vốn kinh doanh liên kết', desc: 'Hỗ trợ kết nối vay vốn nhanh không thế chấp' },
                        ].map((item) => (
                          <li key={item.title}>
                            <a href="#" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                              <div className={`p-2 ${item.bg} ${item.hbg} group-hover/item:text-white rounded-lg transition-colors shrink-0`}>{item.icon}</div>
                              <div>
                                <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tax & Accounting */}
                    <div className="space-y-4">
                      <div className="pb-3 border-b border-slate-100">
                        <span className="text-xs font-extrabold text-teal-600 uppercase tracking-wider">TAX &amp; ACCOUNTING</span>
                        <p className="text-[11px] text-slate-400 mt-1">Tuân thủ quy định mới của Thuế</p>
                      </div>
                      <ul className="space-y-1">
                        <li>
                          <a href="#" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="p-2 bg-teal-50 text-teal-600 group-hover/item:bg-teal-600 group-hover/item:text-white rounded-lg transition-colors shrink-0"><Calculator className="w-4 h-4" /></div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-bold text-slate-800">Phần mềm kế toán</h4>
                                <span className="text-[9px] bg-red-100 text-red-600 px-1 py-0.5 rounded font-bold uppercase">Miễn phí</span>
                              </div>
                              <p className="text-[10px] text-slate-400 mt-0.5">Báo cáo tài chính, thuế tự động liên kết</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="p-2 bg-cyan-50 text-cyan-600 group-hover/item:bg-cyan-600 group-hover/item:text-white rounded-lg transition-colors shrink-0"><FileText className="w-4 h-4" /></div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h4 className="text-xs font-bold text-slate-800">Xuất hóa đơn điện tử</h4>
                                <span className="text-[9px] bg-red-100 text-red-600 px-1 py-0.5 rounded font-bold uppercase">Mới</span>
                              </div>
                              <p className="text-[10px] text-slate-400 mt-0.5">Xuất HĐĐT trực tiếp từ máy tính tiền máy lẻ</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                )}
              </div>

              {/* ── Giải pháp ── */}
              <div
                className="nav-item relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('solution')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 font-bold transition-colors py-2 ${activeMenu === 'solution' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>
                  Giải pháp
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solution' ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </button>

                {activeMenu === 'solution' && (
                  <div className="dropdown-panel animate-fade-in-down absolute top-full left-1/2 -translate-x-1/2 w-[960px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-12 gap-8">

                    {/* Left: Ngành hàng */}
                    <div className="col-span-8 grid grid-cols-2 gap-6 pr-6 border-r border-slate-100">

                      <div>
                        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                          <span className="p-1 bg-emerald-50 text-emerald-600 rounded"><ShoppingCart className="w-3.5 h-3.5" /></span>
                          <span className="font-extrabold text-xs text-slate-800 uppercase">Bán buôn, bán lẻ</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-500">
                          {([
                            [<Shirt className="w-3.5 h-3.5 text-slate-400" />, 'Thời trang'],
                            [<ShoppingCart className="w-3.5 h-3.5 text-slate-400" />, 'Tạp hóa & Siêu thị'],
                            [<Smartphone className="w-3.5 h-3.5 text-slate-400" />, 'Điện máy, Điện thoại'],
                            [<Sparkles className="w-3.5 h-3.5 text-slate-400" />, 'Mỹ phẩm'],
                            [<Hammer className="w-3.5 h-3.5 text-slate-400" />, 'Vật liệu xây dựng'],
                            [<Apple className="w-3.5 h-3.5 text-slate-400" />, 'Nông sản & Thực phẩm'],
                            [<HeartPulse className="w-3.5 h-3.5 text-slate-400" />, 'Nhà thuốc'],
                            [<Wrench className="w-3.5 h-3.5 text-slate-400" />, 'Xe, Máy móc & Phụ tùng'],
                            [<Baby className="w-3.5 h-3.5 text-slate-400" />, 'Mẹ & Bé'],
                            [<BookOpen className="w-3.5 h-3.5 text-slate-400" />, 'Sách, Văn phòng phẩm'],
                          ] as [React.ReactNode, string][]).map(([icon, label]) => (
                            <a key={label} href="#" className="flex items-center gap-1.5 py-1 hover:text-emerald-600 transition-colors">{icon}{label}</a>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                            <span className="p-1 bg-orange-50 text-orange-500 rounded"><Coffee className="w-3.5 h-3.5" /></span>
                            <span className="font-extrabold text-xs text-slate-800 uppercase">Ăn uống, giải trí</span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-500">
                            {([
                              [<Utensils className="w-3.5 h-3.5 text-slate-400" />, 'Nhà hàng'],
                              [<Utensils className="w-3.5 h-3.5 text-slate-400" />, 'Quán ăn'],
                              [<Coffee className="w-3.5 h-3.5 text-slate-400" />, 'Cafe, Trà sữa'],
                              [<Mic className="w-3.5 h-3.5 text-slate-400" />, 'Karaoke, Bida'],
                            ] as [React.ReactNode, string][]).map(([icon, label]) => (
                              <a key={label} href="#" className="flex items-center gap-1.5 py-1 hover:text-orange-500 transition-colors">{icon}{label}</a>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                            <span className="p-1 bg-pink-50 text-pink-500 rounded"><Scissors className="w-3.5 h-3.5" /></span>
                            <span className="font-extrabold text-xs text-slate-800 uppercase">Lưu trú, làm đẹp</span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-500">
                            {([
                              [<Sparkles className="w-3.5 h-3.5 text-slate-400" />, 'Beauty Spa'],
                              [<Scissors className="w-3.5 h-3.5 text-slate-400" />, 'Hair & Nail Salon'],
                              [<Bed className="w-3.5 h-3.5 text-slate-400" />, 'Khách sạn, Nhà nghỉ'],
                              [<Dumbbell className="w-3.5 h-3.5 text-slate-400" />, 'Gym & Fitness'],
                            ] as [React.ReactNode, string][]).map(([icon, label]) => (
                              <a key={label} href="#" className="flex items-center gap-1.5 py-1 hover:text-pink-500 transition-colors">{icon}{label}</a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Giải pháp tiện ích */}
                    <div className="col-span-4 space-y-3">
                      <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider block">GIẢI PHÁP TIỆN ÍCH TÍCH HỢP</span>
                      <ul className="space-y-1">
                        {[
                          { icon: <Layers className="w-4 h-4" />, bg: 'bg-indigo-50 text-indigo-600', hbg: 'group-hover/item:bg-indigo-600', title: 'Đồng bộ sàn TMĐT', desc: 'Shopee, Lazada, TikTok Shop' },
                          { icon: <Layout className="w-4 h-4" />, bg: 'bg-emerald-50 text-emerald-600', hbg: 'group-hover/item:bg-emerald-600', title: 'Tạo Website bán hàng', desc: 'Website thương hiệu trong 5 phút' },
                          { icon: <Truck className="w-4 h-4" />, bg: 'bg-blue-50 text-blue-600', hbg: 'group-hover/item:bg-blue-600', title: 'Vận chuyển thông minh', desc: 'Liên kết hãng vận chuyển, đẩy đơn tự động' },
                          { icon: <FacebookIcon className="w-4 h-4" />, bg: 'bg-blue-50 text-blue-600', hbg: 'group-hover/item:bg-blue-600', title: 'Liên kết Fanpage Facebook', desc: 'Quản lý bình luận, tin nhắn, lên đơn' },
                        ].map((item) => (
                          <li key={item.title}>
                            <a href="#" className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                              <span className={`p-2 ${item.bg} ${item.hbg} group-hover/item:text-white rounded-lg transition-colors shrink-0`}>{item.icon}</span>
                              <div>
                                <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                                <p className="text-[10px] text-slate-400 mt-0.5">{item.desc}</p>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                )}
              </div>

              {/* ── Khách hàng ── */}
              <div
                className="nav-item relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('customer')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 font-bold transition-colors py-2 ${activeMenu === 'customer' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>
                  Khách hàng
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'customer' ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </button>
                {activeMenu === 'customer' && (
                  <div className="dropdown-panel animate-fade-in-down absolute top-full left-0 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-1">
                    {[
                      { icon: <Users className="w-4 h-4" />, label: 'Khách hàng DVN POS' },
                      { icon: <Heart className="w-4 h-4" />, label: 'Giới thiệu đối tác mới' },
                    ].map((item) => (
                      <a key={item.label} href="#" className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item text-xs font-bold text-slate-700 hover:text-emerald-600">
                        <span className="p-1.5 bg-slate-50 text-slate-400 group-hover/item:bg-emerald-50 group-hover/item:text-emerald-600 rounded-lg transition-colors">{item.icon}</span>
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="font-bold text-slate-600 hover:text-emerald-600 transition-colors py-2">Phí dịch vụ</a>
              <a href="#" className="font-bold text-slate-600 hover:text-emerald-600 transition-colors py-2">Hỗ trợ</a>

              {/* ── Tin tức ── */}
              <div
                className="nav-item relative h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('blog')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 font-bold transition-colors py-2 ${activeMenu === 'blog' ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}>
                  Tin tức
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'blog' ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                </button>
                {activeMenu === 'blog' && (
                  <div className="dropdown-panel animate-fade-in-down absolute top-full right-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 space-y-0.5">
                    {[
                      'Tin tức công nghệ & thị trường',
                      'Kinh nghiệm quản lý bán hàng',
                      'Câu chuyện khởi nghiệp thành công',
                      'Mẹo hay tối ưu chi phí',
                      'Khuyến mại đặc biệt',
                      'Thông tin cập nhật DVN POS',
                    ].map((label) => (
                      <a key={label} href="#" className="block px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-lg transition-colors">{label}</a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="font-bold text-slate-600 hover:text-emerald-600 transition-colors py-2">Về chúng tôi</a>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <button className="px-3 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm font-bold text-emerald-600 bg-white border border-emerald-200 hover:bg-emerald-50 rounded-xl transition-colors shadow-sm">
                Đăng nhập
              </button>
              <button className="px-3 py-2 xl:px-5 xl:py-2.5 text-xs xl:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-md shadow-emerald-100">
                Đăng ký dùng thử
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button className="px-3 py-2 text-xs font-bold text-emerald-600 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-colors">
                Đăng nhập
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl border border-slate-200 transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* ─── Mobile Drawer ──────────────────────────────────────── */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="animate-slide-in-right fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col">

              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <img src={LOGO} alt="DVN Logo" className="h-7 w-auto object-contain" />
                  <span className="font-bold text-sm text-slate-800">DVN POS</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-5 space-y-1">

                  <AccordionItem label="Sản phẩm" isOpen={!!mobileExpanded['product']} onToggle={() => toggleMobileExpanded('product')}>
                    <div className="space-y-4 pt-3 pb-1">
                      <MobileGroup color="text-emerald-600" label="Phần mềm quản lý" items={['Bán lẻ & Bán buôn', 'Nhà hàng & Cafe (F&B)', 'Spa & Làm đẹp', 'Nhà nghỉ & Khách sạn']} hoverColor="hover:text-emerald-600" />
                      <MobileGroup color="text-blue-600" label="Giải pháp Tài chính" items={['Thanh toán QR', 'Vay vốn nhanh']} hoverColor="hover:text-blue-600" />
                      <MobileGroup color="text-teal-600" label="Kế toán & Thuế" items={['Phần mềm kế toán', 'Xuất hóa đơn HĐĐT']} hoverColor="hover:text-teal-600" />
                    </div>
                  </AccordionItem>

                  <AccordionItem label="Giải pháp" isOpen={!!mobileExpanded['solution']} onToggle={() => toggleMobileExpanded('solution')}>
                    <div className="space-y-4 pt-3 pb-1">
                      <MobileGroup color="text-slate-400" label="Mô hình kinh doanh" items={['Thời trang, Tạp hóa, Điện máy', 'Cafe, Nhà hàng, Quán ăn', 'Spa, Salon tóc, Nails']} hoverColor="hover:text-emerald-600" />
                      <MobileGroup color="text-slate-400" label="Giải pháp tiện ích" items={['Tạo Website bán hàng', 'Liên kết Facebook Fanpage', 'Đồng bộ sàn TMĐT', 'Đơn vị vận chuyển']} hoverColor="hover:text-emerald-600" />
                    </div>
                  </AccordionItem>

                  <AccordionItem label="Khách hàng" isOpen={!!mobileExpanded['customer']} onToggle={() => toggleMobileExpanded('customer')}>
                    <div className="pt-2 pb-1 pl-2 space-y-1">
                      <a href="#" className="block text-xs text-slate-600 hover:text-emerald-600 py-1.5 transition-colors">Khách hàng DVN POS</a>
                      <a href="#" className="block text-xs text-slate-600 hover:text-emerald-600 py-1.5 transition-colors">Giới thiệu khách hàng</a>
                    </div>
                  </AccordionItem>

                  <SimpleLink href="#" label="Phí dịch vụ" />
                  <SimpleLink href="#" label="Hỗ trợ" />

                  <AccordionItem label="Tin tức" isOpen={!!mobileExpanded['blog']} onToggle={() => toggleMobileExpanded('blog')}>
                    <div className="pt-2 pb-1 pl-2 space-y-1">
                      {['Tin tức kinh doanh', 'Mẹo tối ưu chi phí', 'Câu chuyện khởi nghiệp'].map((label) => (
                        <a key={label} href="#" className="block text-xs text-slate-600 hover:text-emerald-600 py-1.5 transition-colors">{label}</a>
                      ))}
                    </div>
                  </AccordionItem>

                  <SimpleLink href="#" label="Về chúng tôi" />
                </div>
              </div>

              <div className="px-5 py-4 border-t border-slate-100 bg-slate-50 space-y-2.5 shrink-0">
                <button className="w-full py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                  Đăng nhập gian hàng
                </button>
                <button className="w-full py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors shadow-md shadow-emerald-100">
                  Đăng ký dùng thử miễn phí
                </button>
              </div>

            </div>
          </div>
        )}

      </header>
    </>
  );
}

/* ─── Sub-components ─────────────────────────────────────────── */

function AccordionItem({ label, isOpen, onToggle, children }: {
  label: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-100">
      <button onClick={onToggle} className="w-full flex items-center justify-between font-bold text-sm text-slate-800 py-3">
        {label}
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
      </button>
      {isOpen && <div className="pl-2 animate-fade-in">{children}</div>}
    </div>
  );
}

function SimpleLink({ href, label }: { href: string; label: string; }) {
  return (
    <div className="border-b border-slate-100">
      <a href={href} className="block font-bold text-sm text-slate-800 hover:text-emerald-600 py-3 transition-colors">{label}</a>
    </div>
  );
}

function MobileGroup({ color, label, items, hoverColor }: {
  color: string; label: string; items: string[]; hoverColor: string;
}) {
  return (
    <div>
      <div className={`text-[10px] font-extrabold ${color} uppercase tracking-widest mb-2`}>{label}</div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className={`block text-xs font-semibold text-slate-600 ${hoverColor} py-1 transition-colors`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
