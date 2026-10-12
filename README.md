# DVN POS Client

Frontend của **DVN POS Cloud** - nền tảng quản lý bán hàng đa gian hàng (multi-tenant SaaS), xây dựng bằng React, TypeScript và Vite.

Ứng dụng hiện cung cấp:

- Landing page giới thiệu DVN POS và các mô hình kinh doanh.
- Đăng ký gian hàng mới theo ngành hàng.
- Đăng nhập theo gian hàng (tenant/subdomain).
- Dashboard tổng quan.
- Màn hình danh sách hàng hóa với tìm kiếm, bộ lọc và phân trang.
- Màn hình bán hàng (POS) với các chế độ bán nhanh, bán thường và bán giao hàng.
- Giao diện quản trị responsive cho desktop và các kích thước màn hình nhỏ.

> **Trạng thái hiện tại:** đây là phiên bản frontend đang phát triển. Luồng xác thực đăng ký/đăng nhập đã tích hợp API; dữ liệu dashboard, danh sách hàng hóa và một số thao tác POS hiện vẫn là dữ liệu/giao diện mẫu để hoàn thiện trải nghiệm.

## Mục lục

- [Công nghệ](#công-nghệ)
- [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
- [Cài đặt](#cài-đặt)
- [Cấu hình môi trường](#cấu-hình-môi-trường)
- [Chạy dự án](#chạy-dự-án)
- [Các route hiện có](#các-route-hiện-có)
- [Chức năng](#chức-năng)
- [Tenant và đăng nhập](#tenant-và-đăng-nhập)
- [API đang sử dụng](#api-đang-sử-dụng)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Build và triển khai](#build-và-triển-khai)
- [Kiểm tra chất lượng](#kiểm-tra-chất-lượng)
- [Lưu ý phát triển](#lưu-ý-phát-triển)
- [Tài liệu thiết kế](#tài-liệu-thiết-kế)

## Công nghệ

- [React 19](https://react.dev/) và React DOM.
- [TypeScript](https://www.typescriptlang.org/) 6.
- [Vite](https://vite.dev/) 8.
- [React Router](https://reactrouter.com/) 7.
- [Zustand](https://zustand.docs.pmnd.rs/) cho state xác thực.
- [Axios](https://axios-http.com/) cho HTTP client.
- [Tailwind CSS](https://tailwindcss.com/) và CSS riêng.
- [Framer Motion](https://motion.dev/) cho animation.
- `react-helmet-async` cho title/meta SEO.
- `lucide-react` và `react-phone-input-2` cho UI.

## Yêu cầu hệ thống

- Node.js 20 trở lên (khuyến nghị dùng bản LTS).
- pnpm (dự án có [pnpm-lock.yaml](./pnpm-lock.yaml)).
- Một backend DVN POS đang chạy nếu muốn kiểm thử đăng ký, đăng nhập hoặc CAPTCHA.

Có thể dùng npm/yarn, nhưng nên dùng đúng pnpm để đảm bảo phiên bản dependency giống lockfile.

## Cài đặt

```bash
git clone <repository-url>
cd dvn-pos-client
pnpm install
```

Nếu chưa có pnpm:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Cấu hình môi trường

Tạo file `.env.local` ở thư mục gốc:

```env
# URL API backend. Không có dấu / ở cuối.
VITE_API_URL=http://localhost:1311/api/v1

# Domain gốc dùng để tạo URL gian hàng trên môi trường production.
VITE_ROOT_DOMAIN=dinhtrung.id.vn
```

### Ý nghĩa biến môi trường

| Biến | Bắt buộc | Mặc định | Mô tả |
|---|---:|---|---|
| `VITE_API_URL` | Không | `http://localhost:1311/api/v1` | Base URL của backend API |
| `VITE_ROOT_DOMAIN` | Không | `dinhtrung.id.vn` | Domain gốc của các gian hàng |

Các biến bắt đầu bằng `VITE_` được Vite đưa vào bundle phía trình duyệt. Không đặt secret, private key hoặc thông tin nhạy cảm vào các biến này.

> **Lưu ý:** màn hình đăng ký hiện gọi endpoint CAPTCHA bằng URL `http://localhost:1311/api/v1` cố định. Khi triển khai backend ở môi trường khác, cần cập nhật luồng này để dùng chung `VITE_API_URL`.

## Chạy dự án

### Development

```bash
pnpm dev
```

Mở URL Vite hiển thị trong terminal, thường là `http://localhost:5173`.

### Preview bản build

```bash
pnpm build
pnpm preview
```

## Các route hiện có

| URL | Màn hình | Trạng thái |
|---|---|---|
| `/` | Landing page DVN POS | Đã có |
| `/register` | Đăng ký gian hàng | Đã có, gọi API |
| `/login` | Đăng nhập gian hàng | Đã có, gọi API |
| `/dashboard` | Dashboard tổng quan | Đã có, dữ liệu mẫu |
| `/products` | Danh sách hàng hóa | Đã có, dữ liệu mẫu |
| `/sale` | Màn hình bán hàng POS | Đã có, giao diện mẫu |

Các mục trong thanh điều hướng quản trị như `/orders`, `/customers`, `/reports`, `/purchase`, `/employee`, `/cashflow`... đã được khai báo trong menu UI để định hướng sản phẩm, nhưng chưa được đăng ký trong router chính và chưa có màn hình tương ứng.

## Chức năng

### Landing page

- Giới thiệu DVN POS và lợi ích quản lý bán hàng.
- Hiển thị các mô hình hỗ trợ như bán lẻ, nhà hàng, salon và hotel.
- Điều hướng tới đăng ký dùng thử và đăng nhập.
- Hiển thị thông tin hỗ trợ, tin tức và nội dung giới thiệu sản phẩm.
- Hỗ trợ giao diện responsive.

### Đăng ký gian hàng

Luồng đăng ký gồm:

1. Nhập họ tên và số điện thoại.
2. Chọn quốc gia/khu vực kinh doanh.
3. Tải và nhập CAPTCHA.
4. Kiểm tra số điện thoại đã tồn tại.
5. Chọn ngành hàng.
6. Nhập tên cửa hàng và mật khẩu (tối thiểu 6 ký tự).
7. Đồng ý điều khoản và gửi đăng ký.
8. Hiển thị thông tin gian hàng sau khi đăng ký thành công và chuyển tới trang đăng nhập của tenant.

Subdomain được sinh tự động từ tên cửa hàng. Danh sách ngành hàng được tải từ backend, đồng thời UI đang có nhóm Bán lẻ, F&B - Ăn uống và Dịch vụ.

### Đăng nhập

- Nhập số điện thoại và mật khẩu.
- Xác định tenant từ subdomain trên production hoặc từ `localStorage` khi chạy localhost.
- Gọi API đăng nhập và lưu token vào `localStorage` với key `dvn_token`.
- Hỗ trợ modal đăng nhập từ các khu vực có tích hợp trong UI.

### Dashboard

- Hiển thị tổng quan doanh thu và hoạt động bán hàng.
- Hiển thị các giao dịch gần đây.
- Có layout quản trị gồm header, navigation và vùng nội dung.

Các chỉ số và giao dịch trong dashboard hiện là dữ liệu mẫu.

### Quản lý hàng hóa

Màn hình `/products` hỗ trợ:

- Tìm theo tên hoặc mã hàng.
- Lọc bán trực tiếp: Có/Không.
- Lọc bán qua kênh: Có/Không.
- Lọc trạng thái: hàng đang kinh doanh/hàng ngừng kinh doanh.
- Lọc tồn kho: còn hàng, hết hàng, dưới định mức, vượt định mức.
- Chọn số lượng dòng mỗi trang và phân trang.
- Hiển thị mã hàng, tên, giá bán, giá vốn, tồn kho, hàng đang giữ và trạng thái.

Danh sách hiện lấy từ `src/features/products/data.ts`. Hai bộ lọc “dưới định mức tồn” và “vượt định mức tồn” đang dùng ngưỡng tạm thời vì dữ liệu mẫu chưa có trường định mức tồn.

### Bán hàng POS

Màn hình `/sale` gồm:

- Tìm hàng hóa, phím tắt hiển thị `F3` và nút quét mã.
- Nhiều tab hóa đơn.
- Khu vực giỏ hàng.
- Tìm/chọn khách hàng, phím tắt hiển thị `F4`.
- Ba chế độ:
  - **Bán nhanh:** tập trung vào thao tác bán nhanh.
  - **Bán thường:** danh sách sản phẩm, ghi chú đơn hàng, tổng tiền và thanh toán.
  - **Bán giao hàng:** người nhận, số điện thoại, địa chỉ, thông tin kiện, COD và ghi chú cho bưu tá.
- Các nút thao tác trả hàng, đồng bộ dữ liệu và thiết lập in.

Các thao tác thêm hàng vào giỏ, thanh toán, khách hàng và giao vận hiện mới là UI mẫu; chưa có API nghiệp vụ tương ứng trong frontend.

## Tenant và đăng nhập

### Khi chạy localhost

Do localhost không có subdomain, tenant được lưu tạm tại:

```text
localStorage["dvn_tenant"]
```

Khi đăng ký thành công, ứng dụng lưu subdomain rồi chuyển tới `/login`.

Để kiểm thử đăng nhập tenant khác trên máy local, có thể mở DevTools và chạy:

```js
localStorage.setItem('dvn_tenant', 'ten-gian-hang')
```

Sau đó tải lại trang `/login`.

### Khi chạy production

Ứng dụng chuyển người dùng tới:

```text
https://<subdomain>.<VITE_ROOT_DOMAIN>/login
```

Vì vậy DNS, wildcard subdomain và cấu hình reverse proxy/hosting cần được thiết lập để các tenant trỏ về frontend.

## API đang sử dụng

Base URL được cấu hình qua `VITE_API_URL`.

| Method | Endpoint | Mục đích |
|---|---|---|
| `GET` | `/public/tenants/check?subdomain=<value>` | Kiểm tra subdomain |
| `GET` | `/public/tenants/check-phone?phone=<value>` | Kiểm tra số điện thoại |
| `GET` | `/public/industries` | Lấy danh sách ngành hàng |
| `POST` | `/public/tenants/register` | Đăng ký tenant |
| `POST` | `/public/auth/login` | Đăng nhập tenant |
| `GET` | `/public/captcha/generate` | Tạo CAPTCHA |
| `POST` | `/public/captcha/verify` | Xác thực CAPTCHA |

Payload đăng ký:

```json
{
  "store_name": "Tên cửa hàng",
  "subdomain": "ten-cua-hang",
  "industry_id": 1,
  "phone": "0889541507",
  "password": "mat-khau",
  "captcha_id": "captcha-id",
  "captcha_code": "ABCD"
}
```

Payload đăng nhập:

```json
{
  "tenant_subdomain": "ten-cua-hang",
  "phone": "0889541507",
  "password": "mat-khau"
}
```

Các request Axios có timeout 10 giây và `Content-Type: application/json`.

## Cấu trúc thư mục

```text
.
├── public/                  # Favicon, icon và tài nguyên public
├── documents/design/        # Hình ảnh/tài liệu thiết kế
├── scripts/                 # Script sau build
├── src/
│   ├── components/          # Component dùng chung, header, footer, modal, SEO
│   ├── config/              # Cấu hình API
│   ├── data/                # Dữ liệu dùng chung, ví dụ danh sách ngành hàng
│   ├── features/
│   │   ├── admin/            # Layout, navigation và dashboard quản trị
│   │   ├── auth/             # Đăng ký, đăng nhập, CAPTCHA và API auth
│   │   ├── home/             # Landing page
│   │   ├── pos/              # Màn hình bán hàng
│   │   └── products/         # Danh sách hàng hóa và dữ liệu mẫu
│   ├── hooks/                # Custom hooks
│   ├── layouts/              # Layout cấp ứng dụng
│   ├── routes/               # React Router
│   ├── stores/               # Zustand stores
│   ├── utils/                # Helper tenant và tiện ích
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── pnpm-lock.yaml
└── vite.config.ts
```

## Build và triển khai

Build production:

```bash
pnpm build
```

Lệnh này thực hiện:

1. Type-check và build bundle bằng `tsc -b && vite build`.
2. Chạy `postbuild`, obfuscate JavaScript trong `dist/assets`.

Mặc định postbuild bật obfuscation. Nếu cần build để debug hoặc muốn giữ bundle không obfuscate:

```bash
pnpm run build -- --mode production
$env:ENABLE_OBFUSCATION="false"; pnpm build       # PowerShell
set ENABLE_OBFUSCATION=false&& pnpm build         # cmd.exe
```

Thư mục deploy là `dist/`. Hosting cần hỗ trợ fallback mọi route frontend về `index.html` để các URL như `/login`, `/dashboard` và `/products` hoạt động khi refresh trực tiếp.

## Kiểm tra chất lượng

Lint:

```bash
pnpm lint
```

Build/type-check:

```bash
pnpm build
```

Hiện dự án chưa có script test tự động riêng. Khi bổ sung nghiệp vụ API, nên thêm test cho auth, tenant resolution, bộ lọc hàng hóa và các trạng thái thanh toán POS.

## Lưu ý phát triển

- Dùng alias `@/` để import từ thư mục `src`, ví dụ `@/config/api`.
- Không commit `.env.local` hoặc thông tin xác thực.
- Thay dữ liệu mẫu bằng API trước khi bật các thao tác quản trị/bán hàng ở production.
- Nên dùng `apiClient` thay vì tạo Axios client mới để thống nhất base URL và timeout.
- Khi thêm màn hình mới, cần cập nhật đồng thời route trong `src/routes/index.tsx`, navigation trong `AdminNav.tsx`, title/meta SEO và trạng thái loading/error.
- Khi thay đổi contract backend, cập nhật type trong `src/features/auth/types` và các hàm API liên quan.
- Vì ứng dụng hỗ trợ tenant bằng subdomain, cần kiểm thử cả localhost và domain production.

## Tài liệu thiết kế

Một số hình ảnh thiết kế đăng ký và hàng hóa nằm trong:

- [documents/design/](./documents/design/)

## Bản quyền

DVN POS Technology. Vui lòng liên hệ chủ dự án trước khi sử dụng, sao chép hoặc phân phối mã nguồn này ngoài phạm vi được cấp phép.
