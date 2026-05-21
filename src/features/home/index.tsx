import Header from '@/components/header';
import SEO from '@/components/SEO';
import { FOOD_INDUSTRIES, RETAIL_INDUSTRIES, SERVICE_INDUSTRIES } from '@/data/industries';
import { motion, type Variants } from 'framer-motion';
import { ArrowRightCircle, CheckCircle2, Fingerprint, Zap } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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
            // tighter spacing
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

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <StatPill value="300.000+" label="Nhà kinh doanh sử dụng" />
              <StatPill value="10.000+" label="Nhà kinh doanh mới mỗi tháng" />
              <StatPill value="24/7" label="Hỗ trợ & vận hành ổn định" />
            </motion.div>
          </div>
        </main>
      </section>

      {/* ───────────────── BENEFITS ───────────────── */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-8 sm:py-8">
          <div className="max-w-[820px]">
            <h3
              className="text-[clamp(1.4rem,3vw,2.1rem)] leading-tight tracking-[-0.01em] text-slate-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              DVN POS giúp bạn quản lý <br className="hidden sm:block" />
              dễ dàng, bán hàng hiệu quả
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 max-w-[640px]">
              Tối ưu vận hành cửa hàng với giao diện thân thiện, chi phí hợp lý và giải pháp phù hợp nhiều ngành hàng.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <IntroduceCard
              icon="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/27025856/unnamed-7.png"
              title="Đơn giản & Dễ sử dụng"
              desc="Giao diện đơn giản, thân thiện và thông minh. Chỉ mất 15 phút làm quen."
            />
            <IntroduceCard
              icon="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/27030011/unnamed-5-2.png"
              title="Tiết kiệm chi phí"
              desc="Miễn phí cài đặt, triển khai, nâng cấp và hỗ trợ. Tối ưu chi phí theo quy mô."
            />
            <IntroduceCard
              icon="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/09/27025916/unnamed-6.png"
              title="Phù hợp cho từng ngành hàng"
              desc="Phần mềm quản lý bán hàng phù hợp cho hơn 20 ngành nghề kinh doanh khác nhau."
            />
          </div>
        </div>
      </section>

      {/* ───────────────── INDUSTRY ───────────────── */}
      <section className="relative w-full bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-8 sm:py-8">
          <div className="max-w-[980px]">
            <h3
              className="text-[clamp(1.35rem,3vw,2.05rem)] leading-tight tracking-[-0.01em] text-slate-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Chúng tôi thiết kế phần mềm quản lý bán hàng
              <span className="hidden md:block"> chuyên biệt cho từng ngành hàng</span>
            </h3>
          </div>

          <div className="mt-7 grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
              <IndustryHeader
                img="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/08074241/unnamed-3-2.png"
                title="Bán buôn, bán lẻ"
              />

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {RETAIL_INDUSTRIES.map((item) => (
                  <MajorItem key={item.label} icon={<item.icon className="w-4 h-4" />} label={item.label} />
                ))}
              </div>
            </div>

            <div className="xl:col-span-7 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <IndustryHeader
                  img="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/02070005/unnamed-1.png"
                  title="Ăn uống, giải trí"
                />

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FOOD_INDUSTRIES.map((item) => (
                    <MajorItem key={item.label} icon={<item.icon className="w-4 h-4" />} label={item.label} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <IndustryHeader
                  img="https://cdn-kvweb.kiotviet.vn/kiotviet-website/wp-content/uploads/2023/10/02070256/unnamed-2.png"
                  title="Lưu trú, làm đẹp"
                />

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
              <div className="text-[16px] sm:text-[17px] font-semibold text-slate-900">
                7 ngày dùng thử miễn phí
              </div>
              <div className="mt-1 text-[13px] text-slate-600">
                Trải nghiệm đầy đủ tính năng — không cần thẻ.
              </div>
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-[0_10px_30px_rgba(16,185,129,0.25)]">
              Đăng ký ngay
              <ArrowRightCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────── SOLUTIONS ───────────────── */}
      <section className="relative w-full bg-white">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-8 sm:py-8">
          <div className="max-w-[820px]">
            <h3
              className="text-[clamp(1.4rem,3vw,2.1rem)] leading-tight tracking-[-0.01em] text-slate-900"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-emerald-600">DVN</span> - Giải pháp kinh doanh toàn diện
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              Từ quản lý bán hàng đến thanh toán, tài chính và tuân thủ thuế — tất cả trong một hệ sinh thái.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            <SolutionCard
              logoSrc="https://dvntechnology.com/assets/logo.png"
              title="Phần mềm quản lý bán hàng phổ biến nhất với 20+ ngành hàng"
              bullets={[
                'Đơn giản quản lý hàng hóa, nhân sự',
                'Dễ dàng truy cập báo cáo, theo dõi tăng trưởng doanh thu',
                'Tối ưu quản lý bán hàng đa kênh',
                'Nâng cao chất lượng vận hành',
              ]}
              buttonText="Xem phí dịch vụ"
              buttonVariant="outline"
            />

            <SolutionCard
              logoSrc="https://dvntechnology.com/assets/logo.png"
              title="Giải pháp thanh toán - Vay vốn uy tín dành cho chủ shop"
              bullets={[
                'Tích hợp thanh toán QR',
                'Hỗ trợ vay vốn từ các đối tác tài chính uy tín',
              ]}
              buttonText="Liên hệ tư vấn"
              buttonVariant="primary"
            />

            <SolutionCard
              logoSrc="https://dvntechnology.com/assets/logo.png"
              title="Bộ giải pháp hỗ trợ hộ kinh doanh tuân thủ quy định về Thuế"
              bullets={[
                'Miễn phí phần mềm kế toán cho Hộ kinh doanh',
                'Miễn phí phần mềm xuất Hóa đơn điện tử từ máy tính tiền',
                'Đội ngũ hỗ trợ tận tâm, phản hồi nhanh',
              ]}
              buttonText="Tìm hiểu thêm"
              buttonVariant="primary"
            />
          </div>
        </div>
      </section>
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

      <div className="mt-5 h-px bg-slate-100" />
      <div className="mt-4 text-[13px] font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
        Tìm hiểu thêm →
      </div>
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
      <span className="h-8 w-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500">
        {icon}
      </span>
      <span className="leading-snug">{label}</span>
    </a>
  );
}

function SolutionCard({
  logoSrc,
  title,
  bullets,
  buttonText,
  buttonVariant,
}: {
  logoSrc: string;
  title: string;
  bullets: string[];
  buttonText: string;
  buttonVariant: 'primary' | 'outline';
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 flex items-center">
        <img src={logoSrc} alt="solution logo" className="h-12 w-auto object-contain" loading="lazy" />
      </div>

      <h4 className="mt-5 text-[16px] font-semibold text-slate-900 leading-snug">{title}</h4>

      <ul className="mt-4 space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-[2px] shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a
          href="#"
          className={[
            'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors',
            buttonVariant === 'primary'
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50',
          ].join(' ')}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
