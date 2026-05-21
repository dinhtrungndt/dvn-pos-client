import Header from '@/components/header';
import SEO from '@/components/SEO';
import { motion, type Variants } from 'framer-motion';
import { ArrowRightCircle, Fingerprint, Zap } from 'lucide-react';

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
    <div
      className="relative w-full bg-slate-950 md:aspect-video overflow-x-clip flex flex-col min-h-screen md:min-h-0"
      style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text)' }}
    >
      <SEO title="Trang chủ" description="DVN POS - Phần mềm quản lý bán hàng phổ biến" />

      {/* Background video (Mobile: below header, Desktop: full background) */}
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/35 to-slate-950/65" />
      </div>

      <Header />

      <main
        className={[
          'relative z-10 w-full max-w-[1280px] mx-auto px-5 sm:px-8 pb-16 md:pb-0 flex-1 flex flex-col',
          // Mobile: push content below the 16:9 video + spacing
          'pt-[calc(100vw*9/16+28px)] sm:pt-[calc(100vw*9/16+40px)]',
          // Desktop: normal hero spacing
          'md:pt-[clamp(40px,8vw,72px)]',
        ].join(' ')}
      >
        <div className="max-w-[640px]">
          {/* Eyebrow */}
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

          {/* Title */}
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

          {/* Subtitle */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-8 text-[clamp(0.98rem,2.4vw,1.1rem)] leading-[1.7] text-white/85 max-w-[580px]"
          >
            Quản lý bán hàng – tồn kho – khách hàng – báo cáo, đồng bộ đa kênh và vận hành trơn tru cho cửa hàng của bạn.
          </motion.p>

          {/* CTA */}
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

          {/* Stats */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <StatPill value="300.000+" label="Nhà kinh doanh sử dụng" />
            <StatPill value="10.000+" label="Nhà kinh doanh mới mỗi tháng" />
            <StatPill value="24/7" label="Hỗ trợ & vận hành ổn định" />
          </motion.div>
        </div>
      </main>
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
