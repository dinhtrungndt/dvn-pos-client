import Footer from '@/components/footer';
import Header from '@/components/header';
import SEO from '@/components/SEO';
import { FOOD_INDUSTRIES, RETAIL_INDUSTRIES, SERVICE_INDUSTRIES } from '@/data/industries';
import { Youtube } from '@thesvg/react';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowRightCircle,
  CheckCircle2,
  ChevronRight,
  Download,
  Fingerprint,
  MessageCircle,
  MessagesSquare,
  Newspaper,
  PhoneCall,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const CUSTOMERS: { title: string; address: string; image: string; href: string; }[] = [
  {
    title: '3 Gai quán - Thành công đến từ 3 yếu tố',
    address: 'C02, 518 Võ Văn Kiệt, P. Cầu Kho, Quận 1, Thành phố Hồ Chí Minh',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2019/07/3-gai-quán-2.jpg',
    href: '/3-gai-quan-thanh-cong-den-tu-3-yeu-to-gan-gui-la-lam-tinh-te',
  },
  {
    title: 'Cô sinh viên 20 tuổi mở salon làm đẹp riêng, đón 30-40 lượt khách mỗi ngày',
    address: 'Gian hàng R14, Khu trung tâm thương mại Huyndai, Phường Hà Cầu, Hà Đông, Hà Nội',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2020/11/Hi-Beauty-co-sinh-vien20-tuỏi-1.png',
    href: '/co-sinh-vien-20-tuoi-mo-salon-lam-dep-rieng-don-30-40-luot-khach-moi-ngay',
  },
  {
    title: 'THỜI TRANG CHIVARO – Đẳng cấp cho một chàng trai lịch lãm',
    address: '19 Tây Sơn, Đống Đa, Hà Nội',
    image:
      'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2016/01/THỜI-TRANG-CHIVARO-–-Đẳng-cấp-cho-một-chàng-trai-lịch-lãm.png',
    href: '/thoi-trang-chivaro-dang-cap-cho-mot-chang-trai-lich-lam',
  },
  {
    title: 'FAST 24H – Cửa hàng tiện ích phục vụ mọi nhu cầu khách hàng',
    address: '93 Nguyễn Khuyến ,  Đống Đa ,  Hà Nội',
    image:
      'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2016/01/fast-24h-cua-hang-tien-ich-phuc-vu-moi-nhu-cau-khach-hang.png',
    href: '/fast-24h-cua-hang-tien-ich-phuc-vu-moi-nhu-cau-khach-hang',
  },
  {
    title: 'Bá Minh Silk và sứ mệnh làm mới sản phẩm lụa tơ tằm truyền thống',
    address: 'Tầng 3, số 2, Ngõ 10, Nguyễn Văn Huyên, Cầu Giấy, Hà Nội',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2020/08/Bá-Minh-Silk.png',
    href: '/ba-minh-silk-va-su-menh-phat-trien-san-pham-lua-to-tam-viet',
  },
  {
    title: 'Kim Ngân Store - Thiên đường thời trang dành cho phái đẹp tại Đồng Tháp',
    address: 'Số 39 Nguyễn Sinh Sắc, Tân Phú Đông, TP Sa Đéc, tỉnh Đồng Tháp',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2021/03/Kim-Ngân-Store-1.png',
    href: '/kim-ngan-store-dong-thap',
  },
];

const APPS: { name: string; downloads: string; icon: string; href?: string; }[] = [
  {
    name: 'DVN POS',
    downloads: '10.000+ lượt tải',
    icon: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2025/03/24032420/Retail_Man_icon_app.png',
    href: '#',
  },
  {
    name: 'DVN POS Quản lý Nhà hàng',
    downloads: '10.000+ lượt tải',
    icon: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2025/03/24032356/FNB_Man_icon_app.png',
    href: '#',
  },
  {
    name: 'DVN POS Nhân viên Nhà hàng',
    downloads: '10.000+ lượt tải',
    icon: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2025/03/24032406/FNB_Pos_icon_app.png',
    href: '#',
  },
  {
    name: 'DVN POS Salon',
    downloads: '10.000+ lượt tải',
    icon: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2025/03/24032427/Salon_icon_app.png',
    href: '#',
  },
  {
    name: 'DVN POS Hotel',
    downloads: '10.000+ lượt tải',
    icon: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2025/03/24032413/Hotel_icon_app.png',
    href: '#',
  },
];

const APP_REVIEWS: { image: string; quote: string; author: string; ratingImage: string; }[] = [
  {
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31080654/appstore1.png',
    quote: 'Không còn lo lắng thất thoát dữ liệu, phần mềm giúp tôi quản lý bán hàng chặt chẽ hơn.',
    author: 'Chivavo thời trang đẳng cấp',
    ratingImage: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31045222/star-ratings-2.png',
  },
  {
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31080656/appstore2.png',
    quote: 'Không ngờ app lại đơn giản và phù hợp với mình đến vậy. Duyên tiền định chăng :)))',
    author: 'Việt Pet Garden-688',
    ratingImage: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31045222/star-ratings-2.png',
  },
  {
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31080658/appstore3.png',
    quote: 'Dễ sử dụng quá, order thanh toán nhanh gọn, thực sự thuận tiện mọi người ạ.',
    author: 'Cafe Vitamin Hà Nội',
    ratingImage: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31045222/star-ratings-2.png',
  },
];

const NEWS_FEATURED: { title: string; excerpt: string; image: string; href: string; date: string; }[] = [
  {
    title: 'Thông báo về việc miễn phí hóa đơn điện tử và chữ ký số',
    excerpt:
      'Quý Khách hàng thân mến, trong bối cảnh Nghị định 70/2025/NĐ-CP có hiệu lực từ ngày 01/06/2025, với mong…',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2025/05/14024820/12-KV-Einvoice-1200x628-web.png',
    href: '#',
    date: '14/05/2025 17:43',
  },
  {
    title: 'DVN QR đạt TOP 10 sản phẩm & dịch vụ tin dùng 2024',
    excerpt: 'Ngày 20/12 vừa qua, tại chương trình Tin Dùng Việt Nam 2024 do Tạp chí Kinh tế Việt…',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2024/12/25030647/1200x628-3-1.png',
    href: '#',
    date: '28/12/2024 00:16',
  },
];

const NEWS_RIGHT: { title: string; image: string; href: string; }[] = [
  {
    title: 'Chủ tài khoản Vietinbank đã nhận được thông báo thanh toán QR',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2024/12/27033846/kiotviet.vietinbank.2-1.png',
    href: '#',
  },
  {
    title: 'Tích hợp nhận thông báo biến động tài khoản Vietcombank',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2024/11/19073414/kiotviet-vietcombank-1200x628-2.png',
    href: '#',
  },
  {
    title: 'Giảm ngay 5.370.000đ khi mua combo 3 năm & máy POS 2 màn hình',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2024/09/08072433/1200x628-1-1.png',
    href: '#',
  },
  {
    title: 'Hợp tác MBBank giải ngân gói vay 1.000 tỷ tiếp sức chủ hộ kinh doanh',
    image: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2024/11/27033031/1200x628-opt2-2-1.png',
    href: '#',
  },
];

const PRESS_LOGOS: { img: string; href: string; alt: string; }[] = [
  {
    img: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31081812/vnexpress.png',
    href: 'https://vnexpress.net/kiotviet-goi-von-thanh-cong-45-trieu-usd-4350129.html',
    alt: 'VnExpress',
  },
  {
    img: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31081832/dantri.png',
    href: 'https://dantri.com.vn/kinh-doanh/quy-ngoai-rot-45-trieu-usd-vao-start-up-kiotviet-20210904073005428.htm',
    alt: 'Dân trí',
  },
  {
    img: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31081904/forbes.png',
    href: 'https://forbes.vn/hanh-trinh-tu-nuoc-kieu-sang-nuoc-dai-cua-can-ki-lan-kiotviet',
    alt: 'Forbes',
  },
  {
    img: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31081817/tuoitre.png',
    href: 'https://tuoitre.vn/startup-phan-mem-quan-ly-ban-hang-viet-nam-nhan-dau-tu-45-trieu-usd-giua-dai-dich-20210902144749398.htm',
    alt: 'Tuổi trẻ',
  },
  {
    img: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31081814/vneconomy.png',
    href: 'https://vneconomy.vn/start-up-viet-loi-nguoc-dong-goi-von-trieu-usd.htm',
    alt: 'VnEconomy',
  },
  {
    img: 'https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/31081851/cafef.png',
    href: 'https://cafef.vn/kkr-dan-dau-khoan-dau-tu-hon-1000-ty-dong-vao-kiotviet-20210902190002025.chn',
    alt: 'CafeF',
  },
];

const HomePage = () => {
  return (
    <div className="relative w-full overflow-x-clip" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}>
      <SEO title="Trang chủ" description="DVN POS - Phần mềm quản lý bán hàng phổ biến" />

      {/* ───────────────── HERO ───────────────── */}
      <section className="relative w-full bg-slate-950 md:aspect-video">
        <div className="absolute top-[80px] md:top-0 left-0 w-full aspect-video md:h-full z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(1.05) contrast(1.05)' }}
            src="https://dvntechnology.com/assets/bg_not_logo.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/35 to-slate-950/65" />
        </div>

        <Header />

        <main
          className={[
            'relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8',
            'pt-[calc(100vw*9/16+28px)] sm:pt-[calc(100vw*9/16+40px)]',
            'md:pt-[clamp(40px,8vw,72px)]',
            'pb-10 md:pb-8',
          ].join(' ')}
        >
          <div className="max-w-[640px]">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] text-white/85 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Nền tảng POS cho mọi mô hình kinh doanh
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-5 mb-5 text-[clamp(1.65rem,5vw,3rem)] leading-[1.06] tracking-[-0.015em] text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Zap className="inline-block w-6 h-6 text-white align-middle relative -top-[2px] mr-1" />
              Phần mềm quản lý bán hàng phổ biến nhất
              <Fingerprint className="inline-block w-6 h-6 text-white align-middle relative -top-[2px] ml-1" />
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-7 text-[clamp(0.98rem,2.4vw,1.1rem)] leading-[1.7] text-white/85 max-w-[580px]"
            >
              Quản lý bán hàng – tồn kho – khách hàng – báo cáo, đồng bộ đa kênh và vận hành trơn tru cho cửa hàng của bạn.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, filter: 'brightness(1.06)' }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between gap-7 w-full sm:w-auto rounded-full px-6 py-4 text-white font-semibold
                           bg-emerald-600 hover:bg-emerald-700
                           shadow-[0_10px_40px_rgba(16,185,129,0.32)]"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.95rem,2vw,1rem)',
                  minWidth: '210px',
                }}
              >
                <span>Bắt đầu ngay</span>
                <ArrowRightCircle className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.18)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between gap-7 w-full sm:w-auto rounded-full px-6 py-4 text-white font-semibold border border-white/20 bg-white/10 backdrop-blur-md"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.95rem,2vw,1rem)',
                  minWidth: '210px',
                }}
              >
                <span>Khám phá</span>
                <ArrowRightCircle className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <StatPill value="300.000+" label="Nhà kinh doanh sử dụng" />
              <StatPill value="10.000+" label="Nhà kinh doanh mới mỗi tháng" />
              <StatPill value="24/7" label="Hỗ trợ & vận hành ổn định" />
            </motion.div>
          </div>
        </main>

      </section>

      {/* ───────────────── BENEFITS ───────────────── */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="max-w-[820px]">
            <h3 className="text-[clamp(1.4rem,3vw,2.1rem)] leading-tight tracking-[-0.01em] text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="text-emerald-600">DVN POS</span> giúp bạn quản lý <br className="hidden sm:block" />
              dễ dàng, bán hàng hiệu quả
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 max-w-[640px]">
              Tối ưu vận hành cửa hàng với giao diện thân thiện, chi phí hợp lý và giải pháp phù hợp nhiều ngành hàng.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <IntroduceCard icon="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/27025856/unnamed-7.png" title="Đơn giản & Dễ sử dụng" desc="Giao diện đơn giản, thân thiện và thông minh. Chỉ mất 15 phút làm quen." />
            <IntroduceCard icon="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/27030011/unnamed-5-2.png" title="Tiết kiệm chi phí" desc="Miễn phí cài đặt, triển khai, nâng cấp và hỗ trợ. Tối ưu chi phí theo quy mô." />
            <IntroduceCard icon="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/27025916/unnamed-6.png" title="Phù hợp cho từng ngành hàng" desc="Phần mềm quản lý bán hàng phù hợp cho hơn 20 ngành nghề kinh doanh khác nhau." />
          </div>
        </div>
      </section>

      {/* ───────────────── INDUSTRY ───────────────── */}
      <section className="relative w-full bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="max-w-[980px]">
            <h3 className="text-[clamp(1.35rem,3vw,2.05rem)] leading-tight tracking-[-0.01em] text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Chúng tôi thiết kế phần mềm quản lý bán hàng
              <span className="hidden md:block"> chuyên biệt cho từng ngành hàng</span>
            </h3>
          </div>

          <div className="mt-7 grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
              <IndustryHeader img="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08074241/unnamed-3-2.png" title="Bán buôn, bán lẻ" />
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RETAIL_INDUSTRIES.map((item) => (
                  <MajorItem key={item.label} icon={<item.icon className="w-4 h-4" />} label={item.label} />
                ))}
              </div>
            </div>

            <div className="xl:col-span-7 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <IndustryHeader img="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/02070005/unnamed-1.png" title="Ăn uống, giải trí" />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOOD_INDUSTRIES.map((item) => (
                    <MajorItem key={item.label} icon={<item.icon className="w-4 h-4" />} label={item.label} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <IndustryHeader img="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/02070256/unnamed-2.png" title="Lưu trú, làm đẹp" />
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_INDUSTRIES.map((item) => (
                    <MajorItem key={item.label} icon={<item.icon className="w-4 h-4" />} label={item.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[16px] sm:text-[17px] font-semibold text-slate-900">7 ngày dùng thử miễn phí</div>
              <div className="mt-1 text-[13px] text-slate-600">Trải nghiệm đầy đủ tính năng — không cần thẻ.</div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-[0_10px_30px_rgba(16,185,129,0.25)]">
              Đăng ký ngay
              <ArrowRightCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── INFORMATION SECURITY ───────────────── */}
      <section className="relative w-full bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-emerald-700 text-[12px] font-semibold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                An toàn dữ liệu
              </div>

              <div className="mt-3 text-[clamp(1.2rem,2.4vw,1.7rem)] leading-tight tracking-[-0.01em] text-slate-900 font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                Quy trình phát triển phần mềm nghiêm ngặt đảm bảo an toàn dữ liệu khách hàng
              </div>

              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 max-w-[720px]">
                Có đội ngũ chuyên gia kiểm soát chặt chẽ các vấn đề liên quan đến an toàn thông tin. Các thông tin định danh được mã hóa bảo mật nhiều lớp nhằm bảo vệ dữ liệu của khách hàng, hạn chế tối đa rủi ro lộ thông tin.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <div className="text-[13px] font-semibold text-slate-900">Chứng chỉ & tiêu chuẩn</div>
                <div className="mt-4 flex items-center gap-5">
                  <img className="h-10 w-auto object-contain" src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/images/ISO-27001.svg" alt="ISO 27001" loading="lazy" />
                  <div className="h-8 w-px bg-slate-200" />
                  <img className="h-10 w-auto object-contain" src="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/images/pcidss.svg" alt="PCI DSS" loading="lazy" />
                </div>
                <div className="mt-4 text-[13px] text-slate-600 leading-relaxed">Hệ thống được vận hành theo các tiêu chuẩn bảo mật phổ biến, giúp nâng cao mức độ tin cậy và an toàn.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── CUSTOMERS ───────────────── */}
      <section className="relative w-full bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-[clamp(1.4rem,3vw,2.1rem)] leading-tight tracking-[-0.01em] text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
              Khách hàng của chúng tôi
            </h3>
            <a href="#" className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">
              Tất cả khách hàng
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {CUSTOMERS.map((c) => (
              <CustomerCard key={c.title} {...c} />
            ))}
          </div>

          <div className="mt-7 sm:hidden">
            <a href="#" className="inline-flex items-center justify-center w-full rounded-full px-5 py-3 text-[13px] font-semibold text-emerald-700 border border-emerald-200 bg-white hover:bg-emerald-50 transition-colors">
              Tất cả khách hàng
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── APPSTORE ───────────────── */}
      <section className="relative w-full bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            <div className="xl:col-span-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50 px-3 py-1.5 text-[12px] font-semibold text-emerald-700">
                <Download className="w-4 h-4" />
                Ứng dụng mobile
              </div>

              <h3 className="mt-4 text-[clamp(1.4rem,3vw,2.1rem)] leading-tight tracking-[-0.015em] text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                Trải nghiệm ứng dụng <span className="text-emerald-600">DVN</span> trên <br />
                Google Play &amp; App Store
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 max-w-[520px]">
                Tải app phù hợp theo mô hình kinh doanh. Đồng bộ dữ liệu realtime, thao tác nhanh và ổn định.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
                {APPS.map((app) => (
                  <AppItem key={app.name} {...app} />
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                  Google Play
                  <ArrowRightCircle className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-[13px] font-semibold border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-colors">
                  App Store
                  <ArrowRightCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="xl:col-span-7">
              <div className="flex flex-col gap-4 sm:gap-5">
                {APP_REVIEWS.map((r) => (
                  <AppReviewCard key={r.author} {...r} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── NEWS ───────────────── */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[12px] font-semibold text-slate-700">
                <Newspaper className="w-4 h-4 text-emerald-600" />
                Cập nhật mới
              </div>
              <h3 className="mt-3 text-[clamp(1.4rem,3vw,2.1rem)] leading-tight tracking-[-0.015em] text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                Tin tức nổi bật
              </h3>
            </div>

            <a href="#" className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">
              Xem tất cả
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-7 grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {NEWS_FEATURED.map((n) => (
                  <NewsFeaturedCard key={n.title} {...n} />
                ))}
              </div>
            </div>

            <div className="xl:col-span-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
                <div className="text-[12px] font-semibold text-slate-700 uppercase tracking-widest">Nổi bật khác</div>
                <div className="mt-3 space-y-3">
                  {NEWS_RIGHT.map((n) => (
                    <NewsCompactCard key={n.title} {...n} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h4 className="text-[15px] font-semibold text-slate-900">Báo chí viết về DVN</h4>
              <span className="text-[12px] text-slate-500">Nguồn uy tín • Liên kết mở tab mới</span>
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              {PRESS_LOGOS.map((p) => (
                <a
                  key={p.alt}
                  href={p.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"
                >
                  <img src={p.img} alt={p.alt} className="h-6 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-7 sm:hidden">
            <a href="#" className="inline-flex items-center justify-center w-full rounded-full px-5 py-3 text-[13px] font-semibold text-emerald-700 border border-emerald-200 bg-white hover:bg-emerald-50 transition-colors">
              Xem tất cả tin tức
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────── HOTLINE / SUPPORT ───────────────── */}
      <section className="relative w-full bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-10 sm:py-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h3 className="text-[clamp(1.25rem,2.6vw,1.85rem)] leading-tight tracking-[-0.015em] text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>
                Hãy để <span className="text-emerald-600">DVN</span> đồng hành kinh doanh cùng bạn
              </h3>

              <button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-[0_10px_30px_rgba(16,185,129,0.20)]">
                Dùng thử miễn phí
                <ArrowRightCircle className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
              <HotlineCard
                icon={<PhoneCall className="w-4 h-4" />}
                title="Hotline"
                content={
                  <>
                    <div className="text-[13px] leading-relaxed text-slate-600">
                      <div className="mt-1">
                        <span className="text-slate-500">Tư vấn bán hàng: </span>
                        <a href="tel:18006162" className="font-semibold text-emerald-700 hover:text-emerald-800">
                          1800 6162
                        </a>
                      </div>
                      <div className="mt-1">
                        <span className="text-slate-500">Chăm sóc khách hàng: </span>
                        <a href="tel:19006522" className="font-semibold text-emerald-700 hover:text-emerald-800">
                          1900 6522
                        </a>
                      </div>
                      <div className="mt-3 text-[12px] text-slate-500">
                        Hoạt động 365 ngày/năm từ 7:00 đến 22:00 (kể cả lễ, tết).
                      </div>
                    </div>
                  </>
                }
              />

              <HotlineCard
                icon={<MessageCircle className="w-4 h-4" />}
                title="DVN Fanpage"
                href="https://www.facebook.com/PhanmembanhangKiotViet/"
                content={
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Luôn trả lời nhanh nhất thông qua các phản hồi trên Facebook.
                  </p>
                }
              />

              <HotlineCard
                icon={<Youtube className="w-4 h-4" />}
                title="Kênh hỗ trợ Youtube"
                href="https://www.youtube.com/channel/UC7rnmP-i3aWPSLEgcT338vA"
                content={
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Cập nhật kiến thức sử dụng phần mềm trực quan, giúp bạn thao tác dễ dàng và hiệu quả.
                  </p>
                }
              />

              <HotlineCard
                icon={<MessagesSquare className="w-4 h-4" />}
                title="Chat trên web & mobile"
                content={
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Luôn có người trực chat để trả lời câu hỏi nhanh và hiệu quả suốt 365 ngày/năm.
                  </p>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <Footer />
    </div>
  );
};

export default HomePage;

/* ─── Small UI ───────────────────────────────────────────── */

function StatPill({ value, label }: { value: string; label: string; }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
      <div className="text-[16px] font-semibold text-white leading-none">{value}</div>
      <div className="mt-1 text-[12px] text-white/75 leading-snug">{label}</div>
    </div>
  );
}

function IntroduceCard({ icon, title, desc }: { icon: string; title: string; desc: string; }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
          <img src={icon} alt={title} width={36} height={36} className="h-9 w-9 object-contain" loading="lazy" />
        </div>
        <h4 className="text-[15px] font-semibold text-slate-900 leading-snug">{title}</h4>
      </div>
      <p className="mt-4 text-[14px] leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function IndustryHeader({ img, title }: { img: string; title: string; }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
        <img src={img} alt={title} width={40} height={40} className="h-7 w-7 object-contain" loading="lazy" />
      </div>
      <div className="text-[16px] font-semibold text-slate-900">{title}</div>
    </div>
  );
}

function MajorItem({ icon, label }: { icon: React.ReactNode; label: string; }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors"
    >
      <span className="h-8 w-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">{icon}</span>
      <span className="leading-snug">{label}</span>
    </a>
  );
}

function CustomerCard({ title, address, image, href }: { title: string; address: string; image: string; href: string; }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <img src={image} alt={title} className="h-full w-full object-cover hover:scale-[1.03] transition-transform duration-300" loading="lazy" />
        </div>
      </a>
      <div className="p-5">
        <h4 className="text-[15px] font-semibold text-slate-900 leading-snug">
          <a href={href} target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">
            {title}
          </a>
        </h4>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-600 line-clamp-2">{address}</p>
      </div>
    </div>
  );
}

function AppItem({ name, downloads, icon, href }: { name: string; downloads: string; icon: string; href?: string; }) {
  return (
    <a
      href={href ?? '#'}
      className="group flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all"
    >
      <div className="h-11 w-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden">
        <img src={icon} alt={name} className="h-11 w-11 object-cover" loading="lazy" />
      </div>

      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-slate-900 truncate">{name}</div>
        <div className="mt-0.5 inline-flex items-center gap-1.5 text-[12px] text-slate-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/90" />
          {downloads}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2 text-slate-400 group-hover:text-emerald-700 transition-colors">
        <span className="hidden sm:inline text-[12px] font-semibold">Xem</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </a>
  );
}

function AppReviewCard({ image, quote, author, ratingImage }: { image: string; quote: string; author: string; ratingImage: string; }) {
  return (
    <div className="group flex items-center gap-4 sm:gap-5 rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-[0_2px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.08)] hover:-translate-y-[2px] transition-all duration-300">
      <div className="relative w-24 sm:w-28 shrink-0 rounded-2xl bg-slate-100 overflow-hidden aspect-[4/3]">
        <img src={image} alt={author} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" loading="lazy" />
        <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/5 z-10 rounded-2xl" />
      </div>

      <div className="flex flex-col flex-1 py-1 pr-2">
        <p className="text-[13.5px] leading-[1.6] text-slate-700 italic">"{quote}"</p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-[13px] font-bold text-slate-900 truncate">{author}</div>
            <div className="mt-1">
              <img src={ratingImage} alt="rating" className="h-3 w-auto object-contain" loading="lazy" />
            </div>
          </div>

          <div className="h-8 w-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsFeaturedCard({
  title,
  excerpt,
  image,
  href,
  date,
}: {
  title: string;
  excerpt: string;
  image: string;
  href: string;
  date: string;
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <a href={href} className="block">
        <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
        </div>
      </a>

      <div className="p-5">
        <div className="text-[12px] text-slate-500">{date}</div>
        <h4 className="mt-2 text-[15px] font-semibold text-slate-900 leading-snug">
          <a href={href} className="hover:text-emerald-700 transition-colors">
            {title}
          </a>
        </h4>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-600 line-clamp-3">{excerpt}</p>

        <a href={href} className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-emerald-700 hover:text-emerald-800 transition-colors">
          Xem thêm <ArrowRightCircle className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function NewsCompactCard({ title, image, href }: { title: string; image: string; href: string; }) {
  return (
    <a href={href} className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 hover:bg-slate-50 transition-colors">
      <div className="h-14 w-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
      </div>
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-slate-900 leading-snug line-clamp-2">{title}</div>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-400 ml-auto shrink-0 group-hover:text-emerald-700 transition-colors" />
    </a>
  );
}

function HotlineCard({
  icon,
  title,
  href,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  href?: string;
  content: React.ReactNode;
}) {
  const Title = () => (
    <div className="flex items-center gap-2">
      <span className="h-9 w-9 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div className="text-[14px] font-semibold text-slate-900">{title}</div>
    </div>
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 hover:bg-white hover:shadow-sm transition-all">
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="block hover:text-emerald-700 transition-colors">
          <Title />
        </a>
      ) : (
        <Title />
      )}

      <div className="mt-3">{content}</div>
    </div>
  );
}
