import { Facebook, Twitter, Youtube } from '@thesvg/react';
import {
  ExternalLink,
  Mail,
  MapPin,
  PhoneCall,
} from 'lucide-react';

type FooterLink = { label: string; href: string; external?: boolean; rel?: string; };
type AddressItem = { province: string; address: string; hotline?: string; };
type AddressGroup = { title: string; items: AddressItem[]; };

const COMPANY_LINKS: FooterLink[] = [
  { label: 'Về DVN', href: 'https://about.DVN.vn/ve-chung-toi/', external: true, rel: 'nofollow noopener' },
  { label: 'Khách hàng', href: 'https://www.DVN.vn/khach-hang/', external: true, rel: 'nofollow' },
  { label: 'Điều khoản & chính sách sử dụng', href: 'https://www.DVN.vn/dieu-khoan-su-dung/', external: true, rel: 'nofollow noopener' },
  { label: 'Liên hệ', href: 'https://DVN.vn/lien-he', external: true, rel: 'nofollow' },
  { label: 'Tuyển dụng', href: 'https://about.DVN.vn/tuyen-dung/', external: true, rel: 'nofollow noopener' },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: 'Video hướng dẫn sử dụng', href: 'https://www.youtube.com/c/HDSDPhanmemDVN', external: true, rel: 'nofollow noopener' },
  { label: 'Câu hỏi thường gặp', href: 'https://www.DVN.vn/ho-tro/#faqs', external: true, rel: 'nofollow' },
  { label: 'Wiki', href: 'https://www.DVN.vn/wiki-ki-ot-viet/', external: true, rel: 'nofollow' },
  { label: 'Hướng dẫn sử dụng', href: 'https://www.DVN.vn/huong-dan-su-dung-DVN/', external: true, rel: 'nofollow' },
  { label: 'Blog', href: 'https://www.DVN.vn/blog/', external: true, rel: 'nofollow' },
  { label: 'Thông tin cập nhật', href: 'https://www.DVN.vn/noi-dung-cap-nhat-sap-toi/', external: true, rel: 'nofollow' },
];

const INDUSTRY_RETAIL: FooterLink[] = [
  { label: 'Thời trang', href: '/phan-mem-ban-hang-thoi-trang' },
  { label: 'Tạp hóa & Siêu thị', href: '/phan-mem-ban-hang-tap-hoa' },
  { label: 'Điện thoại & Điện máy', href: '/dien-thoai-dien-may' },
  { label: 'Mỹ phẩm', href: '/phan-mem-quan-ly-ban-hang-my-pham' },
  { label: 'Vật liệu xây dựng', href: '/vat-lieu-xay-dung' },
  { label: 'Nông sản & Thực phẩm', href: '/nong-san-thuc-pham' },
  { label: 'Nhà thuốc', href: '/phan-mem-quan-ly-nha-thuoc' },
  { label: 'Xe, Máy móc', href: '/linh-kien-may-moc' },
  { label: 'Mẹ & Bé', href: '/me-be' },
  { label: 'Nội thất & Gia dụng', href: '/noi-that' },
  { label: 'Sách & Văn phòng phẩm', href: '/sach-van-phong-pham' },
  { label: 'Hoa & Quà tặng', href: '/hoa-qua-tang' },
  { label: 'Sản xuất', href: '/san-xuat' },
  { label: 'Khác', href: '/cua-hang-ban-buon-ban-le' },
];

const INDUSTRY_FNB: FooterLink[] = [
  { label: 'Nhà hàng', href: 'https://www.DVN.vn/quan-ly-nha-hang', external: true, rel: 'nofollow' },
  { label: 'Quán ăn', href: 'https://www.DVN.vn/quan-ly-quan-an', external: true, rel: 'nofollow' },
  { label: 'Cafe, Trà sữa', href: 'https://www.DVN.vn/quan-ly-cafe-tra-sua', external: true, rel: 'nofollow' },
  { label: 'Karaoke, Bida', href: 'https://www.DVN.vn/quan-ly-karaoke-bida', external: true, rel: 'nofollow' },
  { label: 'Bar, Pub & Club', href: 'https://www.DVN.vn/quan-ly-bar-pub-club', external: true, rel: 'nofollow' },
  { label: 'Căng tin & Trạm dừng nghỉ', href: 'https://www.DVN.vn/ban-hang-cang-tin-tram-dung-nghi', external: true, rel: 'nofollow' },
];

const INDUSTRY_SERVICE: FooterLink[] = [
  { label: 'Beauty Spa & Massage', href: 'https://www.DVN.vn/quan-ly-beauty-spa-massage', external: true, rel: 'nofollow' },
  { label: 'Hair Salon & Nails', href: 'https://www.DVN.vn/quan-ly-hair-salon-nails', external: true, rel: 'nofollow' },
  { label: 'Khách sạn & Nhà nghỉ', href: 'https://www.DVN.vn/quan-ly-khach-san-nha-nghi', external: true, rel: 'nofollow' },
  { label: 'Homestay & Villa, Resort', href: 'https://www.DVN.vn/quan-ly-homestay-villa', external: true, rel: 'nofollow' },
  { label: 'Fitness & Yoga', href: 'https://www.DVN.vn/quan-ly-fitness-yoga', external: true, rel: 'nofollow' },
  { label: 'Phòng khám', href: 'https://www.DVN.vn/quan-ly-phong-kham', external: true, rel: 'nofollow' },
];

const ADDRESS_GROUPS: AddressGroup[] = [
  {
    title: 'Địa chỉ Miền Bắc',
    items: [
      { province: 'Hà Nội', address: 'Số 1A Yết Kiêu, phường Cửa Nam, thành phố Hà Nội' },
      { province: 'Hải Phòng', address: '176A Tôn Đức Thắng, phường An Biên, thành phố Hải Phòng', hotline: '02 256 509 126' },
      { province: 'Quảng Ninh', address: 'Số A13-05 KĐT Monbay, phường Hạ Long, tỉnh Quảng Ninh', hotline: '0203 629 6060' },
      { province: 'Thái Nguyên', address: 'Số 174 đường Bắc Sơn, phường Phan Đình Phùng, tỉnh Thái Nguyên', hotline: '0866 482 168' },
      { province: 'Nam Định', address: 'Số 110 Trần Huy Liệu, phường Trường Thi, tỉnh Ninh Bình', hotline: '0981 374 268' },
      { province: 'Phú Thọ', address: 'Số 514 Châu Phong, phường Việt Trì, tỉnh Phú Thọ', hotline: '02 102 486 699' },
      { province: 'Hải Dương', address: '32 Hồng Quang, phường Hải Dương, thành phố Hải Phòng', hotline: '0220 2601 666' },
      { province: 'Bắc Ninh', address: 'Số 56 Nguyễn Gia Thiều, phường Kinh Bắc, tỉnh Bắc Ninh', hotline: '0222 222 6688' },
      { province: 'Vĩnh Phúc', address: 'Số 125 Nguyễn Văn Linh, phường Vĩnh Phúc, tỉnh Phú Thọ', hotline: '0211 62 82 666' },
    ],
  },
  {
    title: 'Địa chỉ Miền Trung',
    items: [
      { province: 'Đà Nẵng', address: '110 Đống Đa, phường Hải Châu, thành phố Đà Nẵng', hotline: '02 366 523 966' },
      { province: 'Khánh Hòa', address: '1053 đường 2/4, phường Nha Trang, tỉnh Khánh Hòa', hotline: '0901 903 866' },
      { province: 'Nghệ An', address: 'Số 28 Nguyễn Sỹ Sách, phường Thành Vinh, tỉnh Nghệ An', hotline: '02 386 668 168' },
      { province: 'Đắk Lắk', address: '72 Ngô Quyền, phường Buôn Ma Thuột, tỉnh Đắk Lắk', hotline: '0943 748 181' },
      { province: 'Thanh Hóa', address: 'Lô 17 LK1 KDC An Phú Hưng, phường Hạc Thành, tỉnh Thanh Hóa', hotline: '02 376 546 688' },
      { province: 'TP. Huế', address: '138 Trường Chinh, phường An Cựu, thành phố Huế', hotline: '02 346 542 468' },
      { province: 'Bình Định', address: '136 Chương Dương, phường Quy Nhơn Nam, tỉnh Gia Lai', hotline: '02 566 527 662' },
      { province: 'Gia Lai', address: '44A Phù Đổng, phường Pleiku, tỉnh Gia Lai', hotline: '0869 561 268' },
      { province: 'Lâm Đồng', address: 'Số 187 Phù Đổng Thiên Vương, phường Lâm Viên - Đà Lạt, tỉnh Lâm Đồng', hotline: '0868 435 268' },
      { province: 'Bình Thuận', address: 'J46 Tôn Đức Thắng, phường Hàm Thắng, tỉnh Lâm Đồng', hotline: '0252 6299 299' },
      { province: 'Quảng Ngãi', address: 'Số 165 Lê Lợi, phường Cẩm Thành, tỉnh Quảng Ngãi', hotline: '02 556 538 899' },
    ],
  },
  {
    title: 'Địa chỉ Miền Nam',
    items: [
      { province: 'TP.HCM', address: 'Tầng 6 khu B-C, Tòa nhà Waseco, Số 10 Phổ Quang, phường Tân Sơn Hòa, thành phố Hồ Chí Minh', hotline: '0286 2533 433' },
      { province: 'Cần Thơ', address: 'Số 199 Võ Văn Kiệt, phường Bình Thủy, thành phố Cần Thơ', hotline: '0292 6502 777' },
      { province: 'Vũng Tàu', address: '492A đường 30/4, phường Rạch Dừa, thành phố Hồ Chí Minh', hotline: '02 542 210 888' },
      { province: 'Kiên Giang', address: 'L2 C11 Phan Thị Ràng, phường Rạch Giá, tỉnh An Giang', hotline: '02972 200 168' },
      { province: 'Đồng Tháp', address: 'Số 05 Đặng Văn Bình, phường Cao Lãnh, tỉnh Đồng Tháp', hotline: '0277 6277 666' },
    ],
  },
  {
    title: 'Tổng đài hỗ trợ khách hàng ở nước ngoài',
    items: [
      { province: 'Việt Nam', address: 'Hotline', hotline: '(+84) 24 3990 4991' },
      { province: 'Nhật Bản', address: 'Hotline', hotline: '(+81) 50 5050 8167' },
      { province: 'Lào', address: 'Hotline', hotline: '(+856) 20 9991 5707' },
      { province: 'Campuchia', address: 'Hotline', hotline: '(+855) 23 962 610' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-950 text-white">
      {/* top */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company */}
          <div className="md:col-span-4">
            <a href="/" className="inline-flex items-center">
              <img
                className="h-10 w-auto object-contain"
                src="https://dvntechnology.com/assets/logo.png"
                alt="Phần mềm quản lý bán hàng"
                width={170}
                height={48}
                loading="lazy"
              />
            </a>

            <p className="mt-4 text-[13px] leading-relaxed text-white/80">
              Công ty Cổ phần Công nghệ DVN
            </p>

            <div className="mt-4 space-y-2 text-[13px] text-white/80">
              <div className="flex items-start gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-400 mt-[2px]" />
                <span>
                  Hotline: <span className="text-white">0399 690 987</span>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-[2px]" />
                <span>
                  26/37/5 Đường B3, P. Tây Thạnh, TP. HCM
                </span>
              </div>
            </div>
          </div>

          {/* Consult/Support numbers */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SupportNumber title="Tư vấn bán hàng" phone="0399 690 987" />
              <SupportNumber title="Chăm sóc khách hàng" phone="0399 690 987" />
            </div>

            <div className="mt-4">
              <a
                href="mailto:hotro@DVN.com"
                rel="nofollow"
                className="inline-flex items-center gap-2 text-[13px] text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                Email: <span className="text-white">hotro@DVN.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FooterLinkCol title="Doanh nghiệp" links={COMPANY_LINKS} />
            <FooterLinkCol title="Hỗ trợ" links={SUPPORT_LINKS} />
          </div>
        </div>

        {/* Industries */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="text-[14px] font-semibold text-white">Ngành hàng</h4>

          <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6">
              <div className="text-[12px] font-semibold text-white/80 uppercase tracking-widest">
                Bán buôn, bán lẻ
              </div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {INDUSTRY_RETAIL.map((l) => (
                  <FooterInlineLink key={l.label} {...l} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[12px] font-semibold text-white/80 uppercase tracking-widest">
                Ăn uống, giải trí
              </div>
              <div className="mt-3 space-y-2">
                {INDUSTRY_FNB.map((l) => (
                  <FooterInlineLink key={l.label} {...l} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="text-[12px] font-semibold text-white/80 uppercase tracking-widest">
                Lưu trú, làm đẹp
              </div>
              <div className="mt-3 space-y-2">
                {INDUSTRY_SERVICE.map((l) => (
                  <FooterInlineLink key={l.label} {...l} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 gap-8">
            {ADDRESS_GROUPS.map((g) => (
              <div key={g.title}>
                <h4 className="text-[14px] font-semibold text-white">{g.title}</h4>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {g.items.map((it) => (
                    <AddressCard key={`${g.title}-${it.province}-${it.address}`} item={it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-[12px] text-white/70 leading-relaxed">
            <a
              href="https://www.dmca.com/Protection/Status.aspx?ID=e9fda70b-1262-49c8-9689-028aa2d238c5&refurl=https://www.DVN.vn/"
              title="DMCA.com Protection Status"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img
                src="https://cdn-kvweb.DVN.vn/DVN-website/wp-content/uploads/2023/10/31070200/DMCA.jpg"
                alt="DMCA"
                loading="lazy"
                className="h-7 w-auto rounded-md border border-white/10"
              />
              <span>2026 DVN™</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="mt-2">
              © Copyright 2010-2026 DVN Corporation. All Right Reserved
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SocialIcon href="https://facebook.com/PhanmembanhangDVN" label="Facebook" icon={<Facebook className="w-4 h-4" />} />
            <SocialIcon href="https://twitter.com/DVN" label="Twitter" icon={<Twitter className="w-4 h-4" />} />
            <SocialIcon href="https://www.youtube.com/channel/UCDLpNUxdUx7E81MV4K7ocxA" label="Youtube" icon={<Youtube className="w-4 h-4" />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ─── UI pieces ───────────────────────────── */

function SupportNumber({ title, phone }: { title: string; phone: string; }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition-colors">
      <div className="text-[12px] font-semibold text-white/70 uppercase tracking-widest">{title}</div>
      <div className="mt-2 text-[18px] font-semibold text-white">
        <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-emerald-300 transition-colors">
          {phone}
        </a>
      </div>
    </div>
  );
}

function FooterLinkCol({ title, links }: { title: string; links: FooterLink[]; }) {
  return (
    <div>
      <div className="text-[14px] font-semibold text-white">{title}</div>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.rel}
              className="text-[13px] text-white/75 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              {l.label}
              {l.external ? <ExternalLink className="w-3.5 h-3.5 text-white/50" /> : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterInlineLink({ label, href, external, rel }: FooterLink) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={rel}
      className="text-[13px] text-white/75 hover:text-white transition-colors"
    >
      {label}
    </a>
  );
}

function AddressCard({ item }: { item: AddressItem; }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 hover:bg-white/7 transition-colors">
      <div className="text-[13px] font-semibold text-white">{item.province}</div>
      <div className="mt-2 text-[12px] leading-relaxed text-white/75">{item.address}</div>
      {item.hotline ? (
        <div className="mt-2 text-[12px] text-white/75">
          Hotline:{' '}
          <a href={`tel:${item.hotline.replace(/\s/g, '')}`} className="text-emerald-300 hover:text-emerald-200 transition-colors">
            {item.hotline}
          </a>
        </div>
      ) : null}
    </div>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string; }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={label}
      className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-colors flex items-center justify-center text-white/80 hover:text-white"
    >
      {icon}
    </a>
  );
}
